import FlipkartPage, { flipkartPage } from '../1-getting-started/PageObjects/FlipkartPage'

describe('Flipkart Automation', () => {

    
    it('Verify Url, title, capture screenshot and each headers', () => {

    cy.visit('https://www.flipkart.com/')
    cy.url().should('include','https://www.flipkart.com/')
    cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    cy.screenshot("Home page");
    cy.wait(5000);
    cy.get("img[title='Flipkart']").screenshot('Flipkartlogo'); 


    //Verify Header with Assertions
    cy.get("img[title='Flipkart']").should('be.visible')

    cy.get("a[aria-label='Kilos'] span[class='_1XjE3T'] span").should('contain.text',"Kilos")
    
    cy.get("a[aria-label='Mobiles'] span[class='_1XjE3T'] span").should('contain.text',"Mobiles")
    
    cy.get("a[aria-label='Appliances'] span[class='_1XjE3T'] span").should('contain.text',"Appliances")
    
    cy.get("a[aria-label='Flight Bookings'] span[class='_1XjE3T'] span").should('contain.text',"Flight Bookings")    

    })

    it('Verify Kilos header, brands Filter options', () => {
        cy.visit('https://www.flipkart.com/')    
        cy.get("a[aria-label='Kilos'] span[class='_1XjE3T'] span").click()
        cy.get(".col-12-12.BnmXvV").type('Oil').should('be.visible')
        cy.get("button[type='submit']").click()
        cy.get('._1UOrqe').type('607308').type('{enter}')

        //Checkboxes for brands
        cy.get("div[title='AASHIRVAAD'] div[class='XqNaEv']").click()
        cy.get("div[title='AASHIRVAAD'] div[class='_6i1qKy']").should('contain.text','AASHIRVAAD')
        //cy.get("div[title='777'] div[class='XqNaEv']").click()
        //cy.get("div[title='777'] div[class='_6i1qKy']").should('contain.text','777')
        cy.get("div[title='Aadhar'] div[class='XqNaEv']").click()
        cy.get("div[title='Aadhar'] div[class='_6i1qKy']").should('contain.text','Aadhar')
        cy.get("div[title='aavin'] div[class='XqNaEv']").click()
        cy.get("div[title='aavin'] div[class='_6i1qKy']").should('contain.text','aavin')
        cy.get("div[title='Amul'] div[class='XqNaEv']").click()
        cy.get("div[title='Amul'] div[class='_6i1qKy']").should('contain.text','Amul')
        cy.get("div[title='ASHTAVINAYAK'] div[class='XqNaEv']").click()
        cy.get("div[title='ASHTAVINAYAK'] div[class='_6i1qKy']").should('contain.text','ASHTAVINAYAK')
        //Checkboxes for Ratings & Special offers
        cy.get("div[title='4★ & above'] div[class='XqNaEv']").click()
        cy.get("div[title='3★ & above'] div[class='XqNaEv']").click()
        cy.get("div[title='2★ & above'] div[class='XqNaEv']").click()
        cy.get("div[title='1★ & above'] div[class='XqNaEv']").click()
        cy.get("div[title='Special Price'] div[class='XqNaEv']").click()

        cy.get('.-rdblK > :nth-child(1)').trigger('mouseover').should('contain.text','Staples')
        cy.get('.-rdblK > :nth-child(2)').trigger('mouseover').should('contain.text','Snacks & Beverages')
        cy.get('.-rdblK > :nth-child(3)').trigger('mouseover').should('contain.text','Packaged Food')
        cy.get('.-rdblK > :nth-child(4)').trigger('mouseover')
        cy.get('.-rdblK > :nth-child(5)').trigger('mouseover').should('contain.text','Household Care')
        cy.get('.-rdblK > :nth-child(6)').trigger('mouseover').should('contain.text','Dairy & Eggs')
        cy.get('.-rdblK > :nth-child(7)').trigger('mouseover').should('contain.text','Home & Kitchen')
        
    })

        it('Verify Mobile header and Filter options', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get("a[aria-label='Mobiles'] span[class='_1XjE3T']").click()
        cy.get("input[placeholder='Search for products, brands and more']").type('Kurtis')
        cy.get("button[type='submit']").click()
        
        //Checkboxes for ratings and offers
        cy.get("div[title='4★ & above'] div[class='XqNaEv']").click()
        cy.get("div[title='3★ & above'] div[class='XqNaEv']").click()
        cy.get('.bpjkJb > :nth-child(1)').trigger('mouseover').should('contain.text','Electronics')
        cy.get('.bpjkJb > :nth-child(2)').trigger('mouseover').should('contain.text','TVs & Appliances')
        cy.get('.bpjkJb > :nth-child(3)').trigger('mouseover').should('contain.text','Men')
        cy.get('.bpjkJb > :nth-child(4)').trigger('mouseover').should('contain.text','Women')
        cy.get('.bpjkJb > :nth-child(5)').trigger('mouseover').should('contain.text','Baby & Kids')
        cy.get('.bpjkJb > :nth-child(6)').trigger('mouseover').should('contain.text','Home & Furniture')
        cy.get('.bpjkJb > :nth-child(7)').trigger('mouseover').should('contain.text','Sports, Books & More')
        
        })

        it('Verify Fashion Header and Assertions', () => {

            cy.visit('https://www.flipkart.com/')
            cy.get("div[aria-label='Fashion']").trigger('mouseover').should('contain.text','Fashion')
            cy.get("._1BJVlg._11MZbx").trigger('mouseover').should('contain.text',"Men's Top Wear")
            cy.get("div[class='_16rZTH'] a:nth-child(2)").trigger('mouseover').should('contain.text',"Men's Bottom Wear")
            cy.xpath("//a[normalize-space()='Women Ethnic']").trigger('mouseover').should('contain.text',"Women Ethnic")
            cy.xpath("//a[normalize-space()='Men Footwear']").trigger('mouseover').should('contain.text',"Men Footwear")
            cy.xpath("//a[normalize-space()='Women Footwear']").trigger('mouseover').should('contain.text',"Women Footwear")
            cy.xpath("//a[normalize-space()='Watches and Accessories']").trigger('mouseover').should('contain.text',"Watches and Accessories")
            cy.xpath("//a[normalize-space()='Women Western']").trigger('mouseover').should('contain.text',"Women Western")
            cy.xpath("//a[normalize-space()='Bags, Suitcases & Luggage']").trigger('mouseover').should('contain.text',"Bags, Suitcases & Luggage")
            cy.xpath("//a[normalize-space()='Kids']").trigger('mouseover').should('contain.text',"Kids")
            cy.xpath("//a[normalize-space()='Essentials']").trigger('mouseover').should('contain.text',"Essentials")
            cy.xpath("//a[normalize-space()='Winter']").trigger('mouseover').should('contain.text',"Winter")
                
            })

        
    it('Verify Electronics Header and Assertions', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Electronics"]').trigger('mouseover').should('contain.text',"Electronics")
        cy.xpath("//a[normalize-space()='Audio']").trigger('mouseover').should('contain.text',"Audio")
        cy.xpath("//a[normalize-space()='Electronics GST Store']").trigger('mouseover').should('contain.text',"Electronics GST Store")
        cy.xpath("//a[normalize-space()='Cameras & Accessories']").trigger('mouseover').should('contain.text',"Cameras & Accessories")
        cy.xpath("//a[normalize-space()='Computer Peripherals']").trigger('mouseover').should('contain.text',"Computer Peripherals")
        cy.xpath("//a[normalize-space()='Gaming']").trigger('mouseover').should('contain.text',"Gaming")
        cy.xpath("//a[normalize-space()='Health & Personal Care']").trigger('mouseover').should('contain.text',"Health & Personal Care")
        cy.xpath("//a[normalize-space()='Laptop Accessories']").trigger('mouseover').should('contain.text',"Laptop Accessories")
        cy.xpath("//a[normalize-space()='Laptop and Desktop']").trigger('mouseover').should('contain.text',"Laptop and Desktop")
        cy.xpath("//a[normalize-space()='MobileAccessory']").trigger('mouseover').should('contain.text',"MobileAccessory")
        cy.xpath("//a[normalize-space()='Powerbank']").trigger('mouseover').should('contain.text',"Powerbank")
        cy.xpath("//a[normalize-space()='Smart Home automation']").trigger('mouseover').should('contain.text',"Smart Home automation")
    
        
    })

    it('Verify Home & Furniture Header and Assertions', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Home & Furniture"]').trigger('mouseover').should('contain.text',"Home & Furniture")
        cy.xpath("//a[normalize-space()='Home Furnishings']").trigger('mouseover').should('contain.text',"Home Furnishings")
        cy.xpath("//a[normalize-space()='Living Room Furniture']").trigger('mouseover').should('contain.text',"Living Room Furniture")
        cy.xpath("//a[normalize-space()='Kitchen & Dining']").trigger('mouseover').should('contain.text',"Kitchen & Dining")
        cy.xpath("//a[normalize-space()='Bedroom Furniture']").trigger('mouseover').should('contain.text',"Bedroom Furniture")
        cy.xpath("//a[normalize-space()='Space Saving Furniture']").trigger('mouseover').should('contain.text',"Space Saving Furniture")
        cy.xpath("//a[normalize-space()='Home Decor']").trigger('mouseover').should('contain.text',"Home Decor")
        cy.xpath("//a[normalize-space()='Tools & Utility']").trigger('mouseover').should('contain.text',"Tools & Utility")
        cy.xpath("//a[normalize-space()='Work Space Furniture']").trigger('mouseover').should('contain.text',"Work Space Furniture")
        cy.xpath("//a[normalize-space()='Kids Furniture']").trigger('mouseover').should('contain.text',"Kids Furniture")
        cy.xpath("//a[normalize-space()='Lightings & Electricals']").trigger('mouseover').should('contain.text',"Lightings & Electricals")
    
        
    })

        it('Verify Flight bookings header and assertions', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get("a[aria-label='Flight Bookings'] span[class='_1XjE3T'] span").click()
        cy.get('[for="ROUND_TRIP"] > .qsHXPi').click() //radio buttons
        cy.get("input[name='0-departcity']").type('Mumbai, BOM - Chatrapati Shivaji International Airport')
        cy.get("input[name='0-arrivalcity']").type('Chennai, MAA - Chennai International Airport')
        cy.get("input[value='25 Feb, Tue']").click()
        cy.get(".pl8ttv.paxEPa.ZFO-pc").click()
        cy.get("input[name='0-dateto']").click()
        cy.get(".pl8ttv.paxEPa.FC89rO").click()
        cy.get('.p2QvAm > .v2VFa-').click()
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click()
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click()
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click()
        cy.get("label[for='w'] div[class='qsHXPi']").click()
        cy.get(".xSWdQ-.azBkHf").click()
        cy.get('.QqFHMw').click({ force: true })

    })

    it('Verify Beauty, Toys & more Header and Assertions', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('[aria-label="Beauty, Toys & More"]').trigger('mouseover').should('contain.text',"Beauty, Toys & More")
        cy.xpath("//a[normalize-space()='Beauty & Personal Care']").trigger('mouseover').should('contain.text',"Beauty & Personal Care")
        cy.get("div[class='_16rZTH'] a:nth-child(2)").trigger('mouseover').should('contain.text',"Men's Grooming")
        cy.xpath("//a[normalize-space()='Food & Drinks']").trigger('mouseover').should('contain.text',"Food & Drinks")
        cy.xpath("//a[normalize-space()='Nutrition & Health Care']").trigger('mouseover').should('contain.text',"Nutrition & Health Care")
        cy.xpath("//a[normalize-space()='Baby Care']").trigger('mouseover').should('contain.text',"Baby Care")
        cy.xpath("//a[normalize-space()='Toys & School Supplies']").trigger('mouseover').should('contain.text',"Toys & School Supplies")
        cy.xpath("//a[normalize-space()='Sports & Fitness']").trigger('mouseover').should('contain.text',"Sports & Fitness")
        cy.xpath("//a[normalize-space()='Music']").trigger('mouseover').should('contain.text',"Music")
        cy.xpath("//a[normalize-space()='Stationery & Office Supplies']").trigger('mouseover').should('contain.text',"Stationery & Office Supplies")
        cy.xpath("//a[normalize-space()='Auto Accessories']").trigger('mouseover').should('contain.text',"Auto Accessories")
        cy.xpath("//a[normalize-space()='Safety & Hygiene Essentials']").trigger('mouseover').should('contain.text',"Safety & Hygiene Essentials")
    
        
   })

    it('Search a product, Add to Cart, and Proceed to Payment', () => {
        flipkartPage.visit()
        flipkartPage.searchProduct("The Purpose of Life: Find Your Path to Oneness")
        flipkartPage.selectProduct("The Purpose of Life: Find Your Path to Oneness")
        flipkartPage.addToCart()
        flipkartPage.proceedToCart()
        flipkartPage.proceedToPayment()
    })
        })
    
    

