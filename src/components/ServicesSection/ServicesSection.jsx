const services = [
  {
    icon: "💼",
    title: "Auditoría financiera",
    desc: "Revisión completa de ingresos, gastos y riesgos financieros.",
    cta: "Registrarse",
    link: "#contact",
  },
  {
    icon: "🔍",
    title: "Optimización de gastos",
    desc: "Revisión de gastos y propuestas de ahorro sin perder calidad de vida.",
    cta: "Saber más",
    link: "#contact",
  },
  {
    icon: "📊",
    title: "Presupuesto personal/familiar",
    desc: "Plan paso a paso para ahorros y control de gastos con objetivos reales.",
    cta: "Crear",
    link: "#contact",
  },
  {
    icon: "📈",
    title: "Planificación de inversiones",
    desc: "Selección de estrategias de inversión según perfil de riesgo y plazos.",
    cta: "Plan",
    link: "#/#contact",
  },
  {
    icon: "⚖️",
    title: "Reducción de deuda",
    desc: "Reestructuración, negociación con acreedores y plan de devolución de deudas.",
    cta: "Ayuda",
    link: "#/#contact",
  },
  {
    icon: "🧾",
    title: "Planificación fiscal",
    desc: "Optimización legal de impuestos: menos pagos, más ganancias.",
    cta: "Detalles",
    link: "#/#contact",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section container">
      <h2 className="section-title">Nuestros servicios</h2>
      <p className="section-sub">
        Soluciones integrales para finanzas personales y corporativas
      </p>
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
