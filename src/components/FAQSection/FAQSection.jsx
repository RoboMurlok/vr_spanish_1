import React, { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta una consultoría?",
    answer: "El costo varía según el alcance del servicio, la cantidad de sesiones y el tipo de asesoría. Contáctanos para un presupuesto personalizado."
  },
  {
    question: "¿Ofrecen asesoría online?",
    answer: "Sí, podemos ofrecer todas nuestras consultas y planificación financiera de manera online mediante videollamadas."
  },
  {
    question: "¿Cómo garantizan resultados?",
    answer: "No podemos garantizar resultados financieros exactos, pero trabajamos con estrategias probadas y análisis personalizado para mejorar tus finanzas."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container faq">
      <ul className="faq-list">
        {faqs.map((item, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>+</span>
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
