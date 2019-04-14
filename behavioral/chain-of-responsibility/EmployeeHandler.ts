import IRequest from './IRequest';
import RequestHandler from './RequestHandler';

class EmployeeHandler extends RequestHandler {
    
    handleRequest(request: IRequest) {
        if (request.path === 'employee') {
            console.log(`EmployeeHandler handling request for path ${request.path} and action ${request.action}`);
        }
        else {
            this.deferRequest(request);
        }
    }

}

export default EmployeeHandler;