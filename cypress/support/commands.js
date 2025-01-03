// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

Cypress.Commands.add('login', (Username, Password) => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("input[placeholder='Username']").type('Username')
cy.get("input[placeholder='Password']").type('Password')
cy.get("button[type='submit']").click()

})

