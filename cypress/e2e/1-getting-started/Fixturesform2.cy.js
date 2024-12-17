describe('Registration Form Test', () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Fill and Submit the Registration Form', function () {
        
        cy.visit("https://mytestingthoughts.com/Sample/home.html")
        // Fill out the form using data from the fixture
        cy.get("input[placeholder='First Name']").type(this.data.registrationData.firstName) // Select first name
        cy.get("input[placeholder='Last Name']").type(this.data.registrationData.lastName) //Select last name
        cy.get(`input[type='radio'][value='${this.data.registrationData.gender}']`).check() // Select gender
        cy.get('.selectContainer > .input-group > .form-control').select(this.data.registrationData.department) // Select department

        // Select hobbies
        this.data.registrationData.hobbies.forEach(hobby => {
            cy.get('#exampleFormControlSelect2') 
                .select(hobby) 
                .should("contain.text", hobby)
        })
        

        cy.get("input[placeholder='Username']").type(this.data.registrationData.username)
        cy.get("input[placeholder='Password']").type(this.data.registrationData.password)
        cy.get("input[placeholder='Confirm Password']").type(this.data.registrationData.confirmPassword)
        cy.get("input[placeholder='E-Mail Address']").type(this.data.registrationData.email)
        cy.get("input[placeholder='(639)']").type(this.data.registrationData.contactNo)
        cy.get("textarea").type(this.data.registrationData.additionalInfo)

        // Submit the form
        cy.get("button[type='submit']").click()
    })
})
