import {Event} from "./Event";
import {Listener} from "./Listener";

type ListenerRegistry = {
    [key in Event]: Listener[];
};

export class Listeners {
    private readonly listeners: ListenerRegistry;

    public constructor() {
        this.listeners = {} as ListenerRegistry;

        for (const event of Object.values(Event)) {
            // @ts-ignore we define this here
            window[event] = () => this.emit(event);
        }
    }

    public emit(type: Event) {
        if (!this.listeners[type]) return;

        this.listeners[type].forEach(listener => listener.handle());
    }

    public register(type: Event, listener: Listener) {
        if (!this.listeners[type]) this.listeners[type] = [];
        this.listeners[type].push(listener);
    }
}