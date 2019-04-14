import IRequest from './IRequest';
import RequestHandler from './RequestHandler';

class OrderHandler extends RequestHandler {
    
    handleRequest(request: IRequest) {
        if (request.path === 'order') {
            console.log(`OrderHandler handling request for path ${request.path} and action ${request.action}`);
        }
        else {
            this.deferRequest(request);
        }
    }

}

export default OrderHandler;