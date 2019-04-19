import List from './List';
import ArrayIterator from './ArrayIterator';

class ArrayList<T> extends List<T> {
    constructor(list: T[] = []) {
        super();
        this.list = list;
    }

    createIterator() {
        return new ArrayIterator(this);
    }

    count() {
        return this.list.length;
    }

    append(item: T) {
        this.list.push(item);
    }

    remove(item: T) {
        this.list = this.list.filter(
            function(listItem) {
                return item !== listItem;
            }
        );
    }

    get(index: number) {
        return this.list[index];
    }

}

export default ArrayList;