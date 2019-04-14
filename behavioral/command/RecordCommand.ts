import Command from './Command';
import Recorder from './Recorder';

class RecordCommand extends Command {
    private recorder: Recorder;

    constructor() {
        super();
        this.recorder = new Recorder;
    }

    execute() {
        this.recorder.record();
    }
}

export default RecordCommand;