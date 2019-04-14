import IRequest from './IRequest';
import EmployeeHandler from './EmployeeHandler';
import CustomerHandler from './CustomerHandler';
import OrderHandler from './OrderHandler';

const orderHandler = new OrderHandler();
const customerHandler = new CustomerHandler(orderHandler);
const employeeHandler = new EmployeeHandler(customerHandler);

let request: IRequest = {path: 'order', action: 'create'};
employeeHandler.handleRequest(request);

request = {path: 'employee', action: 'update'};
employeeHandler.handleRequest(request);