import Person from './Person';

class Customer extends Person {
    doPersonThing() {
        console.log('Customer doPersonThing method called.');
    }
}

export default Customer;