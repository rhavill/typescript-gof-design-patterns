import Participant from './Participant';
import Broadcaster from './Broadcaster';

class Person extends Participant{

    private name: string;

    constructor(broadcaster: Broadcaster, name: string) {
        super(broadcaster);
        this.name = name;
    }

    receiveMessage(message: string) {
        console.log(`${this.name} received message: ${message}`);
    }
}

export default Person;