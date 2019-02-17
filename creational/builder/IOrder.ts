import IContactInfo from './IContactInfo';

interface IOrder {
    customer: IContactInfo;
    items: string[];
    imageUrl: string;
}

export default IOrder;