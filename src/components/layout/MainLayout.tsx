import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import routes from "../../routes/routeConfig";
import SidebarLayout from "../../core/components/Moleculas/SideBar";

const MainLayout: React.FC = () => {
  const isAuthenticated = useSelector((store: RootState) => store.auth.logged);

  return (
    <SidebarLayout
      color="#265fd1"
      title="ToDo - Brigham Chunga"
      routes={routes}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default MainLayout;
