/// references types = cypress />

// it('Google Search',function(){

// })

it('Google search',() => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('cypress documentation{Enter}')
    // cy.contains('Google Search').click()
    cy.contains('Why Cypress').click()
})