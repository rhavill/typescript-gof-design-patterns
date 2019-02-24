import Person from './Person';

const bob = new Person('Bob', 'Kravinski');
let sarah = bob.clone();
sarah.setFirstName('Sarah');
sarah.setLastName('Wu');
console.log(sarah.getFullName());
console.log(bob.getFullName());