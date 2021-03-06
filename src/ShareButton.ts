import EventHandler from "./EventHandler";

export default class ShareButton {
    url: string;
    eventHandler: EventHandler;

    constructor(url: string){
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    bind(clazz: string, socialNetwork: string){
        let link: string

        if(socialNetwork === "twitter"){
            link = `https://twitter.com/share?url=${this.url}`
        }
        if(socialNetwork === "facebook"){
            link = `https://www.facebook.com/sharer?u=${this.url}`
        }
        if(socialNetwork === "linkedin"){
            link = `https://wwwlinkedin.com/shareArticle?url=${this.url}`
        }
        this.eventHandler.addEventListenerToClass(clazz, "click", ()=>  window.open(link));
    }
}