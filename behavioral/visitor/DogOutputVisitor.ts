import DogElementVisitor from './DogElementVisitor';
import Body from './Body';
import Dog from './Dog';
import Head from './Head';
import Leg from './Leg';
import Tail from './Tail';

class DogOutputVisitor extends DogElementVisitor {
    visitBody(body: Body) {
        console.log('Visiting body.');
    }

    visitHead(head: Head) {
        console.log('visiting head.');
    }

    visitLeg(leg: Leg) {
        console.log(`visiting ${leg.getName()} leg.`);
    }

    visitTail(tail: Tail) {
        console.log('visiting tail.');
    }

    visitDog(dog: Dog) {
        console.log('visiting dog.');
    }
}

export default DogOutputVisitor;