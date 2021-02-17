import AbstractLinkShareButton from "./AbstractLinkShareButton";


export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    constructor(clazz: string, url: string){
        super(clazz, url);
    }

    createLink(): string {
        return `https://wwwlinkedin.com/shareArticle?url=${this.url}`;
    }
}