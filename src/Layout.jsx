import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import { getMeta } from "./db/meta";
import themes from "./themesRandom.json";
import { buildCount } from "../count.js";
import { siteName } from "../siteName";

export default function Layout() {
  useEffect(() => {
    Object.entries(themes[0]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    getMeta(1);

    let brendName = "";

    if (buildCount > siteName.length) {
        brendName = "";
    } else {
      brendName = siteName[buildCount].split(".")[0];
    }

    let tagTitle = document.querySelector("title");
    tagTitle.textContent = brendName;
    if (!tagTitle) {
      tagTitle = document.createElement("title");
      document.head.appendChild(tagTitle);
      tagTitle.textContent = brendName;
    }
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
