import Button from './Button';
import PlayCommand from './PlayCommand';
import RecordCommand from './RecordCommand';

const playButton = new Button('play.png', new PlayCommand);
const recordButton = new Button('record.png', new RecordCommand);

playButton.click();
recordButton.click();