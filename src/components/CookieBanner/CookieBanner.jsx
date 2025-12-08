import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("cookieBannerAccepted");

    // оборачиваем setState, чтобы React не ругался на синхронный вызов
    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookieBannerAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cookieBannerAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Este sitio utiliza cookies falsas para mejorar la experiencia del usuario.
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn accept" onClick={handleAccept}>
          Aceptar
        </button>
        <button className="cookie-btn decline" onClick={handleDecline}>
          Rechazar
        </button>
      </div>
    </div>
  );
}
