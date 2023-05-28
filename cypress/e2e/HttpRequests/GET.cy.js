  describe('GET', () => {

  it("Sucess GET Call List User", ()=> {
    cy.request('GET','https://reqres.in/api/users?page=2')
    .its('status').should('equal',200);
  })

  it("Sucess GET Call Single User",()=> {
    cy.request('GET','https://reqres.in/api/users2')
    .its('status').should('equal',200)
  })


  it("Sucess GET Call List Resource",()=> {
    cy.request({
        method:  'GET',
        url: 'https://reqres.in/api/unknown' ,
        qs: { page: 1 }
    })

    .then ( (Response) =>{
      expect(Response.status).to.eq(200);
      expect(Response.status).equal(200);
    })

  })

  it("Sucess GET Call Single Resource",()=> {
    cy.request({
        method:  'GET',
        url: 'https://reqres.in/api/unknown/2' ,
        qs: { page: 1 }
    })

    .then ( (Response) =>{
      expect(Response.status).to.eq(200);
      expect(Response.status).equal(200);
    })
  })
})
