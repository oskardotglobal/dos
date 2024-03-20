import {Listener} from "../../api/event/Listener";
import {Manager} from "../../Manager";
import {Event} from "../../api/event/Event";

export class WindowResizedListener implements Listener {
    private manager: Manager;

    constructor(manager: Manager) {
        this.manager = manager;
    }

    public handle() {
        resizeCanvas(windowWidth, windowHeight);
        this.manager.getListeners().handle(Event.SETUP);
    }
}