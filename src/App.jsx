import React, { useCallback, useEffect, useId, useRef, useState } from "react";

const WHATSAPP_NUMERO = "59891490081";
const INSTAGRAM_URL = "https://www.instagram.com/operador_inmobiliario/";
const EMAIL = "margallwestonnicolas@gmail.com";
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Salto%2C%20Uruguay&hl=es&z=12&output=embed";

function defaultWhatsappLink() {
  const text = encodeURIComponent(
    "Hola Nicolas, quiero consultarte por un remate / servicios."
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${text}`;
}

function whatsappLinkWithMessage(message) {
  const trimmed = message.trim();
  const body =
    trimmed.length > 0
      ? `Hola Nicolas, ${trimmed}`
      : "Hola Nicolas, quiero consultarte por un remate / servicios.";
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(body)}`;
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const panelId = useId();
  const inputRef = useRef(null);

  const goWhatsApp = useCallback((text) => {
    window.open(whatsappLinkWithMessage(text || ""), "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    goWhatsApp(input);
    setInput("");
    setOpen(false);
  };

  const quick = (label, text) => (
    <button type="button" className="chat-chip" onClick={() => goWhatsApp(text)}>
      {label}
    </button>
  );

  return (
    <div className="chat-widget">
      <div
        className={`chat-panel ${open ? "chat-panel--open" : ""}`}
        id={panelId}
        role="dialog"
        aria-label="Chat de contacto"
        aria-hidden={!open}
      >
        <div className="chat-panel__head">
          <div className="chat-panel__avatar">
            <img src="/logo-nm.png" alt="" width="40" height="40" />
          </div>
          <div>
            <strong>Nicolas Margall</strong>
            <span className="chat-panel__status">
              <span className="chat-dot" aria-hidden="true" /> Responde por WhatsApp
            </span>
          </div>
          <button
            type="button"
            className="chat-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
          >
            ×
          </button>
        </div>
        <div className="chat-panel__body">
          <div className="chat-bubble chat-bubble--them">
            Hola, soy <strong>Nicolas</strong>. Contame en qué te puedo ayudar y te llevo a
            WhatsApp para seguir la charla.
          </div>
          <div className="chat-chips">
            {quick("Consulta por remate", "Quiero información sobre un remate.")}
            {quick("Bienes raíces", "Quiero consultar por bienes raíces / operación inmobiliaria.")}
            {quick("Saludo rápido", "Te escribo desde tu web.")}
          </div>
        </div>
        <form className="chat-panel__form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu mensaje…"
            autoComplete="off"
            aria-label="Mensaje para WhatsApp"
          />
          <button type="submit" className="chat-send" aria-label="Enviar a WhatsApp">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3.5 18.5 21 12 3.5 5.5v5l11 1.5-11 1.5v5Z"
              />
            </svg>
          </button>
        </form>
        <a
          className="chat-panel__wa"
          href={defaultWhatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          Abrir WhatsApp directo
        </a>
      </div>

      <button
        type="button"
        className={`chat-launcher ${open ? "chat-launcher--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6-5.6 5.6Z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.003 3C9.385 3 4 8.154 4 14.545c0 2.33.672 4.505 1.838 6.345L4 29l8.41-2.208a12.9 12.9 0 006.593 1.79C25.62 28.582 31 23.428 31 17.037 31 8.154 22.624 3 16.003 3zm0 22.08c-1.89 0-3.74-.5-5.36-1.44l-.38-.225-4.94 1.295 1.32-4.81-.25-.4a9.86 9.86 0 01-1.51-5.26c0-5.45 4.63-9.88 10.32-9.88 5.69 0 10.32 4.43 10.32 9.88s-4.63 9.88-10.32 9.88zm5.69-7.14c-.31-.155-1.83-.9-2.11-1-.28-.1-.48-.155-.68.155-.2.31-.77 1-.94 1.2-.17.21-.34.24-.64.08-.31-.155-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.17-.31-.02-.48.13-.63.13-.13.31-.34.46-.51.15-.17.2-.29.31-.48.1-.2.05-.37-.02-.52-.08-.155-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.08-.79.37-.27.31-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.225 1.36.194 1.87.118.57-.085 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

function IntroCurtain({ done }) {
  return (
    <div className={`intro-curtain ${done ? "intro-curtain--out" : ""}`} aria-hidden="true">
      <div className="intro-curtain__glow" />
      <div className="intro-curtain__content">
        <img src="/logo-nm.png" alt="" className="intro-curtain__logo" width="120" height="120" />
        <span className="intro-curtain__name">Nicolas Margall</span>
      </div>
    </div>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);
  const waDefault = defaultWhatsappLink();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 1100;
    const t = window.setTimeout(() => setIntroDone(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <IntroCurtain done={introDone} />

      <div className={`page ${introDone ? "page--ready" : ""}`}>
        <div className="bg-mesh" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />

        <header className="header">
          <div className="contenedor barra">
            <a href="#inicio" className="marca anim-rise anim-rise-1">
              <img src="/logo-nm.png" alt="Logo Nicolas Margall" width="52" height="52" />
              <div className="marca-texto">
                <strong>Nicolas Margall</strong>
                <span>Rematador · Operador inmobiliario</span>
              </div>
            </a>
            <nav className="nav-top anim-rise anim-rise-2" aria-label="Secciones">
              <a href="#servicios">Servicios</a>
              <a href="#ubicacion">Ubicación</a>
              <a href="#contacto">Contacto</a>
              <a
                className="nav-ig"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                <svg className="nav-ig__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                  />
                </svg>
                Instagram
              </a>
            </nav>
          </div>
        </header>

        <main id="inicio">
          <section className="hero">
            <div className="contenedor hero-inner">
              <div className="hero-badge anim-rise anim-rise-1">Salto, Uruguay</div>
              <div className="hero-logo-wrap anim-rise anim-rise-2">
                <div className="hero-orbit" aria-hidden="true" />
                <img
                  className="hero-logo"
                  src="/logo-nm.png"
                  alt=""
                  width="180"
                  height="180"
                  decoding="async"
                />
              </div>
              <h1 className="anim-rise anim-rise-3">
                Remates e <span className="text-gradient">inmuebles</span> con criterio
              </h1>
              <p className="hero-sub anim-rise anim-rise-4">
                Operador inmobiliario · remates judiciales y extrajudiciales
              </p>
              <p className="hero-lead anim-rise anim-rise-5">
                Asesoramiento en Salto y zona. Escribime por el chat o WhatsApp y seguimos la
                conversación donde te quede cómodo.
              </p>
              <div className="hero-cta anim-rise anim-rise-6">
                <a className="btn btn-primary" href={waDefault} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-glass" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  Ver Instagram
                </a>
                <a className="btn btn-glass" href={`mailto:${EMAIL}`}>
                  Email
                </a>
              </div>
            </div>
          </section>

          <section id="servicios" className="seccion">
            <div className="contenedor">
              <h2 className="section-title">
                <span className="section-kicker">Servicios</span>
                Cómo puedo ayudarte
              </h2>
              <div className="bento">
                <article className="bento-card bento-card--wide">
                  <h3>Remates</h3>
                  <p>Judiciales y extrajudiciales, con acompañamiento claro en cada etapa.</p>
                </article>
                <article className="bento-card">
                  <h3>Inmuebles</h3>
                  <p>Operaciones y asesoramiento inmobiliario a medida.</p>
                </article>
                <article className="bento-card">
                  <h3>Valoración</h3>
                  <p>Comercialización y visión realista del mercado local.</p>
                </article>
                <article className="bento-card bento-card--accent">
                  <h3>Atención directa</h3>
                  <p>Salto y zona. Respuesta por WhatsApp.</p>
                  <a className="bento-link" href={waDefault} target="_blank" rel="noreferrer">
                    Escribir ahora →
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section id="ubicacion" className="seccion seccion--map">
            <div className="contenedor">
              <h2 className="section-title">
                <span className="section-kicker">Ubicación</span>
                Salto, Uruguay
              </h2>
              <div className="map-frame">
                <iframe
                  title="Mapa: Salto, Uruguay"
                  src={MAP_EMBED_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  className="map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Salto%2C%20Uruguay"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </section>

          <section id="contacto" className="seccion contacto">
            <div className="contenedor contacto-grid">
              <div>
                <h2 className="section-title">
                  <span className="section-kicker">Contacto</span>
                  Seguinos y escribinos
                </h2>
                <dl className="datos-contacto">
                  <div>
                    <dt>Instagram</dt>
                    <dd>
                      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                        @operador_inmobiliario
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Correo</dt>
                    <dd>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>WhatsApp</dt>
                    <dd>
                      <a href={waDefault} target="_blank" rel="noreferrer">
                        091 490 081
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="contacto-card">
                <p>¿Preferís charlar ya?</p>
                <a className="btn btn-primary btn-block" href={waDefault} target="_blank" rel="noreferrer">
                  Abrir WhatsApp
                </a>
                <a className="btn btn-glass btn-block" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="contenedor footer-inner">
            <p>© {new Date().getFullYear()} Nicolas Margall</p>
            <div className="footer-links">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={waDefault} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>

      <ChatWidget />
    </>
  );
}

export default App;
