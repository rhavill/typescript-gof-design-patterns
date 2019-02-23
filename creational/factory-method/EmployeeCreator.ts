import PersonCreator from './PersonCreator';
import Person from './Person';
import Employee from './Employee';

class EmployeeCreator extends PersonCreator {
    createPerson(): Employee {
        const employee = new Employee();
        return employee;
    }

}

export default EmployeeCreator;