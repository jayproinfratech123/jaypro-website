import React from "react";

const ChooseButton = ({
  packageName,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full
        rounded-lg
        bg-red-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        hover:bg-red-700
        hover:shadow-lg
        active:scale-95
      "
    >
      Choose {packageName}
    </button>
  );
};

export default ChooseButton;