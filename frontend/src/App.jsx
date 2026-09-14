import { Toaster } from "react-hot-toast";
import { useState } from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

// ==========================================
// PROJECT / DETAIL PAGES
// ==========================================
import ConstructionAds from "./pages/ConstructionAds";
import TurnkeyProjectDetails from "./pages/services/TurnkeyProjectDetails.jsx";
import InteriorDetails from "./pages/InteriorDetails.jsx";
import FrontElevationDetails from "./pages/FrontElevationDetails";
import Packages from "./pages/Packages";
import ScrollToTop from "./components/ScrollToTop";
import FrontElevation from "./pages/FrontElevation.jsx";
import ThreeDExteriorDesignDetails from "./pages/ThreeDExteriorDesignDetails";
import StructuralDesign from "./pages/services/StructuralDesign";

// ==========================================
// ENGINEER SITE VISIT
// ==========================================

import EngineerSiteVisit from "./pages/services/EngineerSiteVisit";

// ==========================================
// OTHER ARCHITECTURE PAGES
// ==========================================

import VastuResult from "./pages/services/VastuResult";
import ThreeDFloorPlan from "./pages/ThreeDFloorPlan";
import FloorPlanDetails from "./pages/FloorPlanDetails";
import ThreeDExteriorDesign from "./pages/ThreeDExteriorDesign";

// ==========================================
// GOOGLE ADS
// ==========================================

import ArchitectureAds from "./pages/ArchitectureAds";

// ==========================================
// LAYOUT COMPONENTS
// ==========================================

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";

// ==========================================
// LEAD FORM
// ==========================================

import LeadForm from "./components/LeadForm.jsx";

// ==========================================
// LEGAL PAGES
// ==========================================

import RefundPolicy from "./components/legal/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolocy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";

// ==========================================
// PUBLIC PAGES
// ==========================================

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

// ==========================================
// PRICING PAGE
// ==========================================

import NavbarPricing from "./pages/NavbarPricing.jsx";

// ==========================================
// NAKSHA PAGE
// ==========================================

import Naksha from "./pages/Naksha.jsx";

// ==========================================
// SERVICE PAGES
// ==========================================

import Architecture from "./pages/services/Architecture.jsx";
import Interior from "./pages/services/Interior.jsx";
import Turnkey from "./pages/services/Trunkey.jsx";
import Vastu from "./pages/services/Vastu.jsx";
import EstimatePage from "./pages/services/Estimate.jsx";
import Contractor from "./pages/services/Contractor.jsx";
import ContractorCategoryDetails from "./pages/services/ContractorCategoryDetails.jsx";

// ==========================================
// ARCHITECTURE SERVICE DETAIL PAGES
// ==========================================

import TwoDFloorPlan from "./pages/services/architecture/TwoDFloorPlan.jsx";

// ==========================================
// CUSTOMER DASHBOARD
// ==========================================

import CustomerDashboard from "./pages/dashboard/CustomerDashboard.jsx";
import DashboardHome from "./pages/dashboard/DashboardHome.jsx";
import MyProjects from "./pages/dashboard/MyProjects.jsx";
import LiveTracking from "./pages/dashboard/LiveTracking.jsx";
import Documents from "./pages/dashboard/Documents.jsx";
import Payments from "./pages/dashboard/Payments.jsx";
import Chat from "./pages/dashboard/Chat.jsx";

// ==========================================
// ADMIN DASHBOARD
// ==========================================

import AdminDashboard from "./admin/components/AdminLayout.jsx";
import AllLeads from "./admin/pages/AllLeads.jsx";
import AdminAccess from "./admin/components/AdminAccess.jsx";
import PreviewLogin from "./admin/pages/PreviewLogin.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminCustomers from "./pages/admin/AdminCustomers.jsx";
import AdminBlogs from "./pages/admin/AdminBlogs.jsx";

// =====================================================
// APP
// =====================================================

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // ==========================================
  // LEAD POPUP
  // ==========================================

  const [showArchitectureLead, setShowArchitectureLead] =
    useState(false);

  // ==========================================
  // CHECK PRICING PAGE
  // ==========================================

  const isPricingPage = location.pathname === "/pricing";
  const isAdminPage = /^\/admin(?:\/|$)/.test(location.pathname);

  // ==========================================
  // OPEN ARCHITECTURE
  // ==========================================

  const openArchitecture = () => {
    setShowArchitectureLead(true);
  };

  // ==========================================
  // CLOSE POPUP
  // ==========================================

  const closeArchitectureLead = () => {
    setShowArchitectureLead(false);
  };

  // ==========================================
  // FORM SUCCESS
  // ==========================================

  const handleArchitectureLeadSuccess = () => {
    setShowArchitectureLead(false);

    navigate("/services/architecture");
  };

  return (
    <>
      {/* ==========================================
          TOAST
      ========================================== */}

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {/* ==========================================
          SCROLL TO TOP
      ========================================== */}

      <ScrollToTop />

      {/* ==========================================
          NAVBAR
      ========================================== */}

      {!isPricingPage && !isAdminPage && (
        <Navbar
          onArchitectureClick={openArchitecture}
        />
      )}

      {/* ==========================================
          ARCHITECTURE LEAD POPUP
      ========================================== */}

      {showArchitectureLead && (
        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
          "
          onClick={closeArchitectureLead}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-lg
              overflow-y-auto
              rounded-2xl
              bg-white
              p-5
              shadow-2xl
              sm:p-6
            "
            onClick={(e) => e.stopPropagation()}
          >
            <LeadForm
              onSuccess={handleArchitectureLeadSuccess}
              onClose={closeArchitectureLead}
            />
          </div>
        </div>
      )}

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className={isAdminPage ? "min-h-screen" : "min-h-screen pb-24"}>

        <Routes>

          {/* ==========================================
              HOME
          ========================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* ==========================================
              ABOUT
          ========================================== */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* ==========================================
              SERVICES
          ========================================== */}

          <Route
            path="/services"
            element={<Services />}
          />

          {/* ==========================================
              ENGINEER SITE VISIT
          ========================================== */}

          <Route
            path="/services/engineer-site-visit"
            element={<EngineerSiteVisit />}
          />

          {/* ==========================================
              ARCHITECTURE GOOGLE ADS
          ========================================== */}

          <Route
            path="/architecture-design"
            element={<ArchitectureAds />}
          />

          {/* ==========================================
              CONSTRUCTION GOOGLE ADS
          ========================================== */}

          <Route
            path="/construction-comp"
            element={<ConstructionAds />}
          />

          {/* ==========================================
              PORTFOLIO
          ========================================== */}

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          {/* ==========================================
              BLOG
          ========================================== */}

          <Route
            path="/blog"
            element={<Blogs />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          {/* ==========================================
              2D FLOOR PLAN DETAILS
          ========================================== */}

          <Route
            path="/2d-floor-plans/:id"
            element={<FloorPlanDetails />}
          />

          {/* ==========================================
              FRONT ELEVATION
          ========================================== */}

          <Route
            path="/services/architecture/front-elevation"
            element={<FrontElevation />}
          />

          <Route
            path="/front-elevation/:code"
            element={<FrontElevationDetails />}
          />

          {/* ==========================================
              3D EXTERIOR DETAILS
          ========================================== */}

          <Route
            path="/3d-exterior-design/:id"
            element={<ThreeDExteriorDesignDetails />}
          />

          {/* ==========================================
              3D FLOOR PLAN
          ========================================== */}

          <Route
            path="/services/architecture/3d-floor-plan"
            element={<ThreeDFloorPlan />}
          />

          {/* ==========================================
              PRICING
          ========================================== */}

          <Route
            path="/pricing"
            element={<NavbarPricing />}
          />

          {/* ==========================================
              CONTACT
          ========================================== */}

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ==========================================
              LOGIN
          ========================================== */}


          {/* ==========================================
              REGISTER
          ========================================== */}

          <Route
            path="/register"
            element={<Register />}
          />

          {/* ==========================================
              VASTU RESULT
          ========================================== */}

          <Route
            path="/vastu-result"
            element={<VastuResult />}
          />

          <Route
            path="/services/vastu-result"
            element={<VastuResult />}
          />

          {/* ==========================================
              LEGAL
          ========================================== */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />

          <Route
            path="/refund-policy"
            element={<RefundPolicy />}
          />

          {/* ==========================================
              NAKSHA
          ========================================== */}

          <Route
            path="/naksha"
            element={<Naksha />}
          />

          {/* =====================================================
              ARCHITECTURE SERVICE
          ===================================================== */}

          <Route
            path="/services/architecture"
            element={<Architecture />}
          >

            {/* 2D FLOOR PLAN */}

            <Route
              path="2d-floor-plan"
              element={<TwoDFloorPlan />}
            />

            {/* 3D EXTERIOR DESIGN */}

            <Route
              path="3d-exterior-design"
              element={<ThreeDExteriorDesign />}
            />

            {/* STRUCTURAL DESIGN */}

            <Route
              path="structural-design"
              element={<StructuralDesign />}
            />

            {/* INTERIOR DESIGN */}

            <Route
              path="interior-design"
              element={<Interior />}
            />

            {/* INTERIOR DETAILS */}

            <Route
              path="interior-design/:slug"
              element={<InteriorDetails />}
            />

            {/* VASTU */}

            <Route
              path="vastu-planning"
              element={<Vastu />}
            />

          </Route>

          {/* ==========================================
              NORMAL INTERIOR PAGE
          ========================================== */}

          <Route
            path="/services/interior"
            element={<Interior />}
          />

          {/* ==========================================
              TURNKEY
          ========================================== */}

          <Route
            path="/services/turnkey"
            element={<Turnkey />}
          />

          <Route
            path="/services/turnkey/project/:slug"
            element={<TurnkeyProjectDetails />}
          />

          {/* ==========================================
              NORMAL VASTU PAGE
          ========================================== */}

          <Route
            path="/services/vastu"
            element={<Vastu />}
          />

          {/* ==========================================
              ESTIMATE
          ========================================== */}

          <Route
            path="/estimate"
            element={<EstimatePage />}
          />

          <Route
            path="/services/estimate"
            element={<EstimatePage />}
          />

          {/* ==========================================
              PACKAGES
          ========================================== */}

          <Route
            path="/packages"
            element={<Packages />}
          />

          {/* ==========================================
              CONTRACTOR
          ========================================== */}

          <Route
            path="/services/contractor"
            element={<Contractor />}
          />

          <Route
            path="/services/contractor/:slug"
            element={<ContractorCategoryDetails />}
          />

          {/* ==========================================
              CUSTOMER DASHBOARD
          ========================================== */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          >

            <Route
              index
              element={<DashboardHome />}
            />

            <Route
              path="projects"
              element={<MyProjects />}
            />

            <Route
              path="tracking"
              element={<LiveTracking />}
            />

            <Route
              path="documents"
              element={<Documents />}
            />

            <Route
              path="payments"
              element={<Payments />}
            />

            <Route
              path="chat"
              element={<Chat />}
            />

          </Route>

          {/* ==========================================
              ADMIN DASHBOARD
          ========================================== */}

          <Route
            element={
              <AdminAccess>
                <AdminDashboard />
              </AdminAccess>
            }
          >

            {["dashboard", "leads", "new-leads", "follow-ups", "interested", "converted", "add-lead", "settings"].map((path) => (
              <Route key={path} path={`/admin/${path}`} element={<AllLeads />} />
            ))}

            <Route
              path="/admin/projects"
              element={<AdminProjects />}
            />

            <Route
              path="/admin/customers"
              element={<AdminCustomers />}
            />

            <Route
              path="/admin/blogs"
              element={<AdminBlogs />}
            />

          </Route>

          <Route path="/admin/preview-login" element={<PreviewLogin />} />

          {/* ==========================================
              404
          ========================================== */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      {!isPricingPage && !isAdminPage && <Footer />}

      {/* ==========================================
          BOTTOM NAVIGATION
      ========================================== */}

      {!isPricingPage && !isAdminPage && <BottomNavigation />}

      {/* ==========================================
          WHATSAPP
      ========================================== */}

      {!isAdminPage && <WhatsAppButton />}

    </>
  );
}

export default App;
