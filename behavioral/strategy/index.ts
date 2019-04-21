import Context from './Context';
import Lower from './Lower';
import Upper from './Upper';

const lowercase =  new Context(new Lower);
const uppercase = new Context(new Upper);
const text = 'Hello Universe.';

console.log(lowercase.formatText(text));
console.log(uppercase.formatText(text));