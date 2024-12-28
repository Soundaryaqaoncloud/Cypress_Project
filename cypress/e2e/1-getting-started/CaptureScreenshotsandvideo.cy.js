describe('Capture Screenshots and Videos Test Suite', () => {

    it('Capture Screenshot', () => {
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("Home page")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot("logo")
        
    })


    it.only('Automatically capture Screenshot and videos', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get("img[title='Your Store']").should("have.text","Tablets")
})

})