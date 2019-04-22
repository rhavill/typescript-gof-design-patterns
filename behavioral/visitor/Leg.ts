import DogElement from './DogElement';
import DogElementVisitor from './DogElementVisitor';

class Leg extends DogElement {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    accept(visitor: DogElementVisitor) {
        visitor.visitLeg(this);
    }

}

export default Leg;