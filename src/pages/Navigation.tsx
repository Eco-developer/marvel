import { RoutesFactory } from "../components"
import { IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { routes } from "../routes"

export const Navigation = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <RoutesFactory routes={routes}/>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}