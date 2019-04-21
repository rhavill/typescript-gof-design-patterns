import State from './State';

class PowerButton {

    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    press() {
        this.state = this.state.handle();
    }
}

export default PowerButton;