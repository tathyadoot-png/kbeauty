import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import StarBackground from "@/components/effects/StarBackground";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ===== APP LAYOUT (always mounted) ===== */}
      <CustomCursor/>
      <StarBackground/>
      <Navbar />
      <StickySocial />
      <ScrollToTop />

<main className="min-h-screen bg-transparent relative z-10">
          <Outlet />
      </main>

      <Footer />

      {/* ===== LOADER OVERLAY ===== */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="page-loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-text">
                Karishma Dawar
              </h1>
              <p className="text-sm text-muted mt-2 uppercase tracking-wide">
                Full Stack Developer
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-[2px] bg-primary mx-auto mt-4 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainLayout;
