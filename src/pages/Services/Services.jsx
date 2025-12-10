import React from "react";
import BannerSection from "../../components/BannerSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import TextSection from "../../components/TextSection/TextSection";

export default function Services() {
  return (
    <div className="container">
      <BannerSection />
      <ServicesSection />
      <TextSection />
    </div>
  );
}
