# OrangeHRM QA Automation

## Project Overview

OrangeHRM QA Automation is an end-to-end test automation framework developed using Playwright and JavaScript.

The project validates important OrangeHRM application workflows such as valid login, invalid login, dashboard validation, Admin module navigation and logout.

## Technology Stack

- Playwright
- JavaScript
- Node.js
- Chromium
- GitHub Actions
- HTML Reports

## Project Structure

```text
OrangeHRM_QA_Automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── docs/
│   ├── test-scenarios.md
│   └── defect-template.md
│
├── test-data/
│   └── users.json
│
├── tests/
│   └── orangehrm.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md