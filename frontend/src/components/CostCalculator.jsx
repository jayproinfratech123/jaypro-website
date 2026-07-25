import React from "react";
import { useNavigate } from "react-router-dom";

const CostCalculator = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/estimate")}>
        Calculate Price
      </button>
    </div>
  );
};

export default CostCalculator;