import randomReviews from "../../reviewsRandom.json";

export default function ReviewsSection() {
  return (
    <section id="testimonials" className="container">
      <h2 className="section-title">Testimonios de nuestros clientes</h2>
      <p className="section-sub">
        Experiencias reales que hablan de nuestra confiabilidad
      </p>
      <ul className="grid reviews-grid">
        {randomReviews.map((item, index) => (
          <li key={index} className="card review-card">
            <div className="review-avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <h3 className="card-title">{item.name}</h3>
            <span className="review-role">{item.role}</span>
            <p className="card-desc">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
