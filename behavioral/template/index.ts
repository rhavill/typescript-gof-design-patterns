import EmployeeFileReader from './EmployeeFileReader';
import CSVParser from './CSVParser';

const reader = new EmployeeFileReader(new CSVParser);
const contents = reader.openFile('employees.csv');
reader.parse(contents);
reader.output();
