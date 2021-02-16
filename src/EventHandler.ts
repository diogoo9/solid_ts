export default class EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any){
        const elemnets: any = document.querySelectorAll(clazz);
        for(const element of elemnets){
            element.addEventListener(event, fn);
        }
    }
}