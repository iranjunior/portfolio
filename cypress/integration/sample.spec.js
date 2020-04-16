describe('Primeiro teste', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });

    it('Deve chegar a Habilidades com sucesso', () => {
      cy.contains('Habilidades').click();
      cy.url().should('includes', '/skills');
    });
    it('Deve escrever uma messagem', () => {
      cy.contains('Contato').click();
      cy.url().should('includes', '/contact');
      cy.get('#name').type('Fulano do Teste');
      cy.get('#email').type('teste@gmail.com');
      cy.get('#message').type('Tempor deserunt irure elit amet aliqua dolor cillum Lorem Lorem id consectetur dolor commodo. Non aliquip proident sit eiusmod duis pariatur cillum ad voluptate id. Duis non ex exercitation quis pariatur in velit minim quis eu aute proident. Aliquip in ullamco irure do culpa duis proident adipisicing occaecat dolore dolore consectetur occaecat nisi. Minim cupidatat consequat ipsum qui in laboris et tempor reprehenderit nostrud. Dolor in laboris aliquip exercitation consequat tempor Lorem est ullamco non.');
    });
  });
});
