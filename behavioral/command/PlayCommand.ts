import Command from './Command';
import Player from './Player';

class PlayCommand extends Command {
    private player: Player;

    constructor() {
        super();
        this.player = new Player;
    }

    execute() {
        this.player.play();
    }
}

export default PlayCommand;