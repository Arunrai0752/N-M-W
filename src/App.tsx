import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import AnnouncementBar from "./components/Home/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Cart from "./pages/Cart";
import NotFound from "./pages/StateHandling/NotFound";
import TermsAndCon from "./pages/Policies/TermsAndCon";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import TrackYourOrder from "./pages/TrackYourOrder";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      {/* Global Components */}
      <AnnouncementBar
        messages={[
          "Free milk delivery above ₹500",
          "Fresh cow & buffalo milk daily",
          "Get 10% off on ghee & paneer today!",
        ]}
      />
      <Navbar />

      {/* Routes */}
      <main className="min-h-[80vh] bg-white relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/termsandcondition" element={<TermsAndCon />} />
          <Route path="/trackyourorder" element={<TrackYourOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917427003708"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative w-14 h-14 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
            <FaWhatsapp size={28} />
            {/* Animated Pulse Circle */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping-slow"></span>
          </div>
        </a>
      </main>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
