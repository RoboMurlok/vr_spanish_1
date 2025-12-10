import { useLocation } from "react-router-dom";
import textRandom from "../../textRandom.json";

export default function TextSection() {
  const pathname = useLocation().pathname;

  const routes = ["/about", "/faq", "/reviews", "/services"];

  // Находим индекс текущего маршрута
  const index = routes.indexOf(pathname);

  // Берем объект из textRandom по индексу, если не найден — берем первый
  const currentText = textRandom[index >= 0 ? index : 0];
  console.log(textRandom[index].image);

  return (
    <section className="hero container">
      <div className="hero-text">
        <h1 className="post-title">{currentText.title}</h1>
        <p className="card-title">{currentText.content}</p>
      </div>
      <div className="hero-image">
        <div className="hero-img-placeholder">
          <img src={textRandom[index].image} alt="hero" />
        </div>
      </div>
    </section>
  );
}
