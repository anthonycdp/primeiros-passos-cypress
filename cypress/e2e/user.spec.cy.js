import userData from '../fixtures/user-data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfo = new myInfoPage()

describe('ORANGE HRM TEST', () => {
  
  const selectorList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericFiled: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text-input",
    dropdownOption: ".oxd-select-option",

  }

  it.only('User Info Update - Success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.verifyDashboardUrl()
    menu.accessMyInfo()
    myInfo.fillPersonalDetails()
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField). type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})