import Email from './Email';

class HtmlEmail extends Email {
    formatText(text: string, tag: string) {
        return `<${tag}>${text}</${tag}>`;
    }
}

export default HtmlEmail;