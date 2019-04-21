import TextParser from './TextParser';
import IEmployee from './IEmployee';
// run "npm i @types/node" and "npx tsc --init" to obtain fs library
// import fs from 'fs';
import * as fs from 'fs';

class EmployeeFileReader {
    private parser: TextParser;
    private employees: IEmployee[] = [];

    constructor(parser: TextParser) {
        this.parser = parser;
    } 

    openFile(fileName: string): string {
        return fs.readFileSync(fileName,'utf8');;
    }

    parse(text: string) {
        this.employees =  this.parser.parse(text);
    }

    output = () => this.employees.forEach(employee => {
        console.log(`${employee.firstName} ${employee.lastName}`);
    });
}

export default EmployeeFileReader;