import EmailBuilder from './EmailBuilder';
import HtmlEmail from './HtmlEmail';
import IContactInfo from './IContactInfo';

class HtmlEmailBuilder extends EmailBuilder {

    private email;

    constructor() {
        super();
        this.email = new HtmlEmail;
    }

    addContactInfo(contactInfo: IContactInfo) {
        this.email.setHeaders(`To: ${contactInfo.email}`);
    }

    addItems(items: string[]) {
        let text: string = '';
        items.forEach(item => {
            text = text + this.email.formatText(item, 'p');
        });
        this.email.setText(text);
    }

    addImage(url: string) {
        const text = this.email.getText() + `<img src="${url}"/>`;
        this.email.setText(text);
    }

    getResult() {
        return this.email;
    }
}

export default HtmlEmailBuilder;