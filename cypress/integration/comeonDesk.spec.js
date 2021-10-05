const data = require('../fixtures/data-driven/testdata');
import location from '../support/location'
import homePage from '../page-object/dashboard/homePage'
import sideBar from '../page-object/dashboard/sideBar'

describe('Payment Process Test Cases - Desktop', function(){
    beforeEach(() => {
        cy.setCookie('integrationtesting', "true")
        location.visit(data.baseurlSnabbare)
        location.checkProtocol()
    })

     it('Cancel Deposit and Play Payment Process (desktop)', () => {
        homePage.depositAndPlay();
        sideBar.verifyButton();
        sideBar.sendAmount("200");
        sideBar.selectPaymentMethod("Swish")
        sideBar.sendBankID("198608051903")
        sideBar.checkStartBankIdPage()
        sideBar.cancelPayment()
        sideBar.verifyPersonalNumberPage()
    })
})
