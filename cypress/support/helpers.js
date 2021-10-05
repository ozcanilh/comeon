class helpers {
    clickWhenElementFound(locator) {
        cy.get(locator, { timeout: 5000 }).should('be.visible')
            .click({ force: true });
    }

    type(locator, keyword) {
        cy.get(locator).type(keyword)
    }

    isFieldExistance(locator) {
        cy.get(locator).should('be.exist');
    }

    isFieldDisable(locator) {
        cy.get(locator).should('be.disabled');
    }
}

module.exports = new helpers();
