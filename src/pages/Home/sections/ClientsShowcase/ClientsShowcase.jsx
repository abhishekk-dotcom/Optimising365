
import "./ClientsShowcase.css";

const clientsRowOne = [
  { name: "Floatme", image: "/images/clients/1xBET.png" },
  { name: "Bingoplus", image: "/images/clients/Bingoplus.png" },
  { name: "Digido", image: "/images/clients/Digido.webp" },
  { name: "Fanatics", image: "/images/clients/Fanatics.png" },
  { name: "Floatme", image: "/images/clients/Floatme.png" },
  { name: "gcash", image: "/images/clients/gcash.webp" },
  { name: "homecredit", image: "/images/clients/homecredit.jpg" },
  { name: "kraken", image: "/images/clients/Kraken.png" },
  { name: "Lalamove", image: "/images/clients/Lalamove.png" },
  { name: "moneyman", image: "/images/clients/Moneyman.webp" },
];

const clientsRowTwo = [
  { name: "Nova", image: "/images/Nova.png" },
  { name: "Reelshorts", image: "/images/clients/Reelshorts.png" },
  { name: "Saily", image: "/images/clients/Saily.png" },
  { name: "Shope", image: "/images/clients/shopee.jpg" },
  { name: "underdog", image: "/images/clients/Underdog.png" },
  { name: "waves", image: "/images/clients/Waves.png" },
  { name: "westernunion", image: "/images/clients/Westernunion.png" },
  { name: "zaimer", image: "/images/clients/zaimer.jpg" },
  { name: "snoop", image: "/images/clients/snoop.png" },
  { name: "maya", image: "/images/clients/maya.png" },
];

function LogoRow({ clients, direction }) {
  const items = [...clients, ...clients];

  return (
    <div className={`clients-marquee ${direction}`}>
      <div className="clients-marquee-track">
        {items.map((client, index) => (
          <div className="client-logo-card" key={`${client.name}-${index}`}>
            <img
              src={client.image}
              alt={`${client.name} logo`}
              className="client-logo-image"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsShowcase() {
  return (
    <section className="clients-showcase">
      <div className="clients-showcase-overlay" />

      <div className="clients-showcase-content">
        <h2 className="clients-showcase-title">
          Our <span>Clients</span>
        </h2>

        <div className="clients-logo-rows">
          <LogoRow clients={clientsRowOne} direction="move-left" />
          <LogoRow clients={clientsRowTwo} direction="move-right" />
        </div>
      </div>
    </section>
  );
}
