const reasons = [
  {
    icon: "⭐",
    title: "Experiencia & Experticia",
    desc: "Más de 10 años de práctica en planificación financiera, inversiones y gestión de capital.",
  },
  {
    icon: "🔒",
    title: "Fiabilidad",
    desc: "Trabajamos de forma abierta, sin condiciones ocultas, ofreciendo solo recomendaciones verificadas.",
  },
  {
    icon: "📊",
    title: "Enfoque analítico",
    desc: "Cada decisión se basa en datos, análisis y objetivos individuales del cliente.",
  },
  {
    icon: "💬",
    title: "Acompañamiento personalizado",
    desc: "Estamos en contacto y ajustamos la estrategia según cambie la situación financiera.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="container why">
      <h2 className="section-title">Por qué elegirnos</h2>
      <p className="section-sub">
        Nuestro enfoque se basa en la transparencia, la experiencia y
        estrategias financieras reales.
      </p>
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
