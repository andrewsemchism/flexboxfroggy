describe('Main page', () => {
  it('should display the Flexbox Froggy title', () => {
    cy.visit('index.html');
    cy.get('.title').should('have.text', 'Flexbox Froggy');
  })

  it("should check if the next button is disabled", () => {
    cy.visit('index.html');
    cy.get('#next').should('have.class', 'disabled');
  })

  it('should allow us to pass level 1 after we complete the level', () => {
    cy.visit('index.html');
    cy.get('#code').type('justify-content: flex-end;');
    cy.get('#code').should('have.value', 'justify-content: flex-end;');
    cy.get('#next').should('not.have.class', 'disabled');
  })
})