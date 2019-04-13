import IUser from './IUser';
import ProxyEmployees from './ProxyEmployees';

const user: IUser = {
    name: 'ted',
    isAdmin: false
};

const user2: IUser = {
    name: 'isabella',
    isAdmin: true
};

const proxyEmployees = new ProxyEmployees(user);
console.log(proxyEmployees.getEmployees());

const proxyEmployees2 = new ProxyEmployees(user2);
console.log(proxyEmployees2.getEmployees());