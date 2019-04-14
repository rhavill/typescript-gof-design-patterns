import Command from './Command';

class Button {
    protected graphic: string;
    protected command: Command;

    constructor(graphic: string, command: Command) {
        this.graphic = graphic;
        this.command = command;
    }

    click() {
        this.command.execute();
    }
}

export default Button;
