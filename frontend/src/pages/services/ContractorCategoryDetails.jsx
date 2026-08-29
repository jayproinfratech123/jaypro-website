import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaCheckCircle,
  FaHardHat,
  FaPhoneAlt,
  FaHeadset,
  FaSearch,
  FaUserTie,
} from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const categoryData = {
  "civil-contractor": {
    title: "Civil Contractor",
    description:
      "Find verified civil contractors for house construction, masonry, plaster, RCC coordination and general civil work.",
  },

  "concrete-rcc-contractor": {
    title: "Concrete RCC Contractor",
    description:
      "Find RCC contractors for footing, columns, beams, slabs, staircase, shuttering and reinforcement work.",
  },

  "painting-contractor": {
    title: "Painting Contractor",
    description:
      "Find painting contractors for wall putty, primer, interior painting, exterior painting and texture work.",
  },

  "electrical-contractor": {
    title: "Electrical Contractor",
    description:
      "Find electrical contractors for wiring, conduit, switchboards, DB, lighting and electrical installation.",
  },

  "plumbing-contractor": {
    title: "Plumbing Contractor",
    description:
      "Find plumbing contractors for water supply, drainage, bathroom, kitchen and sanitary work.",
  },

  "tiles-contractor": {
    title: "Tiles Contractor",
    description:
      "Find tiles contractors for flooring, bathroom tiles, kitchen tiles, wall tiles and finishing.",
  },

  "carpenter-contractor": {
    title: "Carpenter Contractor",
    description:
      "Find carpenter contractors for doors, wardrobes, modular furniture, kitchen and other woodwork.",
  },
};

/* =========================================================
   CONTRACTOR DATA
========================================================= */

const contractorData = [
  /* CIVIL CONTRACTORS */

  {
    id: 1,
    category: "civil-contractor",
    name: "Tuktuk Kumar",
    mobile: "7250631443",
    city: "Patna",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },

  {
    id: 2,
    category: "civil-contractor",
    name: "Sushil Kumar",
    mobile: "9566258439",
    city: "Sitamarhi",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },

  {
    id: 3,
    category: "civil-contractor",
    name: "Vijay Singh",
    mobile: "9852281676",
    city: "Patna",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },

  {
    id: 4,
    category: "civil-contractor",
    name: "Ramesh Kumar",
    mobile: "9113357162",
    city: "Patna",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },

 

  {
    id: 6,
    category: "civil-contractor",
    name: "Mantu Kumar",
    mobile: "8340568080",
    city: "Patna",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },

  {
    id: 7,
    category: "civil-contractor",
    name: "Veerendra Kumar",
    mobile: "7250154466",
    city: "Patna",
    state: "Bihar",
    profession: "Civil Contractor",
    verified: true,
  },


  /* RCC CONTRACTORS */

  {
    id: 10,
    category: "concrete-rcc-contractor",
    name: "Tuktuk kumar",
    mobile: "7250631443",
    city: "Patna",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  {
    id: 11,
    category: "concrete-rcc-contractor",
    name: "Sushil kumar",
    mobile: "9566258439",
    city: "Sitamarhi",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  {
    id: 12,
    category: "concrete-rcc-contractor",
    name: "	Vijay Singh",
    mobile: "9852281676",
    city: "",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  {
    id: 13,
    category: "concrete-rcc-contractor",
    name: "	Ramesh Kumar",
    mobile: "9113357162",
    city: "Patna",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  {
    id: 14,
    category: "concrete-rcc-contractor",
    name: "Mantu Kumar",
    mobile: "8340568080",
    city: "Gaya",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  {
    id: 15,
    category: "concrete-rcc-contractor",
    name: "Veerendra Kumar",
    mobile: "725015446",
    city: "Patna",
    state: "Bihar",
    profession: "Concrete RCC Contractor",
    verified: true,
  },

  /* PAINTING CONTRACTORS */

  {
    id: 16,
    category: "painting-contractor",
    name: "	Umesh Kumar",
    mobile: "9304027049",
    city: "Patna",
    state: "Bihar",
    profession: "Painting Contractor",
    verified: true,
  },

  {
    id: 17,
    category: "painting-contractor",
    name: "Rinku Kumar",
    mobile: "9431896936",
    city: "Danapur",
    state: "Bihar",
    profession: "Painting Contractor",
    verified: true,
  },

  {
    id: 18,
    category: "painting-contractor",
    name: "Abhinandan Kumar",
    mobile: "7079125002",
    city: "Patna",
    state: "Bihar",
    profession: "Painting Contractor",
    verified: true,
  },

  

  /* ELECTRICAL CONTRACTORS */

  {
    id: 21,
    category: "electrical-contractor",
    name: "Suresh Kumar",
    mobile: "9835295906",
    city: "Patna",
    state: "Bihar",
    profession: "Electrical Contractor",
    verified: true,
  },

  {
    id: 22,
    category: "electrical-contractor",
    name: "Jeetendra Kumar",
    mobile: "9334890088",
    city: "Patna",
    state: "Bihar",
    profession: "Electrical Contractor",
    verified: true,
  },

  {
    id: 23,
    category: "electrical-contractor",
    name: "Munna Kumar",
    mobile: "6201068770",
    city: "Patna",
    state: "Bihar",
    profession: "Electrical Contractor",
    verified: true,
  },

  
  /* PLUMBING CONTRACTORS */

  {
    id: 26,
    category: "plumbing-contractor",
    name: "Dular Chandra",
    mobile: "6201527216",
    city: "Patna",
    state: "Bihar",
    profession: "Plumbing Contractor",
    verified: true,
  },

  {
    id: 27,
    category: "plumbing-contractor",
    name: "	Guddu Kumar",
    mobile: "8340231984",
    city: "Patna",
    state: "Bihar",
    profession: "Plumbing Contractor",
    verified: true,
  },

  
  /* TILES CONTRACTORS */

  {
    id: 31,
    category: "tiles-contractor",
    name: "Ramesh Kumar",
    mobile: "9334457239",
    city: "Patna",
    state: "Bihar",
    profession: "Tiles Contractor",
    verified: true,
  },

  {
    id: 32,
    category: "tiles-contractor",
    name: "	Rohit Kumar",
    mobile: "6206037473",
    city: "Patna",
    state: "Bihar",
    profession: "Tiles Contractor",
    verified: true,
  },

  {
    id: 33,
    category: "tiles-contractor",
    name: "Parmanand kumar",
    mobile: "9955239671",
    city: "Patna",
    state: "Bihar",
    profession: "Tiles Contractor",
    verified: true,
  },

  

  /* CARPENTER CONTRACTORS */

  {
    id: 36,
    category: "carpenter-contractor",
    name: "Akash Kumar",
    mobile: "8651078736",
    city: "Patna",
    state: "Bihar",
    profession: "Carpenter Contractor",
    verified: true,
  },

  {
    id: 37,
    category: "carpenter-contractor",
    name: "	Lali sharma",
    mobile: "8178813105",
    city: "Patna",
    state: "Bihar",
    profession: "Carpenter Contractor",
    verified: true,
  },

  {
    id: 38,
    category: "carpenter-contractor",
    name: "	Pawan Sharma",
    mobile: "9967335404",
    city: "Patna",
    state: "Bihar",
    profession: "Carpenter Contractor",
    verified: true,
  },

  
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ContractorCategoryDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);

  const category = categoryData[slug];

  /* =========================================================
     FILTER CONTRACTORS
  ========================================================= */

  const filteredContractors = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return contractorData.filter((contractor) => {
      const categoryMatch = contractor.category === slug;

      const searchMatch =
        !searchText ||
        contractor.name.toLowerCase().includes(searchText) ||
        contractor.mobile.includes(searchText) ||
        contractor.city.toLowerCase().includes(searchText) ||
        contractor.state.toLowerCase().includes(searchText) ||
        contractor.profession.toLowerCase().includes(searchText);

      return categoryMatch && searchMatch;
    });
  }, [slug, search]);

  /* =========================================================
     PAGE SCROLL
  ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setSearch("");
  }, [slug]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = showLeadForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  /* =========================================================
     CATEGORY NOT FOUND
  ========================================================= */

  if (!category) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <FaHardHat className="mx-auto text-5xl text-red-600" />

          <h1 className="mt-5 text-3xl font-black text-gray-950">
            Contractor Category Not Found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/services/contractor")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-bold text-white"
          >
            <FaArrowLeft />
            Back to Contractors
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 py-7 sm:px-6 lg:px-8">

            <button
              type="button"
              onClick={() => navigate("/services/contractor")}
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 transition hover:text-red-600"
            >
              <FaArrowLeft />
              All Contractor Categories
            </button>

            <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-600">
                  <FaHardHat />
                  Contractor Directory
                </div>

                <h1 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
                  {category.title}
                </h1>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3">
                <p className="text-xs font-semibold text-gray-500">
                  Contractors Found
                </p>

                <p className="mt-1 text-2xl font-black text-red-600">
                  {filteredContractors.length}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SEARCH BAR
        ===================================================== */}

        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">

            <div className="relative max-w-xl">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={`Search ${category.title}...`}
                className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />

            </div>

          </div>
        </section>

        {/* =====================================================
            CONTRACTOR CARDS

            MOBILE = 1 CARD
            TABLET = 2 CARDS
            LAPTOP / DESKTOP = 3 CARDS
        ===================================================== */}

        <section className="px-4 py-7 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-[1400px]">

            {filteredContractors.length > 0 ? (

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {filteredContractors.map((contractor) => (

                  <ContractorCard
                    key={contractor.id}
                    contractor={contractor}
                    onSupport={() => setShowLeadForm(true)}
                  />

                ))}

              </div>

            ) : (

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">

                <FaSearch className="mx-auto text-4xl text-gray-300" />

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  No Contractors Found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another contractor name, city or mobile number.
                </p>

              </div>

            )}

          </div>

        </section>

        {/* =====================================================
            SUPPORT SECTION
        ===================================================== */}

        <section className="px-4 pb-12 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-[1400px]">

            <div className="rounded-2xl bg-gray-950 px-6 py-8 text-white">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">
                    Need Help?
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Can't Find the Right {category.title}?
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    Share your requirement and our support team will help you.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowLeadForm(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
                >
                  <FaHeadset />
                  Contact Support
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          LEAD FORM POPUP
      ===================================================== */}

      {showLeadForm && (

        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setShowLeadForm(false)}
        >

          <div
            className="relative my-auto w-full max-w-[350px]"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">

              <LeadForm
                onSuccess={() => setShowLeadForm(false)}
                onClose={() => setShowLeadForm(false)}
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

/* =========================================================
   CONTRACTOR CARD
========================================================= */

const ContractorCard = ({ contractor, onSupport }) => {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-lg
        border
        border-gray-200
        bg-white
        shadow-md
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      <div className="p-4">

        {/* =================================================
            TOP CARD AREA
        ================================================= */}

        <div className="flex gap-4">

          {/* PROFILE */}

          <div className="w-[76px] shrink-0 text-center">

            <div className="relative mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full bg-emerald-100">

              <FaUserTie className="text-[34px] text-gray-700" />

              {contractor.verified && (

                <span className="absolute -left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white shadow">
                  <FaCheckCircle size={12} />
                </span>

              )}

            </div>

            {contractor.verified && (

              <p className="mt-1 text-xs font-black text-green-700">
                Verified
              </p>

            )}

          </div>

          {/* INFORMATION */}

          <div className="min-w-0 flex-1">

            <InfoRow
              label="Name:"
              value={contractor.name}
            />

            <InfoRow
              label="Mobile:"
              value={contractor.mobile}
            />

            <InfoRow
              label="City:"
              value={contractor.city || "-"}
            />

            <InfoRow
              label="State:"
              value={contractor.state || "-"}
            />

            <InfoRow
              label="Profession:"
              value={contractor.profession}
            />

          </div>

        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="mt-4 grid grid-cols-2 gap-3 pl-[92px]">

          <a
            href={`tel:${contractor.mobile}`}
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-sm bg-green-600 px-3 text-xs font-bold text-white transition hover:bg-green-700"
          >
            <FaPhoneAlt />
            Contractor
          </a>

          <button
            type="button"
            onClick={onSupport}
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-sm bg-blue-600 px-3 text-xs font-bold text-white transition hover:bg-blue-700"
          >
            <FaHeadset />
            Support
          </button>

        </div>

      </div>

    </div>
  );
};

/* =========================================================
   INFO ROW
========================================================= */

const InfoRow = ({ label, value }) => {
  return (
    <div className="grid min-h-[23px] grid-cols-[95px_minmax(0,1fr)] items-center border-b border-gray-200 bg-gray-50 px-2 text-[13px] last:border-b-0">

      <span className="font-black text-gray-950">
        {label}
      </span>

      <span className="truncate text-gray-800">
        {value}
      </span>

    </div>
  );
};

export default ContractorCategoryDetails;