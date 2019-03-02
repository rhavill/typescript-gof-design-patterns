abstract class Component {

    abstract doSomething();

    add(component: Component) {
        throw new Error('Unable to add component.');
    }

    remove(index: number) {
        throw new Error('Unable to remove component.');
    }

    getChild(index: number) {
        throw new Error('Unable to get child.');
    }
}

export default Component;
