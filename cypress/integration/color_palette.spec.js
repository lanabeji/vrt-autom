context('Color Palette', () => {
  beforeEach(() => {
    cy.visit('https://lanabeji.github.io/vrt-miso/');
    cy.wait(1000);
  })

  it('T1 - Clean palette, then new palette', () => {
    cy.screenshot('t1/1');

    cy.get('#generate').click();
    cy.screenshot('t1/2');
  })

  it('T2 - New palette, then new palette', () => {
    cy.get('#generate').click();
    cy.screenshot('t2/1');

    cy.get('#generate').click();
    cy.screenshot('t2/2');
  })

  it('T3 - New palette, then clean palette', () => {
    cy.get('#generate').click();
    cy.screenshot('t3/1');

    cy.get('#clean').click();
    cy.screenshot('t3/2');
  })
})