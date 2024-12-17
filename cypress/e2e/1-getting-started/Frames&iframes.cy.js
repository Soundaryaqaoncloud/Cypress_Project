describe('Frames and Iframes Test', () => {
    
    it('Frame', () => {
      
    cy.visit("https://jqueryui.com/droppable/")
    cy.frameLoaded(".demo-frame")
    cy.iframe().find("#draggable").then((res) => {
        const frmValue = res.text()
        expect(frmValue).to.contain('Drag me to my target')

    })

    })
  })
  