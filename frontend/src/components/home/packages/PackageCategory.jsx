import React from "react";
import PackageTableRow from "./PackageTableRow";

const PackageCategory = ({ section }) => {
  return (
    <>
      {/* Category Heading */}
      <tr className="bg-white">
        <td
          colSpan={4}
          className="px-8 py-6 text-3xl font-semibold text-red-600"
        >
          {section.category}
        </td>
      </tr>

      {/* Feature Rows */}
      {section.items.map((item) => (
        <PackageTableRow
          key={item.title}
          item={item}
        />
      ))}
    </>
  );
};

export default PackageCategory;