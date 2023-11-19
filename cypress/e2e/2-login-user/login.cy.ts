describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
    cy.contains('button', 'Sign in').click()
    cy.getBydata("hero-title").type(
      'Lorem ipsum dolor sit amet, consectetur',
    )
  })
})
