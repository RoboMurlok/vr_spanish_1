import { getUniqueImages } from "../../db/images";
import { seed } from "../../../seed";
import { getHero, battonText } from "../../db/hero";

export default function HeroSection() {
  const image = getUniqueImages(seed, 6);
  const { title, subtitle } = getHero(1);

  return (
    <section id="hero" className="hero container">
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <p className="section-sub">{subtitle}</p>
        <div className="hero-actions">
          <a
            href="#/#contact"
            className="hero-btn hero-btn-primary"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {battonText.text_1}
          </a>
          <a
            href="#/#contact"
            className="hero-btn hero-btn-secondary"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {battonText.text_2}
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-placeholder">
          <img src={image} alt="hero" />
        </div>
      </div>
    </section>
  );
}
