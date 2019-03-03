import Burrito from './Burrito';

abstract class BurritoDecorator extends Burrito {
    constructor(private burrito: Burrito) {
        super();
    }
    
    wrap() {
        this.burrito.wrap();
    }
}

export default BurritoDecorator;