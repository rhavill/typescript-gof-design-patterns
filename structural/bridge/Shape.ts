import GraphicsApi from './GraphicsApi';

abstract class Shape {
    constructor(protected graphicsApi: GraphicsApi) {
    }

    abstract draw();
}

export default Shape;