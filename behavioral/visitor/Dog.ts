import DogElement from './DogElement';
import DogElementVisitor from './DogElementVisitor';
import Body from './Body';
import Head from './Head';
import Leg from './Leg';
import Tail from './Tail';


class Dog extends DogElement {

    private elements: DogElement[] = [];

    constructor() {
        super();
        this.elements.push(new Body);
        this.elements.push(new Head);
        this.elements.push(new Tail);
        this.elements.push(new Leg('front left'));
        this.elements.push(new Leg('front right'));
        this.elements.push(new Leg('rear left'));
        this.elements.push(new Leg('rear right'));
    }

    accept(visitor: DogElementVisitor) {
        this.elements.forEach(element => element.accept(visitor));
        visitor.visitDog(this);
    }

}

export default Dog;