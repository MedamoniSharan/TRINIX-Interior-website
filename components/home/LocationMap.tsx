import { CONTACT, MAP_EMBED_SRC } from "@/lib/contact";
import { Reveal } from "@/components/motion/Reveal";

export function LocationMap() {
  return (
    <section
      id="location"
      className="location-map"
      aria-labelledby="location-map-title"
    >
      <style>{`
        .location-map {
          --ink: #1a2332;
          --muted: #6b7280;
          --sand: #c17f3a;
          --paper: #f0f0f0;
          --line: #ded9d0;
          box-sizing: border-box;
          width: 100%;
          padding: 5rem 1.5rem;
          background:
            radial-gradient(ellipse 70% 50% at 90% 0%, rgba(193, 127, 58, 0.06), transparent 55%),
            var(--paper);
          color: var(--ink);
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
        }
        .location-map *,
        .location-map *::before,
        .location-map *::after {
          box-sizing: border-box;
        }
        .location-map__shell {
          width: min(100%, 1200px);
          margin: 0 auto;
        }
        .location-map__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }
        .location-map__kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          margin: 0 0 0.75rem;
          color: var(--muted);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .location-map__kicker::before {
          content: "";
          display: block;
          width: 2.2rem;
          height: 1px;
          background: var(--sand);
        }
        .location-map__title {
          margin: 0 0 0.5rem;
          font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 1.05;
          text-transform: uppercase;
        }
        .location-map__address {
          margin: 0;
          max-width: 28rem;
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.6;
        }
        .location-map__link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--sand);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .location-map__link:hover {
          color: #a86a2e;
        }
        .location-map__frame {
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid var(--line);
          background: #e8ecf1;
          aspect-ratio: 21 / 9;
          min-height: 280px;
          box-shadow: 0 18px 48px rgba(26, 35, 50, 0.06);
        }
        .location-map__frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
        @media (max-width: 768px) {
          .location-map {
            padding: 3.5rem 1.15rem;
          }
          .location-map__frame {
            aspect-ratio: 4 / 3;
            min-height: 240px;
          }
        }
      `}</style>

      <div className="location-map__shell">
        <Reveal>
          <div className="location-map__header">
            <div>
              <p className="location-map__kicker">Visit us</p>
              <h2 id="location-map-title" className="location-map__title">
                Our Location
              </h2>
              <p className="location-map__address">{CONTACT.address}</p>
            </div>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-map__link"
            >
              Get directions →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="location-map__frame">
            <iframe
              title="TRINEX studio location on Google Maps"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
