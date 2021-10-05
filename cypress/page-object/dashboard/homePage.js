import helpers from '../../support/helpers'

class homePage {

    elements = {
        depositPlayButton: 'button[data-at="deposit-and-play-homepage"]'
    }

    depositAndPlay() {
        cy.log("Click 'Satt in och spela' button.");
        helpers.clickWhenElementFound(this.elements.depositPlayButton)
    }
}

module.exports = new homePage();
