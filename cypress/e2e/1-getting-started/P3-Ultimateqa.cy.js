describe('Practical 3', () => {
    it('Practical 3 Test', () => {
        // Visit the initial page
        cy.visit("https://ultimateqa.com/automation");
        cy.get(':nth-child(7) > a').click();
        cy.get('#menu-main-menu').should('be.visible');

        // Text Buttons Click Me! and Raise
        cy.get(':nth-child(3) > #button1').click();
        cy.go('back'); // Navigate back
        cy.get(':nth-child(7) > a').click();
        cy.get('#button2').click();
        cy.go('back'); // Navigate back

        // Visit again for further actions
        cy.get(':nth-child(7) > a').click();

        // Radio buttons
        cy.get('[value="female"]').check().should('be.checked');
        cy.get('[value="male"]').check().should('be.checked');
        cy.get('[value="other"]').check().should('be.checked');

        // Checkboxes
        cy.get('[value="Bike"]').check().should('be.checked');
        cy.get('[value="Car"]').check().should('be.checked');
        cy.get('[value="Bike"]').uncheck().should('not.be.checked');
        cy.get('[value="Car"]').uncheck().should('not.be.checked');

        // Dropdown selection
        cy.get('select').select('volvo').should('have.value', 'volvo');
        cy.get('select').select('Saab').should('have.value', 'saab');
        cy.get('select').select('Opel').should('have.value', 'opel');
        cy.get('select').select('audi').should('have.value', 'audi');

        // Tabs
        cy.get('.et_pb_tab_0 > a').click();
        cy.get('.et_pb_tab_0 > .et_pb_tab_content').should('have.text', 'tab 1 content');

        cy.get('.et_pb_tab_1 > a').click();
        cy.get('.et_pb_tab_1 > .et_pb_tab_content').should('have.text', 'Tab 2 content');

        // HTML Table
        // 1) Check value presence anywhere in the table
        cy.get('#htmlTableId > tbody > :nth-child(4) > :nth-child(1)').contains('Quality Assurance Engineer').should('be.visible');

        // 2) Check value presence in a specific row and column
        cy.get('#htmlTableId > tbody > :nth-child(4) > :nth-child(2)').contains('Manual').should('be.visible');
        cy.get('#htmlTableId > tbody > :nth-child(3) > :nth-child(1)').contains('Automation Testing Architect').should('be.visible')
        cy.get('#htmlTableId > tbody > :nth-child(3) > :nth-child(2)').contains('Automation').should('be.visible')

        // Link Selection
        cy.get('#simpleElementsLink').click();
        cy.wait(5000);
        cy.title().should('eq', 'Link success - Ultimate QA').go('back');

        cy.get('.et-waypoint').click();
        cy.wait(5000);
        cy.title().should('eq', 'Link success - Ultimate QA').go('back');

        cy.get('.et_pb_module_header > a').click();
        cy.wait(5000);
        cy.title().should('eq', 'Link success - Ultimate QA').go('back');

        // Email Me
        cy.get('#et_pb_contact_name_0').type('soundarya');
        cy.get('#et_pb_contact_email_0').type('soundaryasubramaniyan55@gmail.com');
        cy.get('.et_pb_contact_submit').click();

        // Simple Controls
        cy.get('.et_pb_cta_0 > .et_pb_promo_description > .et_pb_module_header').should('have.text', 'Button');
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click().go('back');

        // Advanced Controls Toggle
        cy.get('.et_pb_toggle_0').click();
        cy.get('.et_pb_toggle_0 > .et_pb_toggle_title').should('have.text', 'Open toggle to read text');
        cy.get('.et_pb_toggle_1').click();
        cy.get('.et_pb_toggle_0 > .et_pb_toggle_title').should('have.text', 'Open toggle to read text');


    });
});
