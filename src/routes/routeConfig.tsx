import { RouteObject } from "react-router-dom";
import NotFoundScreen from "../components/screens/NotFoundScreen";
import { CustomRouteConfig } from "../core/types/routeConfigType";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; 

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
    element:<div> <h1>Hola bienvenido</h1> </div>,
    icon:<FaHome/>
  }
];

export default routes;
