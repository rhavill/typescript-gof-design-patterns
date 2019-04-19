import Iterator from './Iterator';

class ArrayIterator<T> extends Iterator<T> {
    private currentIndex;

    first() {
        this.currentIndex = 0;
    }

    next() {
        if (this.currentIndex < this.list.count()) {
            this.currentIndex++;
        }
    }

    isDone(): boolean {
        return this.currentIndex >= this.list.count();
    }

    currentItem() {
        return this.list.get(this.currentIndex);
    }

}

export default ArrayIterator;