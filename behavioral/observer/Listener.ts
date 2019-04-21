import Observer from './Observer';
import Speaker from './Speaker';

class Listener extends Observer {
    private name: string;
    private speaker: Speaker;
    private messages: string[] = [];

    constructor(name: string, speaker: Speaker) {
        super();
        this.name = name;
        this.speaker = speaker;
    }

    update() {
        const message = this.speaker.getMessage();
        console.log(`${this.name} got message, "${message}"`);
        this.messages.push(message);
    }
}

export default Listener;