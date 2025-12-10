import { getUniqueImages } from "./images.js";

import { seed } from "../../seed.js";

export const rawText = [
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

// итальянский

// const arrHero = [
//   {
//     title: "Trasforma il tuo futuro finanziario oggi",
//     subtitle:
//       "Scopri strategie intelligenti per organizzare le tue finanze e prendere decisioni sicure.",
//   },
//   {
//     title: "Pianifica, risparmia e investi con fiducia",
//     subtitle:
//       "Impara metodi pratici per proteggere il tuo patrimonio e assicurare stabilità economica.",
//   },
//   {
//     title: "La tua guida verso la libertà finanziaria",
//     subtitle:
//       "Esplora consigli e strumenti che ti aiuteranno a gestire il denaro in modo efficace.",
//   },
//   {
//     title: "Ottimizza le tue risorse e massimizza il benessere",
//     subtitle:
//       "Scopri come organizzare il tuo budget e prendere decisioni finanziarie responsabili.",
//   },
//   {
//     title: "Finanze personali semplificate",
//     subtitle:
//       "Impara a controllare entrate e spese con strategie pratiche e facili da applicare.",
//   },
//   {
//     title: "Investi nella tua tranquillità economica",
//     subtitle:
//       "Scopri tecniche di risparmio e investimento che proteggono il capitale e favoriscono stabilità finanziaria.",
//   },
//   {
//     title: "Pianificazione finanziaria per tutti",
//     subtitle:
//       "Ottieni strumenti e consigli utili per raggiungere i tuoi obiettivi finanziari in sicurezza.",
//   },
//   {
//     title: "Sicurezza finanziaria per la tua famiglia",
//     subtitle:
//       "Impara a gestire le risorse e pianificare il futuro economico dei tuoi cari.",
//   },
//   {
//     title: "Migliora la tua educazione finanziaria",
//     subtitle:
//       "Scopri abitudini e strategie che rafforzano la gestione del denaro e l’indipendenza economica.",
//   },
//   {
//     title: "Decidi con chiarezza e fiducia",
//     subtitle:
//       "Impara a strutturare il tuo budget e prendere decisioni finanziarie intelligenti ogni giorno.",
//   },
//   {
//     title: "Ottimizza la tua pensione ora",
//     subtitle:
//       "Scopri come risparmiare per la pensione con una pianificazione del budget per pensionati.",
//   },
//   {
//     title: "Controlla le spese in pensione",
//     subtitle:
//       "Strategie semplici per pensionati: organizza il tuo budget familiare in modo efficace.",
//   },
//   {
//     title: "Pianifica una pensione sicura",
//     subtitle:
//       "Consulenze finanziarie per pensionati: impara a controllare le spese quotidiane.",
//   },
//   {
//     title: "Risparmia di più sulla tua pensione",
//     subtitle: "Ottimizza le spese familiari con consigli pratici per pensionati.",
//   },
//   {
//     title: "Bilancio perfetto per pensionati",
//     subtitle:
//       "Come risparmiare in pensione tramite pianificazione intelligente e controllo.",
//   },
//   {
//     title: "Finanze chiare in pensione",
//     subtitle:
//       "Scopri consulenze per pensionati: gestisci il budget familiare.",
//   },
//   {
//     title: "Trasforma le spese in pensione",
//     subtitle: "Strategie di risparmio e ottimizzazione per la tua pensione quotidiana.",
//   },
//   {
//     title: "Equilibra la tua economia pensionistica",
//     subtitle:
//       "Pianificazione del budget: controllo delle spese per pensionati e famiglie.",
//   },
//   {
//     title: "Migliora il controllo finanziario",
//     subtitle: "Consulenze per pensionati: risparmia in pensione con facilità.",
//   },
//   {
//     title: "Organizza la pensione familiare",
//     subtitle: "Scopri come ottimizzare spese e budget per pensionati.",
//   }
// ];



// const arrHero = [
//   {
//     title: "Transformez votre avenir financier dès aujourd'hui",
//     subtitle:
//       "Découvrez des stratégies intelligentes pour organiser vos finances et prendre des décisions sûres.",
//   },
//   {
//     title: "Planifiez, économisez et investissez en toute confiance",
//     subtitle:
//       "Apprenez des méthodes pratiques pour protéger votre patrimoine et assurer une stabilité économique.",
//   },
//   {
//     title: "Votre guide vers la liberté financière",
//     subtitle:
//       "Explorez des conseils et des outils qui vous aideront à gérer l'argent efficacement.",
//   },
//   {
//     title: "Optimisez vos ressources et maximisez le bien-être",
//     subtitle:
//       "Découvrez comment organiser votre budget et prendre des décisions financières responsables.",
//   },
//   {
//     title: "Finances personnelles simplifiées",
//     subtitle:
//       "Apprenez à contrôler vos revenus et dépenses avec des stratégies pratiques et faciles à appliquer.",
//   },
//   {
//     title: "Investissez dans votre tranquillité économique",
//     subtitle:
//       "Découvrez des techniques d'épargne et d'investissement qui protègent le capital et favorisent la stabilité financière.",
//   },
// ];

export const text = rawText.map((post, index) => ({
  ...post,
  image: getUniqueImages(seed, 20)[index],
}));

export const battonText = { text_1: "Nuestros servicios", text_2: "Consulta" };
