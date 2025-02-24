class FlipkartPage {
    visit() {
        cy.visit('https://www.flipkart.com/')
    }

    searchProduct(productName) {
        cy.get("input[placeholder='Search for Products, Brands and More']").type(`${productName}{enter}`)
    }

    selectProduct(productTitle) {
        cy.get(`a[title='${productTitle}']`).invoke('removeAttr', 'target').click()
    }

    addToCart() {
        cy.get("button[class='QqFHMw vslbG+ In9uk2']").should('be.visible').click()
    }

    proceedToCart() {
        cy.get('.aRL84z > .QqFHMw').click({ force: true })
    }

    proceedToPayment() {
        cy.get('form > .QqFHMw').click()
    }
}

// Correctly exporting the class
export const flipkartPage = new FlipkartPage();
