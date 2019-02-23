import Person from './Person';

class Employee extends Person {
    doPersonThing() {
        console.log('Employee doPersonThing method called.');
    }
}

export default Employee;