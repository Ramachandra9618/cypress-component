import InputField from "../components/InputField"

it("input the field", ()=>{
    cy.mount(<InputField label={'Enter ur name'} type={'text'} placeholder={'name '}/>)
})