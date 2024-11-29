describe('Custom Command', () => {

    it('Login', () => {

    cy.login('Admin','admin123')//valid 
    cy.title().should('be.equal','OrangeHRM')

    cy.login('Admin','admin1234')//invalid 
    cy.title().should('be.equal','OrangeHRM')

    cy.login('Admin','admin123')//valid 
    cy.title().should('be.equal','OrangeHRM')

     })

    it('Add customer', () => {
        cy.login('Admin','admin123')


    cy.log("Adding customer......")
     
    })

    it('Edit customer', () => {
    cy.login('Admin','admin123')


    cy.log("Editing customer......")
     
    })
 
 
    })