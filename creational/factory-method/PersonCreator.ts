import Person from './Person';
import Employee from './Employee';
import Customer from './Customer';

abstract class PersonCreator {
    abstract createPerson(): Employee | Customer;

    doSomething() {
        const person = this.createPerson();
        person.doPersonThing();
    }
}

export default PersonCreator;