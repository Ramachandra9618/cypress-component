import Js from "../components/JsAlert"
describe('alert handle', () => {

    it('alerting ', () => {
        cy.mount(<Js />)


        cy.on('window:alert', (text) => {
            expect(text).to.contains('This is a simple alert!');
        });

        cy.get('button').contains('Show Alert').click();
        cy.get('button').last().focus().blur()
    })

    it('should handle prompt dialogs correctly', () => {
        cy.mount(<Js />)
        cy.window().then((text) => {
            cy.stub(text, 'prompt').returns('rama');
        });

        cy.get('button').contains('Show Prompt').click();

        cy.get('p').should('contain', 'Hello, rama!');
    });


    it('should handle prompt dialogs cancel', () => {
        cy.mount(<Js />)
        cy.window().then((text) => {
            cy.stub(text, 'prompt').returns(false);
        });

        cy.get('button').contains('Show Prompt').click();

    });


    it("checking", () => {
        it('should handle prompt dialogs correctly', () => {
            // Mount the component
            cy.mount(<Js />);
            const myName = "nottyo"
            const winPromptStub = () => {
                return myName
            }

            // Stub the `prompt` method and verify its call
            cy.window().then((win) => {
                
                cy.spy(win, 'prompt', winPromptStub).as('prompt');
               
            });
            cy.get('button').contains('Show Prompt').click();
            cy.get('@winPromptStubReturnNonNull')
            .should('have.been.calledOnce')
            .should('have.been.called.with', '');
            cy.get('p').should('contain', ' ');
        });
    })

})