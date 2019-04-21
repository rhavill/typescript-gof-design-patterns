import FormatStrategy from './FormatStrategy';

class Upper extends FormatStrategy {
    formatText = (text: string) => text.toUpperCase();
}

export default Upper;