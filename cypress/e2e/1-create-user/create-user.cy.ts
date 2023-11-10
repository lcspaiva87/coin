describe('This test is designed to validate the functionality of a user registration form ', () => {
  it('filling out the form fields correctly to register a new user', () => {
    cy.visit('http://localhost:3000')
    cy.contains('div', 'Sign up').click()
    cy.get('[data-testid="input-name"]').type('lucasdd')
    cy.get('[data-testid="input-email-create-user"]').type(
      'lcspaiva87aa@gmail.com',
    )
    cy.get('[data-testid="input-password"]').type('teste@gmail.com')
    cy.get('[data-testid="input-password-confirmation"]').type(
      'teste@gmail.com',
    )
    cy.get('[data-testid="input-terms"]').click()
    cy.get('button[ data-testid="sign-in-button"]').click()
  })
})
