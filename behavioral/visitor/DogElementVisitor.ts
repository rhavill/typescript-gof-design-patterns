import Body from './Body';
import Dog from './Dog';
import Head from './Head';
import Leg from './Leg';
import Tail from './Tail';

abstract class DogElementVisitor {
    abstract visitBody(body: Body);
    abstract visitDog(dog: Dog);
    abstract visitHead(head: Head);
    abstract visitLeg(leg: Leg);
    abstract visitTail(tail: Tail);
}

export default DogElementVisitor;