describe('Locators', () => {

    it('CSS Selector', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#Wikipedia1_wikipedia-search-input').type('Cypress') //used id #
        cy.get("input[type='submit']").click() //used attribute
        cy.get('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)').contains('Cypress') //contain is assertion, used class .
        

    })

    it('Xpath Locator', () => {
        //number of option available for cypress sreach keyword
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//input[@id='Wikipedia1_wikipedia-search-input']").type('Cypress')
        cy.xpath("//input[@type='submit']").click()
        cy.xpath("//div[@id='Wikipedia1_wikipedia-search-results']/div").should('have.length',5)  
    
    })

    it('Chained Xpath', () => {
        //number of option available for cypress sreach keyword
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//input[@id='Wikipedia1_wikipedia-search-input']").type('Cypress')
        cy.xpath("//input[@type='submit']").click()
        cy.xpath("//div[@id='Wikipedia1_wikipedia-search-results']").xpath('./div').should('have.length',5)  
    
    })






})

