import PersonCreator from './PersonCreator';
import Person from './Person';
import Customer from './Customer';

class CustomerCreator extends PersonCreator {
    createPerson(): Customer {
        const customer = new Customer();
        return customer;
    }

}

export default CustomerCreator;