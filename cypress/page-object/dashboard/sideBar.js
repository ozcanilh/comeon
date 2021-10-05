import helpers from '../../support/helpers'

class sideBar {

    elements = {
        sendButton: 'button[data-at="deposit-login-submit-button-noaccount"]',
        amountField: '#amount',
        swishPayment: 'button[data-at="SWISH-paymentmethod-deposit-and-play"]',
        trustlyPayment: 'button[data-at="TRUSTLY-paymentmethod-deposit-and-play"]',
        personalNumber: '#personalNumber',
        bankIdButton: 'button[title="Bank ID"]',
        bandIdLogo: '.bankid-logo-container',
        cancelButton: 'button[data-at="bankid-loader-cancel"]'
    }

    verifyButton() {
        cy.log("Verify 'Satt in' button is disabled.")
        helpers.isFieldDisable(this.elements.sendButton)
    }

    sendAmount(amount) {
        cy.log("Enter an Amount")
        helpers.clickWhenElementFound(this.elements.amountField)
        helpers.type(this.elements.amountField, amount)
        cy.log("Click 'Satt in' button")
        helpers.clickWhenElementFound(this.elements.sendButton)
    }

    selectPaymentMethod(method) {
        cy.log("Choose 'Swish' as payment method.")
        method === "Trustly" ? helpers.clickWhenElementFound(this.elements.trustlyPayment) :
            helpers.clickWhenElementFound(this.elements.swishPayment)
    }

    sendBankID(number) {
        cy.log("Enter Personal Number '198608051903'")
        helpers.type(this.elements.personalNumber, number)
        cy.log("Click 'Bank ID' button")
        helpers.clickWhenElementFound(this.elements.bankIdButton)
    }

    checkStartBankIdPage() {
        cy.log("Verify 'Start Bank ID' page is visible.")
        helpers.isFieldExistance(this.elements.bandIdLogo)
    }

    cancelPayment() {
        cy.log("Click 'Avbryt' button to cancel")
        helpers.clickWhenElementFound(this.elements.cancelButton)
    }

    verifyPersonalNumberPage() {
        cy.log("Verify User goes back to Enter Personal Number page")
        helpers.isFieldExistance(this.elements.personalNumber)
    }

    verifyPaymentMethodPage() {
        cy.log("Verify User goes back to Payment Method Selection page")
        helpers.isFieldExistance(this.elements.trustlyPayment)
    }
}

module.exports = new sideBar();
