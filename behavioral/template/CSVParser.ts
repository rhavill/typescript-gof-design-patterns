import TextParser from './TextParser';
import IEmployee from './IEmployee';

class CSVParser extends TextParser {
    parse(text: string) {
        return text.split("\n").map(line => {
            const [firstName, lastName] = line.split(',');
            return {firstName, lastName};
        });
    }
}

export default CSVParser;