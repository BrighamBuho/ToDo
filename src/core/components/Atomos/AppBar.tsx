import React from "react";

interface AppBarProps {
  title: string;
  onMenuClick: () => void;
  color: string;
}

const AppBar: React.FC<AppBarProps> = ({ title, onMenuClick, color }) => {
  return (
    <header
      className="h-16 flex items-center justify-between px-4 shadow-md fixed w-full z-50"
      style={{ backgroundColor: color }}
    >
      <button
        title="menuButton"
        onClick={onMenuClick}
        className="text-white hover:text-gray-200 focus:outline-none"
      >
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
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </header>
  );
};

export default AppBar;
