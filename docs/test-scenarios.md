# OrangeHRM Test Scenarios

| Test ID | Test Scenario | Type | Priority |
|---|---|---|---|
| TC-001 | Login with valid credentials | Positive | High |
| TC-002 | Login with invalid password | Negative | High |
| TC-003 | Verify Dashboard after login | Functional | High |
| TC-004 | Verify Admin module navigation | Functional | Medium |
| TC-005 | Verify Logout functionality | Functional | High |

## Expected Results

### TC-001 - Valid Login

Valid credentials should successfully login and navigate to the Dashboard.

### TC-002 - Invalid Login

Invalid credentials should display the "Invalid credentials" message.

### TC-003 - Dashboard Validation

Dashboard should be displayed after successful login and important dashboard elements should be visible.

### TC-004 - Admin Module Navigation

Admin user should be able to navigate to the Admin module and User Management section.

### TC-005 - Logout

User should be logged out successfully and redirected to the login page.