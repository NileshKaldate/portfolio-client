import React from "react";
import DownloadIcon from "../../assets/icons/DownloadIcon";

const DownloadButton = ({ label, link, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-blue-500 px-3 rounded text-blue-500 flex gap-2 items-center font-bold  "
    >
      <div className="animate-bounce">
        <DownloadIcon />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default DownloadButton;
