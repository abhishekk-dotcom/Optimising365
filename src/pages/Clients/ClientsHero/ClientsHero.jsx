
import "./ClientsHero.css";

const projects = [
  {
    name: "avosend",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/avosend.jpeg",
  },
  {
    name: "Digido",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/avosend.png",
  },
  {
    name: "Betway",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/betway.png",
  },
  {
    name: "Digido",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/digido.webp",
  },
  {
    name: "Floatme",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/floatme.webp",
  },
  {
    name: "Kralen",
    category: "Digital Marketing",
    image: "./images/clients/clientHero/kralen.webp",
  },
  {
    name: "MoneyMan",
    category: "Branding",
    image: "./images/clients/clientHero/moneyman.webp",
  },
  {
    name: "MoneyMan",
    category: "Branding",
    image: "./images/clients/clientHero/moneyman2.webp",
  },
  {
    name: "SignNow",
    category: "Branding",
    image: "./images/clients/clientHero/signnow.webp",
  },
  {
    name: "Snoop",
    category: "Branding",
    image: "./images/clients/clientHero/snoop.webp",
  },
  {
    name: "Underdog",
    category: "Branding",
    image: "./images/clients/clientHero/underdog.webp",
  },
  {
    name: "Western Union",
    category: "Branding",
    image: "./images/clients/clientHero/westernUnion.webp",
  },
  {
    name: "Zaimer",
    category: "Branding",
    image: "./images/clients/clientHero/zaymer.avif",
  },
];

const columns = [
  projects.slice(0, 5),
  [projects[3], projects[1], projects[5], projects[0], projects[6]],
  [projects[2], projects[4], projects[6], projects[1], projects[3]],
];

function ProjectCard({ project }) {
  return (
    <article className="clients-hero-project-card">
      <div className="clients-hero-project-image">
        <img
          src={project.image}
          alt={project.name}
          loading="eager"
        />
      </div>

      <div className="clients-hero-project-info">
        <div>
          <h3>{project.name}</h3>
          <span>{project.category}</span>
        </div>

        <span className="clients-hero-project-arrow">↗</span>
      </div>
    </article>
  );
}

function ProjectColumn({ projects, index }) {
  const repeatedProjects = [...projects, ...projects];

  return (
    <div className={`clients-hero-column clients-hero-column-${index + 1}`}>
      <div
        className="clients-hero-track"
        style={{
          "--duration": `${30 + index * 8}s`,
          "--direction": index === 1 ? "reverse" : "normal",
        }}
      >
        {repeatedProjects.map((project, cardIndex) => (
          <ProjectCard
            key={`${project.name}-${cardIndex}`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default function ClientsHero() {
  return (
    <section className="clients-hero">
      <div className="clients-hero-inner">

        {/* LEFT CONTENT */}

        <div className="clients-hero-content">
          <span className="clients-eyebrow">
            WORK / CLIENTS
          </span>

          <h1>
            Real clients,
            <br />
            <span>real</span>
            <br />
            <span>launches.</span>
          </h1>

          <p>
            Our web design clients include hotels, groups, online
            stores, studios and software teams in Bangladesh,
            the UAE, Europe, Canada and the US. Hover a column
            to pause, click a site to read its case study.
          </p>

          <a href="/case-studies" className="clients-hero-link">
            Explore our work <span>↗</span>
          </a>
        </div>

        {/* RIGHT SIDE - INDEPENDENT VERTICAL GALLERY */}

        <div className="clients-hero-gallery">
          {columns.map((column, index) => (
            <ProjectColumn
              key={index}
              projects={column}
              index={index}
            />
          ))}
        </div>

      </div>

      {/* BOTTOM LABEL */}

      <div className="clients-hero-bottom">
        <span>OPTIMISING365 — SELECTED WORK</span>
        <span>STRATEGY. CREATIVITY. PERFORMANCE.</span>
      </div>
    </section>
  );
}
