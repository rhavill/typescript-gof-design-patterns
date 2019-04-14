import IRequest from './IRequest';

abstract class RequestHandler {
    protected succesor: RequestHandler | null;

    constructor(successor: RequestHandler = null) {
        this.succesor = successor;
    }

    handleRequest(request: IRequest) {
        this.deferRequest(request);
    }

    protected deferRequest(request: IRequest) {
        if (this.succesor) {
            this.succesor.handleRequest(request);
        }
    }

}

export default RequestHandler;