import {useRouter} from "$/lib/router";

/**
 * Wrapper component to render the current component as provided by the router
 * @see useRouter
 * @component
 */
export default function App() {
    const router = useRouter();
    return router.component;
}