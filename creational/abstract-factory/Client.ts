import ComponentFactory from './ComponentFactory';
import Button from './Button';
import Form from './Form';

class Client {
    private readonly factory: ComponentFactory;

    constructor(factory: ComponentFactory) {
        this.factory = factory;
    }

    run(): void {
        const button: Button = this.factory.createButton();
        button.click();

        const form: Form = this.factory.createForm();
        form.submit();
    }
}

export default Client;