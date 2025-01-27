import HomePage from '../1-getting-started/PageObjects/HomePage';
import LoginPage from '../1-getting-started/PageObjects/LoginPage';
import ProductPage from '../1-getting-started/PageObjects/ProductPage';

describe('Practical 1 - Amazon', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Amazon - Login and Product Actions', () => {
    // Home Page Actions
    HomePage.visit();
    HomePage.verifyUrlAndTitle();
    HomePage.captureLogoScreenshot();

    // Login Actions
    HomePage.navigateToLogin();
    LoginPage.enterEmail('6374789826');
    LoginPage.clickContinue();
    LoginPage.enterPassword('Littlegirl@05');
    LoginPage.clickSignIn();

    // Filter Actions
    HomePage.navigateToDeals();
    HomePage.applyRadioFilters();
    HomePage.applyCheckboxFilters();

    // Header Navigation and assertions
    HomePage.navigateToHeaderLink('[href="/deals?ref_=nav_cs_gb"]', "Today's Deals");
    HomePage.navigateToHeaderLink('[href="/hz/mobile/mission?ref_=nav_cs_ci_mcx_mi_d_db"]', 'Keep Shopping for');
    HomePage.navigateToHeaderLink('[href="/minitv?ref_=nav_avod_desktop_topnav"]', 'MX Player');
    HomePage.navigateToHeaderLink('[href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"]', 'Sell');
    HomePage.navigateToHeaderLink('[href="/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc"]', "Gift Cards");
    HomePage.navigateToHeaderLink('[href="/gcx/-/gfhz/?ref_=nav_cs_giftfinder"]', 'Gift Ideas\t');
    HomePage.navigateToHeaderLink('[href="/gp/sva/dashboard?ref_=nav_cs_apay"]', 'Amazon Pay');
    HomePage.navigateToHeaderLink('[href="/gp/buyagain?ie=UTF8&ref_=nav_cs_buy_again"]', 'Buy Again');
    HomePage.navigateToHeaderLink('#nav-recently-viewed', 'Browsing History');

    // Product Search and Add to cart
    HomePage.selectSearchCategory('Electronics');
    HomePage.searchProduct('Laptops');
    ProductPage.selectProductByAltText('The Purpose of Life: Find Your Path to Oneness');
    ProductPage.selectQuantity(2);
    ProductPage.addToCart();
    ProductPage.navigateToCart();

    // Payment
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();

    // Sign Out (Optional)
    // cy.get('#nav-item-signout span.nav-text').click();
  });
});
