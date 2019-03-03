import BeefAndBeanBurritoWithHotSauce from './BeefAndBeanBurritoWithHotSauce';
import BeefAndBeanBurritoWithExtraHotSauce from './BeefAndBeanBurritoWithExtraHotSauce';
import BeefAndBeanBurrito from './BeefAndBeanBurrito';

const burrito = new BeefAndBeanBurrito();
const hot = new BeefAndBeanBurritoWithHotSauce(burrito);
hot.wrap();
const extraHot = new BeefAndBeanBurritoWithExtraHotSauce(burrito);
extraHot.wrap();
