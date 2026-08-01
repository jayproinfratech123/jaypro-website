import React from "react";

const ChooseButton = ({
  packageName,
  onClick,
  fullWidth = false,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Choose ${packageName} package`}
      title={`Choose ${packageName} package`}
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
        ${className}
      `}
      {...props}
    >
      <span>Choose {packageName}</span>
    </button>
  );
};

export default ChooseButton;