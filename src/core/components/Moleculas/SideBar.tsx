import React, { useState } from "react";
import { CustomRouteConfig } from "../../types/routeConfigType";
import AppBar from "../Atomos/AppBar";
import Drawer from "../Atomos/Drawer";
import Overlay from "../Atomos/Overlay";
import MainContent from "../Atomos/MainContent";
import { isValidColor } from "../../utils";


interface SidebarLayoutProps {
  color?: string;
  title: string;
  routes: CustomRouteConfig[];
  isAuthenticated: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
    color = "gray",
    title,
    routes,
    isAuthenticated,
}) => {
    
      
    const validatedColor = isValidColor(color) ? color : "gray";
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-screen" >
      <AppBar
        title={title}
        onMenuClick={() => setDrawerOpen(!drawerOpen)}
        color={validatedColor}
      />
      <Drawer
        routes={routes}
        isOpen={drawerOpen}
        color={validatedColor}
        isAuthenticated={isAuthenticated}
      />
      <Overlay isVisible={drawerOpen} onClick={() => setDrawerOpen(false)} />
      <MainContent />
    </div>
  );
};

export default SidebarLayout;
