class LoginPage {
    enterEmail(email) {
      cy.get('#ap_email_login').type(email);
      //cy.get('#ap_email').type(email);
    }
  
    clickContinue() {
      cy.get("input[type='submit']").click();
    }
  
    enterPassword(password) {
      cy.get('#ap_password').type(password);
    }
  
    clickSignIn() {
      cy.get('#signInSubmit').click();
    }
  }
  
  export default new LoginPage();
  