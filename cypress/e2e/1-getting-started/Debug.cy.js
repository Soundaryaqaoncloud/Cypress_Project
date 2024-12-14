
describe('Debug Test Suite', () => {

    it('Login page with Pause', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click().pause()
        cy.title().should('include','Logged In Successfully | Practice Test Site')

    })

    it.only('Login page with debug', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click().debug()
        cy.title().should('include','Logged In Successfully | Practice Test Site')

    })

})