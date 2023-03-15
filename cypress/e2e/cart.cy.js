import { loginPage } from '../support/components/login-page/login-page.util';
import { homePage } from '../support/components/home-page/home-page.util';


const amazonEmail = 'michaelkeaton007007@gmail.com';
const amazonPassword = 'qaenthusiast007';
const searchPerfumes = 'perfumes';
const url = 'https://amazon.com';

describe('Login spec', () => {
    it('passes', () => {
      //visits amazon website 

      cy.visit(url);

      //login account

      loginPage.signIn.click();
      loginPage.emailField.type(amazonEmail);
      loginPage.continueButton.click();
      loginPage.passwordField.type(amazonPassword)
      loginPage.signInSubmit.click();

      //search for perfumes

      cy.get('#twotabsearchtextbox', {timeout : 2000}).click().type(searchPerfumes);
      homePage.searchSubmit.click();

      //add to cart the first item
      homePage.addFirstItem.click()
      homePage.itemAddedMessage.should('have.text', 'Item Added');
      // cy.get('#nav-cart').click();

    })
  })