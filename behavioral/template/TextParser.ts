import IEmployee from './IEmployee';

abstract class TextParser {
    abstract parse(text: string): IEmployee[];
}

export default TextParser;