import React from "react";
import PackageTableRow from "./PackageTableRow";

const PackageCategory = ({ section }) => {
  return (
    <>
      {/* Category Heading */}
      <tr className="bg-white">
        <th
          colSpan={4}
          scope="colgroup"
          id={`category-${section.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="px-8 py-6 text-3xl font-semibold text-red-600 text-left"
        >
          {section.category}
        </th>
      </tr>

      {/* Feature Rows */}
      {section.items.map((item) => (
        <PackageTableRow
          key={item.title}
          item={item}
          category={section.category}
        />
      ))}
    </>
  );
};

export default PackageCategory;