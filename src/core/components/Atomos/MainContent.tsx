import React from "react";
import { Outlet } from "react-router-dom";

const MainContent: React.FC = () => {
  return (
    <main className="pt-16">
      <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
