import Person from './Person';

const person: Person = new Person({
    firstName: 'Maude',
    lastName: 'Flanders'
});
console.log(person.getPerson());

const backup = person.createMemento();
person.setPerson({
    firstName: 'Marge',
    lastName: 'Simpson'
});
console.log(person.getPerson());

person.setMemento(backup);
console.log(person.getPerson());