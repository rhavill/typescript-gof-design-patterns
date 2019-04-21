import IPerson from './IPerson';

class Memento {
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

    
}

export default Memento;