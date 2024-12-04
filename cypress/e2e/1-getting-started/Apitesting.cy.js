context('API testing', () => {

    it('GET - list user', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data[0].first_name).to.equal('Michael')
        })
    })

    it('POST - Create user', () => {
        var user = {
            "name": "Soundarya",
            "job": "QA"
        };

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    })

    it('PUT - Update user', () => {
        var user1 = {
            "name": "Aishwarya",
            "job": "Coordinator"
        };

        cy.request('PUT', 'https://reqres.in/api/users/2', user1).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal(user1.name)
            expect(response.body.job).to.equal(user1.job)
        })
    })

    it('DELETE - user', () => {
        

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.equal(204);
            
        })
    })
})
