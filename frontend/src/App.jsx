import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// ==========================================
// LAYOUT COMPONENTS
// ==========================================

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";

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
          MAIN NAVBAR
      ========================================== */}

      <Navbar />

      <main className="min-h-screen pb-24">
        <Routes>

          {/* ==========================================
              PUBLIC ROUTES
          ========================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* ==========================================
              LEGAL ROUTES
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
              NAKSHA ROUTE
          ========================================== */}

          <Route
            path="/naksha"
            element={<Naksha />}
          />

          {/* ==========================================
              SERVICE ROUTES
              
              IMPORTANT:
              LeadForm is NOT handled here.

              ServicesSection opens the existing
              LeadForm directly.
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
              ESTIMATE ROUTES
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
              CONTRACTOR ROUTE
          ========================================== */}

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
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<AdminHome />}
            />

            <Route
              path="projects"
              element={<AdminProjects />}
            />

            <Route
              path="customers"
              element={<AdminCustomers />}
            />

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

      <Footer />

      {/* ==========================================
          MOBILE BOTTOM NAVIGATION
      ========================================== */}

      <BottomNavigation />

      {/* ==========================================
          WHATSAPP BUTTON
      ========================================== */}

      <WhatsAppButton />
    </>
  );
}

export default App;