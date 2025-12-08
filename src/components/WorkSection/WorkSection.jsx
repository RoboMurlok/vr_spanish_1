const steps = [
  {
    number: 1,
    title: "Conocimiento y análisis",
    desc: "Discutimos metas, situación actual y definimos tareas clave.",
  },
  {
    number: 2,
    title: "Desarrollo de estrategia",
    desc: "Creamos una estrategia financiera personalizada considerando riesgos y oportunidades.",
  },
  {
    number: 3,
    title: "Implementación",
    desc: "Ejecutamos recomendaciones, creamos plan de acción y configuramos control.",
  },
  {
    number: 4,
    title: "Acompañamiento",
    desc: "Análisis regular, ajustes y soporte en cada etapa.",
  },
];

export default function WorkSection() {
  return (
    <section className="container work">
      <h2 className="section-title">Cómo trabajamos</h2>
      <p className="section-sub">
        Un esquema simple y transparente que ayuda a alcanzar resultados
        rápidamente.
      </p>
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
