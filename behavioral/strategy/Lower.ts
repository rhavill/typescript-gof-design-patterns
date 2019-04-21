import FormatStrategy from './FormatStrategy';

class Lower extends FormatStrategy {
    formatText = (text: string) => text.toLowerCase();
}

export default Lower;