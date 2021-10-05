class location {

    visit(url) {
        cy.visit(url)
    }

    checkProtocol() {
        cy.location('protocol').should('contains', 'https');
    }
}

module.exports = new location();
