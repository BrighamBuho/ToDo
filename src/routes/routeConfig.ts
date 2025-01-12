import { RouteProps } from 'react-router-dom';
interface RouteConfig extends RouteProps {
    requiresAuth: boolean;
  }
  const routes: RouteConfig[]  = [];

export default routes;