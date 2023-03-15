class LoginPage {
get signIn() {
    return cy.get('#nav-link-accountList-nav-line-1');
}
get emailField() {
    return cy.get('#ap_email');
}
get continueButton () {
    return cy.get('.a-button-inner > #continue');
}
get passwordField() {
    return cy.get('#ap_password');
}
get signInSubmit() {
    return cy.get('#signInSubmit');
}
}

const loginPage = new LoginPage();
export {loginPage}