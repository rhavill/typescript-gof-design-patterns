import Emloyees from './Employees';
import IEmployee from './IEmployee';

class OriginalEmployees extends Emloyees {
    private employees: IEmployee[];

    constructor() {
        super();
        console.log('OriginalEmployees is making slow network request to get employees.');
        this.employees = [
            {name: 'Bob', salary: 20},
            {name: 'Shirley', salary: 30},
            {name: 'Pedro', salary: 27},
            {name: 'Li', salary: 30}
        ];
    }

    getEmployees() {
        return this.employees;
    }
}

export default OriginalEmployees;