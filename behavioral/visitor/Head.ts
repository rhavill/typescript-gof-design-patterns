import DogElement from './DogElement';
import DogElementVisitor from './DogElementVisitor';

class Head extends DogElement {

    accept(visitor: DogElementVisitor) {
        visitor.visitHead(this);
    }

}

export default Head;