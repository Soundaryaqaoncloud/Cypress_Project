class HomePage {
  visit() {
    cy.visit("https://www.amazon.in/");
  }

  verifyUrlAndTitle() {
    cy.url().should('include', 'https://www.amazon.in/');
    cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  }

  captureLogoScreenshot() {
    cy.get('#nav-logo-sprites').screenshot('amazonlogo');
  }

  navigateToLogin() {
    cy.get('#nav-link-accountList').click();
  }

  navigateToHeaderLink(linkHref, expectedText) {
    cy.get(linkHref)
      .should('have.text', expectedText) 
      .click() 
      .go('back'); 
  }

  selectSearchCategory(category) {
    cy.get('#searchDropdownBox').select(category, { force: true });
  }

  searchProduct(productName) {
    cy.get('#twotabsearchtextbox').type(productName);
    cy.get('#nav-search-submit-button').click();
  }

  navigateToDeals() {
    cy.get('[href="/deals?ref_=nav_cs_gb"]').click();
  }

  applyRadioFilters() {
    cy.get('[data-testid="filter-reviewRating-4"] > label > .a-icon-radio').click();
    cy.get('[data-testid="filter-reviewRating-3"] > label > .a-icon-radio').click();
    cy.get('[data-testid="filter-reviewRating-2"] > label > .a-icon-radio').click();
    cy.get('[data-testid="filter-reviewRating-1"] > label > .a-icon-radio').click();
    cy.get('[data-testid="filter-price-4"] > label > .a-icon').click();
    cy.get('[data-testid="filter-price-5"] > label > .a-icon').click();
    cy.get('[data-testid="filter-percentOff-1"] > label > .a-icon').click();
    cy.get('[data-testid="filter-percentOff-2"] > label > .a-icon').click();
  }

  applyCheckboxFilters() {
    cy.get('[href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"]').click()
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(2) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(3) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(4) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(5) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(6) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    cy.get(':nth-child(4) > .a-unordered-list > :nth-child(7) > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click().go('back')
    //cy.get('[data-testid="filter-brands-Amazon"] > label > .a-icon').click();
    //cy.get('[data-testid="filter-brands-amazon basics"] > label > .a-icon').click();
    //cy.get('[data-testid="filter-brands-Samsung"] > label > .a-icon').click();
  }
}


export default new HomePage();
