import Speaker from './Speaker';
import Listener from './Listener';

const tweeter = new Speaker();
const follower1 = new Listener('Sasha Yolanov', tweeter);
const follower2 = new Listener('Yang Li', tweeter);

tweeter.attach(follower1);
tweeter.attach(follower2);
tweeter.setMessage('Listen to my first message.');
tweeter.notify();

tweeter.detach(follower1);
tweeter.setMessage('I have a second message.');
tweeter.notify();


