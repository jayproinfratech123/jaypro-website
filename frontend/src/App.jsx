import { Toaster } from "react-hot-toast";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import FrontElevationDetails from "./pages/FrontElevationDetails";
import Packages from "./pages/Packages";
import ScrollToTop from "./components/ScrollToTop";
import FrontElevation from "./pages/FrontElevation.jsx";
import ThreeDExteriorDesignDetails from "./pages/ThreeDExteriorDesignDetails";
// ==========================================
// LAYOUT COMPONENTS
// ==========================================
import VastuResult from "./pages/services/VastuResult";
import ThreeDFloorPlan from "./pages/ThreeDFloorPlan";
import ArchitectureAds from "./pages/ArchitectureAds";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import FloorPlanDetails from "./pages/FloorPlanDetails";
import ThreeDExteriorDesign from "./pages/ThreeDExteriorDesign";
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
import Login from "./pages/Login.jsx";
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

import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminCustomers from "./pages/admin/AdminCustomers.jsx";
import AdminBlogs from "./pages/admin/AdminBlogs.jsx";

function App() {
  const location = useLocation();

  // ==========================================
  // CHECK PRICING PAGE
  // ==========================================

  const isPricingPage = location.pathname === "/pricing";

  return (
    <>
      {/* ==========================================
          TOAST NOTIFICATIONS
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

      {!isPricingPage && <Navbar />}

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className="min-h-screen pb-24">

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
              SERVICES MAIN PAGE
          ========================================== */}

          <Route
            path="/services"
            element={<Services />}
          />

          {/* ==========================================
              GOOGLE ADS ARCHITECTURE LANDING PAGE
          ========================================== */}

          <Route
            path="/architecture-design"
            element={<ArchitectureAds />}
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
  path="/services/architecture/3d-floor-plan"
  element={<ThreeDFloorPlan />}
/>
          <Route
            path="/blog"
            element={<Blogs />}
          />
<Route
  path="/2d-floor-plans/:id"
  element={<FloorPlanDetails />}
/>
          <Route
            path="/blogs"
            element={<Blogs />}
          />
          <Route
  path="/services/architecture/front-elevation"
  element={<FrontElevation />}
/>
<Route
  path="/front-elevation/:code"
  element={<FrontElevationDetails />}
/>

<Route
  path="/3d-exterior-design/:id"
  element={<ThreeDExteriorDesignDetails />}
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

          <Route
            path="/login"
            element={<Login />}
          />

          {/* ==========================================
              REGISTER
          ========================================== */}
<Route
  path="/services/architecture/3d-exterior-design"
  element={<ThreeDExteriorDesign />}
/>
<Route
  path="/vastu-result"
  element={<VastuResult />}
/>
          <Route
            path="/register"
            element={<Register />}
          />

          {/* ==========================================
              LEGAL PAGES
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

          {/* ==========================================
              MAIN SERVICE PAGES
          ========================================== */}

          <Route
            path="/services/architecture"
            element={<Architecture />}
          />

          <Route
            path="/services/interior"
            element={<Interior />}
          />

          <Route
            path="/services/turnkey"
            element={<Turnkey />}
          />

          <Route
            path="/services/vastu"
            element={<Vastu />}
          />

          {/* ==========================================
              ARCHITECTURE SERVICE DETAIL
              
              IMPORTANT:
              THIS MUST BE OUTSIDE DASHBOARD
          ========================================== */}

          <Route
            path="/services/architecture/2d-floor-plan"
            element={<TwoDFloorPlan />}
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
              CONTRACTOR
          ========================================== */}

          <Route
            path="/packages"
            element={<Packages />}
          />

          <Route
            path="/services/contractor"
            element={<Contractor />}
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

            {/* DASHBOARD HOME */}

            <Route
              index
              element={<DashboardHome />}
            />

            {/* PROJECTS */}

            <Route
              path="projects"
              element={<MyProjects />}
            />

            {/* LIVE TRACKING */}

            <Route
              path="tracking"
              element={<LiveTracking />}
            />

            {/* DOCUMENTS */}

            <Route
              path="documents"
              element={<Documents />}
            />

            {/* PAYMENTS */}

            <Route
              path="payments"
              element={<Payments />}
            />

            {/* CHAT */}

            <Route
              path="chat"
              element={<Chat />}
            />

          </Route>

          {/* ==========================================
              ADMIN DASHBOARD
          ========================================== */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >

            {/* ADMIN HOME */}

            <Route
              index
              element={<AdminHome />}
            />

            {/* ADMIN PROJECTS */}

            <Route
              path="projects"
              element={<AdminProjects />}
            />

            {/* ADMIN CUSTOMERS */}

            <Route
              path="customers"
              element={<AdminCustomers />}
            />

            {/* ADMIN BLOGS */}

            <Route
              path="blogs"
              element={<AdminBlogs />}
            />

          </Route>

          {/* ==========================================
              404 PAGE
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

      {!isPricingPage && <Footer />}

      {/* ==========================================
          MOBILE BOTTOM NAVIGATION
      ========================================== */}

      {!isPricingPage && <BottomNavigation />}

      {/* ==========================================
          WHATSAPP
      ========================================== */}

      <WhatsAppButton />

    </>
  );
}

export default App;