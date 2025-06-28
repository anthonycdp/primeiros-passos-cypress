class myInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericFiled: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text-input",
            dropdownOption: ".oxd-select-option",
            successToast: ".oxd-toast-close"
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmplyeedetails(employeeId, otherId, driverLicense, driverLicenseDate) {
        cy.get(this.selectorList().genericFiled).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericFiled).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericFiled).eq(5).clear().type(driverLicense)
        cy.get(this.selectorList().genericFiled).eq(6).clear().type(driverLicenseDate)
    }
    
    fillStatus() {
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().dropdownOption).contains('Brazilian').click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().dropdownOption).contains('Other').click()
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }

}

export default myInfoPage