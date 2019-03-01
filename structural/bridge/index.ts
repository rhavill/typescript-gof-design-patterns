import CanvasApi from './CanvasApi';
import WebGlApi from './WebGlApi';
import Rectangle from './Rectangle';

const canvas = new CanvasApi();
const webGl = new WebGlApi();
let rectangle = new Rectangle(canvas);
rectangle.draw()
rectangle = new Rectangle(webGl);
rectangle.draw();