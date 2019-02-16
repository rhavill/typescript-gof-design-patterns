import ComponentFactory from './ComponentFactory';
import DesktopComponentFactory from './DesktopComponentFactory';
import MobileComponentFactory from './MobileComponentFactory';
import Client from './Client';

const config = {
    // environment: 'desktop'
    environment: 'mobile'
};
let factory: ComponentFactory;

if (config.environment === 'desktop') {
    factory = new DesktopComponentFactory(); 
}
else if (config.environment === 'mobile') {
    factory = new MobileComponentFactory(); 
}
else {
    throw new Error('Invalid value in environment configuration.');
}

const client = new Client(factory);
client.run();