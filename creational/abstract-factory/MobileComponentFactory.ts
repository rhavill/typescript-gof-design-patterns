import ComponentFactory from './ComponentFactory';
import MobileButton from './MobileButton';
import MobileForm from './MobileForm';

class MobileComponentFactory extends ComponentFactory {
    createButton(): MobileButton {
        return new MobileButton();
    }

    createForm(): MobileForm {
        return new MobileForm();
    }
}

export default MobileComponentFactory;
