const data = require('../fixtures/data-driven/testdata');
const mobiledata = require('../fixtures/mobiledevices.json');
import location from '../support/location'
import homePage from '../page-object/dashboard/homePage'
import sideBar from '../page-object/dashboard/sideBar'

describe('Payment Process Test Cases - Mobile', function(){
    beforeEach(() => {
        cy.setCookie('integrationtesting', "true")
        location.visit(data.baseurlSnabbare)
        location.checkProtocol()
    })
    for(let mobileDeviceValue in mobiledata.mobiledevicesname) {
        it('Cancel Deposit and Play Payment Process Scenario in ' + mobiledata.mobiledevicesname[mobileDeviceValue], () => {
            cy.viewport(mobiledata.mobiledevicesname[mobileDeviceValue])
            homePage.depositAndPlay();
            sideBar.verifyButton();
            sideBar.sendAmount("200");
            sideBar.selectPaymentMethod("Swish")
            sideBar.checkStartBankIdPage()
            sideBar.cancelPayment()
            sideBar.verifyPaymentMethodPage()
        })
    }
})
