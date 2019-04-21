import Subject from './Subject';

class Speaker extends Subject {
    private message: string;

    getMessage = () => this.message;

    setMessage = (message: string) => this.message = message;
    
}

export default Speaker;