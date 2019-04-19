import Person from './Person';
import Broadcaster from './Broadcaster';

const mediator: Broadcaster = new Broadcaster();
const bill = mediator.createPerson('Bill');
const ted = mediator.createPerson('Ted');
const rufus = mediator.createPerson('Rufus');

bill.sendMessage('Bill says, "Bogus!"');
ted.sendMessage('Ted says, "Excellent!"');
rufus.sendMessage('Hello from Rufus.');