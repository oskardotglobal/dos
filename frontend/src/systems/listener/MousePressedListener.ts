import {Listener} from "../../api/event/Listener";
import {Manager} from "../../Manager";

export class MousePressedListener implements Listener {
    private manager: Manager;

    constructor(manager: Manager) {
        this.manager = manager;
    }

    public handle() {
    }
}