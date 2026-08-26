import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaHome,
  FaCalculator,
  FaRulerCombined,
  FaBuilding,
  FaHardHat,
  FaPaintRoller,
  FaTools,
  FaBolt,
  FaTint,
  FaCubes,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaInfoCircle,
  FaCheckCircle,
  FaArrowRight,
  FaDoorOpen,
  FaUtensils,
  FaBath,
  FaThLarge,
  FaWindowMaximize,
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

import LeadForm from "../../components/LeadForm";

/* =========================================================
   CONSTRUCTION ESTIMATE CALCULATOR
========================================================= */

const Estimate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  /* =========================================================
     BASIC INPUTS
  ========================================================= */

  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [floors, setFloors] = useState("");

  /* =========================================================
     PACKAGE
  ========================================================= */

  const [selectedPackage, setSelectedPackage] =
    useState("Premium");

  /* =========================================================
     PROJECT QUANTITIES

     These quantities are required because your package
     table contains prices like:

     Tiles ₹60/sq.ft
     Windows ₹300/sq.ft
     Door ₹10,000 each
     Mumty ₹1,200/sq.ft
     etc.
  ========================================================= */

  const [quantities, setQuantities] = useState({
    kitchens: 1,

    kitchenDadoArea: 50,

    bathroomDadoArea: 120,

    internalDoors: 5,

    pujaDoors: 1,

    windowArea: 120,

    livingDiningFloorArea: 300,

    roomKitchenFloorArea: 600,

    balconyArea: 80,

    staircaseArea: 100,

    parkingArea: 200,

    mumtyArea: 0,

    parapetArea: 0,

    foundationArea: 0,
  });

  /* =========================================================
     SHOW REPORT
  ========================================================= */

  const [showResults, setShowResults] =
    useState(false);

  const [
    calculatedData,
    setCalculatedData,
  ] = useState(null);

  /* =========================================================
     COLLAPSIBLE SECTIONS
  ========================================================= */

  const [openSections, setOpenSections] =
    useState({
      summary: true,
      inclusion: true,
      extra: true,
      specification: true,
    });

  /* =========================================================
     DOWNLOAD LEAD FORM
  ========================================================= */

  const [
    showDownloadLeadForm,
    setShowDownloadLeadForm,
  ] = useState(false);

  const [
    downloadAfterSubmit,
    setDownloadAfterSubmit,
  ] = useState(false);
  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setDownloadAfterSubmit(false);
      setShowDownloadLeadForm(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.pathname, location.state, navigate]);

  const DOWNLOAD_ACCESS_KEY =
    "jaypro_estimate_report_download_access";

  /* =========================================================
     PACKAGE DATA

     IMPORTANT:
     baseRate = overall construction rate per sq.ft.

     All other price values below are based on the
     package table you provided.
  ========================================================= */

  const packages = {
    Premium: {
      name: "Silver",

      baseRate: 1800,

      designConsultation: "Free",

      drawings:
        "2D Floor Plan & 3D Elevation",

      structuralDesign: "Included",

      steel: "Kamdhenu / SAIL",

      cement: "Ultratech",

      aggregate: "Gaya / Koderma",

      bricks: "A1 Quality",

      rcc: "M20",

      /* ===============================
         KITCHEN
      =============================== */

      kitchenDadoRate: 40,

      sinkRate: 3000,

      sinkFaucetRate: 1000,

      sinkAccessories:
        "Parryware",

      /* ===============================
         BATHROOM
      =============================== */

      bathroomDadoRate: 30,

      sanitaryPer1000: 30000,

      sanitaryBrands: "Parryware",

      cpvc: "Prince",

      bathroomDoor: "Aluminium",

      /* ===============================
         DOORS & WINDOWS
      =============================== */

      mainDoorRate: 30000,

      mainDoor:
        "Iron Door including accessories",

      internalDoorRate: 10000,

      internalDoor:
        "MR Ply Board Waterproof With Laminates",

      pujaDoorRate: 4000,

      pujaDoor:
        "WPC With Frame",

      windowRate: 300,

      windows:
        "Aluminium Windows",

      windowGrills: "No",

      /* ===============================
         PAINT
      =============================== */

      interiorPaint:
        "Asian Paints Tractor Shyne Emulsion",

      exteriorPaint:
        "Asian Paints Apex Exterior Emulsion",

      /* ===============================
         FLOORING
      =============================== */

      livingFloorRate: 60,

      livingFloor:
        "Varmora / Kajaria",

      roomKitchenFloorRate: 60,

      roomKitchenFloor:
        "Varmora / Kajaria",

      balconyFloorRate: 60,

      balconyFloor:
        "Varmora / Kajaria",

      staircaseRate: 60,

      parkingRate: 40,

      /* ===============================
         ELECTRICAL
      =============================== */

      wiring: "Anchor",

      switch: "Anchor",

      socket: "Anchor",

      ups: "Malhotra",

      /* ===============================
         OTHER
      =============================== */

      tank:
        "1500 Ltrs Apollo / equivalent",

      septicTank: "800 Ltrs",

      railing: "MS Railing",

      mumtyRate: 1200,

      parapetRate: 240,

      foundationRate: 400,

      foundation:
        "R.C.C. 6 inch",
    },

    Platinum: {
      name: "Gold",

      baseRate: 2000,

      designConsultation: "Free",

      drawings:
        "2D Floor Plan & 3D Elevation",

      structuralDesign: "Included",

      steel: "Jindal / JSW",

      cement: "ACC / Ultratech",

      aggregate: "Gaya / Koderma",

      bricks: "A1 Quality",

      rcc: "M20",

      kitchenDadoRate: 60,

      sinkRate: 6000,

      sinkFaucetRate: 2000,

      sinkAccessories:
        "Parryware / Hindware",

      bathroomDadoRate: 40,

      sanitaryPer1000: 40000,

      sanitaryBrands:
        "Parryware / Hindware",

      cpvc: "Supreme",

      bathroomDoor: "UPVC / WPC",

      mainDoorRate: 40000,

      mainDoor:
        "Stainless Steel including accessories",

      internalDoorRate: 11000,

      internalDoor:
        "Century Ply Board Waterproof With Laminates",

      pujaDoorRate: 5000,

      pujaDoor:
        "WPC With Frame",

      windowRate: 400,

      windows: "UPVC Windows",

      windowGrills: "Yes",

      interiorPaint:
        "Asian Paints Tractor Shyne Emulsion",

      exteriorPaint:
        "Asian Paints Apex Exterior Emulsion",

      livingFloorRate: 80,

      livingFloor:
        "Kajaria / Johnson",

      roomKitchenFloorRate: 80,

      roomKitchenFloor:
        "Kajaria / Johnson",

      balconyFloorRate: 80,

      balconyFloor:
        "Kajaria / Johnson",

      staircaseRate: 70,

      parkingRate: 70,

      wiring:
        "Anchor / Polycab",

      switch:
        "Anchor / Polycab",

      socket:
        "Anchor / Polycab",

      ups:
        "Malhotra / Anchor",

      tank:
        "2000 Ltrs Sintex / equivalent",

      septicTank: "1000 Ltrs",

      railing:
        "SS 304 Grade Railing",

      mumtyRate: 1200,

      parapetRate: 240,

      foundationRate: 500,

      foundation:
        "R.C.C. 8 inch",
    },

    Royal: {
      name: "Platinum",

      baseRate: 2300,

      designConsultation: "Free",

      drawings:
        "2D Floor Plan & 3D Elevation",

      structuralDesign: "Included",

      steel:
        "TATA Tiscon / Jindal",

      cement:
        "ACC / Ultratech / Concreto",

      aggregate: "Gaya / Koderma",

      bricks: "A1 Quality",

      rcc: "M20",

      kitchenDadoRate: 80,

      sinkRate: 6000,

      sinkFaucetRate: 2000,

      sinkAccessories:
        "Parryware / Hindware / Jaquar",

      bathroomDadoRate: 50,

      sanitaryPer1000: 50000,

      sanitaryBrands:
        "Parryware / Hindware / Jaguar",

      cpvc:
        "Supreme / Ashirvad",

      bathroomDoor: "UPVC / WPC",

      mainDoorRate: 50000,

      mainDoor:
        "Stainless Steel / Teak Wood including accessories",

      internalDoorRate: 13000,

      internalDoor:
        "Green / Century Ply Board Waterproof With Laminates",

      pujaDoorRate: 6000,

      pujaDoor:
        "WPC With Frame",

      windowRate: 500,

      windows: "UPVC Windows",

      windowGrills: "Yes",

      interiorPaint:
        "Asian Paints Royale Luxury Emulsion",

      exteriorPaint:
        "Asian Paints Apex Ultima Exterior Emulsion",

      livingFloorRate: 100,

      livingFloor:
        "Kajaria / Johnson / Somany",

      roomKitchenFloorRate: 100,

      roomKitchenFloor:
        "Kajaria / Johnson / Somany",

      balconyFloorRate: 100,

      balconyFloor:
        "Kajaria / Johnson / Somany",

      staircaseRate: 80,

      parkingRate: 70,

      wiring:
        "Anchor / Polycab / Havells",

      switch:
        "Anchor / Polycab / Havells",

      socket:
        "Anchor / Polycab / Havells",

      ups:
        "Anchor / Polycab",

      tank:
        "2000 Ltrs Sintex / equivalent",

      /*
        Kept exactly as supplied:
        12000 Ltrs
      */

      septicTank: "12000 Ltrs",

      railing:
        "SS 304 Grade Railing With Glass",

      mumtyRate: 1200,

      parapetRate: 240,

      foundationRate: 640,

      foundation:
        "R.C.C. 10 inch",
    },
  };

  const activePackage =
    packages[selectedPackage];

  /* =========================================================
     LIVE PLOT AREA
  ========================================================= */

  const currentPlotArea = useMemo(() => {
    return (
      (Number(width) || 0) *
      (Number(length) || 0)
    );
  }, [width, length]);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const changeQuantity = (
    key,
    value
  ) => {
    setQuantities(
      (previous) => ({
        ...previous,

        [key]:
          Math.max(
            Number(value) || 0,
            0
          ),
      })
    );
  };

  /* =========================================================
     MAIN COST CALCULATIONS
  ========================================================= */

  const calculations = useMemo(() => {
    if (!calculatedData) {
      return null;
    }

    const {
      width,
      length,
      floors,
      quantities,
      packageName,
    } = calculatedData;

    const packageData =
      packages[packageName];

    /* =====================================================
       AREA
    ===================================================== */

    const plotArea =
      width * length;

    /*
      Total construction area.

      Here we assume each selected floor uses the
      full entered plot area.

      Example:
      1000 sq.ft × 2 floors = 2000 sq.ft
    */

    const constructionArea =
      plotArea * floors;

    /* =====================================================
       BASE PACKAGE COST
    ===================================================== */

    const baseConstructionCost =
      constructionArea *
      packageData.baseRate;

    /* =====================================================
       INCLUDED ALLOWANCE

       THESE VALUES ARE NOT ADDED TO FINAL COST.

       They represent the maximum allowance available
       inside the package.
    ===================================================== */

    const kitchenDado =
      quantities.kitchenDadoArea *
      packageData.kitchenDadoRate;

    const kitchenSink =
      quantities.kitchens *
      packageData.sinkRate;

    const kitchenFaucet =
      quantities.kitchens *
      packageData.sinkFaucetRate;

    const bathroomDado =
      quantities.bathroomDadoArea *
      packageData.bathroomDadoRate;

    const sanitary =
      (constructionArea / 1000) *
      packageData.sanitaryPer1000;

    const mainDoor =
      packageData.mainDoorRate;

    const internalDoors =
      quantities.internalDoors *
      packageData.internalDoorRate;

    const pujaDoors =
      quantities.pujaDoors *
      packageData.pujaDoorRate;

    const windows =
      quantities.windowArea *
      packageData.windowRate;

    const livingFloor =
      quantities.livingDiningFloorArea *
      packageData.livingFloorRate;

    const roomKitchenFloor =
      quantities.roomKitchenFloorArea *
      packageData.roomKitchenFloorRate;

    const balconyFloor =
      quantities.balconyArea *
      packageData.balconyFloorRate;

    const staircase =
      quantities.staircaseArea *
      packageData.staircaseRate;

    const parking =
      quantities.parkingArea *
      packageData.parkingRate;

    const includedItems = [
      {
        name:
          "Kitchen Ceramic Wall Dado",
        qty: `${quantities.kitchenDadoArea} sq.ft`,
        rate: `₹${packageData.kitchenDadoRate}/sq.ft`,
        amount: kitchenDado,
      },

      {
        name: "Kitchen Sink",
        qty: `${quantities.kitchens} Nos.`,
        rate: `₹${packageData.sinkRate.toLocaleString(
          "en-IN"
        )} each`,
        amount: kitchenSink,
      },

      {
        name: "Sink Faucet",
        qty: `${quantities.kitchens} Nos.`,
        rate: `₹${packageData.sinkFaucetRate.toLocaleString(
          "en-IN"
        )} each`,
        amount: kitchenFaucet,
      },

      {
        name:
          "Bathroom Ceramic Wall Dado",
        qty: `${quantities.bathroomDadoArea} sq.ft`,
        rate: `₹${packageData.bathroomDadoRate}/sq.ft`,
        amount: bathroomDado,
      },

      {
        name:
          "Sanitary & CP Fittings",
        qty: `${constructionArea.toLocaleString(
          "en-IN"
        )} sq.ft`,
        rate: `₹${packageData.sanitaryPer1000.toLocaleString(
          "en-IN"
        )}/1000 sq.ft`,
        amount: sanitary,
      },

      {
        name: "Main Door",
        qty: "1 No.",
        rate: `₹${packageData.mainDoorRate.toLocaleString(
          "en-IN"
        )}`,
        amount: mainDoor,
      },

      {
        name: "Internal Doors",
        qty: `${quantities.internalDoors} Nos.`,
        rate: `₹${packageData.internalDoorRate.toLocaleString(
          "en-IN"
        )} each`,
        amount: internalDoors,
      },

      {
        name: "Puja Room Door",
        qty: `${quantities.pujaDoors} Nos.`,
        rate: `₹${packageData.pujaDoorRate.toLocaleString(
          "en-IN"
        )} each`,
        amount: pujaDoors,
      },

      {
        name: "Windows",
        qty: `${quantities.windowArea} sq.ft`,
        rate: `₹${packageData.windowRate}/sq.ft`,
        amount: windows,
      },

      {
        name:
          "Living & Dining Flooring",
        qty: `${quantities.livingDiningFloorArea} sq.ft`,
        rate: `₹${packageData.livingFloorRate}/sq.ft`,
        amount: livingFloor,
      },

      {
        name:
          "Rooms & Kitchen Flooring",
        qty: `${quantities.roomKitchenFloorArea} sq.ft`,
        rate: `₹${packageData.roomKitchenFloorRate}/sq.ft`,
        amount: roomKitchenFloor,
      },

      {
        name:
          "Balcony / Open Area Flooring",
        qty: `${quantities.balconyArea} sq.ft`,
        rate: `₹${packageData.balconyFloorRate}/sq.ft`,
        amount: balconyFloor,
      },

      {
        name:
          "Staircase Flooring",
        qty: `${quantities.staircaseArea} sq.ft`,
        rate: `₹${packageData.staircaseRate}/sq.ft`,
        amount: staircase,
      },

      {
        name:
          "Parking Tiles",
        qty: `${quantities.parkingArea} sq.ft`,
        rate: `₹${packageData.parkingRate}/sq.ft`,
        amount: parking,
      },
    ];

    const totalIncludedAllowance =
      includedItems.reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

    /* =====================================================
       EXTRA CHARGES

       These are added separately because your table
       specifically gives separate rates.
    ===================================================== */

    const mumtyCost =
      quantities.mumtyArea *
      packageData.mumtyRate;

    const parapetCost =
      quantities.parapetArea *
      packageData.parapetRate;

    const foundationCost =
      quantities.foundationArea *
      packageData.foundationRate;

    const extraItems = [
      {
        name: "Mumty",
        qty: `${quantities.mumtyArea} sq.ft`,
        rate: `₹${packageData.mumtyRate}/sq.ft`,
        amount: mumtyCost,
      },

      {
        name:
          "Brick Parapet Wall (4 inch)",
        qty: `${quantities.parapetArea} sq.ft`,
        rate: `₹${packageData.parapetRate}/sq.ft`,
        amount: parapetCost,
      },

      {
        name:
          "Basement / Raft Foundation",
        qty: `${quantities.foundationArea} sq.ft`,
        rate: `₹${packageData.foundationRate}/sq.ft`,
        amount: foundationCost,
      },
    ];

    const extraCost =
      extraItems.reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

    /* =====================================================
       FINAL TOTAL

       Base Package + Separately Chargeable Extras
    ===================================================== */

    const totalEstimatedCost =
      baseConstructionCost +
      extraCost;

    return {
      plotArea,

      constructionArea,

      baseConstructionCost,

      includedItems,

      totalIncludedAllowance,

      extraItems,

      extraCost,

      totalEstimatedCost,

      packageData,
    };
  }, [calculatedData]);

  /* =========================================================
     CALCULATE
  ========================================================= */

  const handleCalculate = () => {
    const numericWidth =
      Number(width);

    const numericLength =
      Number(length);

    const numericFloors =
      Number(floors);

    if (
      !numericWidth ||
      numericWidth <= 0
    ) {
      alert(
        "Please enter a valid plot width."
      );

      return;
    }

    if (
      !numericLength ||
      numericLength <= 0
    ) {
      alert(
        "Please enter a valid plot length."
      );

      return;
    }

    if (
      !numericFloors ||
      numericFloors <= 0
    ) {
      alert(
        "Please select number of floors."
      );

      return;
    }

    setCalculatedData({
      width: numericWidth,

      length: numericLength,

      floors: numericFloors,

      quantities: {
        ...quantities,
      },

      packageName:
        selectedPackage,
    });

    setShowResults(true);

    setOpenSections({
      summary: true,
      inclusion: true,
      extra: true,
      specification: true,
    });

    setTimeout(() => {
      document
        .getElementById(
          "complete-estimate-report"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 200);
  };

  /* =========================================================
     FORMAT CURRENCY
  ========================================================= */

  const formatCurrency = (
    amount
  ) => {
    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",

        currency: "INR",

        maximumFractionDigits: 0,
      }
    ).format(
      Math.round(
        Number(amount) || 0
      )
    );
  };

  /* =========================================================
     COMPACT MONEY
  ========================================================= */

  const compactCurrency = (
    amount
  ) => {
    const value =
      Number(amount) || 0;

    if (
      value >= 10000000
    ) {
      return `₹${(
        value / 10000000
      ).toFixed(2)} Cr`;
    }

    if (
      value >= 100000
    ) {
      return `₹${(
        value / 100000
      ).toFixed(2)} Lakh`;
    }

    return formatCurrency(
      value
    );
  };

  /* =========================================================
     TOGGLE
  ========================================================= */

  const toggleSection = (
    key
  ) => {
    setOpenSections(
      (previous) => ({
        ...previous,

        [key]:
          !previous[key],
      })
    );
  };

  /* =========================================================
     PRINT / DOWNLOAD REPORT
  ========================================================= */

  const downloadReport = () => {
    setShowDownloadLeadForm(
      false
    );

    setTimeout(() => {
      window.print();
    }, 250);
  };

  const handleDownloadReport =
    () => {
      try {
        const hasAccess =
          localStorage.getItem(
            DOWNLOAD_ACCESS_KEY
          );

        if (
          hasAccess ===
          "true"
        ) {
          downloadReport();

          return;
        }
      } catch {
        // ignore
      }

      setDownloadAfterSubmit(
        true
      );

      setShowDownloadLeadForm(
        true
      );
    };

  const handleDownloadLeadSuccess =
    () => {
      try {
        localStorage.setItem(
          DOWNLOAD_ACCESS_KEY,
          "true"
        );
      } catch {
        // ignore
      }

      setShowDownloadLeadForm(
        false
      );

      if (
        downloadAfterSubmit
      ) {
        setDownloadAfterSubmit(
          false
        );

        setTimeout(() => {
          window.print();
        }, 300);
      }
    };

  const closeDownloadLeadForm =
    () => {
      setShowDownloadLeadForm(
        false
      );

      setDownloadAfterSubmit(
        false
      );
    };

  /* =========================================================
     SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow =
      showDownloadLeadForm
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [
    showDownloadLeadForm,
  ]);

  /* =========================================================
     ESC
  ========================================================= */

  useEffect(() => {
    const handleEscape = (
      event
    ) => {
      if (
        event.key ===
          "Escape" &&
        showDownloadLeadForm
      ) {
        closeDownloadLeadForm();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [
    showDownloadLeadForm,
  ]);

  return (
    <>
      <main className="min-h-screen bg-slate-50">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="bg-[#07345b] text-white">

          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-7 sm:px-6 lg:px-8">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600 text-2xl shadow-lg">

              <FaCalculator />

            </div>

            <div>

              <h1 className="text-2xl font-black sm:text-3xl">

                Construction Budget Calculator

              </h1>

              <p className="mt-1 text-sm text-blue-100 sm:text-base">

                Calculate your project
                according to package
                specifications and actual
                allowance rates.

              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            CALCULATOR
        ===================================================== */}

        <section className="px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-7 flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#07345b]">

                  <FaRulerCombined />

                </div>

                <div>

                  <h2 className="text-xl font-black text-[#07345b]">

                    Enter Project Details

                  </h2>

                  <p className="mt-1 text-sm text-gray-500">

                    Enter plot size,
                    floors, package and
                    quantities required
                    for your project.

                  </p>

                </div>

              </div>

              {/* =================================================
                  BASIC DETAILS
              ================================================= */}

              <div className="grid gap-4 md:grid-cols-4">

                <InputField
                  label="Width"
                  value={width}
                  onChange={
                    setWidth
                  }
                />

                <InputField
                  label="Length"
                  value={length}
                  onChange={
                    setLength
                  }
                />

                <div>

                  <label className="mb-2 block text-sm font-black text-[#07345b]">

                    Floors

                  </label>

                  <select
                    value={floors}
                    onChange={(
                      event
                    ) =>
                      setFloors(
                        event.target
                          .value
                      )
                    }
                    className="h-[52px] w-full rounded-xl border-2 border-gray-500 bg-white px-4 text-sm font-bold text-gray-700 outline-none focus:border-[#07345b]"
                  >

                    <option value="">
                      Select Floors
                    </option>

                    <option value={1}>
                      Ground Floor
                    </option>

                    <option value={2}>
                      G + 1
                    </option>

                    <option value={3}>
                      G + 2
                    </option>

                    <option value={4}>
                      G + 3
                    </option>

                    <option value={5}>
                      G + 4
                    </option>

                    <option value={6}>
                      G + 5
                    </option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-black text-[#07345b]">

                    Package

                  </label>

                  <select
                    value={
                      selectedPackage
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedPackage(
                        event.target
                          .value
                      )
                    }
                    className="h-[52px] w-full rounded-xl border-2 border-gray-500 bg-white px-4 text-sm font-bold text-gray-700 outline-none focus:border-[#07345b]"
                  >

                    <option value="Premium">
                      Silver
                    </option>

                    <option value="Platinum">
                      Gold
                    </option>

                    <option value="Royal">
                      Platinum
                    </option>

                  </select>

                </div>

              </div>

              {/* =================================================
                  PLOT AREA
              ================================================= */}

              <div className="mt-5">

                <label className="mb-2 block text-sm font-black text-[#07345b]">

                  Plot Area [sq.ft]

                </label>

                <div className="flex h-[52px] items-center rounded-xl border-2 border-gray-500 bg-gray-50 px-4">

                  <strong className="text-[#07345b]">

                    {currentPlotArea.toLocaleString(
                      "en-IN"
                    )}

                  </strong>

                  <span className="ml-2 text-sm text-gray-500">

                    sq.ft

                  </span>

                </div>

              </div>

              {/* =================================================
                  PACKAGE QUICK SUMMARY
              ================================================= */}

              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <InfoBox
                  title="Base Rate"
                  value={`₹${activePackage.baseRate.toLocaleString(
                    "en-IN"
                  )}/sq.ft`}
                />

                <InfoBox
                  title="Steel"
                  value={
                    activePackage.steel
                  }
                />

                <InfoBox
                  title="Cement"
                  value={
                    activePackage.cement
                  }
                />

              </div>

              {/* =================================================
                  QUANTITY DETAILS
              ================================================= */}

              

              {/* =================================================
                  EXTRA WORK
              ================================================= */}

           

              {/* =================================================
                  CALCULATE
              ================================================= */}

              <button
                type="button"
                onClick={
                  handleCalculate
                }
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#07345b] px-6 py-4 text-base font-black text-white shadow-lg transition hover:bg-red-600 sm:text-lg"
              >

                <FaCalculator />

                Calculate Estimate

                <FaArrowRight />

              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            BEFORE RESULT
        ===================================================== */}

        {!showResults && (

          <section className="px-4 pb-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">

              <FaCalculator className="mx-auto text-3xl text-[#07345b]" />

              <h2 className="mt-4 text-xl font-black text-[#07345b]">

                Your Package Estimate
                Will Appear Here

              </h2>

            </div>

          </section>

        )}

        {/* =====================================================
            REPORT
        ===================================================== */}

        {showResults &&
          calculations && (

            <div
              id="complete-estimate-report"
              className="scroll-mt-20"
            >

              {/* =================================================
                  TOTAL
              ================================================= */}

              <section className="px-4 pb-6 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                 <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-[#07345b] p-6 text-white shadow-xl sm:p-8">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                      <div>

                        <p className="text-sm font-semibold text-red-100">

                          Final Estimated
                          Construction Cost

                        </p>

                        <h2 className="mt-2 text-3xl font-black sm:text-4xl">

                          {compactCurrency(
                            calculations.totalEstimatedCost
                          )}

                        </h2>

                        <p className="mt-2 text-sm text-red-100">

                          {formatCurrency(
                            calculations.totalEstimatedCost
                          )}

                        </p>

                      </div>

                      <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">

                        <p className="text-xs text-red-100">

                          Selected Package

                        </p>

                        <p className="mt-1 text-xl font-black">

                          {
                            calculatedData.packageName
                          }

                        </p>

                        <p className="mt-1 text-sm">

                          ₹
                          {calculations.packageData.baseRate.toLocaleString(
                            "en-IN"
                          )}
                          /sq.ft

                        </p>

                      </div>

                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">

                      <ResultCard
                        title="Plot Area"
                        value={`${calculations.plotArea.toLocaleString(
                          "en-IN"
                        )} sq.ft`}
                      />

                      <ResultCard
                        title="Construction Area"
                        value={`${calculations.constructionArea.toLocaleString(
                          "en-IN"
                        )} sq.ft`}
                      />

                      <ResultCard
                        title="No. of Floors"
                        value={
                          calculatedData.floors
                        }
                      />

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  COST SUMMARY
              ================================================= */}

              <section className="px-4 py-5 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <ReportHeader
                    title="Cost Calculation"
                    open={
                      openSections.summary
                    }
                    onClick={() =>
                      toggleSection(
                        "summary"
                      )
                    }
                  />

                  {openSections.summary && (

                    <div className="rounded-b-2xl border border-t-0 border-gray-200 bg-white p-5">

                      <div className="space-y-4">

                        <CalculationRow
                          title="Base Construction Cost"
                          formula={`${calculations.constructionArea.toLocaleString(
                            "en-IN"
                          )} sq.ft × ₹${calculations.packageData.baseRate.toLocaleString(
                            "en-IN"
                          )}`}
                          value={
                            calculations.baseConstructionCost
                          }
                          formatCurrency={
                            formatCurrency
                          }
                        />

                        <CalculationRow
                          title="Additional Chargeable Work"
                          formula="Mumty + Parapet + Raft / Foundation"
                          value={
                            calculations.extraCost
                          }
                          formatCurrency={
                            formatCurrency
                          }
                        />

                      </div>

                      <div className="mt-5 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4">

                        <strong className="text-[#07345b]">

                          Final Estimate

                        </strong>

                        <strong className="text-xl text-emerald-700">

                          {formatCurrency(
                            calculations.totalEstimatedCost
                          )}

                        </strong>

                      </div>

                    </div>

                  )}

                </div>

              </section>

              {/* =================================================
                  INCLUDED ALLOWANCE
              ================================================= */}

              <section className="px-4 py-5 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <ReportHeader
                    title="Included Package Allowance"
                    open={
                      openSections.inclusion
                    }
                    onClick={() =>
                      toggleSection(
                        "inclusion"
                      )
                    }
                  />

                  {openSections.inclusion && (

                    <div className="overflow-x-auto rounded-b-2xl border border-t-0 border-gray-200 bg-white">

                      <div className="border-b border-sky-100 bg-sky-50 p-4">

                        <p className="flex items-start gap-2 text-xs leading-5 text-gray-600">

                          <FaInfoCircle className="mt-0.5 shrink-0 text-sky-700" />

                          These values are
                          allowances included
                          within your selected
                          package. They are
                          shown for transparency
                          and are not added again
                          to the base construction
                          cost.

                        </p>

                      </div>

                      <table className="w-full min-w-[700px]">

                        <thead className="bg-gray-50">

                          <tr>

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              ITEM
                            </th>

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              QUANTITY
                            </th>

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              PACKAGE RATE
                            </th>

                            <th className="px-4 py-3 text-right text-xs font-black text-[#07345b]">
                              ALLOWANCE VALUE
                            </th>

                          </tr>

                        </thead>

                        <tbody>

                          {calculations.includedItems.map(
                            (
                              item
                            ) => (

                              <tr
                                key={
                                  item.name
                                }
                                className="border-t border-gray-100"
                              >

                                <td className="px-4 py-3 text-sm font-semibold text-gray-700">

                                  {
                                    item.name
                                  }

                                </td>

                                <td className="px-4 py-3 text-sm text-gray-500">

                                  {
                                    item.qty
                                  }

                                </td>

                                <td className="px-4 py-3 text-sm text-gray-500">

                                  {
                                    item.rate
                                  }

                                </td>

                                <td className="px-4 py-3 text-right text-sm font-black text-[#07345b]">

                                  {formatCurrency(
                                    item.amount
                                  )}

                                </td>

                              </tr>

                            )
                          )}

                        </tbody>

                        <tfoot>

                          <tr className="border-t-2 border-[#07345b] bg-slate-50">

                            <td
                              colSpan={3}
                              className="px-4 py-4 font-black text-[#07345b]"
                            >

                              Total Included
                              Allowance Value

                            </td>

                            <td className="px-4 py-4 text-right text-lg font-black text-[#07345b]">

                              {formatCurrency(
                                calculations.totalIncludedAllowance
                              )}

                            </td>

                          </tr>

                        </tfoot>

                      </table>

                    </div>

                  )}

                </div>

              </section>

              {/* =================================================
                  EXTRA CHARGES
              ================================================= */}

              <section className="px-4 py-5 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <ReportHeader
                    title="Additional Chargeable Work"
                    open={
                      openSections.extra
                    }
                    onClick={() =>
                      toggleSection(
                        "extra"
                      )
                    }
                  />

                  {openSections.extra && (

                    <div className="overflow-x-auto rounded-b-2xl border border-t-0 border-gray-200 bg-white">

                      <table className="w-full min-w-[650px]">

                        <thead>

                          <tr className="bg-gray-50">

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              WORK
                            </th>

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              AREA
                            </th>

                            <th className="px-4 py-3 text-left text-xs font-black text-[#07345b]">
                              RATE
                            </th>

                            <th className="px-4 py-3 text-right text-xs font-black text-[#07345b]">
                              COST
                            </th>

                          </tr>

                        </thead>

                        <tbody>

                          {calculations.extraItems.map(
                            (
                              item
                            ) => (

                              <tr
                                key={
                                  item.name
                                }
                                className="border-t border-gray-100"
                              >

                                <td className="px-4 py-3 text-sm font-semibold text-gray-700">

                                  {
                                    item.name
                                  }

                                </td>

                                <td className="px-4 py-3 text-sm text-gray-500">

                                  {
                                    item.qty
                                  }

                                </td>

                                <td className="px-4 py-3 text-sm text-gray-500">

                                  {
                                    item.rate
                                  }

                                </td>

                                <td className="px-4 py-3 text-right text-sm font-black text-[#07345b]">

                                  {formatCurrency(
                                    item.amount
                                  )}

                                </td>

                              </tr>

                            )
                          )}

                        </tbody>

                        <tfoot>

                          <tr className="border-t-2 border-red-500 bg-rose-50">

                            <td
                              colSpan={3}
                              className="px-4 py-4 font-black text-[#07345b]"
                            >

                              Total Extra
                              Charges

                            </td>

                            <td className="px-4 py-4 text-right text-lg font-black text-[#07345b]">

                              {formatCurrency(
                                calculations.extraCost
                              )}

                            </td>

                          </tr>

                        </tfoot>

                      </table>

                    </div>

                  )}

                </div>

              </section>

              {/* =================================================
                  PACKAGE SPECIFICATIONS
              ================================================= */}

              <section className="px-4 py-5 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <ReportHeader
                    title={`${calculatedData.packageName} Package Specifications`}
                    open={
                      openSections.specification
                    }
                    onClick={() =>
                      toggleSection(
                        "specification"
                      )
                    }
                  />

                  {openSections.specification && (

                    <div className="rounded-b-2xl border border-t-0 border-gray-200 bg-white p-5">

                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        <SpecificationCard
                          icon={
                            <FaCubes />
                          }
                          title="Structure"
                          items={[
                            [
                              "Steel",
                              calculations.packageData.steel,
                            ],

                            [
                              "Cement",
                              calculations.packageData.cement,
                            ],

                            [
                              "Aggregate",
                              calculations.packageData.aggregate,
                            ],

                            [
                              "Bricks",
                              calculations.packageData.bricks,
                            ],

                            [
                              "RCC Mix",
                              calculations.packageData.rcc,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaUtensils />
                          }
                          title="Kitchen"
                          items={[
                            [
                              "Wall Dado",
                              `Up to ₹${calculations.packageData.kitchenDadoRate}/sq.ft`,
                            ],

                            [
                              "Sink",
                              `Up to ₹${calculations.packageData.sinkRate.toLocaleString(
                                "en-IN"
                              )}`,
                            ],

                            [
                              "Faucet",
                              `Up to ₹${calculations.packageData.sinkFaucetRate.toLocaleString(
                                "en-IN"
                              )}`,
                            ],

                            [
                              "Accessories",
                              calculations.packageData.sinkAccessories,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaBath />
                          }
                          title="Bathroom"
                          items={[
                            [
                              "Wall Dado",
                              `Up to ₹${calculations.packageData.bathroomDadoRate}/sq.ft`,
                            ],

                            [
                              "Sanitary & CP",
                              `₹${calculations.packageData.sanitaryPer1000.toLocaleString(
                                "en-IN"
                              )}/1000 sq.ft`,
                            ],

                            [
                              "CPVC",
                              calculations.packageData.cpvc,
                            ],

                            [
                              "Door",
                              calculations.packageData.bathroomDoor,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaDoorOpen />
                          }
                          title="Doors"
                          items={[
                            [
                              "Main Door",
                              calculations.packageData.mainDoor,
                            ],

                            [
                              "Internal",
                              calculations.packageData.internalDoor,
                            ],

                            [
                              "Puja Door",
                              calculations.packageData.pujaDoor,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaWindowMaximize />
                          }
                          title="Windows"
                          items={[
                            [
                              "Type",
                              calculations.packageData.windows,
                            ],

                            [
                              "Rate",
                              `₹${calculations.packageData.windowRate}/sq.ft`,
                            ],

                            [
                              "Grills",
                              calculations.packageData.windowGrills,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaPaintRoller />
                          }
                          title="Painting"
                          items={[
                            [
                              "Interior",
                              calculations.packageData.interiorPaint,
                            ],

                            [
                              "Exterior",
                              calculations.packageData.exteriorPaint,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaThLarge />
                          }
                          title="Flooring"
                          items={[
                            [
                              "Living/Dining",
                              `₹${calculations.packageData.livingFloorRate}/sq.ft`,
                            ],

                            [
                              "Rooms/Kitchen",
                              `₹${calculations.packageData.roomKitchenFloorRate}/sq.ft`,
                            ],

                            [
                              "Balcony",
                              `₹${calculations.packageData.balconyFloorRate}/sq.ft`,
                            ],

                            [
                              "Staircase",
                              `₹${calculations.packageData.staircaseRate}/sq.ft`,
                            ],

                            [
                              "Parking",
                              `₹${calculations.packageData.parkingRate}/sq.ft`,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaBolt />
                          }
                          title="Electrical"
                          items={[
                            [
                              "Wiring",
                              calculations.packageData.wiring,
                            ],

                            [
                              "Switch",
                              calculations.packageData.switch,
                            ],

                            [
                              "Socket",
                              calculations.packageData.socket,
                            ],

                            [
                              "UPS Provision",
                              calculations.packageData.ups,
                            ],
                          ]}
                        />

                        <SpecificationCard
                          icon={
                            <FaTools />
                          }
                          title="Others"
                          items={[
                            [
                              "Water Tank",
                              calculations.packageData.tank,
                            ],

                            [
                              "Septic Tank",
                              calculations.packageData.septicTank,
                            ],

                            [
                              "Railing",
                              calculations.packageData.railing,
                            ],

                            [
                              "Foundation",
                              calculations.packageData.foundation,
                            ],
                          ]}
                        />

                      </div>

                    </div>

                  )}

                </div>

              </section>

              {/* =================================================
                  DOWNLOAD
              ================================================= */}

              <section className="px-4 py-8 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row">

                    <div>

                      <h2 className="text-xl font-black text-[#07345b]">

                        Complete Construction
                        Estimate Report

                      </h2>

                      <p className="mt-1 text-sm text-gray-500">

                        Download your complete
                        calculation and package
                        specification.

                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={
                        handleDownloadReport
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#07345b] px-7 py-3.5 text-sm font-black text-white transition hover:bg-red-600 sm:w-auto"
                    >

                      <FaDownload />

                      Download Full
                      Report

                    </button>

                  </div>

                </div>

              </section>

              {/* =================================================
                  DISCLAIMER
              ================================================= */}

              <section className="px-4 pb-12 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                  <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">

                    <FaInfoCircle className="mt-0.5 shrink-0 text-amber-600" />

                    <p className="text-xs leading-6 text-gray-600">

                      Package item values
                      shown above represent
                      maximum included
                      allowances based on
                      the selected package.
                      They are not added
                      separately to the
                      package construction
                      rate. Mumty, parapet
                      wall and basement /
                      raft foundation are
                      calculated separately
                      according to the rates
                      supplied. Final cost
                      can vary according to
                      drawings, quantities,
                      customization and site
                      conditions.

                    </p>

                  </div>

                </div>

              </section>

            </div>

          )}

      </main>

      {/* =========================================================
          LEAD FORM BEFORE DOWNLOAD
      ========================================================= */}

      {showDownloadLeadForm && (

        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm"
          onClick={
            closeDownloadLeadForm
          }
        >

          <div
            className="relative my-auto w-full max-w-[350px]"
            onClick={(
              event
            ) =>
              event.stopPropagation()
            }
          >

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">

              <LeadForm
                onSuccess={
                  handleDownloadLeadSuccess
                }
                onClose={closeDownloadLeadForm}
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div>

      <label className="mb-2 block text-sm font-black text-[#07345b]">

        {label} [ft]

      </label>

      <input
        type="number"
        min="1"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        className="h-[52px] w-full rounded-xl border-2 border-gray-500 bg-white px-4 text-sm font-bold text-gray-700 outline-none transition focus:border-[#07345b]"
      />

    </div>
  );
};

/* =========================================================
   QUANTITY INPUT
========================================================= */

const QuantityInput = ({
  label,
  unit,
  value,
  onChange,
}) => {
  return (
    <div>

      <label className="mb-2 block text-xs font-bold text-gray-600">

        {label}

      </label>

      <div className="relative">

        <input
          type="number"
          min="0"
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value
            )
          }
          className="h-[48px] w-full rounded-xl border border-gray-400 bg-white px-4 pr-16 text-sm font-bold text-gray-700 outline-none focus:border-[#07345b]"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">

          {unit}

        </span>

      </div>

    </div>
  );
};

/* =========================================================
   INFO BOX
========================================================= */

const InfoBox = ({
  title,
  value,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

      <p className="text-xs text-gray-500">

        {title}

      </p>

      <p className="mt-1 text-sm font-black text-[#07345b]">

        {value}

      </p>

    </div>
  );
};

/* =========================================================
   RESULT CARD
========================================================= */

const ResultCard = ({
  title,
  value,
}) => {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">

      <p className="text-xs text-red-100">

        {title}

      </p>

      <p className="mt-1 font-black">

        {value}

      </p>

    </div>
  );
};

/* =========================================================
   REPORT HEADER
========================================================= */

const ReportHeader = ({
  title,
  open,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-t-2xl bg-gradient-to-r from-[#07345b] to-slate-800 px-5 py-4 text-left text-white border-l-4 border-red-600"
    >

      <span className="font-black">

        {title}

      </span>

      {open ? (
        <FaChevronUp />
      ) : (
        <FaChevronDown />
      )}

    </button>
  );
};

/* =========================================================
   CALCULATION ROW
========================================================= */

const CalculationRow = ({
  title,
  formula,
  value,
  formatCurrency,
}) => {
  return (
    <div className="flex flex-col justify-between gap-2 border-b border-gray-100 pb-4 sm:flex-row sm:items-center">

      <div>

        <p className="font-bold text-gray-800">

          {title}

        </p>

        <p className="mt-1 text-xs text-gray-500">

          {formula}

        </p>

      </div>

      <p className="text-lg font-black text-[#07345b]">

        {formatCurrency(
          value
        )}

      </p>

    </div>
  );
};

/* =========================================================
   SPECIFICATION CARD
========================================================= */

const SpecificationCard = ({
  icon,
  title,
  items,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#07345b]">

          {icon}

        </div>

        <h3 className="font-black text-[#07345b]">

          {title}

        </h3>

      </div>

      <div className="mt-4 space-y-3">

        {items.map(
          ([label, value]) => (

            <div
              key={label}
              className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2 last:border-0"
            >

              <span className="text-xs text-gray-500">

                {label}

              </span>

              <span className="max-w-[65%] text-right text-xs font-bold text-gray-700">

                {value}

              </span>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Estimate;