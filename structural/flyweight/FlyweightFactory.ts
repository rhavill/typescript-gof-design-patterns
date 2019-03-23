import Flyweight from './Flyweight';
import FlyweightKey from './FlyweightKey';
import FlyweightType from './FlyweightType';
import Number from './Number';
import Digit from './Digit';

class FlyweightFactory {
    private flyweights = {};

    public getFlyweight(key: FlyweightKey): Flyweight {
        if (key.type === FlyweightType.Number) {
            return new Number();
        }
        if (!this.flyweights[key.value]) {
            this.flyweights[key.value] =  new Digit(key.value);   
        }
        return this.flyweights[key.value];
    }

}

export default FlyweightFactory;