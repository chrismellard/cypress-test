describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#firstName').should('exist')

    cy.get('#button').click()

    cy.get('#someText').should('have.text', 'Hello World')

  })
})
