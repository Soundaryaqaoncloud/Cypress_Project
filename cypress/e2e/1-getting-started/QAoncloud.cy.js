describe('Qaoncloud website', () => {

    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });

    it('Header', () => {
        cy.visit('https://www.qaoncloud.com/')
        cy.title().should("be.eq","QA Testing Services | Software Testing Services - QAonCloud") //title
        cy.get("img[title='QAonCloud Logo']").should('be.visible')//logo
        cy.get(".hs-poly-svg[viewBox='0 0 1920 1080']").should('be.visible')//initial banner kind of image
        
        //our global presence
        cy.get(".hotspot-content-overlay").should('be.visible')
        cy.get('#pin646f8c71dffdc190aade > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover')//venze
        cy.get('#pin646f8c71e055d83fd828 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //at&t
        cy.get('#pin_fora > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //Fora
        cy.get('#pin646f8c71e02f91a7121e > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //Notabene
        cy.get('#pin646f8c71e0c7144bcbb3 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //sourcewhale
        cy.get('#pin646f8c71e07c407e9228 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //prompto
        cy.get('#pin646f8c71e0a25d406616 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //netzo
        cy.get('#pin646f8c71e1101a931b93 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //Avanti
        cy.get('#pin646f8c71e134934f87f2 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //doxa
        cy.get('#pin646f8c71e1596e78d4ca > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover') //IQ Hive
        
        //SERVICES
        cy.get('.elementor-element-515eabd > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should("have.text","SERVICES")
        cy.get('#rect-5447').click().go('back') //functional testing
        cy.get('#rect-4956').click().go('back') //regression testing
        cy.get('#rect-4532').click().go('back') //automation testing
        cy.get('#rect-3535').click().go('back') //security testing
        cy.get('#rect-219').click().go('back') //agile testing
        cy.get('#rect-474').click().go('back') //api testing
        
        //SOLUTIONS
        cy.get('.elementor-element-7714daf > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text','SOLUTIONS')
        cy.get('#rect-9608').click().go('back') // Mobile app
        cy.get('#rect-9608').click().go('back') //cross browser
        cy.get('#rect-8002').click().go('back') //web app
        cy.get('#rect-8187').click().go('back') //smart tv app
        cy.get('#rect-8089').click().go('back') //cross platform 
        cy.get('#rect-6484').click().go('back') //game testing  

        //INDUSTRIES SERVED
        cy.get('.main-heading').should('have.text','Industries Served')
        cy.get('.elementor-element-5447bdde > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .ot-button > .octf-btn').click().go('back')//view more

        //Banner
        cy.get('.elementor-element-717394c > .elementor-background-overlay').should('be.visible')
        
        //Build your own app
        cy.get('.elementor-element-3cd64ed > .elementor-container').should('be.visible')

        //We Love To Help Craft Quality Software
        cy.get('.elementor-element-e98bb3e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('have.text','We Love To Help Craft Quality Software')

        //Want To Know More About QAonCloud?
        cy.get('.elementor-element-330048a > .elementor-widget-container > .elementor-heading-title').should('have.text','Want To Know More About QAonCloud?')
        cy.get('.elementor-element-e1d6dff > .elementor-widget-container > .ot-button > .octf-btn').click() //talk to an expert

        cy.get('#navbarDropdown1').click() //Services
        cy.get('#navbarDropdown2').click() //Solutions
        cy.get('#navbarDropdown3').click() //Industries
        cy.get('#navbarDropdown4').click() //Insights
        // Under Insights
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(1) > .dropdown-item').click().go('back'); // Blogs
        cy.get('#navbarDropdown4').click().get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(2) > .dropdown-item').click().go('back'); // Case studies
        cy.get('#navbarDropdown4').click().get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(3) > .dropdown-item').click().go('back'); // FAQs
        cy.get('#navbarDropdown4').click().get(':nth-child(4) > .dropdown-menu > :nth-child(1) > ul > :nth-child(4) > .dropdown-item').click().go('back'); // Testimonials


        //Contact Us
        cy.get('[data-aos="fade-left"] > .text-center').should('have.text','Contact Us')
        cy.get('form > [name="name"]').type('Soundarya')
        cy.get('form > [name="email"]').type('soundarya@email.com')
        cy.get('form > .onlyNumber').type('1234567891')
        cy.get('form > [name="companyname"]').type('Desicrew')
        cy.get('form > [name="role"]').type('Junior QA')
        cy.get('form > textarea.form-control').type('-')
        cy.get('.contact-send > .btn').click()

        //Footer page
        cy.get('form > textarea.form-control').should('be.visible')
        cy.get(':nth-child(1) > .footer-list > .text-center').should('be.visible') //Company
        cy.get('.footer > .container > .row > :nth-child(1)').should('be.visible') //Details below company
        cy.get(':nth-child(2) > .footer-list > .text-center').should('be.visible') //Quick links
        cy.get('.footer > .container > .row > :nth-child(2)').should('be.visible') //Details below Quick links
        cy.get(':nth-child(3) > .footer-list > .text-center').should('be.visible') //Support
        cy.get('.container > .row > :nth-child(3)').should('be.visible') //Details below Support
        cy.get(':nth-child(4) > .footer-list > .text-center').should('be.visible') //Policies
        cy.get('.container > .row > :nth-child(4)').should('be.visible') //Details below Policies

        cy.get('.container > span').should('be.visible') //copyrights
        cy.get('[style="color:white; font-size: 10px;"]').should('be.visible') //Unit name
        cy.get('.d-flex').should('be.visible') //Social media icons

    })  



})