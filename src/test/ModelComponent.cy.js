import Modal from '../components/ModelComponent';

describe('Modal Component', () => {
  it('should open the modal when the "Open Modal" button is clicked', () => {
    cy.mount(<Modal title="Test Modal">This is a modal content.</Modal>);

    cy.contains('This is a modal content.').should('not.exist');
    
    cy.get('button').contains('Open Modal').click();
    
    cy.contains('This is a modal content.').should('exist');
    cy.contains('Test Modal').should('not.exist');
  });

  it('should close the modal when the "Close" button is clicked', () => {
    cy.mount(<Modal title="Test Modal">This is a modal content.</Modal>);

    cy.get('button').contains('Open Modal').click();
    
    cy.contains('This is a modal content.').should('exist');
    
    cy.get('button').contains('Close').click();
    
    cy.contains('This is a modal content.').should('not.exist');
  });
});
