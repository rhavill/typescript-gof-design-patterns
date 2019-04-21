import Observer from './Observer';

class Subject {
    private observers: Observer[] = [];

    attach(observer: Observer) {
        this.observers.push(observer);
    }

    detach(observer: Observer) {
        this.observers = this.observers.filter(
            attachedObserver => attachedObserver !== observer
        );
    }

    notify() {
        this.observers.forEach(observer => observer.update());
    }
}

export default Subject;