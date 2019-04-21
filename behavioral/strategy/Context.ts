import FormatStrategy from './FormatStrategy';

class Context {
    private strategy: FormatStrategy;

    constructor(strategy: FormatStrategy) {
        this.strategy = strategy;
    }

    formatText(text: string) {
        return this.strategy.formatText(text);
    }
}

export default Context;