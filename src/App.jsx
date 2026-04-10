import React from "react";

const WHATSAPP_NUMERO = "59891490081";
const whatsappTexto = encodeURIComponent(
  "Hola Nicolas, quiero consultarte por un remate / servicios."
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMERO}?text=${whatsappTexto}`;

function App() {
  return (
    <>
      <header className="header">
        <div className="contenedor barra">
          <a href="#inicio" className="marca">
            <img src="/logo-nm.png" alt="Logo Nicolas Margall" width="56" height="56" />
            <div className="marca-texto">
              <strong>Nicolas Margall</strong>
              <span>Rematador · Operador inmobiliario</span>
            </div>
          </a>
          <nav aria-label="Secciones">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="contenedor hero-inner">
            <div className="hero-logo-wrap">
              <img
                className="hero-logo"
                src="/logo-nm.png"
                alt=""
                width="160"
                height="160"
                decoding="async"
              />
            </div>
            <h1>Nicolas Margall</h1>
            <p className="hero-sub">Rematador y operador inmobiliario en Salto, Uruguay.</p>
            <p className="hero-lead">
              Asesoramiento en remates judiciales y extrajudiciales, bienes raíces y gestión
              inmobiliaria. Escribime por WhatsApp para una consulta directa.
            </p>
            <div className="hero-cta">
              <a className="btn btn-wa" href={whatsappLink} target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
              <a className="btn btn-ghost" href="mailto:margallwestonnicolas@gmail.com">
                Enviar correo
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="seccion">
          <div className="contenedor">
            <h2>En qué puedo ayudarte</h2>
            <ul className="lista-servicios">
              <li>Remates judiciales y extrajudiciales</li>
              <li>Operaciones y asesoramiento inmobiliario</li>
              <li>Valoración y comercialización de bienes</li>
              <li>Atención personalizada en Salto y zona</li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="seccion contacto">
          <div className="contenedor">
            <h2>Contacto</h2>
            <dl className="datos-contacto">
              <div>
                <dt>Ubicación</dt>
                <dd>Salto, Uruguay</dd>
              </div>
              <div>
                <dt>Correo</dt>
                <dd>
                  <a href="mailto:margallwestonnicolas@gmail.com">
                    margallwestonnicolas@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Teléfono / WhatsApp</dt>
                <dd>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    091 490 081
                  </a>
                </dd>
              </div>
            </dl>
            <a className="btn btn-wa btn-block" href={whatsappLink} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="contenedor">
          <p>© {new Date().getFullYear()} Nicolas Margall. Sitio informativo.</p>
        </div>
      </footer>

      <a
        className="fab-wa"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.003 3C9.385 3 4 8.154 4 14.545c0 2.33.672 4.505 1.838 6.345L4 29l8.41-2.208a12.9 12.9 0 006.593 1.79C25.62 28.582 31 23.428 31 17.037 31 8.154 22.624 3 16.003 3zm0 22.08c-1.89 0-3.74-.5-5.36-1.44l-.38-.225-4.94 1.295 1.32-4.81-.25-.4a9.86 9.86 0 01-1.51-5.26c0-5.45 4.63-9.88 10.32-9.88 5.69 0 10.32 4.43 10.32 9.88s-4.63 9.88-10.32 9.88zm5.69-7.14c-.31-.155-1.83-.9-2.11-1-.28-.1-.48-.155-.68.155-.2.31-.77 1-.94 1.2-.17.21-.34.24-.64.08-.31-.155-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.17-.31-.02-.48.13-.63.13-.13.31-.34.46-.51.15-.17.2-.29.31-.48.1-.2.05-.37-.02-.52-.08-.155-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.08-.79.37-.27.31-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.225 1.36.194 1.87.118.57-.085 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36z"
          />
        </svg>
      </a>
    </>
  );
}

export default App;
