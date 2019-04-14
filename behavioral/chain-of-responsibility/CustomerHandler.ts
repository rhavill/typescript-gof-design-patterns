import IRequest from './IRequest';
import RequestHandler from './RequestHandler';

class CustomerHandler extends RequestHandler {
    
    handleRequest(request: IRequest) {
        if (request.path === 'customer') {
            console.log(`CustomerHandler handling request for path ${request.path} and action ${request.action}`);
        }
        else {
            this.deferRequest(request);
        }
    }

}

export default CustomerHandler;