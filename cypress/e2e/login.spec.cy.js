import userData from '../fixtures/user-data'
import loginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'

const login = new loginPage()
const dashboard = new dashboardPage()

describe('Login ORANGE HRM Tests', () => {

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    login.loginWithUser(userData.userSuccess.username, userData.userFail.password)
    login.checkAccessInvalid()

  })

    it('Login - Success', () => {
    cy.visit('/auth/login')
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.verifyDashboardUrl()

  })

})