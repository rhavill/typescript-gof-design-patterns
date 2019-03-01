import Shape from './Shape';

class Rectangle extends Shape {
    draw() {
        this.graphicsApi.drawRectangle();
    }
}

export default Rectangle;