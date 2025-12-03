// ===== Questions Data =====
const questions = [
    // ========== CHAPITRE 1: CLOUD COMPUTING ==========
    {
        id: 1,
        chapter: "Chapitre 1: Cloud Computing",
        question: "What is the central entry point to SAP S/4HANA for all users on desktop and mobile devices?",
        answers: [
            "SAP Fiori Launchpad",
            "SAP Fiori",
            "SAP Business Suite",
            "Core Data Services"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 2,
        chapter: "Chapitre 1: Cloud Computing",
        question: "What type of database is SAP HANA?",
        info: "2 correct answers",
        answers: [
            "Row-Oriented",
            "Column-Oriented",
            "Disk",
            "In-Memory"
        ],
        correctAnswers: [1, 3],
        multipleChoice: true
    },
    {
        id: 3,
        chapter: "Chapitre 1: Cloud Computing",
        question: "In the cloud model, which of the following are responsibilities of the service provider?",
        info: "3 correct answers",
        answers: [
            "Software backups",
            "User access to applications",
            "Maintenance of physical servers",
            "Data center security",
            "Maintaining customizations after release upgrades"
        ],
        correctAnswers: [0, 2, 3],
        multipleChoice: true
    },
    {
        id: 4,
        chapter: "Chapitre 1: Cloud Computing",
        question: "What type of cloud architecture has the lowest total cost of ownership (TCO)?",
        answers: [
            "Single-tenant",
            "Multi-tenant"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 5,
        chapter: "Chapitre 1: Cloud Computing",
        question: "If an organization needs to lease virtual resources to store millions of data records, what type of cloud service would you recommend?",
        answers: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 6,
        chapter: "Chapitre 1: Cloud Computing",
        question: "If a developer needs to build an application hosted in the cloud, what type of cloud service would you recommend?",
        answers: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 7,
        chapter: "Chapitre 1: Cloud Computing",
        question: "How does a data center retain power if one power grid sector fails?",
        info: "2 correct answers",
        answers: [
            "The data center is connected to 4 different grid sectors, so if one fails, another supplies power",
            "The data center houses diesel generators in a separate building for backup",
            "The data center has a solar panel array for backup",
            "The data center is connected to 2 different grid sectors, so if one fails, another supplies power"
        ],
        correctAnswers: [1, 3],
        multipleChoice: true
    },
    {
        id: 8,
        chapter: "Chapitre 1: Cloud Computing",
        question: "If an organization requires software with predefined business processes for their employees to submit expense reports and get reimbursed, what type of cloud service would you recommend?",
        answers: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },

    // ========== CHAPITRE 2: SAP BUSINESS SUITE ==========
    {
        id: 9,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which of the following industries are in the Public Services category?",
        info: "3 correct answers",
        answers: [
            "Banking",
            "Defense and Security",
            "Retail",
            "Healthcare",
            "Education & Research"
        ],
        correctAnswers: [1, 3, 4],
        multipleChoice: true
    },
    {
        id: 10,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which end-to-end business process focuses on the measurement, processing, and communication of financial and non-financial information about a corporation?",
        answers: [
            "Lead to Cash",
            "Source to Pay",
            "Plan to Fulfill",
            "Record to Report"
        ],
        correctAnswers: [3],
        multipleChoice: false
    },
    {
        id: 11,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "What is SAP's generative AI digital assistant?",
        answers: [
            "SAP CoPilot",
            "SAP Conversational AI",
            "SAP Joule",
            "SAP Business AI"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 12,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which sustainability solutions are designed to help organizations build a circular supply chain?",
        info: "2 correct answers",
        answers: [
            "SAP Sustainability Control Tower",
            "SAP Green Token",
            "SAP Sustainability Footprint Management",
            "SAP Responsible Design and Production"
        ],
        correctAnswers: [1, 3],
        multipleChoice: true
    },
    {
        id: 13,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which transformation journey is the best fit for an organization that is looking to modernize their existing SAP on-premises system?",
        answers: [
            "GROW with SAP",
            "MOVE with SAP",
            "RISE with SAP",
            "EXPAND with SAP"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 14,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which of the following are examples of SAP cloud solutions in spend management?",
        info: "3 correct answers",
        answers: [
            "SAP SuccessFactors",
            "SAP Fieldglass",
            "SAP Integrated Business Planning",
            "SAP Concur",
            "SAP Ariba"
        ],
        correctAnswers: [1, 3, 4],
        multipleChoice: true
    },
    {
        id: 15,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "An organization has their finance line of business (LoB) running in SAP S/4HANA Cloud Public Edition, while the rest of the LoBs are running in SAP S/4HANA Cloud Private Edition. Which two-tier ERP scenario is this an example of?",
        answers: [
            "Headquarter and Subsidiary",
            "Central Services",
            "Supply Chain Ecosystem"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 16,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which implementation method refers to a new implementation with a clean system?",
        answers: [
            "Selective Data Transition",
            "Brownfield",
            "Greenfield"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 17,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which of the following industries are in the Service Industries category?",
        info: "3 correct answers",
        answers: [
            "Telecommunications",
            "Consumer Products",
            "Transportation & Logistics",
            "Utilities",
            "Professional Services"
        ],
        correctAnswers: [0, 2, 4],
        multipleChoice: true
    },
    {
        id: 18,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which of the following solutions are included in the SAP Business Suite?",
        info: "3 correct answers",
        answers: [
            "SAP Business AI",
            "SAP Solution Manager",
            "SAP Business Data Cloud",
            "SAP Enterprise Central Component",
            "SAP cloud ERP applications"
        ],
        correctAnswers: [2, 3, 4],
        multipleChoice: true
    },
    {
        id: 19,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which SAP solutions are part of the 'fabric' of SAP Business Data Cloud?",
        info: "2 correct answers",
        answers: [
            "SAP Advanced Event Mesh",
            "SAP ABAP environment",
            "SAP Datasphere",
            "SAP Analytics Cloud"
        ],
        correctAnswers: [2, 3],
        multipleChoice: true
    },
    {
        id: 20,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "What is the digital adoption platform to help end users learn how to navigate and use their organization's software applications?",
        answers: [
            "SAP Signavio",
            "SAP LeanIX",
            "WalkMe"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 21,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which sustainability solution helps businesses understand their environmental, social, and governance (ESG) data?",
        answers: [
            "SAP Environment, Health, and Safety Management",
            "SAP S/4HANA for product compliance",
            "SAP Responsible Design and Production",
            "SAP Sustainability Control Tower"
        ],
        correctAnswers: [3],
        multipleChoice: false
    },
    {
        id: 22,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "You need to get a holistic analysis of a customer's IT landscape and interdependencies between solutions before starting an implementation. Which of the following solutions do you use?",
        answers: [
            "SAP Signavio",
            "SAP LeanIX",
            "WalkMe"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 23,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "You are searching for an industry-specific application built by the SAP partner ecosystem. Where do you look?",
        answers: [
            "SAP Partner Portal",
            "SAP-Qualified Partner-Packaged Solution Finder",
            "SAP Store",
            "SAP Community"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 24,
        chapter: "Chapitre 2: SAP Business Suite",
        question: "Which of the following lines of business are in the end-to-end business process Plan to Fulfill?",
        info: "2 correct answers",
        answers: [
            "Manufacturing",
            "Sourcing",
            "Supply Chain",
            "Procurement"
        ],
        correctAnswers: [0, 2],
        multipleChoice: true
    },

    // ========== CHAPITRE 3: GROW AND RISE WITH SAP ==========
    {
        id: 25,
        chapter: "Chapitre 3: GROW and RISE with SAP",
        question: "A purchase document is created in SAP S/4HANA Cloud through an integration with an SAP application. What type of access is this?",
        answers: [
            "Direct Human Access",
            "Digital Access / Indirect Human Access",
            "SAP Application Access"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 26,
        chapter: "Chapitre 3: GROW and RISE with SAP",
        question: "A new customer is looking for a solution with standardized business processes, regular upgrades, and wants to go-live in a short period of time. Which SAP S/4HANA Cloud solution would you recommend?",
        answers: [
            "SAP S/4HANA Cloud Public Edition",
            "SAP S/4HANA Cloud Private Edition"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 27,
        chapter: "Chapitre 3: GROW and RISE with SAP",
        question: "An invoice document is created in SAP S/4HANA Cloud through an integration with a third-party application. What type of access is this?",
        answers: [
            "Direct Human Access",
            "Digital Access / Indirect Human Access",
            "SAP Application Access"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 28,
        chapter: "Chapitre 3: GROW and RISE with SAP",
        question: "An SAP installed base customer is migrating to the cloud and requires a high degree of control over their solution. Which SAP S/4HANA Cloud solution would you recommend?",
        answers: [
            "SAP S/4HANA Cloud Public Edition",
            "SAP S/4HANA Cloud Private Edition"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 29,
        chapter: "Chapitre 3: GROW and RISE with SAP",
        question: "A human with a unique user ID logs into SAP S/4HANA Cloud and creates a sales document. What type of access is this?",
        answers: [
            "Direct Human Access",
            "Digital Access / Indirect Human Access",
            "SAP Application Access"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },

    // ========== CHAPITRE 4: DDA (Digital Discovery Assessment) ==========
    {
        id: 30,
        chapter: "Chapitre 4: DDA",
        question: "What are some pre-selection packages that can be chosen on the Detailed Discovery for new implementations with SAP S/4HANA Cloud Public Edition?",
        info: "2 correct answers",
        answers: [
            "Recruit to Retire",
            "Service Centric ERP",
            "Lead to Cash",
            "Baseline"
        ],
        correctAnswers: [1, 3],
        multipleChoice: true
    },
    {
        id: 31,
        chapter: "Chapitre 4: DDA",
        question: "Which of the following values are displayed in the Digital Discovery Assessment PDF report?",
        info: "3 correct answers",
        answers: [
            "Known integrations",
            "Data volume to be migrated",
            "Legal entities",
            "Extensibility requirements",
            "Percentage of processes selected in a line of business"
        ],
        correctAnswers: [0, 2, 4],
        multipleChoice: true
    },
    {
        id: 32,
        chapter: "Chapitre 4: DDA",
        question: "You need to download the selected business processes from the Digital Discovery Assessment and import them into SAP Cloud ALM. Where can this file be exported?",
        answers: [
            "Digital Discovery Assessment app",
            "SAP for Me",
            "Supply Chain of Selling app",
            "Harmony"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 33,
        chapter: "Chapitre 4: DDA",
        question: "Where can you launch the Quick Qualification?",
        info: "3 correct answers",
        answers: [
            "Supply Chain of Selling app",
            "Digital Discovery Assessment app",
            "Harmony",
            "SAP Cloud ALM",
            "Partner Deal Registration Tool"
        ],
        correctAnswers: [0, 1, 2],
        multipleChoice: true
    },
    {
        id: 34,
        chapter: "Chapitre 4: DDA",
        question: "What are some pre-configured content packages that can be chosen on the Detailed Discovery for new implementations with SAP S/4HANA Cloud Private Edition?",
        info: "2 correct answers",
        answers: [
            "Enterprise Management Layer",
            "Model Company for Multinational Corporations",
            "Swift Implementation - Finance Only Package",
            "Agile Implementation - Medium Package"
        ],
        correctAnswers: [0, 1],
        multipleChoice: true
    },
    {
        id: 35,
        chapter: "Chapitre 4: DDA",
        question: "What is the Digital Discovery Assessment used for?",
        info: "2 correct answers",
        answers: [
            "As a hand-over document for the partner implementation team",
            "As the legal Bill of Materials purchasing document",
            "To define the Service Level Agreement for the SAP S/4HANA Cloud solutions",
            "To match a customer's requirements with the best-fit SAP S/4HANA Cloud solution"
        ],
        correctAnswers: [0, 3],
        multipleChoice: true
    },
    {
        id: 36,
        chapter: "Chapitre 4: DDA",
        question: "Where can you find a comparison of Public vs. Private capabilities?",
        answers: [
            "In the Digital Discovery Assessment app for a new implementation of SAP S/4HANA Cloud Private Edition",
            "In the Supply Chain of Selling app for a new implementation of SAP S/4HANA Cloud Private Edition",
            "In the Supply Chain of Selling app for a new implementation of SAP S/4HANA Cloud Public Edition",
            "In the Digital Discovery Assessment for a new implementation of SAP S/4HANA Cloud Public Edition"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 37,
        chapter: "Chapitre 4: DDA",
        question: "Where can you find an effort estimation for implementing different business processes?",
        answers: [
            "In the Digital Discovery Assessment app for a new implementation of SAP S/4HANA Cloud Private Edition",
            "In the Supply Chain of Selling app for a new implementation of SAP S/4HANA Cloud Private Edition",
            "In the Supply Chain of Selling app for a new implementation of SAP S/4HANA Cloud Public Edition",
            "In the Digital Discovery Assessment for a new implementation of SAP S/4HANA Cloud Public Edition"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 38,
        chapter: "Chapitre 4: DDA",
        question: "In which SAP Activate phase is the Digital Discovery Assessment primarily used?",
        answers: [
            "Discover",
            "Prepare",
            "Realize",
            "Deploy"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 39,
        chapter: "Chapitre 4: DDA",
        question: "Who typically participates in the Digital Discovery Assessment sessions?",
        answers: [
            "End users",
            "Only SAP technical consultants",
            "C-level decision makers and experts",
            "External auditors"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 40,
        chapter: "Chapitre 4: DDA",
        question: "What are the two parts of the Digital Discovery Assessment?",
        answers: [
            "Discover & Deploy",
            "Quick Qualification and Detailed Discovery",
            "Realize & Run",
            "Scope & Sign-off"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 41,
        chapter: "Chapitre 4: DDA",
        question: "What is the role of the Brand Guardian in the DDA process?",
        answers: [
            "Manage partner invoicing",
            "Review and validate solution recommendations",
            "Deliver training on SAP BTP",
            "Perform system migration"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 42,
        chapter: "Chapitre 4: DDA",
        question: "Which situation automatically leads to a recommendation of SAP S/4HANA Cloud Private Edition?",
        answers: [
            "A new company starting ERP",
            "A customer requiring a system conversion",
            "A customer requiring fast go-live",
            "A customer with no integration needs"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 43,
        chapter: "Chapitre 4: DDA",
        question: "What does a BOM Mismatch indicate in the Quick Qualification?",
        answers: [
            "Wrong partner selected",
            "On-premise SKU suggested where Public Edition is more suitable",
            "Data migration not planned",
            "Integration missing"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 44,
        chapter: "Chapitre 4: DDA",
        question: "Which pre-selection package in Public Edition supports service-oriented industries?",
        answers: [
            "Finance-Led ERP",
            "Service Centric ERP",
            "Product Centric ERP",
            "Baseline"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 45,
        chapter: "Chapitre 4: DDA",
        question: "Which pre-configured content for Private Edition is designed for customers operating in multiple countries?",
        answers: [
            "Swift Implementation – Finance Only",
            "Enterprise Management Layer",
            "Swift Implementation – Medium Package",
            "Swift Implementation – Extra Small Package"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 46,
        chapter: "Chapitre 4: DDA",
        question: "Which file formats are used to activate selected business processes in Public Edition systems?",
        info: "2 correct answers",
        answers: [
            "Excel",
            "JSON",
            "CSV",
            "WORD"
        ],
        correctAnswers: [1, 2],
        multipleChoice: true
    },
    {
        id: 47,
        chapter: "Chapitre 4: DDA",
        question: "Which tool is used to activate selected business processes in Public Edition systems?",
        answers: [
            "SAP Central Business Configuration (CBC)",
            "SAP Cloud ALM",
            "SAP Solution Manager",
            "SAP Signavio"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 48,
        chapter: "Chapitre 4: DDA",
        question: "Which implementation phase begins with the DDA Report as a handover document?",
        answers: [
            "Discover",
            "Prepare",
            "Realize",
            "Deploy"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 49,
        chapter: "Chapitre 4: DDA",
        question: "Which app in the DDA platform contains documentation describing all functionalities and capabilities?",
        answers: [
            "Documentation app",
            "SAP Help Portal",
            "SAP for Me",
            "Partner Portal"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },

    // ========== CHAPITRE 5: PREPARATION FOR IMPLEMENTATION - CLOUD MINDSET ==========
    {
        id: 50,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which dimension from SAP's Organizational Change Management framework aims to identify and implement appropriate mechanisms for managing all individuals and groups who are affected by, or can influence the success of a digital transformation project?",
        answers: [
            "Change Leadership",
            "Change Strategy",
            "Change Communication",
            "Change Realization"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 51,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "A customer created a custom application using SAP Build, and integrated the app with their SAP S/4HANA Cloud system. What type of extensibility is this?",
        answers: [
            "Key User Extensibility",
            "Developer Extensibility",
            "Classic Extensibility",
            "Side-by-Side Extensibility"
        ],
        correctAnswers: [3],
        multipleChoice: false
    },
    {
        id: 52,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What could be included in a solution process?",
        info: "3 correct answers",
        answers: [
            "Solution scenario",
            "Process flow diagram",
            "Test script",
            "Form templates",
            "Task tutorial"
        ],
        correctAnswers: [0, 1, 2],
        multipleChoice: true
    },
    {
        id: 53,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which of the following are phases of the SAP Activate Methodology?",
        info: "3 correct answers",
        answers: [
            "Design",
            "Explore",
            "Deploy",
            "Operate",
            "Realize"
        ],
        correctAnswers: [1, 2, 4],
        multipleChoice: true
    },
    {
        id: 54,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Where should you look first to find SAP-delivered integration packages?",
        answers: [
            "SAP Business Technology Platform",
            "SAP Signavio Process Navigator",
            "SAP Business Accelerator Hub",
            "SAP Cloud ALM for Operations"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 55,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What can be used to identify which type of extensibility best addresses a requirement, and how to implement the extension?",
        answers: [
            "SAP Extensibility Cockpit",
            "SAP Business Technology Platform",
            "SAP Extensibility Explorer",
            "SAP Business Application Studio"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 56,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Where can you find existing applications, including Industry Cloud apps, built by the SAP Partner ecosystem?",
        info: "2 correct answers",
        answers: [
            "SAP Business Accelerator Hub",
            "SAP Store",
            "SAP Business Application Studio",
            "SAP Certified Solutions Directory"
        ],
        correctAnswers: [0, 3],
        multipleChoice: true
    },
    {
        id: 57,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which of the following are characteristics of the Cloud Mindset?",
        info: "2 correct answers",
        answers: [
            "Use predefined solution scenarios from SAP Signavio Process Navigator as the foundation",
            "Use SAP Solution Manager for implementation tasks",
            "Use SAP Cloud ALM for implementation tasks"
        ],
        correctAnswers: [0, 2],
        multipleChoice: true
    },
    {
        id: 58,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Where can you find the accelerators supporting organizational change management implementation tasks?",
        info: "2 correct answers",
        answers: [
            "SAP Signavio Process Navigator",
            "SAP Cloud ALM",
            "SAP Business Accelerator Hub",
            "SAP Activate Methodology"
        ],
        correctAnswers: [1, 2],
        multipleChoice: true
    },
    {
        id: 59,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which area of SAP Cloud ALM is used by the customer's IT team for full-stack monitoring and alerting?",
        answers: [
            "SAP Cloud ALM for Implementation",
            "SAP Cloud ALM for Operations",
            "SAP Cloud ALM for Service"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 60,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which six phases are included in the SAP Activate Methodology?",
        answers: [
            "Plan, Build, Test, Run, Support, Scale",
            "Discover, Prepare, Explore, Realize, Deploy, Run",
            "Define, Configure, Test, Deploy, Monitor, Retire",
            "Strategy, Design, Build, Deliver, Operate, Optimize"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 61,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What tool makes the SAP Activate methodology tasks actionable for project teams?",
        answers: [
            "SAP Signavio",
            "SAP Fiori Launchpad",
            "SAP Cloud ALM",
            "SAP Business Accelerator Hub"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 62,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What is SAP Signavio Process Navigator used for?",
        answers: [
            "To build ABAP extensions",
            "To store customer master data",
            "To access SAP Best Practices business processes",
            "To monitor system performance"
        ],
        correctAnswers: [2],
        multipleChoice: false
    },
    {
        id: 63,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which type of extensibility allows lifecycle-stable changes directly in SAP Fiori apps without developer knowledge?",
        answers: [
            "Key User Extensibility",
            "Developer Extensibility",
            "Classic Extensibility",
            "Side-by-Side Extensibility"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 64,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which type of extensibility allows ABAP coding on released objects, only in Public Edition (3-system landscape)?",
        answers: [
            "Key User Extensibility",
            "Developer Extensibility",
            "Classic Extensibility",
            "Side-by-Side Extensibility"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 65,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which type of extensibility is available only in Private Edition and not recommended because it allows changes to any SAP object?",
        answers: [
            "Classic Extensibility",
            "Developer Extensibility",
            "Key User Extensibility",
            "Side-by-Side Extensibility"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 66,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What does the SAP Activate roadmap provide?",
        answers: [
            "A detailed project plan for only the Explore phase",
            "Step-by-step guidance, tasks, and accelerators for each project phase",
            "Only technical configuration guides",
            "A list of SAP ERP competitors"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 67,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which OCM dimension ensures users receive the necessary training during the transformation?",
        answers: [
            "Change Leadership",
            "Change Enablement",
            "Change Realization",
            "Change Strategy"
        ],
        correctAnswers: [1],
        multipleChoice: false
    },
    {
        id: 68,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "Which OCM dimension measures user adoption, readiness, and satisfaction post go-live?",
        answers: [
            "Change Effectiveness",
            "Change Realization",
            "Change Communication",
            "Change Enablement"
        ],
        correctAnswers: [0],
        multipleChoice: false
    },
    {
        id: 69,
        chapter: "Chapitre 5: Preparation for Implementation - Cloud Mindset",
        question: "What is the purpose of a premortem analysis in project management?",
        answers: [
            "To analyze failures after go-live",
            "To simulate potential project failures before they occur",
            "To monitor system errors",
            "To finalize solution scope"
        ],
        correctAnswers: [1],
        multipleChoice: false
    }
];

// ===== State Management =====
class QuizState {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.score = 0;
        this.loadState();
    }

    saveState() {
        const state = {
            currentQuestionIndex: this.currentQuestionIndex,
            userAnswers: this.userAnswers,
            score: this.score,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('qcm_sap_state', JSON.stringify(state));
    }

    loadState() {
        const savedState = localStorage.getItem('qcm_sap_state');
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                this.currentQuestionIndex = state.currentQuestionIndex || 0;
                this.userAnswers = state.userAnswers || new Array(questions.length).fill(null);
                this.score = state.score || 0;
            } catch (e) {
                console.error('Error loading state:', e);
            }
        }
    }

    resetState() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.score = 0;
        localStorage.removeItem('qcm_sap_state');
    }

    setAnswer(questionIndex, answer) {
        this.userAnswers[questionIndex] = answer;
        this.saveState();
    }

    getAnswer(questionIndex) {
        return this.userAnswers[questionIndex];
    }

    calculateScore() {
        let correctCount = 0;
        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            if (userAnswer !== null && this.isAnswerCorrect(index, userAnswer)) {
                correctCount++;
            }
        });
        this.score = correctCount;
        this.saveState();
        return correctCount;
    }

    isAnswerCorrect(questionIndex, answer) {
        const question = questions[questionIndex];
        if (question.multipleChoice) {
            if (!Array.isArray(answer) || answer.length !== question.correctAnswers.length) {
                return false;
            }
            const sortedAnswer = [...answer].sort((a, b) => a - b);
            const sortedCorrect = [...question.correctAnswers].sort((a, b) => a - b);
            return sortedAnswer.every((val, idx) => val === sortedCorrect[idx]);
        } else {
            return answer === question.correctAnswers[0];
        }
    }

    getAnsweredCount() {
        return this.userAnswers.filter(answer => answer !== null).length;
    }

    getCorrectCount() {
        return this.calculateScore();
    }
}

// ===== DOM Elements =====
const elements = {
    questionNumber: document.getElementById('questionNumber'),
    questionChapter: document.getElementById('questionChapter'),
    questionText: document.getElementById('questionText'),
    questionInfo: document.getElementById('questionInfo'),
    answersContainer: document.getElementById('answersContainer'),
    feedbackMessage: document.getElementById('feedbackMessage'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resetBtn: document.getElementById('resetBtn'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    answeredCount: document.getElementById('answeredCount'),
    correctCount: document.getElementById('correctCount'),
    resultsModal: document.getElementById('resultsModal'),
    finalScore: document.getElementById('finalScore'),
    percentage: document.getElementById('percentage'),
    modalMessage: document.getElementById('modalMessage'),
    reviewBtn: document.getElementById('reviewBtn'),
    restartBtn: document.getElementById('restartBtn')
};

// ===== Initialize Quiz =====
const quizState = new QuizState();

// Temporary storage for multiple choice selections before validation
let tempMultipleChoiceSelection = null;

// ===== Display Functions =====
function displayQuestion() {
    const question = questions[quizState.currentQuestionIndex];
    const userAnswer = quizState.getAnswer(quizState.currentQuestionIndex);

    // Reset temporary selection
    tempMultipleChoiceSelection = null;

    // Update question info
    elements.questionNumber.textContent = `Question ${question.id}`;
    elements.questionChapter.textContent = question.chapter || '';
    elements.questionText.textContent = question.question;

    // Show/hide info
    if (question.info) {
        elements.questionInfo.textContent = `ℹ️ ${question.info}`;
        elements.questionInfo.style.display = 'block';
    } else {
        elements.questionInfo.style.display = 'none';
    }

    // Clear previous answers
    elements.answersContainer.innerHTML = '';
    elements.feedbackMessage.classList.remove('show', 'success', 'error');

    // Display answers
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';

        // Check if this answer was selected
        const isSelected = userAnswer !== null && (
            question.multipleChoice
                ? userAnswer.includes(index)
                : userAnswer === index
        );

        if (isSelected) {
            answerDiv.classList.add('selected');
        }

        // Check if answer has been validated
        if (userAnswer !== null) {
            const isCorrect = question.correctAnswers.includes(index);
            if (isSelected) {
                answerDiv.classList.add(isCorrect ? 'correct' : 'incorrect');
            } else if (isCorrect) {
                answerDiv.classList.add('correct');
            }
            answerDiv.classList.add('disabled');
        }

        answerDiv.innerHTML = `
            <div class="answer-checkbox"></div>
            <div class="answer-text">${answer}</div>
        `;

        // Add click handler only if not already answered
        if (userAnswer === null) {
            answerDiv.addEventListener('click', () => handleAnswerClick(index));
        }

        elements.answersContainer.appendChild(answerDiv);
    });

    // Update navigation buttons
    elements.prevBtn.disabled = quizState.currentQuestionIndex === 0;
    elements.nextBtn.textContent = quizState.currentQuestionIndex === questions.length - 1 ? 'Terminer' : 'Suivant';

    // Update progress
    updateProgress();
    updateStats();
}

function handleAnswerClick(answerIndex) {
    const question = questions[quizState.currentQuestionIndex];
    let selectedAnswer;

    if (question.multipleChoice) {
        // Use temporary selection if it exists, otherwise start fresh
        const currentAnswer = tempMultipleChoiceSelection || [];
        if (currentAnswer.includes(answerIndex)) {
            selectedAnswer = currentAnswer.filter(idx => idx !== answerIndex);
        } else {
            selectedAnswer = [...currentAnswer, answerIndex];
        }
        // Store temporary selection
        tempMultipleChoiceSelection = selectedAnswer;
    } else {
        selectedAnswer = answerIndex;
    }

    // Update UI immediately for selection
    const answerOptions = elements.answersContainer.querySelectorAll('.answer-option');
    answerOptions.forEach((option, idx) => {
        if (question.multipleChoice) {
            if (selectedAnswer.includes(idx)) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        } else {
            if (idx === selectedAnswer) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        }
    });

    // Add or update validation button for multiple choice
    if (question.multipleChoice) {
        let validateBtn = document.getElementById('validateBtn');
        if (!validateBtn) {
            validateBtn = document.createElement('button');
            validateBtn.id = 'validateBtn';
            validateBtn.className = 'btn btn-primary';
            validateBtn.style.marginTop = '1rem';
            validateBtn.innerHTML = '<span class="btn-icon">✓</span> Valider';
            elements.answersContainer.appendChild(validateBtn);
        }
        // Update the click handler to use the current selection
        validateBtn.onclick = () => validateAnswer(tempMultipleChoiceSelection);
    } else {
        // Auto-validate for single choice
        validateAnswer(selectedAnswer);
    }
}

function validateAnswer(answer) {
    const question = questions[quizState.currentQuestionIndex];

    // Save answer
    quizState.setAnswer(quizState.currentQuestionIndex, answer);

    // Check if correct
    const isCorrect = quizState.isAnswerCorrect(quizState.currentQuestionIndex, answer);

    // Update UI
    const answerOptions = elements.answersContainer.querySelectorAll('.answer-option');
    answerOptions.forEach((option, idx) => {
        option.classList.add('disabled');
        const isAnswerCorrect = question.correctAnswers.includes(idx);

        if (question.multipleChoice) {
            if (answer.includes(idx)) {
                option.classList.add(isAnswerCorrect ? 'correct' : 'incorrect');
            } else if (isAnswerCorrect) {
                option.classList.add('correct');
            }
        } else {
            if (idx === answer) {
                option.classList.add(isCorrect ? 'correct' : 'incorrect');
            } else if (isAnswerCorrect) {
                option.classList.add('correct');
            }
        }
    });

    // Remove validate button if exists
    const validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
        validateBtn.remove();
    }

    // Show feedback
    showFeedback(isCorrect);

    // Update stats
    updateStats();
}

function showFeedback(isCorrect) {
    elements.feedbackMessage.textContent = isCorrect
        ? '✓ Excellente réponse !'
        : '✗ Réponse incorrecte. La bonne réponse est affichée en vert.';
    elements.feedbackMessage.className = `feedback-message ${isCorrect ? 'success' : 'error'} show`;
}

function updateProgress() {
    const progress = ((quizState.currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressBar.style.setProperty('--progress', `${progress}%`);
    elements.progressText.textContent = `Question ${quizState.currentQuestionIndex + 1} sur ${questions.length}`;
}

function updateStats() {
    const answeredCount = quizState.getAnsweredCount();
    const correctCount = quizState.getCorrectCount();

    elements.answeredCount.textContent = `${answeredCount}/${questions.length}`;
    elements.correctCount.textContent = correctCount;
    elements.scoreDisplay.textContent = `${correctCount}/${questions.length}`;
}

function showResults() {
    const score = quizState.calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    elements.finalScore.textContent = `${score}/${questions.length}`;
    elements.percentage.textContent = `${percentage}%`;

    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excellent ! Vous maîtrisez parfaitement le sujet !';
    } else if (percentage >= 70) {
        message = '👍 Très bien ! Vous avez une bonne compréhension du sujet.';
    } else if (percentage >= 50) {
        message = '📚 Pas mal ! Continuez à réviser pour améliorer vos connaissances.';
    } else {
        message = '💪 Continuez vos efforts ! La pratique mène à la perfection.';
    }

    elements.modalMessage.textContent = message;
    elements.resultsModal.classList.add('show');
}

// ===== Navigation Functions =====
function nextQuestion() {
    if (quizState.currentQuestionIndex < questions.length - 1) {
        quizState.currentQuestionIndex++;
        quizState.saveState();
        displayQuestion();
    } else {
        // Show results
        showResults();
    }
}

function prevQuestion() {
    if (quizState.currentQuestionIndex > 0) {
        quizState.currentQuestionIndex--;
        quizState.saveState();
        displayQuestion();
    }
}

function resetQuiz() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser le QCM ? Toutes vos réponses seront effacées.')) {
        quizState.resetState();
        displayQuestion();
        elements.resultsModal.classList.remove('show');
    }
}

// ===== Event Listeners =====
elements.nextBtn.addEventListener('click', nextQuestion);
elements.prevBtn.addEventListener('click', prevQuestion);
elements.resetBtn.addEventListener('click', resetQuiz);
elements.reviewBtn.addEventListener('click', () => {
    elements.resultsModal.classList.remove('show');
    quizState.currentQuestionIndex = 0;
    quizState.saveState();
    displayQuestion();
});
elements.restartBtn.addEventListener('click', () => {
    elements.resultsModal.classList.remove('show');
    resetQuiz();
});

// Close modal on background click
elements.resultsModal.addEventListener('click', (e) => {
    if (e.target === elements.resultsModal) {
        elements.resultsModal.classList.remove('show');
    }
});

// ===== Initialize =====
displayQuestion();
