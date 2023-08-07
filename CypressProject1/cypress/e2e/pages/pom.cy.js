export class Loginpage{

    Username_id  = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    Password_id = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    button_id = '.oxd-button'
    enterUsername(Username){
        cy.get(this.Username_id).type(Username)
    }

    enterPassword(password){
        cy.get(this.Password_id).type(password)
    }

    buttonClick(){
        cy.get(this.button_id).click()
    }
}