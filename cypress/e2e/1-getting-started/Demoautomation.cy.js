describe('Demo on Automation Page', () => {

    it('Registration page', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')

    // Fill in the first and last name
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Soundarya')
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('S')

    // Fill in the address
    cy.get('.col-md-8 > .form-control').type('123 Test Road, Test City')

    // Fill in the email
    cy.get('#eid > .form-control').type('soundarya@example.com')

    // Fill in the phone number
    cy.get(':nth-child(4) > .col-md-4 > .form-control').type('9876543210');

    // Select gender
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').check()

    // Select hobbies
    cy.get('#checkbox1').check();
    cy.get('#checkbox2').check();

    // Select language
    //cy.get('#msdd').click(); // Adjust selector if necessary
    //cy.get('li.ui-menu-item > div').contains('English').click();

    // Select skills
    cy.get('#Skills').select('Javascript').should('have.value','Javascript')

    // Select country
    cy.get('#countries').select('Select Country')

    // Select country from the searchable dropdown
    cy.get('.select2-selection').click()
    cy.get('.select2-results__option').contains('India').click()

    // Select date of birth
    cy.get('#yearbox').select('2000')
    cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('September')
    cy.get('#daybox').select('5')

    // Fill in the password and confirm password
    cy.get('#firstpassword').type('SecurePass123!')
    cy.get('#secondpassword').type('SecurePass123!')

    // Upload a photo

    cy.get('#imagesrc').attachFile('test pic.png')

    // Submit the form
    cy.get('#submitbtn').click()

    
  })
        
    
})

