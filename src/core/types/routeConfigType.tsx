import { ComponentType } from "react";
import { RouteObject } from "react-router-dom"; 
import { ReactNode } from "react"; // Importar ReactNode para el tipo de íconos

export type CustomRouteConfig = RouteObject & {
  label: string;
  requiresAuth: boolean;
  icon?: ReactNode; // Agregar el campo icon que puede ser un componente de ícono
};
