import {useRouter} from "$/router";

export default function App() {
    const router = useRouter();
    return router.component;
}