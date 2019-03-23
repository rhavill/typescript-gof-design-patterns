import Point from './Point';

abstract class Flyweight {

    abstract draw(coordinates: Point);

    add(Flyweight: Flyweight) {
        throw new Error('Unable to add Flyweight.');
    }

    remove(index: number) {
        throw new Error('Unable to remove Flyweight.');
    }

    getDigit(index: number) {
        throw new Error('Unable to get digit.');
    }
}

export default Flyweight;
