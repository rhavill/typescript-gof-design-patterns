import PowerButton from './PowerButton';
import OffState from './OffState';

const button = new PowerButton(new OffState);
button.press();
button.press();
button.press();