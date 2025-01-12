import { RouterProps } from 'react-router-dom';
interface RouteConfig extends RouterProps {
    label:string;
    requiresAuth: boolean;
  }
  const routes: RouteConfig[]  = [];

export default routes;