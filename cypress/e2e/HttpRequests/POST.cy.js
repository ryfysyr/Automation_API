describe('POST', () => {

  it("Create", ()=> {

    cy.request('POST', 'https://reqres.in/api/user',{
      name: "morpheus",
      job: "leader"
    })

    .its('status').should('equal',201)

      })
  
  it("Register - Sucessful",()=> {

    cy.request('POST', 'https://reqres.in/api/register',{
      email: "eve.holt@reqres.in",
      password: "pistol"
    })
    

    .its('status').should('equal',200)

      })

  
  it("Login - Sucessful",()=> {

    cy.request('POST', 'https://reqres.in/api/login',{
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    })

    .its('status').should('equal',200)
    
  })

})