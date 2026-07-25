import packages from "../../data/packages";

const PricingTable = ({ setSelectedPackage }) => {
  return (
    <div className="overflow-x-auto rounded-xl border shadow-lg">
      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#0B2248] text-white">
            <th className="border p-6 text-left text-xl">Features</th>

            {packages.map((pkg) => (
              <th
                key={pkg.name}
                className="relative border-l border-blue-900 p-6 text-center"
              >
                {pkg.recommended && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded bg-red-500 px-4 py-1 text-sm font-bold text-white">
                    Recommended
                  </div>
                )}

                <h2 className="text-3xl font-bold text-yellow-400">
                  {pkg.name}
                </h2>

                <p className="mt-3 text-4xl font-bold text-white">
                  {pkg.price}
                </p>

                <p className="mt-1 text-sm text-gray-300">Per Sq.Ft</p>

                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className="mt-5 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Choose Plan
                </button>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* Design */}
          <tr className="bg-gray-100">
            <td
              colSpan={packages.length + 1}
              className="p-4 text-lg font-bold text-red-600"
            >
              Design & Planning
            </td>
          </tr>

          <TableRow
            title="Design Consultation"
            field="consultation"
          />

          <TableRow
            title="Drawings"
            field="drawings"
          />

          {/* Structure */}
          <tr className="bg-gray-100">
            <td
              colSpan={packages.length + 1}
              className="p-4 text-lg font-bold text-red-600"
            >
              Structure Materials
            </td>
          </tr>

          <TableRow title="Steel" field="steel" />

          <TableRow title="Cement" field="cement" />

          <TableRow title="Bricks" field="bricks" />

          <TableRow title="Flooring" field="flooring" />

          <TableRow title="Painting" field="painting" />

          <TableRow title="Warranty" field="warranty" />
        </tbody>
      </table>
    </div>
  );
};

function TableRow({ title, field }) {
  return (
    <tr>
      <td className="border p-4 font-semibold">{title}</td>

      {packages.map((pkg) => (
        <td
          key={pkg.name}
          className="border p-4 text-center"
        >
          {pkg.features[field]}
        </td>
      ))}
    </tr>
  );
}

export default PricingTable;