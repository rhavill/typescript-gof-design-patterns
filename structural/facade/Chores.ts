import Clothes from './Clothes';
import Dog from './Dog';
import Plant from './Plant';


class Chores {
    private clothes;
    private dog;
    private plant;

    constructor() {
        this.clothes = new Clothes();
        this.dog = new Dog();
        this.plant = new Plant();
    }

    doChores() {
        this.clothes.wash();
        this.dog.feed();
        this.plant.water();
    }
}

export default Chores;