
import "./ServicesHero.css";

const serviceImages = [
  {
    title: "Digital Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "SEO & Organic Growth",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Paid Media",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Creative Campaigns",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Content Creation",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=600&q=85",
  },
];

export default function ServicesHero() {
  const carouselImages = [...serviceImages, ...serviceImages];

  return (
    <section className="services-visual-hero">
      <div className="services-visual-hero__content">
        <span className="services-visual-hero__eyebrow">
          OPTIMISING365 / OUR SERVICES
        </span>

        <h1>
          Marketing That Moves
          <br />
          <span>Brands Forward.</span>
        </h1>

        <p>
          Build your brand with powerful digital strategies, creative
          campaigns, and performance-driven marketing. We help your
          business reach the right audience and turn attention into growth.
        </p>

        <a href="/contact" className="services-visual-hero__button">
          Let's Get Started <span>↗</span>
        </a>
      </div>

      {/* Automatically moving curved image carousel */}
      <div className="services-visual-carousel">
        <div className="services-visual-carousel__track">
          {carouselImages.map((item, index) => (
            <article
              className="services-visual-card"
              key={`${item.title}-${index}`}
            >
              <div className="services-visual-card__image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
              <span className="services-visual-card__title">
                {item.title}
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="services-visual-hero__footer">
        <span>STRATEGY</span>
        <span>CREATIVITY</span>
        <span>PERFORMANCE</span>
      </div>
    </section>
  );
}
