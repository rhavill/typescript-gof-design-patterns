import Iterator from './Iterator'

abstract class List<T> {
    protected list;
    abstract createIterator(): Iterator<T>;
    abstract count(): number;
    abstract append(item: T);
    abstract remove(item: T);
    abstract get(index: number);

}

export default List;