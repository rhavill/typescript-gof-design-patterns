import Broadcaster from './Broadcaster';

abstract class Participant {
    protected broadcaster: Broadcaster;
    
    constructor(broadcaster: Broadcaster) {
        this.broadcaster = broadcaster;
    }

    sendMessage(message: string) {
        this.broadcaster.sendMessage(this, message);
    }

    abstract receiveMessage(message: string);
}

export default Participant;