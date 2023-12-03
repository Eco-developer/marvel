import { Route } from "react-router";

export const RoutesFactory:React.FC<any> = ({routes}) => {
    return (
        routes.length ? 
            (
                routes.map((route: any) => {
                    console.log(route);
                    return (
                        <Route key={route.path} path={route.path} component={route.Component} exact />
                    )
                })
            )
        : null 
    )
}