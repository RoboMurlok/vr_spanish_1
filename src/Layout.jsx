import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import { getMeta } from "./db/meta";
import themes from "./themesRandom.json";

export default function Layout() {
  useEffect(() => {
    Object.entries(themes[0]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    getMeta(1);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieBanner />
    </>
  );
}
