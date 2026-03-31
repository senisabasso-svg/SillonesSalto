import React from "react";

const logoUrl =
  "https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-1/641647855_26096077396692550_6678137986820538567_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=D6Lh9KnFpSkQ7kNvwEm97rd&_nc_oc=AdqmooZbKail-R3BYTMrPL3AUpKkixwKJ4CL_BFg4MBCxs9wp4YdquegDYzKyUXrGtw&_nc_zt=24&_nc_ht=scontent.faep9-2.fna&_nc_gid=5_sqm7OJdF_4wzIvxoduRQ&_nc_ss=7a389&oh=00_AfxRPIDhchdN1ovuDcVjfceXV6sJH0Ows9WIkl7Zoxeu-w&oe=69D1CB8E";

const productos = [
  {
    nombre: "Sillon modular premium",
    imagen:
      "https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/657695910_26421000044200282_1474389615012932958_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tJtO1bi4v3MQ7kNvwEM5tKr&_nc_oc=AdpCsFUAtn3ZXGtPPXI1qRv8-exR_F9y-OsPK_4yyd_4IajYhFXH6d9XtZgoWhiQFqU&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=VYoluwpcxCL15ioW6AD23g&_nc_ss=7a389&oh=00_AfyorfIVXfXLytPw5tgDH48ehuEqb4V7BMKpA5o2ocEl8Q&oe=69D1A6E3",
  },
  {
    nombre: "Juego de living elegante",
    imagen:
      "https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/656359762_26380917831541837_5944338548085869924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Jh-UPbedy9YQ7kNvwENfxmy&_nc_oc=AdoNpfoCLtogf9ieCK0LxfOgkgS_phlywz0gYfSkwDjxOVIrPwawyRK1WzHvSA5zgdo&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=6Mwnm5T7OG9S9CkeR7g_lA&_nc_ss=7a389&oh=00_AfxPPMkiEtPqyKo_bEcj2oY6Qc5Qzykx3EZKAWPXpfNJhw&oe=69D1D7D5",
  },
  {
    nombre: "Sillon clasico tapizado",
    imagen:
      "https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/655159405_26342759118691042_470594644160649769_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AV6HfcvN5-oQ7kNvwEiq2NG&_nc_oc=AdpowXgMBwpDA0BwkOMejm_0jlZV5q0b8ebYNj-YUM674FW52z1CiTTLuQKB_4PddSc&_nc_zt=23&_nc_ht=scontent.faep9-1.fna&_nc_gid=bQlRRHAcXvmUfnZ72y5ihQ&_nc_ss=7a389&oh=00_AfzwbU0c7pbKkbDYiZn44l62quaFT60fxhBziGydhHvQBQ&oe=69D1C038",
  },
  {
    nombre: "Modelo moderno a medida",
    imagen:
      "https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/649113706_26217312651235690_3877695776735736464_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=slNvJDb5qSUQ7kNvwFL-_e5&_nc_oc=AdqhYqduUhfeu0jtL2CDQSvzDGxm9djzeYJkZWE3Po5MR1b5yY2valS9ZAoQQoS6y5A&_nc_zt=23&_nc_ht=scontent.faep9-2.fna&_nc_gid=vv-Ap6yAJAmeBTOwo7Qu1g&_nc_ss=7a389&oh=00_AfysPN8A8Le7MnS4CCUOO4ThF5xYBtGTtCxCPBOyz0TFtw&oe=69D1B8BB",
  },
];

const whatsappNumero = "59898851684";
const whatsappTexto = encodeURIComponent(
  "Hola, quiero consultar por los productos de Sillones Salto."
);
const whatsappLink = `https://wa.me/${whatsappNumero}?text=${whatsappTexto}`;

function App() {
  return (
    <>
      <header className="header">
        <div className="contenedor barra">
          <a href="#inicio" className="marca">
            <img src={logoUrl} alt="Logo Sillones Salto" />
            <strong>Sillones Salto</strong>
          </a>
          <nav>
            <a href="#productos">Nuestros productos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="contenedor hero-grid">
            <div>
              <h1>Muebles con estilo, confort y calidad</h1>
              <p>
                En Sillones Salto te ofrecemos piezas unicas para transformar tu
                hogar. Disenamos y vendemos muebles para living y espacios
                modernos.
              </p>
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
                Pedir por WhatsApp
              </a>
            </div>
            <div className="hero-card">
              <h3>Atencion personalizada</h3>
              <p>
                Escribinos al <strong>098851684</strong> y te ayudamos a elegir
                el modelo ideal.
              </p>
            </div>
          </div>
        </section>

        <section id="productos" className="seccion">
          <div className="contenedor">
            <h2>Nuestros productos</h2>
            <div className="grilla-productos">
              {productos.map((producto) => (
                <article className="producto" key={producto.imagen}>
                  <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                  <h4>{producto.nombre}</h4>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="seccion contacto">
          <div className="contenedor">
            <h2>Contacto</h2>
            <p>
              WhatsApp: <strong>098851684</strong>
            </p>
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
              Abrir chat ahora
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
