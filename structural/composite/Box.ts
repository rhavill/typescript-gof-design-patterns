import Component from './Component';

class Box extends Component {

    private children: Component[];

    constructor() {
        super();
        this.children = [];
    }

    doSomething() {
        console.log('Box is doing something.');
    }

    add(component: Component) {
        this.children.push(component);
    }

    remove(index: number) {
        this.children.splice(index, 1);
    }

    getChild(index: number) {
        return this.children[index];
    }
}

export default Box;
