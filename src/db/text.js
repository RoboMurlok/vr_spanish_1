import { getUniqueImages } from "./images.js";

import { seed } from "../../seed.js";

 const rawText = [
  {
    "title": "Consultas Financieras Jubilados",
    "content": "¿Buscas consultas financieras para jubilados? Te orientamos en planificación de presupuestos para pensionados. Aprende cómo ahorrar en tu pensión con control de gastos efectivo. Optimiza tu presupuesto familiar paso a paso. Identifica ahorros en compras diarias y servicios. Vive la jubilación con más tranquilidad financiera. Descubre consejos prácticos para manejar finanzas sin estrés. ¡Empieza hoy tu mejora económica personalizada!"
  },
  {
    "title": "Planificación Presupuestos Pensionados",
    "content": "Planificación de presupuestos para pensionados: clave para estabilidad. Controla gastos en la jubilación y aprende cómo ahorrar en pensión. Consultas financieras especializadas optimizan tu economía familiar. Prioriza essentials como salud y hogar. Reduce costos innecesarios con tips simples. Toma control total de tus recursos mensuales. Mejora tu día a día con estrategias accesibles. ¡Contacta para orientación experta ahora!"
  },
  {
    "title": "Cómo Ahorrar en Pensión",
    "content": "¿Cómo ahorrar en la pensión? Descubre control de gastos para pensionados. Planificación presupuestos jubilados te guía a optimizar finanzas. Maneja el presupuesto familiar del pensionado eficientemente. Identifica fugas de dinero en ocio y suministros. Consultas financieras ofrecen herramientas prácticas. Vive jubilado con confianza económica. Ajusta hábitos para más ahorro sin sacrificios. ¡Inicia tu plan hoy!"
  },
  {
    "title": "Control Gastos Pensionados",
    "content": "Control de gastos para pensionados: esencial en jubilación. Cómo ahorrar en pensión con planificación presupuestos. Optimiza gastos familiares mediante consultas financieras. Registra ingresos y salidas diariamente. Prioriza necesidades reales sobre caprichos. Descubre ahorros en energía y compras. Construye un futuro financiero sólido. Tips accesibles para todos los jubilados. ¡Mejora tu control ahora!"
  },
  {
    "title": "Presupuesto Familiar Pensionado",
    "content": "Presupuesto familiar del pensionado: organízalo bien. Consultas financieras para jubilados ayudan en planificación. Aprende control gastos y cómo ahorrar en pensión. Distribuye recursos para familia entera. Optimiza jubilación con estrategias simples. Evita deudas sorpresa mensuales. Maneja finanzas con claridad y paz. Herramientas prácticas para tu hogar. ¡Empieza a equilibrar hoy!"
  },
  {
    "title": "Optimización Gastos Jubilación",
    "content": "Optimización de gastos en la jubilación: tu meta. Planificación presupuestos pensionados con control efectivo. Cómo ahorrar en pensión vía consultas financieras. Ajusta presupuesto familiar inteligentemente. Reduce en áreas no esenciales como salidas. Gana tranquilidad económica diaria. Consejos paso a paso para jubilados. Vive mejor con lo que tienes. ¡Actúa ya!"
  },
  {
    "title": "Finanzas Personales Jubilados",
    "content": "Consultas financieras para jubilados enfocadas en ahorro. Cómo ahorrar en pensión con planificación presupuestos. Control gastos pensionados optimiza tu rutina. Presupuesto familiar equilibrado para estabilidad. Identifica oportunidades de corte en facturas. Estrategias simples sin complicaciones. Mejora tu jubilación financieramente. Toma las riendas hoy. ¡Orientación lista para ti!"
  },
  {
    "title": "Gestión Presupuestos Pensión",
    "content": "Planificación de presupuestos para tu pensión. Control de gastos jubilados con tips expertos. Aprende optimización familiar en consultas financieras. Cómo ahorrar diariamente sin esfuerzo. Prioriza salud y bienestar primero. Reduce fugas en transporte y comida. Construye hábitos ganadores. Vive jubilado con control total. ¡Comienza el cambio!"
  },
  {
    "title": "Ahorro Inteligente Jubilados",
    "content": "¿Cómo ahorrar en pensión inteligentemente? Consultas para pensionados en control gastos. Planificación presupuestos familiares optimizados. Maneja jubilación con precisión. Descubre ahorros en seguros y utilities. Estrategias accesibles para todos. Gana paz mental financiera. Presupuesto del pensionado perfecto. ¡Guía experta disponible!"
  },
  {
    "title": "Control Económico Pensionados",
    "content": "Control económico para pensionados: planificación clave. Cómo ahorrar en jubilación con presupuestos. Consultas financieras optimizan gastos familiares. Registra todo para visibilidad clara. Corta lo superfluo en entretenimiento. Vive con recursos bien usados. Tips jubilados probados. Estabilidad a largo plazo. ¡Inicia hoy!"
  },
  {
    "title": "Presupuestos Jubilación Efectivos",
    "content": "Presupuestos efectivos en jubilación para pensionados. Control gastos y cómo ahorrar en pensión. Optimiza familiar con consultas financieras. Paso 1: lista ingresos. Paso 2: categoriza salidas. Reduce en moda y viajes extras. Gana libertad financiera diaria. Herramientas simples incluidas. ¡Transforma tu economía!"
  },
  {
    "title": "Consultas Ahorro Pensión",
    "content": "Consultas para ahorro en pensión jubilados. Planificación presupuestos con control gastos. Presupuesto familiar pensionado optimizado. Aprende hábitos de bajo costo. Maneja fluctuaciones mensuales. Estrategias para tranquilidad. Finanzas personales en orden. Vive jubilado pleno. ¡Expertos te guían!"
  },
  {
    "title": "Optimización Finanzas Familiares",
    "content": "Optimización finanzas familiares en pensión. Cómo ahorrar con control gastos pensionados. Planificación presupuestos jubilados efectiva. Consultas financieras personalizadas. Equilibra hogar entero. Corta gastos invisibles como suscripciones. Construye reserva segura. Paz en jubilación. ¡Empieza práctica!"
  },
  {
    "title": "Plan Pensión Económica",
    "content": "Plan económico para tu pensión. Control gastos y planificación presupuestos. Cómo ahorrar jubilados familiarmente. Consultas optimizan todo. Identifica patrones derrochadores. Ajusta para máximo ahorro. Vida diaria mejorada. Recursos bien dirigidos. ¡Orientación inmediata!"
  },
  {
    "title": "Gastos Controlados Jubilados",
    "content": "Gastos controlados para jubilados: éxito asegurado. Planificación presupuestos pensionados. Aprende cómo ahorrar en pensión familiar. Consultas financieras guían optimización. Reduce en alimentación externa. Prioriza inversiones hogareñas. Estabilidad financiera real. Tips diarios útiles. ¡Activa tu plan!"
  },
  {
    "title": "Presupuesto Pensión Familiar",
    "content": "Presupuesto pensión familiar optimizado. Control gastos con planificación experta. Consultas financieras para jubilados. Cómo ahorrar en jubilación diaria. Distribuye equitativamente. Evita errores comunes. Economía familiar fuerte. Vive sin preocupaciones. ¡Consejos prácticos ya!"
  },
  {
    "title": "Ahorros Jubilación Prácticos",
    "content": "Ahorros prácticos en jubilación pensionados. Cómo ahorrar en pensión vía control gastos. Planificación presupuestos familiares. Consultas te enseñan optimización. Maneja presupuestos mensuales fácil. Reduce utilities inteligentemente. Gana tiempo y dinero. Jubilación ideal. ¡Comienza!"
  },
  {
    "title": "Finanzas Jubilados Seguras",
    "content": "Finanzas seguras para jubilados. Planificación presupuestos con control gastos. Optimiza pensión familiar. Consultas financieras ofrecen claridad. Aprende ahorro en compras. Estrategias anti-derrama. Presupuesto pensionado maestro. Tranquilidad total. ¡Guía experta lista!"
  },
  {
    "title": "Control Presupuestos Pensión",
    "content": "Control presupuestos en pensión efectiva. Cómo ahorrar jubilados con planificación. Gastos optimizados familiares. Consultas financieras paso a paso. Lista prioridades claras. Corta lo no esencial. Economía diaria fluida. Vive jubilado óptimo. ¡Inicia transformación!"
  },
  {
    "title": "Consultas Optimización Gastos",
    "content": "Consultas para optimización gastos pensión. Control y planificación presupuestos jubilados. Presupuesto familiar pensionado perfecto. Aprende cómo ahorrar sin esfuerzo. Tips para hogar completo. Reduce estrés financiero. Estrategias probadas. Jubilación equilibrada. ¡Contacta hoy!"
  }
]


// итальянский
// export const text = [
//   {
//     title: "Consulenze Finanziarie per Pensionati",
//     content:
//       "Cerchi consulenze finanziarie per pensionati? Ti guidiamo nella pianificazione del budget per pensionati. Impara come risparmiare sulla tua pensione controllando efficacemente le spese. Ottimizza il budget familiare passo dopo passo. Identifica risparmi sugli acquisti quotidiani e sui servizi. Vivi la pensione con maggiore tranquillità finanziaria. Scopri consigli pratici per gestire le finanze senza stress. Inizia oggi il tuo miglioramento economico personalizzato!",
//   },
//   {
//     title: "Pianificazione del Budget per Pensionati",
//     content:
//       "La pianificazione del budget per pensionati è la chiave per la stabilità. Controlla le spese durante la pensione e impara come risparmiare. Consulenze finanziarie specializzate ottimizzano l'economia familiare. Dai priorità a elementi essenziali come salute e casa. Riduci i costi superflui con semplici consigli. Prendi il pieno controllo delle tue risorse mensili. Migliora la tua vita quotidiana con strategie accessibili. Contatta subito per una consulenza esperta!",
//   },
//   {
//     title: "Come Risparmiare sulla Pensione",
//     content:
//       "Come risparmiare sulla pensione? Scopri il controllo delle spese per pensionati. La pianificazione del budget guida all'ottimizzazione delle finanze. Gestisci efficacemente il budget familiare del pensionato. Identifica sprechi su svaghi e forniture. Le consulenze finanziarie offrono strumenti pratici. Vivi la pensione con fiducia economica. Adatta le abitudini per risparmiare di più senza sacrifici. Inizia il tuo piano oggi!",
//   },
//   {
//     title: "Controllo delle Spese per Pensionati",
//     content:
//       "Il controllo delle spese per pensionati è essenziale durante la pensione. Come risparmiare sulla pensione con la pianificazione del budget. Ottimizza le spese familiari tramite consulenze finanziarie. Registra quotidianamente entrate e uscite. Dai priorità ai bisogni reali rispetto ai capricci. Scopri risparmi su energia e acquisti. Costruisci un futuro finanziario solido. Consigli accessibili per tutti i pensionati. Migliora subito il tuo controllo!",
//   },
//   {
//     title: "Budget Familiare del Pensionato",
//     content:
//       "Budget familiare del pensionato: organizzalo bene. Le consulenze finanziarie per pensionati aiutano nella pianificazione. Impara a controllare le spese e come risparmiare sulla pensione. Distribuisci le risorse per tutta la famiglia. Ottimizza la pensione con strategie semplici. Evita debiti imprevisti mensili. Gestisci le finanze con chiarezza e serenità. Strumenti pratici per la tua casa. Inizia oggi a bilanciare!",
//   },
//   {
//     title: "Ottimizzazione delle Spese in Pensione",
//     content:
//       "Ottimizzazione delle spese durante la pensione: il tuo obiettivo. Pianificazione del budget dei pensionati con controllo efficace. Come risparmiare sulla pensione tramite consulenze finanziarie. Adatta intelligentemente il budget familiare. Riduci le spese non essenziali come le uscite. Guadagna tranquillità economica quotidiana. Consigli passo passo per pensionati. Vivi meglio con ciò che hai. Agisci ora!",
//   },
//   {
//     title: "Finanze Personali per Pensionati",
//     content:
//       "Consulenze finanziarie per pensionati focalizzate sul risparmio. Come risparmiare sulla pensione con la pianificazione del budget. Il controllo delle spese ottimizza la tua routine. Budget familiare equilibrato per stabilità. Identifica opportunità di taglio delle bollette. Strategie semplici senza complicazioni. Migliora la tua pensione finanziariamente. Prendi in mano le redini oggi. Consulenza pronta per te!",
//   },
//   {
//     title: "Gestione del Budget Pensione",
//     content:
//       "Pianificazione del budget per la tua pensione. Controllo delle spese dei pensionati con consigli esperti. Impara l'ottimizzazione familiare tramite consulenze finanziarie. Come risparmiare quotidianamente senza sforzo. Dai priorità a salute e benessere. Riduci perdite su trasporti e cibo. Costruisci abitudini vincenti. Vivi la pensione con pieno controllo. Inizia il cambiamento!",
//   },
//   {
//     title: "Risparmio Intelligente per Pensionati",
//     content:
//       "Come risparmiare sulla pensione in modo intelligente? Consulenze per pensionati nel controllo delle spese. Budget familiare ottimizzato. Gestisci la pensione con precisione. Scopri risparmi su assicurazioni e utenze. Strategie accessibili a tutti. Guadagna tranquillità mentale finanziaria. Budget del pensionato perfetto. Guida esperta disponibile!",
//   },
//   {
//     title: "Controllo Economico Pensionati",
//     content:
//       "Controllo economico per pensionati: pianificazione chiave. Come risparmiare sulla pensione con il budget. Le consulenze finanziarie ottimizzano le spese familiari. Registra tutto per una chiara visibilità. Taglia il superfluo negli svaghi. Vivi con le risorse ben utilizzate. Consigli per pensionati collaudati. Stabilità a lungo termine. Inizia oggi!",
//   },
//   {
//     title: "Budget Pensione Efficaci",
//     content:
//       "Budget efficaci in pensione per pensionati. Controllo delle spese e come risparmiare sulla pensione. Ottimizza la famiglia con consulenze finanziarie. Passo 1: lista delle entrate. Passo 2: categorizza le uscite. Riduci moda e viaggi extra. Guadagna libertà finanziaria quotidiana. Strumenti semplici inclusi. Trasforma la tua economia!",
//   },
//   {
//     title: "Consulenze per Risparmio Pensione",
//     content:
//       "Consulenze per risparmio sulla pensione. Pianificazione del budget con controllo delle spese. Budget familiare pensionato ottimizzato. Impara abitudini a basso costo. Gestisci le fluttuazioni mensili. Strategie per tranquillità. Finanze personali in ordine. Vivi pienamente la pensione. Esperti ti guidano!",
//   },
//   {
//     title: "Ottimizzazione Finanze Familiari",
//     content:
//       "Ottimizzazione delle finanze familiari in pensione. Come risparmiare con il controllo delle spese dei pensionati. Pianificazione efficace del budget dei pensionati. Consulenze finanziarie personalizzate. Equilibra tutta la famiglia. Taglia spese invisibili come abbonamenti. Costruisci una riserva sicura. Serenità in pensione. Inizia subito!",
//   },
//   {
//     title: "Piano Pensione Economico",
//     content:
//       "Piano economico per la tua pensione. Controllo delle spese e pianificazione del budget. Come risparmiare da pensionato in famiglia. Consulenze ottimizzano tutto. Identifica abitudini sprecone. Adatta per massimo risparmio. Vita quotidiana migliorata. Risorse ben gestite. Orientamento immediato!",
//   },
//   {
//     title: "Spese Controllate Pensionati",
//     content:
//       "Spese controllate per pensionati: successo assicurato. Pianificazione del budget dei pensionati. Impara come risparmiare sulla pensione familiare. Le consulenze finanziarie guidano l'ottimizzazione. Riduci sulla ristorazione esterna. Dai priorità agli investimenti domestici. Stabilità finanziaria reale. Consigli quotidiani utili. Attiva il tuo piano!",
//   },
//   {
//     title: "Budget Pensione Familiare",
//     content:
//       "Budget pensione familiare ottimizzato. Controllo delle spese con pianificazione esperta. Consulenze finanziarie per pensionati. Come risparmiare quotidianamente. Distribuisci equamente. Evita errori comuni. Economia familiare forte. Vivi senza preoccupazioni. Consigli pratici subito!",
//   },
//   {
//     title: "Risparmi Pensione Pratici",
//     content:
//       "Risparmi pratici in pensione per pensionati. Come risparmiare sulla pensione tramite il controllo delle spese. Pianificazione del budget familiare. Le consulenze ti insegnano l'ottimizzazione. Gestisci il budget mensile facilmente. Riduci le utenze in modo intelligente. Risparmia tempo e denaro. Pensione ideale. Inizia!",
//   },
// ];

// export const text = [
//   {
//     title: "Conseils financiers pour retraités",
//     content:
//       "Vous cherchez des conseils financiers pour retraités ? Nous vous guidons dans la planification du budget des retraités. Apprenez à économiser sur votre retraite en contrôlant efficacement vos dépenses. Optimisez le budget familial pas à pas. Identifiez des économies sur les achats quotidiens et les services. Vivez votre retraite avec plus de tranquillité financière. Découvrez des conseils pratiques pour gérer vos finances sans stress. Commencez dès aujourd'hui votre amélioration économique personnalisée !",
//   },
//   {
//     title: "Planification du budget pour retraités",
//     content:
//       "La planification du budget pour retraités est la clé de la stabilité. Contrôlez vos dépenses pendant la retraite et apprenez à économiser. Des conseils financiers spécialisés optimisent l'économie familiale. Donnez la priorité aux éléments essentiels comme la santé et le logement. Réduisez les coûts superflus avec des conseils simples. Prenez le contrôle total de vos ressources mensuelles. Améliorez votre vie quotidienne avec des stratégies accessibles. Contactez dès maintenant pour un conseil expert !",
//   },
//   {
//     title: "Comment économiser sur la retraite",
//     content:
//       "Comment économiser sur la retraite ? Découvrez le contrôle des dépenses pour retraités. La planification du budget guide l'optimisation des finances. Gérez efficacement le budget familial du retraité. Identifiez les gaspillages sur les loisirs et fournitures. Les conseils financiers offrent des outils pratiques. Vivez la retraite avec confiance économique. Adaptez vos habitudes pour économiser davantage sans sacrifices. Commencez votre plan dès aujourd'hui !",
//   },
//   {
//     title: "Contrôle des dépenses pour retraités",
//     content:
//       "Le contrôle des dépenses pour retraités est essentiel pendant la retraite. Comment économiser sur la retraite grâce à la planification du budget. Optimisez les dépenses familiales grâce aux conseils financiers. Enregistrez quotidiennement les revenus et dépenses. Priorisez les besoins réels par rapport aux caprices. Découvrez des économies sur l'énergie et les achats. Construisez un futur financier solide. Conseils accessibles à tous les retraités. Améliorez votre contrôle dès maintenant !",
//   },
//   {
//     title: "Budget familial du retraité",
//     content:
//       "Budget familial du retraité : organisez-le bien. Les conseils financiers pour retraités aident à la planification. Apprenez à contrôler les dépenses et à économiser sur la retraite. Répartissez les ressources pour toute la famille. Optimisez la retraite avec des stratégies simples. Évitez les dettes imprévues mensuelles. Gérez les finances avec clarté et sérénité. Outils pratiques pour votre foyer. Commencez dès aujourd'hui à équilibrer !",
//   },
//   {
//     title: "Optimisation des dépenses à la retraite",
//     content:
//       "Optimisation des dépenses pendant la retraite : votre objectif. Planification du budget des retraités avec contrôle efficace. Comment économiser sur la retraite grâce aux conseils financiers. Adaptez intelligemment le budget familial. Réduisez les dépenses non essentielles comme les sorties. Gagnez la tranquillité économique quotidienne. Conseils étape par étape pour les retraités. Vivez mieux avec ce que vous avez. Agissez maintenant !",
//   },
//   {
//     title: "Finances personnelles pour retraités",
//     content:
//       "Conseils financiers pour retraités axés sur l'épargne. Comment économiser sur la retraite avec la planification du budget. Le contrôle des dépenses optimise votre routine. Budget familial équilibré pour la stabilité. Identifiez les opportunités de réduire les factures. Stratégies simples sans complications. Améliorez votre retraite financièrement. Prenez les rênes dès aujourd'hui. Conseil prêt pour vous !",
//   },
//   {
//     title: "Gestion du budget retraite",
//     content:
//       "Planification du budget pour votre retraite. Contrôle des dépenses des retraités avec conseils experts. Apprenez l'optimisation familiale grâce aux conseils financiers. Comment économiser quotidiennement sans effort. Priorisez la santé et le bien-être. Réduisez les pertes sur les transports et l'alimentation. Construisez des habitudes gagnantes. Vivez la retraite avec plein contrôle. Commencez le changement !",
//   },
//   {
//     title: "Épargne intelligente pour retraités",
//     content:
//       "Comment économiser sur la retraite intelligemment ? Conseils pour retraités sur le contrôle des dépenses. Budget familial optimisé. Gérez la retraite avec précision. Découvrez des économies sur assurances et services publics. Stratégies accessibles à tous. Gagnez la tranquillité d'esprit financière. Budget du retraité parfait. Guide expert disponible !",
//   },
//   {
//     title: "Contrôle économique des retraités",
//     content:
//       "Contrôle économique pour retraités : planification clé. Comment économiser sur la retraite avec le budget. Les conseils financiers optimisent les dépenses familiales. Enregistrez tout pour une visibilité claire. Réduisez le superflu dans les loisirs. Vivez avec des ressources bien utilisées. Conseils éprouvés pour retraités. Stabilité à long terme. Commencez aujourd'hui !",
//   },
//   {
//     title: "Budgets efficaces pour la retraite",
//     content:
//       "Budgets efficaces à la retraite pour retraités. Contrôle des dépenses et comment économiser sur la retraite. Optimisez la famille avec conseils financiers. Étape 1 : liste des revenus. Étape 2 : catégorisez les dépenses. Réduisez la mode et les voyages supplémentaires. Gagnez la liberté financière quotidienne. Outils simples inclus. Transformez votre économie !",
//   },
//   {
//     title: "Conseils pour l'épargne retraite",
//     content:
//       "Conseils pour l'épargne retraite. Planification du budget avec contrôle des dépenses. Budget familial du retraité optimisé. Apprenez des habitudes à faible coût. Gérez les fluctuations mensuelles. Stratégies pour la tranquillité. Finances personnelles en ordre. Vivez pleinement votre retraite. Les experts vous guident !",
//   },
//   {
//     title: "Optimisation des finances familiales",
//     content:
//       "Optimisation des finances familiales à la retraite. Comment économiser grâce au contrôle des dépenses des retraités. Planification efficace du budget des retraités. Conseils financiers personnalisés. Équilibrez toute la famille. Réduisez les dépenses invisibles comme les abonnements. Construisez une réserve sûre. Sérénité à la retraite. Commencez dès maintenant !",
//   },
//   {
//     title: "Plan retraite économique",
//     content:
//       "Plan économique pour votre retraite. Contrôle des dépenses et planification du budget. Comment économiser en tant que retraité pour la famille. Les conseils optimisent tout. Identifiez les habitudes dépensières. Adaptez pour un maximum d'économies. Vie quotidienne améliorée. Ressources bien gérées. Orientation immédiate !",
//   },
//   {
//     title: "Dépenses contrôlées des retraités",
//     content:
//       "Dépenses contrôlées pour retraités : succès assuré. Planification du budget des retraités. Apprenez à économiser sur la retraite familiale. Les conseils financiers guident l'optimisation. Réduisez les dépenses de restauration. Priorisez les investissements domestiques. Stabilité financière réelle. Conseils utiles au quotidien. Activez votre plan !",
//   },
//   {
//     title: "Budget familial retraite",
//     content:
//       "Budget familial retraite optimisé. Contrôle des dépenses avec planification experte. Conseils financiers pour retraités. Comment économiser au quotidien. Répartissez équitablement. Évitez les erreurs courantes. Économie familiale solide. Vivez sans soucis. Conseils pratiques immédiatement !",
//   },
//   {
//     title: "Économies pratiques pour retraités",
//     content:
//       "Économies pratiques à la retraite pour retraités. Comment économiser sur la retraite grâce au contrôle des dépenses. Planification du budget familial. Les conseils vous enseignent l'optimisation. Gérez le budget mensuel facilement. Réduisez les services publics intelligemment. Économisez temps et argent. Retraite idéale. Commencez !",
//   },
// ];

export const text = rawText.map((post, index) => ({
  ...post,
  image: getUniqueImages(seed, 50)[index],
}));
