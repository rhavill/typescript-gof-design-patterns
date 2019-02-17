import IContactInfo from './IContactInfo';
import Email from './Email';

abstract class EmailBuilder {
    abstract addContactInfo(contactInfo: IContactInfo);
    abstract addItems(items: string[]);
    addImage(url: string) {}
}

export default EmailBuilder;