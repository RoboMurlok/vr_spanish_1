import { steps, text } from "../../db/work";

export default function WorkSection() {

  return (
    <section className="container work">
      <h2 className="section-title">{text.title}</h2>
      <p className="section-sub">{text.subtitle}</p>
      <ul className="grid work-steps">
        {steps.map((step) => (
          <li className="card" key={step.number}>
            <div className="work-number">{step.number}</div>
            <h3 className="card-title">{step.title}</h3>
            <p className="card-desc">{step.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
