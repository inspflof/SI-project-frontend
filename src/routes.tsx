import type { RouteObject } from "react-router";

import ParkingDashboardPage from "./views/ParkingDashboard.tsx";
import DropCarPage from "./views/DropCar.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <ParkingDashboardPage />
    },
    {
        path: "/drop",
        element: <DropCarPage />
    }
]

export default routes