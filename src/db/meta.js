import { seed } from "../../seed.js";

const arrMeta = [
  "Recursos claros y confiables sobre educación financiera y gestión del dinero, enfocados en información útil y comprensible.",

  "Guías prácticas para mejorar tus conocimientos financieros y tomar decisiones informadas de manera responsable.",

  "Contenido educativo sobre finanzas personales y planificación económica sostenible, basado en información verificable y accesible.",

  "Aprende a administrar tus finanzas con materiales formativos objetivos y prácticos, diseñados para apoyar tu bienestar financiero.",

  "Información transparente sobre educación financiera y planificación económica, presentada de forma clara y orientada al aprendizaje responsable.",

  "Descubre estrategias financieras efectivas y prácticas para gestionar tus ingresos y asegurar estabilidad económica a largo plazo.",

  "Aprende técnicas de ahorro, inversión y planificación financiera diseñadas para proteger tu patrimonio y optimizar tus recursos.",

  "Obtén conocimientos claros y útiles sobre cómo organizar tu presupuesto y tomar decisiones financieras responsables cada día.",

  "Explora métodos prácticos para administrar deudas, planificar tu jubilación y mejorar tu bienestar financiero personal.",

  "Aprende a diversificar tus ingresos y controlar gastos con consejos financieros sencillos y aplicables en la vida diaria.",

  "Conoce estrategias de inversión seguras y responsables que te ayudarán a proteger tu capital y alcanzar tus metas financieras.",

  "Descubre cómo organizar finanzas familiares y personales mediante herramientas y técnicas fáciles de aplicar y seguir.",

  "Aprende a gestionar riesgos financieros y establecer un fondo de emergencia para mantener estabilidad económica ante imprevistos.",

  "Obtén recursos educativos prácticos para mejorar tu planificación financiera y tomar decisiones inteligentes con tu dinero.",

  "Aprende hábitos financieros saludables y estrategias de ahorro e inversión que fortalecen tu seguridad y bienestar económico.",
];

export function getMeta(index = 0) {
  const metaIndex = (seed * 7 + index * 13) % arrMeta.length;
  const metaId = arrMeta[metaIndex];

  let metaTag = document.querySelector('meta[name="description"]');
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.name = "description";
    document.head.appendChild(metaTag);
  }
  return metaTag.setAttribute("content", metaId);
}
