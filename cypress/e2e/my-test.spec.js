import cypress from 'cypress'

describe('My Test', () => {
  it('should visit the Next.js app', () => {
    cypress.visit('http://localhost:3000') // Altere a URL conforme necessário
    cypress.contains('Hello, Next.js!') // Verifique se o texto desejado está presente
  })
})
