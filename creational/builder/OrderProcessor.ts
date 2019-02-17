import EmailBuilder from './EmailBuilder';
import IOrder from './IOrder';

class OrderProcessor {
    private emailBuilder: EmailBuilder;
    private order: IOrder;

    constructor(builder: EmailBuilder, order: IOrder) {
        this.emailBuilder = builder;
        this.order = order;
    }

    process() {
        this.emailBuilder.addContactInfo(this.order.customer);
        this.emailBuilder.addItems(this.order.items);
        this.emailBuilder.addImage(this.order.imageUrl);
    }
}

export default OrderProcessor;