import React from "react";

interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30"
      onClick={onClick}
    />
  );
};

export default Overlay;
