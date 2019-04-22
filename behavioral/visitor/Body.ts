import DogElement from './DogElement';
import DogElementVisitor from './DogElementVisitor';

class Body extends DogElement {

    accept(visitor: DogElementVisitor) {
        visitor.visitBody(this);
    }

}

export default Body;