import DOMEventHandler from "./DOMEventHandler";
import EventHandler from "./EventHandler";


export default abstract class AbstractShareButton {
    clazz: string;
    eventHandler: EventHandler;

    constructor(eventHandler: EventHandler,clazz: string){
        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }
    abstract createAction();

    bind(){ 
        //template method gof
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
    }
}