import List from './List';

abstract class Iterator<T> {
    protected list;

    constructor(list: List<T>) {
        this.list = list;
    }

    abstract first();
    abstract next();
    abstract isDone(): boolean;
    abstract currentItem();

}

export default Iterator;