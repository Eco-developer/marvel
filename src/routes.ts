import { 
    Home,
    Login
} from "./pages"
import { 
    HOME, 
    LOGIN 
} from "./const/routesPath"
import { 
    PRIVATE, 
    PUBLIC_ONLY 
} from "./const/accessType"

export const routes = [
    {
        Component: Home,
        path: HOME,
        access: PRIVATE
    },
    {
        Component: Login,
        path: LOGIN,
        access: PUBLIC_ONLY
    }
]