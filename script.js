// State Management
const STATE = {
    questions: [], // Normalized questions
    filteredQuestions: [], // Questions for current view
    currentIndex: 0,
    chapters: [], // { name: 'Chapter X', questions: [] }
    currentMode: 'global', // 'global', 'incorrect', 'chapter'
    userAnswers: {}, // { qId: { selected: [], validated: bool } }
    history: {}, // { qId: { isCorrect: bool, lastAttempt: timestamp } }
};

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    loadHistory();
    initUI();
    renderSidebar();
    startQuiz(); // Default to global
});

// --- Data Handling ---

function loadData() {
    const allQuestions = [];
    const chapters = [];
    let chapterIndex = 1;

    // Scan window for variables starting with 'test_'
    // Since variables are now 'var', they are on window object (in browser).
    // Build a list of keys to iterate
    const keys = Object.keys(window).filter(k => k.startsWith('test_') && Array.isArray(window[k]));

    // Sort keys to look nice if possible (test_blanc_1, test_blanc_2...)
    keys.sort((a, b) => {
        // try extract number
        const numA = (a.match(/\d+/) || [0])[0];
        const numB = (b.match(/\d+/) || [0])[0];
        return parseInt(numA) - parseInt(numB);
    });

    keys.forEach(key => {
        const rawData = window[key];
        // Guess chapter name from variable name
        let name = key.replace('test_', '').replace(/_/g, ' ');
        // Capitalize first letter
        name = name.charAt(0).toUpperCase() + name.slice(1);

        // If it ends with number, maybe "Blanc 1"
        if (/\d+$/.test(name)) {
            name = name.replace(/(\d+)$/, ' $1');
        }

        const normalized = normalizeQuestions(rawData, chapterIndex);
        if (normalized.length > 0) {
            allQuestions.push(...normalized);
            chapters.push({
                id: chapterIndex, // Use integer ID for internal logic
                name: name,
                questions: normalized
            });
            chapterIndex++;
        }
    });

    STATE.questions = allQuestions;
    STATE.chapters = chapters;
}

function normalizeQuestions(rawList, chapterId) {
    if (!Array.isArray(rawList)) return [];

    return rawList.map((q, idx) => {
        // Generate a unique ID
        const uid = `ch${chapterId}_q${q.id || idx}`;

        let text = q.text || q.q || q.question || "";
        let options = [];
        let correctIds = [];
        let explanation = q.explanation || "";

        // 1. Extract Options
        // Standardize to [{id: "0", text: "..."}, {id: "1", text: "..."}] or similar
        const rawOptions = q.options || q.answers || [];

        if (rawOptions.length > 0 && typeof rawOptions[0] === 'object') {
            // Options are objects: {id: "A", text: "..."}
            options = rawOptions.map(opt => ({
                id: opt.id || String(opt), // Fallback if no ID
                text: opt.text || String(opt.value || "")
            }));
        } else {
            // Options are strings
            options = rawOptions.map((opt, i) => ({
                id: i.toString(),
                text: typeof opt === 'string' ? opt : String(opt)
            }));
        }

        // 2. Extract Correct Answers
        // We need 'correctIds' to match the 'id's in 'options'

        // Case A: correctAnswers is array of IDs (e.g. ["A", "B"]) matching option objects
        if (q.correctAnswers && Array.isArray(q.correctAnswers) && typeof q.correctAnswers[0] === 'string') {
            correctIds = q.correctAnswers;
        }
        // Case B: correctAnswers is array of indices (e.g. [0, 2])
        else if (q.correctAnswers && Array.isArray(q.correctAnswers) && typeof q.correctAnswers[0] === 'number') {
            correctIds = q.correctAnswers.map(i => i.toString());
        }
        // Case C: correct is array of indices (e.g. [0, 2]) or strings (IDs?)
        else if (q.correct && Array.isArray(q.correct)) {
            if (typeof q.correct[0] === 'number') {
                correctIds = q.correct.map(i => i.toString());
            } else {
                // Could be full text? Or IDs?
                // If format C (full text), we need to match text to option IDs
                // Or IDs like "A"
                // Let's check if values exist in option IDs
                const sample = q.correct[0];
                const matchId = options.find(o => o.id === sample);
                if (matchId) {
                    correctIds = q.correct;
                } else {
                    // Try match by text
                    // This is risky but needed for Format C (full text strings)
                    q.correct.forEach(txt => {
                        const match = options.find(o => o.text.trim() === txt.trim());
                        if (match) correctIds.push(match.id);
                        // If no match, maybe substrings? e.g. "A. Option" vs "A. Option"
                        // If options are "A. ...", and correct is "A. ...", it works.
                    });
                }
            }
        }
        // Case D: 'correctIndex' (single number or array)
        else if (typeof q.correctIndex !== 'undefined') {
            if (Array.isArray(q.correctIndex)) {
                correctIds = q.correctIndex.map(i => i.toString());
            } else {
                correctIds = [q.correctIndex.toString()];
            }
        }

        // Case E: 'info' field says "2 correct answers" (Format D) -> Use it to validation if needed, 
        // but 'correctAnswers' usually present as indices.

        // Fallback: if no correctIds found, try to look for 'isCorrect' in options? 
        // (Not seen in examples but good practice).

        return {
            uid: uid,
            text: text,
            options: options,
            correctIds: correctIds,
            explanation: explanation,
            chapterId: chapterId,
            multipleChoice: correctIds.length > 1
        };
    });
}

function loadHistory() {
    const saved = localStorage.getItem('qcm_history');
    if (saved) {
        STATE.history = JSON.parse(saved);
    }
}

function saveHistory() {
    localStorage.setItem('qcm_history', JSON.stringify(STATE.history));
}

function resetHistory() {
    STATE.history = {};
    STATE.userAnswers = {};
    saveHistory();
    alert('Historique réinitialisé !');
    location.reload();
}

// --- UI Logic ---

// --- UI Logic ---

function initUI() {
    // Navigation
    document.getElementById('btn-global').addEventListener('click', () => { setMode('global'); closeSidebar(); });
    document.getElementById('btn-incorrect').addEventListener('click', () => { setMode('incorrect'); closeSidebar(); });
    document.getElementById('btn-reset-data').addEventListener('click', resetHistory);
    document.getElementById('btn-back-global').addEventListener('click', () => setMode('global'));

    // Mobile Sidebar
    document.getElementById('menu-toggle').addEventListener('click', openSidebar);
    document.getElementById('menu-close').addEventListener('click', closeSidebar);
    document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

    // Quiz Navigation
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-validate').addEventListener('click', validateCurrent);
}

function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('open');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
}

function renderSidebar() {
    const list = document.getElementById('chapter-list');
    list.innerHTML = '';

    STATE.chapters.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `<span class="material-icons">library_books</span> ${ch.name}`;
        btn.onclick = () => { setMode('chapter', ch.id); closeSidebar(); };
        list.appendChild(btn);
    });

    updateIncorrectBadge();
}

function updateIncorrectBadge() {
    const count = Object.values(STATE.history).filter(h => !h.isCorrect).length;
    document.getElementById('incorrect-count').textContent = count;
}

function setMode(mode, chapterId = null) {
    STATE.currentMode = mode;
    STATE.currentIndex = 0;

    // Update active UI
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (mode === 'global') {
        STATE.filteredQuestions = [...STATE.questions];
        document.getElementById('btn-global').classList.add('active');
    } else if (mode === 'incorrect') {
        STATE.filteredQuestions = STATE.questions.filter(q => {
            const h = STATE.history[q.uid];
            return h && !h.isCorrect;
        });
        document.getElementById('btn-incorrect').classList.add('active');

        // RETRY LOGIC: Clear user answers for these questions to allow re-practice
        STATE.filteredQuestions.forEach(q => {
            if (STATE.userAnswers[q.uid]) {
                delete STATE.userAnswers[q.uid];
            }
        });

    } else if (mode === 'chapter') {
        STATE.filteredQuestions = STATE.chapters.find(c => c.id === chapterId).questions;
        // Highlight chapter btn? (Skip complex DOM finding for now)
    }

    renderQuestion();
}

function startQuiz() {
    setMode('global');
}

function renderQuestion() {
    const startArea = document.getElementById('quiz-area');
    const emptyState = document.getElementById('empty-state');
    const q = STATE.filteredQuestions[STATE.currentIndex];

    // Handle Empty
    if (!q) {
        startArea.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    startArea.classList.remove('hidden');
    emptyState.classList.add('hidden');

    // Update Header
    document.getElementById('q-chapter-tag').textContent = `Chapitre ${q.chapterId}`;
    document.getElementById('q-number').textContent = `Question ${STATE.currentIndex + 1} / ${STATE.filteredQuestions.length}`;

    // Multi-choice Badge
    const multiBadge = document.getElementById('q-multi-badge');
    if (q.multipleChoice) {
        multiBadge.classList.remove('hidden');
    } else {
        multiBadge.classList.add('hidden');
    }

    document.getElementById('global-progress').style.width = `${((STATE.currentIndex + 1) / STATE.filteredQuestions.length) * 100}%`;
    document.getElementById('progress-text').textContent = `${STATE.currentIndex + 1}/${STATE.filteredQuestions.length}`;

    // Update Text
    document.getElementById('question-text').textContent = q.text;

    // Options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    // Restore previous state if exists
    const answerState = STATE.userAnswers[q.uid] || { selected: [], validated: false };

    q.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.id = opt.id;

        // Marker (A, B, C...)
        let marker = opt.id;
        // If IDs are 0,1,2..., map to A,B,C
        if (!isNaN(marker)) {
            marker = String.fromCharCode(65 + parseInt(marker));
        }

        div.innerHTML = `
            <span class="option-marker">${marker}</span>
            <span class="option-text">${opt.text}</span>
            <span class="material-icons status-icon hidden">check_circle</span>
        `;

        if (answerState.selected.includes(opt.id)) {
            div.classList.add('selected');
        }

        if (!answerState.validated) {
            div.onclick = () => toggleOption(q, opt.id);
        } else {
            // Apply colors if validated
            if (q.correctIds.includes(opt.id)) {
                div.classList.add('correct');
            } else if (answerState.selected.includes(opt.id)) {
                div.classList.add('incorrect');
            }
        }

        container.appendChild(div);
    });

    // Feedback Area
    const fb = document.getElementById('feedback-area');
    if (answerState.validated) {
        fb.classList.remove('hidden');
        const isCorrect = isAnswerCorrect(q, answerState.selected);

        fb.className = `feedback-area ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('feedback-title').textContent = isCorrect ? 'Correct !' : 'Incorrect';
        document.getElementById('feedback-explanation').textContent = q.explanation || "Pas d'explication disponible.";
    } else {
        fb.classList.add('hidden');
    }

    // Buttons
    document.getElementById('btn-prev').disabled = STATE.currentIndex === 0;
    document.getElementById('btn-next').disabled = STATE.currentIndex === STATE.filteredQuestions.length - 1;
    document.getElementById('btn-validate').style.display = answerState.validated ? 'none' : 'block';
}

function toggleOption(q, optId) {
    if (!STATE.userAnswers[q.uid]) {
        STATE.userAnswers[q.uid] = { selected: [], validated: false };
    }

    const selected = STATE.userAnswers[q.uid].selected;
    const isMulti = q.correctIds.length > 1;

    // Logic: If user clicks, toggle. 
    // In strict QCM usually:
    // If single choice -> replace
    // If multi -> toggle
    if (!isMulti) {
        STATE.userAnswers[q.uid].selected = [optId];
    } else {
        if (selected.includes(optId)) {
            STATE.userAnswers[q.uid].selected = selected.filter(id => id !== optId);
        } else {
            STATE.userAnswers[q.uid].selected.push(optId);
        }
    }

    renderQuestion(); // Re-render to show selection
}

function validateCurrent() {
    const q = STATE.filteredQuestions[STATE.currentIndex];
    if (!STATE.userAnswers[q.uid] || STATE.userAnswers[q.uid].selected.length === 0) {
        alert("Veuillez choisir une réponse.");
        return;
    }

    STATE.userAnswers[q.uid].validated = true;

    const isCorrect = isAnswerCorrect(q, STATE.userAnswers[q.uid].selected);

    // Update History
    STATE.history[q.uid] = {
        isCorrect: isCorrect,
        timestamp: Date.now()
    };
    saveHistory();
    updateIncorrectBadge();

    // If we are in 'Incorrect' mode and user gets it RIGHT, 
    // we might want to remove it from the list dynamically?
    // For now, let's keep it until they leave the mode or refresh, so the count is consistent during session.
    // Or we update badge immediately (done above).

    renderQuestion();
}

function isAnswerCorrect(q, selectedIds) {
    if (selectedIds.length !== q.correctIds.length) return false;
    // Check if every selected is in correct
    return selectedIds.every(id => q.correctIds.includes(id));
}

function prevQuestion() {
    if (STATE.currentIndex > 0) {
        STATE.currentIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (STATE.currentIndex < STATE.filteredQuestions.length - 1) {
        STATE.currentIndex++;
        renderQuestion();
    }
}
