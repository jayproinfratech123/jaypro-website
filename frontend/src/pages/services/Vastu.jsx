
const Vastu = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] overflow-hidden flex items-center">
      {/* ================================
          RESPONSIVE BACKGROUND IMAGES
      ================================= */}

      {/* Mobile Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/for-phone.png')",
        }}
      />

      {/* Tablet Image */}
      <div
        className="absolute inset-0 hidden md:block lg:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vastu-tablet.webp')",
        }}
      />

      {/* Desktop Image */}
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vastu.webp')",
        }}
      />

      {/* ================================
          DARK OVERLAY
      ================================= */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/10 bg-transparent"></div>

      {/* ================================
          MAIN CONTENT
      ================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div></div>

          {/* ================================
              RIGHT SIDE VASTU BENEFITS CARD
          ================================= */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                rounded-2xl
                p-5
                sm:p-6
                w-full
                max-w-[320px]

                /* Mobile */
                bg-transparent
                border-0
                shadow-none
                backdrop-blur-0
                text-black

                /* Tablet & Desktop */
                md:bg-black/30
                md:border
                md:border-white/20
                md:shadow-2xl
                md:backdrop-blur-md
                md:text-white
              "
            >
              {/* Icon */}
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-yellow-400
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <span className="text-xl text-black">☯</span>
              </div>

              {/* Heading */}
<h3 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-4 text-black md:text-white">                Vastu Benefits
              </h3>

              {/* Benefits */}
              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex gap-3">
                  <span className="text-black md:text-yellow-400 text-sm mt-1">
                    ✔
                  </span>

                  <div>
<h4 className="font-semibold text-lg sm:text-base md:text-base text-black md:text-white">                      Positive Energy Flow
                    </h4>

                    <p className="text-xs sm:text-sm leading-5 text-gray-700 md:text-gray-300">
                      Create a balanced environment filled with peace and
                      positive energy.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-3">
                  <span className="text-black md:text-yellow-400 text-sm mt-1">
                    ✔
                  </span>

                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-black md:text-white">
                      Better Health
                    </h4>

                    <p className="text-xs sm:text-sm leading-5 text-gray-700 md:text-gray-300">
                      Improve well-being through proper planning and natural
                      energy flow.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-3">
                  <span className="text-black md:text-yellow-400 text-sm mt-1">
                    ✔
                  </span>

                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-black md:text-white">
                      Wealth & Prosperity
                    </h4>

                    <p className="text-xs sm:text-sm leading-5 text-gray-700 md:text-gray-300">
                      Bring financial growth and prosperity through Vastu
                      principles.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-3">
                  <span className="text-black md:text-yellow-400 text-sm mt-1">
                    ✔
                  </span>

                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-black md:text-white">
                      Peaceful Living
                    </h4>

                    <p className="text-xs sm:text-sm leading-5 text-gray-700 md:text-gray-300">
                      Enjoy harmony, happiness and comfort in your living space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>

      {/* ================================
          BOTTOM GRADIENT
      ================================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-24
          bg-gradient-to-t
          from-black/70
          to-transparent
          pointer-events-none
          hidden md:block
        "
      />
    </section>
  );
};

export default Vastu;