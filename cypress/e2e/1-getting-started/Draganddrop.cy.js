describe('Drag and Drop Test Suite', () => {

    it('Drag event to calender', () => {
        cy.visit('https://fullcalendar.io/docs/external-dragging-demo')
        cy.get(':nth-child(2) > .fc-event-main').drag(':nth-child(1) > .fc-day-wed > .fc-daygrid-day-frame')
    
    })

})