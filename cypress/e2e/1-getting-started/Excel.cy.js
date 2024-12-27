describe('Data Driven Testing Using Excel File', () => {
  let rowsData

  before(() => {
    
    cy.task('readXlsx', { file: 'cypress/fixtures/cypressexcel.xlsx', sheet: 'Sheet1' }).then((rows) => {
      rowsData = rows
      cy.writeFile("cypress/fixtures/xlsxData.json", rows)
    })

    cy.visit('https://demo.wpeverest.com/user-registration/column-1/')
    cy.wait(5000)
  })

  it('Data Driven: Register User', () => {
    cy.fixture('xlsxData').then((data) => {
      
      for (let i = 0; i < data.length; i++) {
        cy.get("#user_login").clear().type(data[i]["Username"])
        cy.get("#user_email").clear().type(data[i]["User Email"])
        cy.get('#user_pass').clear().type(data[i]["User Password"])
        cy.get('#user_confirm_password').clear().should('be.visible').type(data[i]["Confrim Password"])
        
        cy.get('.btn').click({ force: true })

      }
    })
  })
})
