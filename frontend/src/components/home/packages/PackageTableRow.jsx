import React from "react";
import { Check, X } from "lucide-react";

const PackageTableRow = ({ item }) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      {/* Feature Name */}
      <td className="px-4 py-2 font-medium text-base">
        {item.title}
      </td>

      {/* Package Values */}
      {item.values.map((value, index) => (
        <td className="px-3 py-2 border-l text-center text-gray-700">
          {value === "✔" ? (
            <Check
              className="mx-auto text-green-600"
              size={22}
            />
          ) : value === "✖" ? (
            <X
              className="mx-auto text-red-600"
              size={22}
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