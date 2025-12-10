import React, { useState } from "react";
import { text, battonText } from "../../db/contacts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных на сервер
    alert(`Gracias, ${formData.name}. Su mensaje ha sido enviado.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container contact-cta">
      <h2 className="section-title">{text.title}</h2>
      <p className="section-sub">{text.subtitle}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Describe tu consulta"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">
          {battonText}
        </button>
      </form>
    </section>
  );
}
