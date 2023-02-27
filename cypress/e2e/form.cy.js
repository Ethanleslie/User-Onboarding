describe("Forms app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    
    const textInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email")
    const submitBtn = () => cy.get(`input[id="Friend"]`)
    const passwordInput = () => cy.get('input[name=password]')

  it("proper elements are showing", () => {
    textInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitBtn().should("exist");

   
  })

  describe("Filling out inputs", () => {
    it("can type in inputs", () => {
        textInput()
            .should("have.value", "")
            .type("gerald")
            .should("have.value", "gerald");

        emailInput()
            .should("have.value","")
            .type("grenadine@gmail.com")
            .should("have.value", "grenadine@gmail.com");

        passwordInput()
            .should("have.value" , "")
            .type("1234")
            .should("have.value", "1234")
    })
})

describe("clicking TOS button",() => {
    it("can click TOS", () => {
        
    })
})

describe("Adding a new user", () => {
   it("can submit a new user", () => {
    textInput().type("gerald");
    emailInput().type("grenadine@gmail.com")
    submitBtn().click();

   
    })
 })
 
 describe("confirm submit" , () => {
    it("confirms friend submit to server", () => {
        textInput()
        .should("have.value", "")
        .type("doug")
        .should("have.value", "doug");

    emailInput()
        .should("have.value","")
        .type("happy@gmail.com")
        .should("have.value", "happy@gmail.com");

    passwordInput()
        .should("have.value" , "")
        .type("1234")
        .should("have.value", "1234")

    submitBtn().click()
    cy.contains("happy@gmail.com").should("exist")

    


    })
 })




})