import Flyweight from './Flyweight';
import Point from './Point';
import Digit from './Digit';

class Number extends Flyweight {

    private digits: Flyweight[];

    constructor() {
        super();
        this.digits = [];
    }

    draw(coordinates: Point) {
        console.log(`Drawing number at ${coordinates.x}, ${coordinates.y}.`);
        this.digits.forEach((digit, index) => {
            digit.draw({
                x: coordinates.x + index, y: coordinates.y
            });
        });
    }

    add(Flyweight: Flyweight) {
        this.digits.push(Flyweight);
    }

    remove(index: number) {
        this.digits.splice(index, 1);
    }

    getDigit(index: number) {
        return this.digits[index];
    }
}

export default Number;
