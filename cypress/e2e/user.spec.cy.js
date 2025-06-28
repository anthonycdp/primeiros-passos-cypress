import userData from '../fixtures/user-data'
import loginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
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

  it('User Info Update - Success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.verifyDashboardUrl()
    menu.accessMyInfo()
    myInfo.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfo.fillEmplyeedetails('employeeId', 'otherId', 'driverLicense', '2025-01-19')
    myInfo.fillStatus()
    myInfo.saveForm()
  })

})