import React from "react";
import { Check, X } from "lucide-react";

const PackageTableRow = ({ item }) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      {/* Feature Name */}
      <th
        scope="row"
        className="px-4 py-2 font-medium text-base text-left"
      >
        {item.title}
      </th>

      {/* Package Values */}
      {item.values.map((value, index) => (
        <td
          key={`${item.title}-${index}`}
          className="px-3 py-2 border-l text-center text-gray-700"
          aria-label={`${item.title}: ${
            value === "✔"
              ? "Included"
              : value === "✖"
              ? "Not Included"
              : value
          }`}
        >
          {value === "✔" ? (
            <Check
              className="mx-auto text-green-600"
              size={22}
              aria-hidden="true"
            />
          ) : value === "✖" ? (
            <X
              className="mx-auto text-red-600"
              size={22}
              aria-hidden="true"
            />
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  );
};

export default PackageTableRow;