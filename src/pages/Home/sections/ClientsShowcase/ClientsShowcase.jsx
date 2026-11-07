
import "./ClientsShowcase.css";

const clientsRowOne = [
  { name: "1xBET", image: "/images/clients/1XBET.png" },
  { name: "Bingoplus", image: "/images/clients/Bingoplus.png" },
  { name: "Digido", image: "/images/clients/Digido.webp" },
  { name: "Fanatics", image: "/images/clients/Fanatics.png" },
  { name: "Floatme", image: "/images/clients/Floatme.png" },
  { name: "GCash", image: "/images/clients/gcash.webp" },
  { name: "Home Credit", image: "/images/clients/homecredit.jpg" },
  { name: "Kraken", image: "/images/clients/Kraken.png" },
  { name: "Lalamove", image: "/images/clients/Lalamove.png" },
  { name: "MoneyMan", image: "/images/clients/moneyman.webp" },
];

const clientsRowTwo = [
  { name: "Nova", image: "/images/clients/Nova.png" },
  { name: "Reelshorts", image: "/images/clients/Reelshorts.png" },
  { name: "Saily", image: "/images/clients/Saily.png" },
  { name: "Shopee", image: "/images/clients/shopee.jpg" },
  { name: "Underdog", image: "/images/clients/Underdog.png" },
  { name: "Waves", image: "/images/clients/Waves.png" },
  { name: "Western Union", image: "/images/clients/Westernunion.png" },
  { name: "Zaimer", image: "/images/clients/zaimer.jpg" },
  { name: "Snoop", image: "/images/clients/Snoop.png" },
  { name: "Maya", image: "/images/clients/maya.png" },
];

function LogoRow({ clients, direction, rowName }) {
  const items = [...clients, ...clients];

  return (
    <div className={`clients-marquee ${direction}`}>
      <div className="clients-marquee-track">
        {items.map((client, index) => (
          <div
            className="client-logo-card"
            key={`${rowName}-${client.name}-${index}`}
          >
            <img
              src={client.image}
              alt={`${client.name} logo`}
              className="client-logo-image"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.nextElementSibling.hidden = false;
              }}
            />

            <span className="client-logo-fallback" hidden>
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsShowcase() {
  return (
    <section className="clients-showcase">
      <div className="clients-showcase-content">
        <div className="clients-showcase-heading">
          <span className="clients-showcase-eyebrow">
            <span className="clients-showcase-dot" />
            OUR PARTNERSHIPS
          </span>

          <h2 className="clients-showcase-title">
            Our <span>Clients</span>
          </h2>

          <p>
            Trusted by ambitious brands. Together, we create meaningful
            digital experiences and drive measurable growth.
          </p>
        </div>

        <div className="clients-logo-rows">
          <LogoRow
            clients={clientsRowOne}
            direction="move-left"
            rowName="first"
          />

          <LogoRow
            clients={clientsRowTwo}
            direction="move-right"
            rowName="second"
          />
        </div>

        <div className="clients-showcase-footer">
          <span>OPTIMISING365 / SELECTED CLIENTS</span>
          <span>STRATEGY. CREATIVITY. PERFORMANCE.</span>
        </div>
      </div>
    </section>
  );
}
