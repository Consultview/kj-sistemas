import { useState, useEffect } from "react";
import "./cookies.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const HOURS_47 = 47 * 60 * 60 * 1000; 

  useEffect(() => {
    const lastAccept = localStorage.getItem("detox_consent_ts");
    const now = new Date().getTime();

    if (!lastAccept || (now - parseInt(lastAccept) > HOURS_47)) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("detox_consent_ts", new Date().getTime().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-mini-card">
      <div className="cookie-info">
        <span className="status-dot"></span>
        <p>
          Otimizamos sua experiência através de cookies, garantindo 
          <strong> integridade e performance </strong> 
          em nossos serviços.
        </p>
      </div>
      <button className="cookie-confirm" onClick={handleAccept}>ACEITAR</button>
    </div>
  );
}
