import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getUniqueImages } from "../../db/images";
import { seed } from "../../../seed";
import textRandom from "../../textRandom.json";

export default function TextSection() {
  const pathname = useLocation().pathname;

  const [images] = useState(() => getUniqueImages(seed, 10));

  const [randomImage] = useState(() => {
    return images[Math.floor(Math.random() * images.length)];
  });

  const routes = ["/about", "/faq", "/reviews", "/services"];

  // Находим индекс текущего маршрута
  const index = routes.indexOf(pathname);

  // Берем объект из textRandom по индексу, если не найден — берем первый
  const currentText = textRandom[index >= 0 ? index : 0];

  return (
    <section className="hero container">
      <div className="hero-text">
        <h1 className="post-title">{currentText.title}</h1>
        <p className="section-sub">{currentText.content}</p>
      </div>

      <div className="hero-image">
        <div className="hero-img-placeholder">
          <img src={randomImage} alt="hero" />
        </div>
      </div>
    </section>
  );
}
