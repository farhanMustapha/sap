//test blanc 2 - 40 questions
const quizData = [
            {
                q: "1-How can you identify an asset number as a main asset number?",
                options: [
                    "A. By the prefix -1 after the asset number",
                    "B. By the lack of prefix for the asset",
                    "C. By the prefix -0 after the asset number",
                    "D. By the description of the asset"
                ],
                correct: [2] // Typically Main asset has subnumber 0
            },
            {
                q: "2-For which fields can you enter time-dependent changes in the asset master record? (3 correct answers)",
                options: [
                    "A. Description",
                    "B. Trading partner number",
                    "C. Cost center",
                    "D. WBS Element",
                    "E. Plant"
                ],
                correct: [2, 3, 4] // Cost Center, WBS, Plant (Location) are time dependent
            },
            {
                q: "3-Which embedded support offerings can you make use of in the SAP Fiori Launchpad? (3 correct answers)",
                options: [
                    "A. Assessment questions from the SAP Learning Hub",
                    "B. Video tutorials from the SAP Help Portal",
                    "C. Digital assistance from generative AI (SAP Joule)",
                    "D. Recorded system simulations from the learning center",
                    "E. Recorded webinars from the SAP Learning Website"
                ],
                correct: [1,2, 3] // Usually Tutorials, Simulations, Learning content
            },
            {
                q: "4-You have assigned a business role to an end user who has been granted access to only one specific application. While you have a day off, it turns out that the app doesn’t show up on the user’s launchpad. What can the user do?",
                options: [
                    "A. Use the search function to find the app",
                    "B. Assign a different business role that provides access",
                    "C. Assign a launchpad space to the business role",
                    "D. Create a page and assign it to the launchpad space"
                ],
                correct: [0] // Use App Finder/Search
            },
            {
                q: "5-What could be included in a solution process? (3 correct answers)",
                options: [
                    "A. Solution scenario",
                    "B. Process flow diagram",
                    "C. Test script",
                    "D. Form templates",
                    "E. Task tutorial"
                ],
                correct: [1,2,4] // Best Practice content
            },
            {
                q: "6-An organization designs and builds automobiles. What scope do they require? (2 answers)",
                options: [
                    "A. Finance-led administrative ERP",
                    "B. Product-centric industries",
                    "C. Service-centric industries"
                ],
                correct: [0, 1]
            },
            {
                q: "7-Which process in the integrated procure-to-pay process generates a balance sheet-relevant financial accounting document? (2 correct answers)",
                options: [
                    "A. Invoice verification",
                    "B. Material requirement planning",
                    "C. Goods receipt",
                    "D. Purchase order creation"
                ],
                correct: [0, 2] // GR and IR create FI docs. PO and MRP do not.
            },
            {
                q: "8-Which of the following analyses can you create from the Manage KPIs and Reports app? (3 correct answers)",
                options: [
                    "A. Object Views",
                    "B. SAC Stories",
                    "C. Lumira Dashboards",
                    "D. Multidimensional Reports",
                    "E. Review Booklets"
                ],
                correct: [1, 3, 4] // Generic SAP Cloud Reporting tools.
            },
            {
                q: "9-Which master record object controls the use of a business partner in accounts payable?",
                options: [
                    "A. Business partner role",
                    "B. Business partner category",
                    "C. Business partner classification",
                    "D. Business partner grouping"
                ],
                correct: [0] // Role (FLVN00) enables Supplier/FI Vendor view. Grouping is for number ranges.
            },
            {
                q: "10-What is the role of the valuation method in the foreign currency valuation of accounts payable? (3 correct answers)",
                options: [
                    "A. Define the posting and reversal date for the valuation posting",
                    "B. Define the document type for the valuation posting",
                    "C. Define the valuation procedure",
                    "D. Define the exchange rate type",
                    "E. Determine the G/L accounts for the valuation posting"
                ],
                correct: [1, 2,3] // Method defines logic, rate type, doc type. (Account determination is usually OBA1/separate).
            },
            {
                q: "11-If you want to enter your own document number and be able to potentially enter the same number to documents once every year, what document number range option is correct?",
                options: [
                    "A. Internal and continual",
                    "B. External and continual",
                    "C. Internal and annual",
                    "D. External and annual"
                ],
                correct: [3] // External (Own number) + Annual (Reset every year).
            },
            {
                q: "12-On which level do you define maximum amounts for low-value assets? (2 correct answers)",
                options: [
                    "A. Valuation area",
                    "B. Ledger group",
                    "C. Accounting principle",
                    "D. Company code"
                ],
                correct: [0, 2] // Usually Company Code & Acct Principle (GAAP).
            },
            {
                q: "13-Which date determines the period of the asset acquisition?",
                options: [
                    "A. Posting date",
                    "B. Document date",
                    "C. Asset value date",
                    "D. Base date"
                ],
                correct: [2] // Asset Value Date controls depreciation start/period.
            },
            {
                q: "14-How do you capture a value, error message, or label that is static on the screen when recording new actions? (Test Automation)",
                options: [
                    "A. Capture button",
                    "B. Read button",
                    "C. Check button",
                    "D. Copy button"
                ],
                correct: [2] // "Check" step in Test Automation tool.
            },
            {
                q: "15-What does the asset class determine? (3 correct answers)",
                options: [
                    "A. The G/L accounts for asset transactions",
                    "B. The inventory number",
                    "C. The default depreciation key",
                    "D. The balance sheet structure",
                    "E. The asset number"
                ],
                correct: [0, 2, 3] // Account determination, Dep Key (screen layout), Number Range.
            },
            {
                q: "16-Which role completes the majority of the business process content activation and setup in SAP Central Business Configuration?",
                options: [
                    "A. Customer IT Contact",
                    "B. Partner Lead Configuration Expert",
                    "C. Customer Project Manager",
                    "D. End Users"
                ],
                correct: [1] // Partner config expert does the heavy lifting in CBC.
            },
            {
                q: "17-What is the main responsibility of the customer system admin (IT Contact)?",
                options: [
                    "A. Leading Fit-to-Standard workshops",
                    "B. Provisioning systems and granting access",
                    "C. Building the business case",
                    "D. Running UAT"
                ],
                correct: [1] // Provisioning via SAP for Me.
            },
            {
                q: "18-Which tool compares the release upgrade information against a customer's actual landscape to provide the 'day 1 impact' of a release?",
                options: [
                    "A. What's New Viewer",
                    "B. SAP Road Map Explorer",
                    "C. Release Assessment Scope Dependency Tool (RASD)",
                    "D. Release Navigator"
                ],
                correct: [2] // RASD is for impact analysis.
            },
            {
                q: "19-Which tool shows planned future enhancements divided by quarters?",
                options: [
                    "A. Release Navigator",
                    "B. Road Map Explorer",
                    "C. RASD Tool",
                    "D. What's New Viewer"
                ],
                correct: [1] // Road Map Explorer.
            },
            {
                q: "20-Which asset characteristic controls if an asset is under construction?",
                options: [
                    "A. Settlement profile",
                    "B. Capitalization date",
                    "C. Depreciation key",
                    "D. Asset class"
                ],
                correct: [3] // The Asset Class has a flag for AuC.
            },
            {
                q: "21-Which asset accounting-relevant postings are made periodically, typically at the end of the month? (2 correct answers)",
                options: [
                    "A. Post transfer",
                    "B. Settlement of the WBS element",
                    "C. Depreciation posting",
                    "D. Post asset acquisition via clearing account"
                ],
                correct: [1, 2] // Depreciation runs monthly. Settlement (if using Investment Projects) is periodic.
            },
            {
                q: "22-When do you perform the goods and invoice receipt reconciliation process?",
                options: [
                    "A. When an invoice is posted, but no relevant purchase order is available",
                    "B. When a purchase order is posted but no invoice has been received",
                    "C. When a purchase order is posted but no goods receipt has been received",
                    "D. When an invoice is posted but no goods receipt has been received"
                ],
                correct: [3] // Surplus Invoice (Quantity mismatch logic).
            },
            {
                q: "23-What can you do when executing a depreciation posting run? (3 correct answers)",
                options: [
                    "A. You can check the posted depreciation for each asset on the FI document",
                    "B. You can reverse the FI posting documents of the depreciation run",
                    "C. You can run depreciation separately for each ledger",
                    "D. You can select to cancel the depreciation run if the program finds errors in individual assets",
                    "E. You can process a depreciation test run for an individual asset"
                ],
                correct: [0, 2, 4] // Log check, Separate Ledgers (New AA), Test Run.
            },
            {
                q: "24-In SAP Central Business Configuration, which activities can you perform in the Product-Specific Configuration Phase? (3 correct answers)",
                options: [
                    "A. Create new scope items",
                    "B. Add new sales organizations",
                    "C. Add blocking reasons for billing",
                    "D. Modify building blocks",
                    "E. Change approval thresholds"
                ],
                correct: [1, 2, 4] // Fine tuning config (Org units, parameters).
            },
            {
                q: "25-Which of the following are steps in an automated payment run process? (3 correct answers)",
                options: [
                    "A. Schedule invoice run",
                    "B. Maintain parameters",
                    "C. Upload bank statement",
                    "D. Schedule payment run",
                    "E. Schedule proposal run"
                ],
                correct: [1, 3, 4] // Parameters, Proposal, Payment.
            },
            {
                q: "26-How can you process recurring entries? (3 correct answers)",
                options: [
                    "A. You can create a recurring entry without defining a recurrence start date",
                    "B. You can post recurring entries only through the recurring entry program",
                    "C. You can schedule recurring entries to start automatically",
                    "D. You can post recurring entries in standard posting apps selecting the document type RE",
                    "E. You can create a recurring invoice entry based on a template invoice"
                ],
                correct: [ 1, 3,4] // In Cloud, use Manage Recurring Journal Entries.
            },
            {
                q: "27-What is used to transport extensions built in the development tenant of the Development system to the Test system? (2 correct answers)",
                options: [
                    "A. Export Software Collection app",
                    "B. Transport Organizer app",
                    "C. Export Customizing Transports app",
                    "D. Import Collection app"
                ],
                correct: [1, 3] // Export in Dev, Import in Test.
            },
            {
                q: "28-Which of the following activities are completed in the Realize phase of the SAP Activate Methodology? (2 correct answers)",
                options: [
                    "A. Demonstrate where to find business process documentation",
                    "B. Gather perceived change impact feedback",
                    "C. Set up manual test cases in SAP Cloud ALM",
                    "D. Enter configuration values in SAP Central Business Configuration"
                ],
                correct: [2, 3] // Config and Test Prep happen in Realize.
            },
            {
                q: "29-Why do you create a down-payment request for a customer?",
                options: [
                    "A. To inform the bank of a pending payment.",
                    "B. To post the down-payment automatically.",
                    "C. To update the general ledger.",
                    "D. To report it on your P&L statement."
                ],
                correct: [1] // It's a trigger for the Automatic Payment Program (F110) to collect the money.
            },
            {
                q: "30-Which configuration setting controls the document type used for payment postings?",
                options: [
                    "A. The bank determination settings, specifically the paying company codes section.",
                    "B. The payment method settings, specifically the note to payee by origin section.",
                    "C. The payment method setting, specifically the posting details section.",
                    "D. The payment medium format settings, specifically the format output section."
                ],
                correct: [2] // Paying Company Code config defines the clearing doc types.
            },
            {
                q: "31-Which tasks are mandatory before you can migrate data for a specific object? (2 correct answers)",
                options: [
                    "A. Predecessor objects have been migrated",
                    "B. You select the same migration method previously used for other objects",
                    "C. All previous migration projects are in the 'Finished' status",
                    "D. Permission to migrate the data has been assigned"
                ],
                correct: [0,3] // Dependency and Role.
            },
            {
                q: "32-The credit profile is used to store which information in the customer master data? (2 correct answers)",
                options: [
                    "A. The credit exposure",
                    "B. The scoring rules",
                    "C. The customer credit group",
                    "D. The credit decisions"
                ],
                correct: [1,2] // Rules and Check Groups.
            },
            {
                q: "33-Which systems need to be provisioned via SAP for Me? (2 correct answers)",
                options: [
                    "A. SAP Cloud Identity Authentication",
                    "B. SAP Central Business Configuration",
                    "C. SAP S/4HANA Cloud Development system, development tenant",
                    "D. SAP S/4HANA Cloud Production System"
                ],
                correct: [1, 3] // The S/4HANA systems themselves.
            },
            {
                q: "34-When do you specify the data retention period in the SAP S/4HANA Migration Cockpit?",
                options: [
                    "A. When the project status is 'Not Started'",
                    "B. When the project status is 'Completed'",
                    "C. When the project status in 'In Progress'",
                    "D. When the project status is 'Finished'"
                ],
                correct: [3] // Usually set when you finish/close the project to clean up staging.
            },
            {
                q: "35-What is the result of an automatic payment run? (3 correct answers)",
                options: [
                    "A. Payment plan",
                    "B. Payment blocks",
                    "C. Payment log",
                    "D. Payment documents",
                    "E. Payment media"
                ],
                correct: [2, 3, 4]
            },
            {
                q: "36-How long before an upgrade are customers notified by email?",
                options: [
                    "A. 3 weeks",
                    "B. 6 weeks",
                    "C. 2 months",
                    "D. 1 week"
                ],
                correct: [1] // Standard is 6 weeks.
            },
            {
                q: "37-When using the Local SAP S/4HANA Database Schema migration approach, what is the maximum file size? (2 correct answers - likely error in prompt, usually single answer for size)",
                options: [
                    "A. 160 MB per file",
                    "B. 160 MB per ZIP file",
                    "C. 100 MB per ZIP file",
                    "D. 100 MB per file"
                ],
                correct: [1,3] // 160MB is the standard limit.
            },
            {
                q: "38-What optional system can be subscribed to to continue Fit-to-Standard workshops after the Starter System is decommissioned?",
                options: [
                    "A. Development Tenant",
                    "B. Sandbox System",
                    "C. Test Tenant",
                    "D. Training Environment"
                ],
                correct: [1] // Sandbox (Cloud Test) is the paid playground.
            },
            {
                q: "39-How many people can be assigned the role of the IT Contact?",
                options: [
                    "A. 1",
                    "B. 2",
                    "C. Unlimited"
                ],
                correct: [0] // One primary IT contact for provisioning.
            },
            {
                q: "40-Which editing options are available in the dunning proposal list? (3 correct answers)",
                options: [
                    "A. Change the dunning charges",
                    "B. Editing the dunning texts",
                    "C. Edit dunning blocks at account level",
                    "D. Edit dunning blocks at line item level",
                    "E. Change the dunning level of an open item"
                ],
                correct: [0,2, 3] // Block account, block item, change level.
            }]