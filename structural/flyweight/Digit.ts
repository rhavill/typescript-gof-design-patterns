import Flyweight from './Flyweight';
import Point from './Point';

class Digit extends Flyweight {

    private readonly digit;

    constructor(digit: number) {
        super();
        this.digit = digit;
    }

    draw(coordinates: Point) {
        console.log(`Drawing digit ${this.digit} at ${coordinates.x}, ${coordinates.y}.`);
    }
}

export default Digit;