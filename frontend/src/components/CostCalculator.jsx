import React from "react";
import { useNavigate } from "react-router-dom";

const CostCalculator = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/estimate");
  };

  return (
    <section
      aria-labelledby="cost-calculator-heading"
      className="w-full"
    >
      {/* SEO Heading (Hidden) */}
      <h2 id="cost-calculator-heading" className="sr-only">
        House Construction Cost Calculator
      </h2>

      <button
        type="button"
        onClick={handleNavigate}
        aria-label="Calculate House Construction Price"
        title="Calculate Price"
      >
        Calculate Price
      </button>
    </section>
  );
};

export default CostCalculator;