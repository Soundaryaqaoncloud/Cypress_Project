describe('alerts', () => {
    it(' Simple alerts', () => {
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.get("button[onclick='jsAlert()']").click() //css element of first  button
     cy.on('window:alert',(t)=>{ //validating alert window, to trigger the event(cy.on) t is a method used to store an event
         expect(t).to.contains("I am a JS Alert"); //validating text on alert window
 
     })
 
    })
 //javascript confirmation alert
    it('Confirm alerts', () => {
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.get("button[onclick='jsConfirm()']").click()
     cy.on('window:confirm',(t)=>{ //validating alert window, to trigger the event(cy.on) t is a method used to store an event
         expect(t).to.contains("I am a JS Confirm"); //validating text on alert window
     })
     cy.on('window:confirm',()=> false); //to click on cancel button, to click on ok we can replace false with true
 
     
     })
     //Js prompt alert
    it('Prompt alert',()=>{
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.window().then((win)=> {
          cy.stub(win,'prompt').returns('welcome'); //passing the text in alert window
      
     })
     //cy.get(button[onclick='jsPrompt()']).click();
 
  })
 })
 
 