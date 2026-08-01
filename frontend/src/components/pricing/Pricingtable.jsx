import packages from "../../data/packages";

const PricingTable = ({ setSelectedPackage }) => {
  return (
    <section
      aria-labelledby="pricing-table-heading"
      className="overflow-x-auto rounded-xl border shadow-lg"
    >
      {/* SEO Heading */}
      <h2 id="pricing-table-heading" className="sr-only">
        House Construction Package Comparison Table
      </h2>

      <table
        className="min-w-full border-collapse"
        aria-label="Construction Package Comparison"
      >
        <caption className="sr-only">
          Compare Silver, Gold and Premium construction packages including
          design, planning, structural materials, flooring, painting and
          warranty.
        </caption>

        {/* Table Header */}
        <thead>
          <tr className="bg-[#0B2248] text-white">
            <th
              scope="col"
              className="border p-6 text-left text-xl"
            >
              Features
            </th>

            {packages.map((pkg) => (
              <th
                key={pkg.name}
                scope="col"
                className="relative border-l border-blue-900 p-6 text-center"
              >
                {pkg.recommended && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded bg-red-500 px-4 py-1 text-sm font-bold text-white">
                    Recommended
                  </div>
                )}

                <h3 className="text-3xl font-bold text-yellow-400">
                  {pkg.name}
                </h3>

                <p className="mt-3 text-4xl font-bold text-white">
                  {pkg.price}
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Per Sq.Ft
                </p>

                <button
                  type="button"
                  aria-label={`Choose ${pkg.name}`}
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
            <th
              colSpan={packages.length + 1}
              scope="colgroup"
              className="p-4 text-left text-lg font-bold text-red-600"
            >
              Design &amp; Planning
            </th>
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
            <th
              colSpan={packages.length + 1}
              scope="colgroup"
              className="p-4 text-left text-lg font-bold text-red-600"
            >
              Structure Materials
            </th>
          </tr>

          <TableRow title="Steel" field="steel" />

          <TableRow title="Cement" field="cement" />

          <TableRow title="Bricks" field="bricks" />

          <TableRow title="Flooring" field="flooring" />

          <TableRow title="Painting" field="painting" />

          <TableRow title="Warranty" field="warranty" />
        </tbody>
      </table>
    </section>
  );
};

function TableRow({ title, field }) {
  return (
    <tr>
      <th
        scope="row"
        className="border p-4 text-left font-semibold"
      >
        {title}
      </th>

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