
import React, { Fragment } from "react";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import order from "../../reviewsPage.json";

const map = {
  reviews: <ReviewsSection />,
  services: <ServicesSection />,
  contact: <ContactSection />,
};

export default function Reviews() {
  return (
    <div className="hero">
         {order.map((sectionKey) => (
        <Fragment key={sectionKey}>{map[sectionKey]}</Fragment>
      ))}
    </div>
  );
}
