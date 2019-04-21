import State from './State';
import OnState from './OnState';

class OffState extends State {
    handle() {
        console.log('State changing from OFF to ON.');
        return new OnState();
    }
}

export default OffState;