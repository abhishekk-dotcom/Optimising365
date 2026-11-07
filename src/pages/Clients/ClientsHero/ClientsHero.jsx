
import "./ClientsHero.css";

const projects = [
  {
    name: "Nova",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=700&q=85",
  },
  {
    name: "Digital Experiences",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
  },
  {
    name: "Creative Studio",
    category: "Creative Campaign",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700&q=85",
  },
  {
    name: "Growth Project",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
  },
  {
    name: "Brand Stories",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=85",
  },
  {
    name: "Modern Business",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=85",
  },
  {
    name: "Visual Campaign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=85",
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
