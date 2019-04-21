import State from './State';
import OffState from './OffState';

class OnState extends State {
    handle() {
        console.log('State changing from ON to OFF.');
        return new OffState();
    }
}

export default OnState;