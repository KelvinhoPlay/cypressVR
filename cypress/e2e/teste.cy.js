describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains("a", "Pra Você").click({ force: true });
    cy.url().should("include", "/onde-aceita");
    cy.contains("a", "Onde usar meu VR?").click({ force: true });
    cy.get("#endereco").should("be.visible");
  })
})