import { RouteObject } from "react-router-dom";
import NotFoundScreen from "../components/screens/NotFoundScreen";

type CustomRouteConfig = RouteObject & {
    label: string;
    requiresAuth: boolean;
  };

const routes: CustomRouteConfig[] = [
  {
    path: "/notFound", 
    label: "Not Found",
    requiresAuth: false,
    element: <NotFoundScreen/>,
  },
  {
    path:"/",
    label:"Home",
    requiresAuth:true,
    element:<div> <h1>Hola bienvenido</h1> </div>

  }
];

export default routes;
