import Person from './Person';

abstract class Prototype {
    abstract clone(): Person;
}

export default Prototype;