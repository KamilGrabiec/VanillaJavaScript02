const { isMainThread } = require('worker_threads');

describe('Siepomaga', () => {
  it('adds donation to cart', () => {
    cy.visit('https://siepomaga.pl');
  });
});
