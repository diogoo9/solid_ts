export default interface EventHandler {
    addEventListenerToClass(clzz: string, event: string, fn: any);
}