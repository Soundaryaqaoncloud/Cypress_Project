class ProductPage {
    selectProductByAltText(altText) {
      cy.get(`img[alt='${altText}']`)
        .parents('a')
        .then(($link) => {
          const href = $link.prop('href');
          cy.visit(href);
        });
    }
  
    selectQuantity(quantity) {
      cy.get('#a-autoid-2-announce').click();
      cy.get('#quantity_1').click();
    }
  
    addToCart() {
      cy.get('#add-to-cart-button').click();
    }
  
    navigateToCart() {
      cy.get('#nav-cart-count-container').click();
    }
  }
  
  export default new ProductPage();
  