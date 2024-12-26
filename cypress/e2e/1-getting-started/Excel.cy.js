describe('Excel Data-Driven Testing with Demo Registration Page', () => {
    
    let rowsLength
    let rowsData
  
    before(() => {
      
      cy.fixture('xlsxData').then((data) => {
        rowsLength = data.length
        rowsData = data
      })
    })
  
    it('Log Excel Data for Verification', () => {
      
      cy.log(rowsData)
    })
  
    it('Data-Driven Test: Register Users', () => {
        
        cy.visit('https://demo.wpeverest.com/user-registration/column-1/')
        
        
        cy.fixture('xlsxData').then((data) => {
          for (let i = 0; i < rowsLength; i++) {
            const user = rowsData[i]
    
            // Fill in the registration form
            cy.get("#user_login").clear().type(user.username)
            cy.get("#user_email").clear().type(user.userEmail)
            cy.get('#user_pass').clear().type(user.userPassword)
            cy.get('#user_confirm_password').clear().should('be.visible').type(user.confirmPassword)
    
            // Submit the form
            cy.get('.btn').click()

            //Successful message
            //cy.get('#ur-submit-message-node').should('have.text', 'User successfully registered.')
    
        
        }
      })
    })
  })
  