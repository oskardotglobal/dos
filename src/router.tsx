import { create } from "zustand";
import {ReactElement} from "react";
import Menu from "$/components/menu/Menu";

export interface RouterState {
    component: ReactElement
    redirect: (to: ReactElement) => void
}

export const useRouter = create<RouterState>()((set) => ({
    component: <Menu />,

    redirect(to) {
        set((_) => ({ component: to }));
    }
}));