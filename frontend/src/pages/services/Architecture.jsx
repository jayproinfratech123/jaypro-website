const Architecture = () => {
  return (
    <div className="min-h-screen bg-white">

      <section className="bg-gray-900 px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Architecture Design Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg">
          Professional architecture design, floor planning and
          building design services for your dream project.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Architecture Design Services
          </h2>

          <p className="mt-5 text-gray-600">
            Professional architecture and building design services
            for your dream home.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Floor Plan Design
              </h3>
              <p className="mt-3 text-gray-600">
                Customized floor plans designed according to your
                requirements and plot dimensions.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                3D Front Elevation
              </h3>
              <p className="mt-3 text-gray-600">
                Modern and attractive front elevation designs for
                your dream home.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Structural Design
              </h3>
              <p className="mt-3 text-gray-600">
                Professional structural planning for safe and
                durable construction.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Electrical Plan
              </h3>
              <p className="mt-3 text-gray-600">
                Detailed electrical planning for residential
                building projects.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Plumbing Plan
              </h3>
              <p className="mt-3 text-gray-600">
                Efficient plumbing layouts designed for practical
                construction.
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Vastu Planning
              </h3>
              <p className="mt-3 text-gray-600">
                Vastu-oriented planning for a comfortable and
                well-organized home.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Architecture;