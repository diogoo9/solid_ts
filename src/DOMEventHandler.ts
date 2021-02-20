import EventHandler from "./EventHandler";

export default class DOMEventHandler  implements EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any){
        const elemnets: any = document.querySelectorAll(clazz);
        for(const element of elemnets){
            element.addEventListener(event, fn);
        }
    }
}