import 'cypress-file-upload'

describe('Login', () => {
    it('App Login', () => {
      cy.visit("https://avantidash-dot-indihood-qa-in.appspot.com/login")
      cy.get(':nth-child(2) > .firebaseui-idp-button').click()
      cy.get('.mdl-textfield__input').type("xotay28182@etoymail.com")
      cy.get('.firebaseui-id-submit').click()
      cy.get(':nth-child(3) > .mdl-textfield__input').type("Avanti@123")
      cy.get('.firebaseui-id-submit').click()
   
      //Loan Application

    cy.get('.app-toolbar-row > :nth-child(1) > [aria-haspopup="true"]').click() //create option
    cy.get(':nth-child(14) > .mat-menu-item').contains('Loan Application').click()//Loan application

    cy.get('.mat-figure > .image-panel > image-upload > .img-ul > .img-ul-file-upload > .img-ul-upload').attachFile('blank image.jpg')


    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click()
    cy.contains('span', 'T Valarmathi - Aadhaar1495').click()
    cy.get('section.ng-star-inserted > [fxlayout="row"] > :nth-child(2) > .mat-icon').click()
    cy.get('.value > span > img').click() //location
    cy.get('.button-panel > .mat-raised-button').click()
    cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click();
    cy.get('#mat-option-20 > .mat-option-text > .ng-star-inserted').click() //loan product
    cy.get('section.ng-star-inserted > [fxlayout="row"] > :nth-child(2) > .mat-icon').click()
    cy.get(':nth-child(2) > :nth-child(5) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click()
    cy.get('.mat-form-field-infix').click()
    cy.get('#mat-option-40 > .mat-option-text').click() //loan purpose category
    cy.get(':nth-child(7) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-3').type('50000') //principal
    cy.get('.mat-form-field-suffix > :nth-child(1)').click()
    cy.get(':nth-child(8) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-4').type('9.57') //APR
    cy.get('.mat-form-field-suffix > :nth-child(1)').click()
    cy.get(':nth-child(9) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-5').type('31') //fixed interval days
    cy.get(':nth-child(9) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .number-field > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > :nth-child(1)').click()
    cy.get(':nth-child(10) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-6').type('12') //number of installments
    cy.get(':nth-child(10) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-number-field.ng-star-inserted > .number-field > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > :nth-child(1)').click()
    cy.get(':nth-child(12) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-date-field.ng-star-inserted > .value').click()
    cy.get('.mat-datepicker-toggle > .mat-icon-button').click() // loan start date
    cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click()
    cy.get('.mat-form-field-suffix > :nth-child(2)').click()
    cy.get(':nth-child(14) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-date-field.ng-star-inserted > .value').click()
    cy.get(':nth-child(14) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-date-field.ng-star-inserted > div[_ngcontent-c34=""] > .date-picker > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click()
    cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click() //first installment date
    cy.get(':nth-child(14) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-date-field.ng-star-inserted > div[_ngcontent-c34=""] > .date-picker > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > :nth-child(2)').click()
    
    const yourFixturePath = 'BLANK IMAGE.jpg';

    cy.get(':nth-child(20) > :nth-child(1) > section.ng-star-inserted > app-repeated-field > .editor-field-label > .actions > .mat-icon').click()//disbursal passbook image
    cy.get('input[type="file"]').attachFile('blank image.jpg').trigger('change', { force: true });


  

   
    /* cy.get('.value > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-image-field.ng-star-inserted > :nth-child(1) > .image-panel > image-upload > .img-ul > .img-ul-file-upload > .img-ul-upload > span').attachFile('BLANK IMAGE.jpg')
    cy.get('.value > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-image-field.ng-star-inserted > :nth-child(1) > [fxlayout="row"] > .mat-button > .mat-button-wrapper').click()
    cy.get(':nth-child(21) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-text-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-9').type('1234567890') //disbursal bank acc num
    cy.get('.icon-panel > :nth-child(1)').click()
    cy.get(':nth-child(22) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click()
    cy.get('#mat-input-10').type('ICIC0003428 - ICICI Bank Ltd - DO NOT UPDATE - Icici Bank Ltd') //disbursal bank acc name
    cy.get('#mat-option-76').click()
    cy.get('section.ng-star-inserted > [fxlayout="row"] > :nth-child(2) > .mat-icon').click()
    cy.get('app-image-field.ng-star-inserted > :nth-child(1) > .image-panel > image-upload > .img-ul > .img-ul-file-upload > .img-ul-upload > span').click().attachFile('BLANK IMAGE.jpg')
    cy.get('[fxlayout="row"] > .mat-button > .mat-button-wrapper').click()
    cy.get('[style="padding: 8px"] > .mat-button').click()*/
    

  });
  
  });
  