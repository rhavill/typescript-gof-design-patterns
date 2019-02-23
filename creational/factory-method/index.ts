import EmployeeCreator from './EmployeeCreator';
import CustomerCreator from './CustomerCreator';
import Employee from './Employee';
import Customer from './Customer';

const employeeCreator = new EmployeeCreator();
const customerCreator = new CustomerCreator();

const employee = employeeCreator.createPerson();
employee.doPersonThing();

const customer = customerCreator.createPerson();
customer.doPersonThing();