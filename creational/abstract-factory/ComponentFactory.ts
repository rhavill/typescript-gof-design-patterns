import DesktopButton from './DesktopButton';
import DesktopForm from './DesktopForm';

abstract class ComponentFactory {
    abstract createForm(): DesktopForm;
    abstract createButton(): DesktopButton;
}

export default ComponentFactory;