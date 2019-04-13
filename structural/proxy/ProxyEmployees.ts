import Emloyees from './Employees';
import IEmployee from './IEmployee';
import OriginalEmployees from './OriginalEmployees';
import IUser from './IUser';

class ProxyEmployees extends Emloyees {
    
    private employees: IEmployee[] = [];
    private user: IUser;

    constructor(user: IUser) {
        super();
        this.user = user;
    }

    getEmployees() {
        if (!this.employees.length) {
            const originalEmployees = new OriginalEmployees();
            this.employees = originalEmployees.getEmployees();
            if (!this.user.isAdmin) {
                this.employees = this.employees.map(employee => ({name: employee.name}));
            }
    

        }
        return this.employees;
    }
}

export default ProxyEmployees;