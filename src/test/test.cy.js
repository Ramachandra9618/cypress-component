import ParentComponent from "../components/ParentComponent";

describe('ParentComponent and ChildComponent Interaction', () => {
    it('should update message in ChildComponent when button is clicked', () => {
 
        cy.mount(<ParentComponent/>)
      // Check initial message in ChildComponent
      cy.contains('Hello').should('be.visible');
  
    //   // Click the button to change the message
      cy.get('button').contains('Change Message').click();
  
    //   // Check updated message in ChildComponent
      cy.contains('Hello, World!').should('be.visible');
    });
  });
  