import { Loginpage } from "./pages/pom.cy"

const loginpage = new Loginpage()

describe('Login Pages',()=>{
    
    it('POM Demo 1',()=>{
        
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.buttonClick()
        cy.get('.oxd-userdropdown-name').click()
    })
    
    it('POM Demo 2',()=>{
            
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.buttonClick()
        cy.get('.oxd-userdropdown-name').click()
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        //cy.wait(4000)
        cy.get('.oxd-dialog-close-button').click()
    })
})

