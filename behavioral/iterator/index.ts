import ArrayList from './ArrayList';
import ArrayIterator from './ArrayIterator';

const list: ArrayList<string> = new ArrayList<string>(['one', 'two', 'three', 'four', 'five']);

list.append('six');
list.remove('two');
console.log('Count', list.count());

const iterator: ArrayIterator<string> = list.createIterator();
for (iterator.first(); !iterator.isDone(); iterator.next()) {
    console.log(iterator.currentItem());
}