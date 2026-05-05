import type { RouteObject } from "react-router";

import ParkingDashboardPage from "./views/ParkingDashboard.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <ParkingDashboardPage />
    }
]

export default routes