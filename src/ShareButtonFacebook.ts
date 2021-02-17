import AbstractLinkShareButton from "./AbstractLinkShareButton";


export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(clazz: string, url: string){
        super(clazz, url);
    }

    createLink(): string {
        return `https://www.facebook.com/sharer?u=${this.url}`;
    }
}