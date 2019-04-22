import DogElement from './DogElement';
import DogElementVisitor from './DogElementVisitor';

class Tail extends DogElement {

    accept(visitor: DogElementVisitor) {
        visitor.visitTail(this);
    }

}

export default Tail;