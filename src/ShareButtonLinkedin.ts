import AbstractShareButton from "./AbstractShareButton";


export default class ShareButtonLinkedin extends AbstractShareButton {

    constructor(clazz: string, url: string){
        super(clazz, url);
    }

    createLink(): string {
        return `https://wwwlinkedin.com/shareArticle?url=${this.url}`;
    }
}