class Email {
    protected headers: string;
    protected text: string;

    setHeaders(headers: string) {
        this.headers = headers;
    }

    setText(text: string) {
        this.text = text;
    }

    getHeaders() {
        return this.headers;
    }

    getText() {
        return this.text;
    }
}

export default Email;