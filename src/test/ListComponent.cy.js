import ListComponent from "../components/ListComponent"
let arr = ["ravi", "kumar", "prasad", "reddy"]

describe("listcomponent ", () => { 
  beforeEach("s", ()=>{
    cy.mount(<ListComponent items={arr}/>)
  })

    it("should create", () => {
     cy.get("li").should("have.length", 4);
    })

     it("validate  ul", () => {
       cy.get("ul")
       .should('have.css', 'fontSize', '16px')
     })

     arr.forEach(element => {
     it('check the list items', () => {
        cy.contains(element).should('exist');
      });
    
  });

  it('should render a list of items', () => {

  cy.get('li').each((li) => {
    cy.wrap(li).should('have.css', 'padding', '10px');
    cy.wrap(li).should('have.css', 'background', 'rgb(249, 249, 249) none repeat scroll 0% 0% / auto padding-box border-box');
    cy.wrap(li).should('have.css', 'border-bottom', '1px solid rgb(221, 221, 221)');
    cy.wrap(li).should('have.css', 'font-size', '16px');
  });
})
  

})