import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      <h2 className="section-title">¿Listo para mejorar tu futuro financiero?</h2>
      <p className="section-sub">
        Deja tu solicitud y nos pondremos en contacto para discutir metas, estrategias y primeros pasos.
      </p>
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
          Enviar solicitud
        </button>
      </form>
    </section>
  );
}
