import React from "react";
import { Link } from "react-router-dom";
import { CustomRouteConfig } from "../../types/routeConfigType";

interface DrawerProps {
  routes: CustomRouteConfig[];
  isOpen: boolean;
  color: string;  // Este es el color que se pasa al componente
  isAuthenticated: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  routes,
  isOpen,
  color,
  isAuthenticated,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-48 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      style={{
        backgroundColor: "#ffffff", // Fondo blanco para el Drawer
        boxShadow: "4px 0 15px rgba(0, 0, 0, 0.3)", // Sombra lateral
      }}
    >
      <div className="py-20 text-black flex flex-col h-full">
        {/* Espaciado superior reducido */}
        <div className="mb-2" />

        <ul className="space-y-2 flex-1 overflow-y-auto">
          {routes.map(
            (route) =>
              (route.requiresAuth && isAuthenticated) && (
                <li key={route.label} className="flex items-center">
                  {/* Envolviendo el ícono y el texto en un solo Link */}
                  <Link
                    to={route.path ?? "/notFound"}
                    className={`flex items-center block px-4 py-2 rounded text-lg font-medium text-gray-700 transition-all duration-300 
                     hover:from-[${color}]`}
                  >
                    {route.icon && (
                      <div className="mr-4">
                        {route.icon} {/* Valor por defecto como ejemplo */}
                      </div>
                    )}
                    {route.label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
