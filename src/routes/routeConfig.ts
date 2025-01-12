import { RouteProps } from 'react-router-dom';
interface RouteConfig extends RouteProps {
    label:string;
    requiresAuth: boolean;
  }
  const routes: RouteConfig[]  = [];

export default routes;