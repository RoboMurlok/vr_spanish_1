import { seed } from "../../seed.js";

const arrHero = [
  {
    title: "Transforma tu futuro financiero hoy",
    subtitle:
      "Descubre estrategias inteligentes para organizar tus finanzas y tomar decisiones seguras.",
  },
  {
    title: "Planifica, ahorra e invierte con confianza",
    subtitle:
      "Aprende métodos prácticos para proteger tu patrimonio y asegurar estabilidad económica.",
  },
  {
    title: "Tu guía hacia la libertad financiera",
    subtitle:
      "Explora consejos y herramientas que te ayudarán a gestionar tu dinero de manera efectiva.",
  },
  {
    title: "Optimiza tus recursos y maximiza tu bienestar",
    subtitle:
      "Descubre cómo organizar tu presupuesto y tomar decisiones financieras responsables.",
  },
  {
    title: "Finanzas personales simplificadas",
    subtitle:
      "Aprende a controlar tus ingresos y gastos con estrategias prácticas y fáciles de aplicar.",
  },
  {
    title: "Invierte en tu tranquilidad económica",
    subtitle:
      "Conoce técnicas de ahorro e inversión que protegen tu capital y fomentan estabilidad financiera.",
  },
  {
    title: "Planificación financiera para todos",
    subtitle:
      "Obtén herramientas y consejos útiles para alcanzar tus metas financieras de manera segura.",
  },
  {
    title: "Seguridad financiera para tu familia",
    subtitle:
      "Aprende a gestionar recursos y planificar el futuro económico de tus seres queridos.",
  },
  {
    title: "Mejora tu educación financiera",
    subtitle:
      "Descubre hábitos y estrategias que fortalecen tu manejo del dinero y tu independencia económica.",
  },
  {
    title: "Decide con claridad y confianza",
    subtitle:
      "Aprende a estructurar tu presupuesto y a tomar decisiones financieras inteligentes cada día.",
  },
  {
    title: "Optimiza tu pensión ahora",
    subtitle:
      "Descubre cómo ahorrar en jubilación con planificación presupuestos para pensionados.",
  },
  {
    title: "Controla gastos en pensión",
    subtitle:
      "Estrategias simples para jubilados: organiza tu presupuesto familiar efectivo.",
  },
  {
    title: "Planifica tu jubilación segura",
    subtitle:
      "Consultas financieras para pensionados: aprende control de gastos diario.",
  },
  {
    title: "Ahorra más en tu pensión",
    subtitle: "Optimiza gastos familiares con tips prácticos para jubilados.",
  },
  {
    title: "Presupuesto perfecto jubilados",
    subtitle:
      "Cómo ahorrar en pensión mediante planificación inteligente y control.",
  },
  {
    title: "Finanzas claras en pensión",
    subtitle:
      "Descubre consultas para pensionados: gestiona tu presupuesto familiar.",
  },
  {
    title: "Transforma gastos jubilación",
    subtitle: "Estrategias de ahorro y optimización para tu pensión diaria.",
  },
  {
    title: "Equilibra tu economía pensión",
    subtitle:
      "Planificación presupuestos: control gastos para jubilados familiares.",
  },
  {
    title: "Mejora control financiero",
    subtitle: "Consultas para pensionados: ahorra en jubilación con facilidad.",
  },
  {
    title: "Organiza pensión familiar",
    subtitle: "Descubre cómo optimizar gastos y presupuestos para jubilados.",
  },
  {
    title: "Ahorro inteligente pensión",
    subtitle:
      "Estrategias prácticas: control y planificación para tu jubilación.",
  },
  {
    title: "Gestiona jubilación económica",
    subtitle:
      "Consultas financieras: aprende a ahorrar en presupuestos pensionados.",
  },
  {
    title: "Reduce gastos pensión ya",
    subtitle: "Optimiza tu presupuesto familiar con tips para jubilados.",
  },
  {
    title: "Plan pensión sin estrés",
    subtitle: "Control de gastos y ahorro: estrategias para pensionados.",
  },
  {
    title: "Finanzas jubilados fáciles",
    subtitle: "Descubre planificación presupuestos y optimización gastos.",
  },
  {
    title: "Ahorra en jubilación hoy",
    subtitle: "Consultas para pensionados: organiza control familiar efectivo.",
  },
  {
    title: "Presupuesto pensión óptimo",
    subtitle: "Estrategias inteligentes para ahorrar y gestionar gastos.",
  },
  {
    title: "Controla tu pensión mejor",
    subtitle: "Planificación para jubilados: optimiza economía familiar.",
  },
  {
    title: "Jubilación financiera clara",
    subtitle: "Aprende ahorro en pensión con consultas presupuestarias.",
  },
  {
    title: "Optimiza familia pensión",
    subtitle: "Descubre control gastos y planificación para jubilados.",
  },
];

export function getHero(index = 0) {
  const heroIndex = (seed * 7 + index * 13) % arrHero.length;
  return arrHero[heroIndex];
}
