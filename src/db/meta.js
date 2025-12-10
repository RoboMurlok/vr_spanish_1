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
  "Materiales educativos sobre alfabetización financiera para jubilados. Planificación presupuestos sin promesas de ingresos.",
  "Consejos para pensionados: cómo ahorrar en pensión con control de gastos. Optimización familiar responsable.",
  "Educación financiera jubilados: estrategias de presupuesto y ahorro sin exageraciones publicitarias.",
  "Contenido para pensionados sobre control de gastos en jubilación. Planificación práctica sin riesgos.",
  "Alfabetización financiera para důchodce: optimización presupuestos familiares sin garantías.",
  "Recursos educativos de finanzas en pensión. Cómo ahorrar responsablemente sin hype.",
  "Finanzas para jubilados: planificación de gastos y presupuesto sin promesas de ganancias.",
  "Aprende control presupuestos pensionados. Materiales educativos sin especulaciones.",
  "Presupuesto familiar jubilados: consejos de ahorro y optimización sin exageraciones.",
  "Estrategias responsables para pensión: educación financiera sobre gastos diarios.",
];


// итальянский
// const arrMeta = [
//   "Risorse chiare e affidabili sull'educazione finanziaria e gestione del denaro, focalizzate su informazioni utili e comprensibili.",

//   "Guide pratiche per migliorare le tue conoscenze finanziarie e prendere decisioni informate in modo responsabile.",

//   "Alfabetizzazione finanziaria per pensionati: ottimizzazione del budget familiare senza garanzie.",
//   "Risorse educative finanziarie in pensione. Come risparmiare responsabilmente senza hype.",
//   "Finanze per pensionati: pianificazione delle spese e del budget senza promesse di guadagni.",
//   "Impara il controllo del budget dei pensionati. Materiali educativi senza speculazioni.",
//   "Budget familiare per pensionati: consigli di risparmio e ottimizzazione senza esagerazioni.",
//   "Strategie responsabili per la pensione: educazione finanziaria sulle spese quotidiane.",
// ];


// const arrMeta = [
//   "Ressources claires et fiables sur l'éducation financière et la gestion de l'argent, axées sur des informations utiles et compréhensibles.",
//   "Guides pratiques pour améliorer vos connaissances financières et prendre des décisions informées de manière responsable.",
//   "Littératie financière pour les retraités : optimisation du budget familial sans garanties.",
//   "Ressources éducatives financières pour la retraite. Comment économiser de manière responsable sans exagérations.",
//   "Finances pour retraités : planification des dépenses et du budget sans promesses de gains.",
//   "Apprenez à contrôler le budget des retraités. Matériel éducatif sans spéculation.",
//   "Budget familial pour retraités : conseils d'économie et optimisation sans exagérations.",
//   "Stratégies responsables pour la retraite : éducation financière sur les dépenses quotidiennes.",
// ];


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
