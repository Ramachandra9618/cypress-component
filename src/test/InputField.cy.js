import InputField from "../components/InputField"


describe("input field", ()=>{
   
    beforeEach("s", ()=>{
        cy.viewport('ipad-2')
        cy.mount(<InputField label={'Enter ur name'} type={'text'} placeholder={'name'}/>)

    })

    it("validate Label", ()=>{
         cy.get('label').should('have.css', 'fontWeight', '700' )
    })

    it("validate p tag", ()=>{
        cy.get('p').should('have.text', 'Current value: ')
    })

        it("input the field", ()=>{
             cy.get('input').should('have.attr', 'placeholder', 'name')
             cy.get('input').type("Hari")
             cy.get('input').should('have.value', 'Hari')
        })

        
})
