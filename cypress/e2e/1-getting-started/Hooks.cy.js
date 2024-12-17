describe("Hooks", ()=>{

    //Before
    before(()=>{
        cy.log("***  Launch App  ***")

    })

    // After

    after(()=>{
    cy.log("***  Close App  ***")

})
    // Before each

    beforeEach(()=>{
        cy.log("***  Login App  ***")
    
    })

    // Afer each

    afterEach(()=>{
        cy.log("***  Logout App  ***")
    })


    it("Search", ()=>{
        cy.log("***  Searching  ***")
    })

    it("Advanced Search", ()=>{
        cy.log("*** Advanced Searching  ***")
    })

    it("Listing products", ()=>{
        cy.log("***  Listing products  ***")
    })
   
})