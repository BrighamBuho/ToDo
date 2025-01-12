import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import routes from "../../routes/routeConfig";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const MainLayout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const logged=useSelector((store:RootState)=>{return store.auth.logged});
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      {/* AppBar */}
      <header className="h-16 bg-primary text-white flex items-center justify-between px-4 shadow-md fixed w-full z-50">
        <button
          title="menuButton"
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          {/* Icono de hamburguesa */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">ToDo- Brigham Chunga</h1>
      </header>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-secondary text-white transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {routes.map((route) => (
              (route.requiresAuth&&logged)&&( <li key={route.label}>
                <Link
                  to={route.path ?? "/"}
                  className="block px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors duration-200"
                  onClick={() => setDrawerOpen(false)} // Cierra el Drawer al hacer clic
                >
                  {route.label}
                </Link>
              </li>)
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay para cerrar el Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setDrawerOpen(false)}
        />
      )}

  <main>
  <div className="min-w-screen min-h-screen  bg-red flex flex-col items-center justify-center ">

  {/* Ahora ocupa todo el ancho */}
    <Outlet />
  </div>
  </main>


    </div>
  );
};

export default MainLayout;
