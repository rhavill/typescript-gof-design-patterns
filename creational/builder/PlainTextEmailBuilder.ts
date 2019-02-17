import EmailBuilder from './EmailBuilder';
import PlainTextEmail from './PlainTextEmail';
import IContactInfo from './IContactInfo';

class PlainTextEmailBuilder extends EmailBuilder {

    private email;

    constructor() {
        super();
        this.email = new PlainTextEmail;
    }

    addContactInfo(contactInfo: IContactInfo) {
        this.email.setHeaders(`To: ${contactInfo.email}`);
    }

    addItems(items: string[]) {
        let text: string = '';
        items.forEach(item => {
            text = text + item + "\n";
        });
        this.email.setText(text);
    }

    getResult() {
        return this.email;
    }
}

export default PlainTextEmailBuilder;