import {RouterLink} from "./utils/types.ts";
import {CHAT_ROUTER, LOGIN_ROUTER} from "./utils/consts.ts";
import Login from "./components/Login/Login.tsx";
import Chat from './components/Chat/Chat.tsx'

interface Router {
    path: RouterLink
    Component: () => JSX.Element
}

type Routes = Array<Router>

export const publicRoutes: Routes = [
    { path: LOGIN_ROUTER, Component: Login}
]

export const priveRoutes: Routes = [
    { path: CHAT_ROUTER, Component: Chat}
]