import React, { Fragment } from "react";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import BannerSection from "../../components/BannerSection";
import TextSection from "../../components/TextSection/TextSection";
import order from "../../reviewsPage.json";

const map = {
  reviews: <ReviewsSection />,
  services: <ServicesSection />,
  text: <TextSection />,
  contact: <ContactSection />,
};

export default function Reviews() {
  return (
    <div>
      <BannerSection />
      {order.map((sectionKey) => (
        <Fragment key={sectionKey}>{map[sectionKey]}</Fragment>
      ))}
    </div>
  );
}
