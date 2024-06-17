import { create } from "zustand";
import {ReactElement} from "react";
import Menu from "$/components/menu/Menu";

// TODO: Replace zustand with Redux to keep bundle size down
//       since boardgame.io ships redux already

/**
 * The state of the router store.
 */
export interface RouterState {
    /**
     * @member {component} ReactElement The component representing the current page. Is set to `<Menu />` by default
     * @see Menu
     */
    component: ReactElement
    /**
     * Change the current stored component, which will cause the page to be redirect to the new one
     * @param to the component to redirect to
     * @method
     */
    redirect: (to: ReactElement) => void
}

/**
 * A React hook to return a reference to the router store. (router -> store -> state of component) <br />
 * Call `redirect` on the result to change the current component stored inside.
 * @returns {RouterState}
 * @function
 */
export const useRouter = create<RouterState>()((set) => ({
    component: <Menu />,

    redirect(to) {
        set((_) => ({ component: to }));
    }
}));