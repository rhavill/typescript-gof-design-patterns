import BurritoDecorator from './BurritoDecorator';

class BeefAndBeanBurritoWithExtraHotSauce extends BurritoDecorator {
    wrap() {
        super.wrap();
        console.log('Wrapping beef and bean burrito with extra hot sauce.');
    }
}

export default BeefAndBeanBurritoWithExtraHotSauce;
