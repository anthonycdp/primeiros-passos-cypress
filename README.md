# Orange HRM Test Automation

End-to-end test automation for Orange HRM system using Cypress.

## About the Project

This project implements automated end-to-end tests for the Orange HRM (Human Resource Management) system using the Cypress framework. The tests cover essential functionalities such as authentication and personal information management.

## Technologies Used

- **Cypress** - E2E testing framework
- **JavaScript** - Programming language
- **Chance.js** - Library for generating fake data
- **Page Object Model** - Design pattern for test organization

## Project Structure

```
cypress/
├── fixtures/
│   └── user-data.js       # User data for tests
├── pages/
│   ├── loginPage.js       # Login page actions
│   ├── dashboardPage.js   # Dashboard page actions
│   ├── menuPage.js        # Navigation menu actions
│   └── myInfoPage.js      # Personal information page actions
└── e2e/
    └── orangeHrm.cy.js    # Main Orange HRM tests
```

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

Install dependencies:
```bash
npm install
```

## How to Run

### Run all tests (headless mode)
```bash
npx cypress run
```

### Run tests with graphical interface
```bash
npx cypress open
```

### Run specific test
```bash
npx cypress run --spec "cypress/e2e/orangeHrm.cy.js"
```

### NPM Scripts (add to package.json)
```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:headless": "cypress run --headless"
  }
}
```

## Test Data Configuration

Test data is located in `cypress/fixtures/user-data.js`:

```javascript
export default {
  userSuccess: {
    username: "Admin",
    password: "admin123"
  }
}
```

## Features Tested

- Login with valid credentials
- Dashboard access validation
- Personal information updates
- Employee details form filling
- Form validation

## Test Cases

### TC001 - User Information Update

**Scenario**: User successfully updates their personal information

**Steps**:
1. Access login page
2. Login with valid credentials
3. Verify dashboard access
4. Navigate to "My Info"
5. Fill personal information with random data
6. Fill employee details
7. Update status
8. Save form

## Reports

Tests automatically generate:
- Failure screenshots in `cypress/screenshots/`
- Test videos in `cypress/videos/`
- Detailed logs in terminal

## Useful Commands

```bash
# Install Cypress
npm install cypress --save-dev

# Check Cypress version
npx cypress version

# Clear Cypress cache
npx cypress cache clear

# Run with specific browser
npx cypress run --browser chrome
```

## Troubleshooting

### Dependency errors
```bash
npm install --legacy-peer-deps
```

### Permission issues (Linux/Mac)
```bash
sudo npm install -g cypress
```

### Corrupted cache
```bash
npx cypress cache clear
npx cypress install
```

## Contributing

1. Fork the project
2. Create a branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request
