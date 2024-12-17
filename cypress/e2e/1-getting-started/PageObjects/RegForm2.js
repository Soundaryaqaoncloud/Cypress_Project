class RegForm2 {
    visit() {
      cy.visit("https://mytestingthoughts.com/Sample/home.html")
    }
  
    fillfirstName(value) {
      const field = cy.get("input[placeholder='First Name']")
      field.clear()
      field.type(value)
      return this
    }
  
    filllastName(value) {
      const field = cy.get("input[placeholder='Last Name']")
      field.clear()
      field.type(value)
      return this
    }
  
    selectGender(value) {
      if (value.toLowerCase() === 'female') {
        cy.get("#inlineRadioFemale").check({ force: true }) // Force added to handle cases where the radio button is hidden
      } else if (value.toLowerCase() === 'male') {
        cy.get("#inlineRadioMale").check({ force: true })
      }
      return this
    }
  
    selectHobbies(value) {
        cy.get("#exampleFormControlSelect2") // Target the <select> element by its ID
          .select(value) // Use .select() to choose the specified value
          .should("contain", value) // Assert that the selected value is present
        return this
      }
      
  
    selectDepartment(value) {
        cy.get('.selectContainer > .input-group > .form-control')
        .select(value)
        .should("contain", value) // Assert that the selected value is present
        return this
    }
  
    fillUsername(value) {
      const field = cy.get("input[placeholder='Username']")
      field.clear()
      field.type(value)
      return this
    }
  
    fillPassword(value) {
      const field = cy.get("input[placeholder='Password']")
      field.clear()
      field.type(value)
      return this
    }
  
    fillConfirmPassword(value) {
      const field = cy.get("input[placeholder='Confirm Password']")
      field.clear()
      field.type(value)
      return this
    }
  
    fillEmail(value) {
      const field = cy.get("input[placeholder='E-Mail Address']")
      field.clear()
      field.type(value)
      return this
    }
  
    fillMobileNumber(value) {
      const field = cy.get("input[placeholder='(639)']")
      field.clear()
      field.type(value)
      return this
    }
  
    submit() {
      const button = cy.get("button[type='submit']")
      button.click()
    }
  }
  
  export default RegForm2
  