import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Pricing from "./pages/Pricing.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

import CustomerDashboard from "./pages/dashboard/CustomerDashboard.jsx";
import DashboardHome from "./pages/dashboard/DashboardHome.jsx";
import MyProjects from "./pages/dashboard/MyProjects.jsx";
import LiveTracking from "./pages/dashboard/LiveTracking.jsx";
import Documents from "./pages/dashboard/Documents.jsx";
import Payments from "./pages/dashboard/Payments.jsx";
import Chat from "./pages/dashboard/Chat.jsx";

import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminCustomers from "./pages/admin/AdminCustomers.jsx";
import AdminBlogs from "./pages/admin/AdminBlogs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolocy.jsx";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <>
      <Routes>
        {/* Public site */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Customer dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="tracking" element={<LiveTracking />} />
          <Route path="documents" element={<Documents />} />
          <Route path="payments" element={<Payments />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* Admin dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="blogs" element={<AdminBlogs />} />
        </Route>
      </Routes>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}

export default App;