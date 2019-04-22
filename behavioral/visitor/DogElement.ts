import DogElementVisitor from './DogElementVisitor';

abstract class DogElement {
    abstract accept(visitor: DogElementVisitor);
}

export default DogElement;