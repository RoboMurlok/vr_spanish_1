import React from "react";
import { useLocation } from "react-router-dom";
import { banners } from "../db/banner";

export default function BannerSection() {
  const pathname = useLocation().pathname;
;
  const banner = banners[pathname];

  if (!banner) return null;

  return (
    <section className="container banner">
      <h2 className="section-title">{banner.title}</h2>
      <p className="section-sub">{banner.subtitle}</p>
    </section>
  );
}
