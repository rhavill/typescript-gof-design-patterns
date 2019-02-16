import ComponentFactory from './ComponentFactory';
import DesktopButton from './DesktopButton';
import DesktopForm from './DesktopForm';

class DesktopComponentFactory extends ComponentFactory {
    createButton(): DesktopButton {
        return new DesktopButton();
    }

    createForm(): DesktopForm {
        return new DesktopForm();
    }
}

export default DesktopComponentFactory;
