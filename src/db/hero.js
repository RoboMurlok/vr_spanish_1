import { seed } from "../../seed.js";

const arrHero = [
  {
    title: "Transforma tu futuro financiero hoy",
    subtitle: "Descubre estrategias inteligentes para organizar tus finanzas y tomar decisiones seguras."
  },
  {
    title: "Planifica, ahorra e invierte con confianza",
    subtitle: "Aprende métodos prácticos para proteger tu patrimonio y asegurar estabilidad económica."
  },
  {
    title: "Tu guía hacia la libertad financiera",
    subtitle: "Explora consejos y herramientas que te ayudarán a gestionar tu dinero de manera efectiva."
  },
  {
    title: "Optimiza tus recursos y maximiza tu bienestar",
    subtitle: "Descubre cómo organizar tu presupuesto y tomar decisiones financieras responsables."
  },
  {
    title: "Finanzas personales simplificadas",
    subtitle: "Aprende a controlar tus ingresos y gastos con estrategias prácticas y fáciles de aplicar."
  },
  {
    title: "Invierte en tu tranquilidad económica",
    subtitle: "Conoce técnicas de ahorro e inversión que protegen tu capital y fomentan estabilidad financiera."
  },
  {
    title: "Planificación financiera para todos",
    subtitle: "Obtén herramientas y consejos útiles para alcanzar tus metas financieras de manera segura."
  },
  {
    title: "Seguridad financiera para tu familia",
    subtitle: "Aprende a gestionar recursos y planificar el futuro económico de tus seres queridos."
  },
  {
    title: "Mejora tu educación financiera",
    subtitle: "Descubre hábitos y estrategias que fortalecen tu manejo del dinero y tu independencia económica."
  },
  {
    title: "Decide con claridad y confianza",
    subtitle: "Aprende a estructurar tu presupuesto y a tomar decisiones financieras inteligentes cada día."
  }
];

export function getHero(index = 0) {
  const heroIndex = (seed * 7 + index * 13) % arrHero.length;
 return arrHero[heroIndex];


}

