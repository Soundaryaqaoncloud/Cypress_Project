describe('API Tests with JSONPlaceholder', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('Get a resource', () => {
      cy.request(`${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('List all resources', () => {
      cy.request(`${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('Create a resource', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/posts`,
        body: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', 'foo');
        expect(response.body).to.have.property('body', 'bar');
        expect(response.body).to.have.property('userId', 1);
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('Update a resource', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/posts/1`,
        body: {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'foo');
        expect(response.body).to.have.property('body', 'bar');
        expect(response.body).to.have.property('userId', 1);
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('Patch a resource', () => {
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/posts/1`,
        body: {
          title: 'foo',
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'foo');
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('Delete a resource', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/posts/1`,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Filter resources', () => {
      cy.request(`${baseUrl}/posts?userId=1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        response.body.forEach((item) => {
          expect(item.userId).to.eq(1);
        });
        cy.log(JSON.stringify(response.body));
      });
    });
  
    it('List nested resources', () => {
      cy.request(`${baseUrl}/posts/1/comments`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        response.body.forEach((comment) => {
          expect(comment.postId).to.eq(1);
        });
        cy.log(JSON.stringify(response.body));
      });
    });
  });