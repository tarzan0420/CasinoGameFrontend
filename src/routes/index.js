import { Navigate, useRoutes } from "react-router-dom";

// component
import Dashboard from "../page/dashboard";

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <Dashboard />
    }
  ]);
}
