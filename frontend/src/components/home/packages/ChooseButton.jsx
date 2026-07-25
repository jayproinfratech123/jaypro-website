import React from "react";

const ChooseButton = ({
  packageName,
  onClick,
  fullWidth = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : ""}
        bg-red-600
        hover:bg-red-600
        text-white
        font-semibold
        px-6
        py-3
        rounded-lg
        transition
        duration-300
        shadow-md
        hover:shadow-lg
      `}
    >
      Choose {packageName}
    </button>
  );
};

export default ChooseButton;