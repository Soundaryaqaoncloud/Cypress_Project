import 'cypress-file-upload'

describe('File Upload Test Suite', () => {

    it('File Upload ', () => {
        
        cy.visit('https://the-internet.herokuapp.com/upload')
        
        cy.get('#file-upload').attachFile('test pic.png')
        cy.get('#file-submit').click()
       
       

    })

})