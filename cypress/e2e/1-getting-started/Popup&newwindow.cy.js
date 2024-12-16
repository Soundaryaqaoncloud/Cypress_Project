describe('Pop Up Test Suite', () => {
    before(()=>{
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes')
    })

    it('Alerts', () => {
        cy.on('window:alert', alertText =>{
            expect(alertText).to.eql("I'm an Alert Box")
        })
        cy.get("#alert").click()
    
    })

    it('Multiple Alerts', () => {
        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get("#miltiplealert").click().then(()=>{
            expect(fn.getCall(0)).to.be.calledWithExactly("First Alert Box") 
            expect(fn.getCall(1)).to.be.calledWithExactly("Second Alert Box")
            expect(fn.getCall(2)).to.be.calledWithExactly("Third Alert Box")
    })
})

it.only('Confirm Alerts', () => {
    cy.on('window:alert', confirmTxt =>{
        expect(confirmTxt).to.eql("I'm a Confirm Box")
        return false
    })
    cy.get("#confirm").click() 
})


it('Prompt Alert', () => {
    cy.window().then((win) => {

        const stub = cy.stub(win, 'prompt').returns('Soundu');
        cy.get("#prompt").click()
    })
})

it('Custom Pop Up dialog from hidden fields', () => {
    cy.get("#cusdiag").click()
    cy.get("#name").type("TestUser")
    cy.get("#password").type("TestPassword")
    cy.get(".ui-button-text").click()  
})

it('Custom Pop Up dialog from function', () => {
    cy.get("#moddiag").click()
    cy.get(':nth-child(1) > .ui-button-text').should('have.text','Ok').click()
    //cy.get(':nth-child(2) > .ui-button-text').should('have.text','Close').click()
})

it('Window Pop Up', () => {
    const pop_url = 'https://www.youtube.com/c/qaboxletstest/'
    
    cy.window().then(win => {
        const stub = cy.stub(win, 'open').as('windowopen')
    });

    cy.get("#winpop").click()
    cy.get('@windowopen').should('have.been.calledWith', pop_url)
    cy.window().then(win => {
        win.location.href = pop_url
        cy.get("input[placeholder='Search'][name='search_query'][role='combobox']").type("Cypress by qa box lets test{enter}")
    });
});







})
