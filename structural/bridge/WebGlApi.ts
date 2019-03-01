import GraphicsApi from './GraphicsApi';

class WebGlApi extends GraphicsApi {
    drawRectangle() {
        console.log('WebGL API is drawing a rectangle.');
    }
}

export default WebGlApi;