import OrderProcessor from './OrderProcessor';
import HtmlEmailBuilder from './HtmlEmailBuilder';
import PlainTextEmailBuilder from './PlainTextEmailBuilder';
import IOrder from './IOrder';

class Client {

    run(): void {
        const order: IOrder = {
            customer: {
                name: 'Janice Jacoby',
                email: 'janice@someplace134.org'
            },
            items: ['1 pair shoes', '2 pair jeans'],
            imageUrl: 'http://somedomain443.com/2454.jpg'

        }

        let builder = new HtmlEmailBuilder;
        let processor = new OrderProcessor(builder, order);
        processor.process();
        console.log(builder.getResult());

        let plainBuilder = new PlainTextEmailBuilder();
        processor = new OrderProcessor(plainBuilder, order);
        processor.process();
        console.log(plainBuilder.getResult());
    }
}

export default Client;