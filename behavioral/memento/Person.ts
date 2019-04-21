import IPerson from './IPerson';
import Memento from './Memento';

class Person {
    private person: IPerson;
    
    constructor(person: IPerson) {
        this.person = person;
    }

    getPerson() {
        return this.person;
    }

    setPerson(person: IPerson) {
        this.person = person;
    }

    createMemento(): Memento {
        return new Memento(this.person);
    }

    setMemento(memento: Memento) {
        this.person = memento.getPerson();    
    }
    
}

export default Person;
