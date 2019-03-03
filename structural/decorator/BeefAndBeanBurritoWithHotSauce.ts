import BurritoDecorator from './BurritoDecorator';

class BeefAndBeanBurritoWithHotSauce extends BurritoDecorator {
    wrap() {
        super.wrap();
        console.log('Wrapping beef and bean burrito with hot sauce.');
    }
}

export default BeefAndBeanBurritoWithHotSauce;
