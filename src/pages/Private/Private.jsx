import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import { Home } from "./Home/Home"
import { Dashboard } from "./Dashboard/Dashboard"
import { RoutesWithNotFound } from "../../utilities/RoutesWithNotFound"

// const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
// const Home = lazy(() => import('./Home/Home'));

export const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFound>
    )
}