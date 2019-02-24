import Prototype from './Prototype';

class Person extends Prototype {

    constructor(private firstName: string, private lastName: string) {
        super();
    }

    getFirstName = (): string => this.firstName;

    setFirstName = (name: string) => this.firstName = name;

    getLastName = (): string => this.lastName;

    setLastName = (name: string) => this.lastName = name;

    getFullName = (): string => this.firstName + ' ' + this.lastName;

    clone = (): Person => new Person(this.firstName, this.lastName);

}

export default Person;