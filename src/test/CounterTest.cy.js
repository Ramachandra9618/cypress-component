
import Counter  from "../components/Counter";

describe("counter", ()=>{
    it("count", ()=>{
         cy.mount(<Counter/>)

         cy.get('button[aria-label="decrement"]')
         .should('have.css', 'color', 'rgb(0, 0, 0)')
         cy.get('span').should('have.text', 0)
         cy.get('button[aria-label="increment"]').click();
         cy.get('span').should('have.text', 1)
       

    })
})