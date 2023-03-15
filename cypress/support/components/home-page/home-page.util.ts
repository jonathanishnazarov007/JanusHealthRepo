class HomePage {

    get searchProductBar() {
        return cy.get('#twotabsearchtextbox');
    }
    get searchSubmit() {
        return cy.get('#nav-search-submit-button');
    }
    get addFirstItem() {
        return cy.get('#a-autoid-1-announce');
    }
    get itemAddedMessage() {
        return cy.get('.a-changeover-inner > .a-size-small');
    }




}
    
    const homePage = new HomePage();
    export {homePage}