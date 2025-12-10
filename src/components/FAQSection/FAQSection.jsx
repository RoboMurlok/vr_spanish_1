import React, { useState } from "react";
import { faqs } from "../../db/faq";
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
