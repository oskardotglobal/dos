import { create } from "zustand";
import {ReactElement} from "react";
import Menu from "$/components/menu/Menu";

export interface RouterState {
    component: ReactElement
    redirect: (to: ReactElement) => void
}

// TODO: Replace zustand with Redux to keep bundle size down
//       since boardgame.io ships redux already

export const useRouter = create<RouterState>()((set) => ({
    component: <Menu />,

    redirect(to) {
        set((_) => ({ component: to }));
    }
}));