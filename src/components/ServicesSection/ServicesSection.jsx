import { services } from "../../db/services";

export default function ServicesSection() {
  return (
    <section id="services" className="container">
      <ul className="grid services-grid">
        {services.map((service, index) => (
          <li className="card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-desc">{service.desc}</p>
            <a
              href={service.link}
              className="card-cta"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {service.cta}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
