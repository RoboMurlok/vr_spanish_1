import { reasons } from "../../db/why";

export default function WhySection() {
  return (
    <section id="why" className="container why">
      <ul className="grid why-grid">
        {reasons.map((reason, index) => (
          <li className="card" key={index}>
            <div className="icon">{reason.icon}</div>
            <h3 className="card-title">{reason.title}</h3>
            <p className="card-desc">{reason.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
