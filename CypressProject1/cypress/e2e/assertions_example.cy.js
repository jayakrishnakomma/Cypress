

it('Assertions Example', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain','Button')
                        .should('have.class','query-btn')
    // cy.contains('apples').should('have.text','apples')
    cy.get('.query-list').contains('apples').should('have.class','first')
    cy.get('.query-button').contains('Save Form').should('have.class','btn')
                                                  .should('be.visible')
                                                  .should('be.enabled')
                                                  .and('be.enabled')
    assert.notEqual(4,'3')
    expect(true).to.be.true
})