import Participant from './Participant';
import Person from './Person';

class Broadcaster {
    private people: Participant[];

    constructor(people: Participant[] = []) {
        this.people = people;
    }

    sendMessage(sender: Participant, message: string) {
        this.people.forEach(participant => {
            if (participant !== sender) {
                participant.receiveMessage(message);
            }
        });
    }

    createPerson(name: string): Person {
        const person = new Person(this, name);
        this.people.push(person);
        return person;
    }
}

export default Broadcaster;