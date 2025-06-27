class myInfoPage {

    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
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

    fillPersonalDetails() {
        cy.get(this.selectorList().firstNameField).clear().type('Firstnametest')
        cy.get(this.selectorList().lastNameField).clear().type('Lastnametest')
        cy.get(this.selectorList().genericFiled).eq(3).clear().type('Employee')
        cy.get(this.selectorList().genericFiled).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorList().genericFiled).eq(5).clear().type('912837123897')
        cy.get(this.selectorList().genericFiled).eq(6).clear().type('2023-05-01')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().dropdownOption).contains('Brazilian').click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().dropdownOption).contains('Other').click()
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }

}

export default myInfoPage