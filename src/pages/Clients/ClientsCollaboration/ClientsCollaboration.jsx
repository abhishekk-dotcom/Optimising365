
import "./ClientsCollaboration.css";

const clients = [
  {
    name: "Nova",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=85",
  },
  {
    name: "Nexus",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
  },
  {
    name: "ELARIE",
    category: "Creative Branding",
    image: "https://images.unsplash.com/photo-1634942536790-2536a6a7c1e8?w=700&q=85",
  },
  {
    name: "Pacific",
    category: "Business Solutions",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=85",
  },
  {
    name: "MOD Studio",
    category: "Creative Studio",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700&q=85",
  },
  {
    name: "Westend",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
  },
  {
    name: "AIRA",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=85",
  },
  {
    name: "Unity Group",
    category: "Business Growth",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=85",
  },
  {
    name: "Capital",
    category: "Corporate Branding",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=85",
  },
  {
    name: "Fiza",
    category: "Creative Campaign",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=85",
  },
  {
    name: "Matrix",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=85",
  },
  {
    name: "Vision",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=85",
  },
];

const columns = [
  clients.slice(0, 6),
  clients.slice(6, 12),
  [clients[2], clients[4], clients[7], clients[9], clients[0], clients[10]],
  [clients[5], clients[1], clients[8], clients[3], clients[11], clients[6]],
];

function ClientCard({ client }) {
  return (
    <article className="collaboration-logo-card">
      <img
        src={client.image}
        alt={client.name}
        loading="lazy"
      />

      <div className="collaboration-image-overlay">
        <div className="collaboration-client-info">
          <span>{client.category}</span>
          <h3>{client.name}</h3>
        </div>

        <span className="collaboration-card-arrow">↗</span>
      </div>
    </article>
  );
}

export default function ClientsCollaboration() {
  return (
    <section className="collaboration-section">
      <div className="collaboration-container">

        <div className="collaboration-heading">
          <span className="collaboration-eyebrow">
            <span className="collaboration-dot" />
            COLLABORATION CANVAS
          </span>

          <h2>
            A Tapestry of Unique Client
            <br />
            <span>Journeys.</span>
          </h2>

          <p>
            Every partnership tells a different story.
            We collaborate with ambitious brands to create
            meaningful digital experiences and lasting growth.
          </p>
        </div>

        <div className="collaboration-canvas">
          {columns.map((column, index) => (
            <div
              className={`collaboration-column collaboration-column-${index + 1}`}
              key={index}
            >
              <div className="collaboration-track">
                {[...column, ...column].map((client, cardIndex) => (
                  <ClientCard
                    client={client}
                    key={`${index}-${cardIndex}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="collaboration-footer">
          <span>OPTIMISING365 / OUR PARTNERSHIPS</span>
          <span>BUILT ON TRUST. DRIVEN BY RESULTS.</span>
        </div>

      </div>
    </section>
  );
}
