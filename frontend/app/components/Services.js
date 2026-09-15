"use client";
import Image from "next/image";

const services = [
  {
    id: "ac",
    title: "Air Conditioner Repair",
    description:
      "Complete AC repair and maintenance services — from gas refilling and leak detection to compressor repair and deep cleaning for all brands.",
    image: "/ac-service.jpg",
    features: [
      "Gas Refilling & Leak Detection",
      "Deep Cleaning & Servicing",
      "Compressor & PCB Repair",
      "Thermostat Replacement",
      "Annual Maintenance Contracts",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="10" rx="2" />
        <path d="M12 14v4M8 18h8M6 8h.01M9 8h.01" />
        <path d="M14 8h4" />
      </svg>
    ),
  },
  {
    id: "refrigerator",
    title: "Refrigerator Repair",
    description:
      "Professional refrigerator and freezer repair — from cooling issues to compressor replacement, thermostat fixes, and complete overhauling.",
    image: "/refrigerator-service.jpg",
    features: [
      "Compressor Replacement",
      "Gas Charging & Leak Repair",
      "Thermostat & Timer Repair",
      "Door Seal Replacement",
      "Deep Cleaning & Servicing",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 10h16" />
        <path d="M8 6v0M8 14v2" />
      </svg>
    ),
  },
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    description:
      "Expert repair for all types of washing machines — front load, top load, semi-automatic, and fully automatic. All brands serviced.",
    image: "/washing-machine-service.jpg",
    features: [
      "Motor & Drum Repair",
      "Water Inlet/Outlet Fixes",
      "PCB Board Replacement",
      "Belt & Bearing Change",
      "Complete Overhauling",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <circle cx="12" cy="14" r="2" />
        <path d="M7 6h.01M10 6h.01" />
      </svg>
    ),
  },
  {
    id: "oven",
    title: "Oven Repair",
    description:
      "Specialized oven and cooking range repair services — heating element replacement, thermostat calibration, ignition fixes, and full servicing.",
    image: "/oven-service.jpg",
    features: [
      "Heating Element Replacement",
      "Thermostat Calibration",
      "Ignition & Burner Repair",
      "Door Hinge & Seal Fix",
      "Full Cleaning & Servicing",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <rect x="6" y="8" width="12" height="8" rx="1" />
        <circle cx="7" cy="6" r="0.5" fill="currentColor" />
        <circle cx="10" cy="6" r="0.5" fill="currentColor" />
        <circle cx="13" cy="6" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--dark-950)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">
            Our <span className="gold-text">Repair</span> Services
          </h2>
          <p
            className="section-description"
            style={{ margin: "0 auto" }}
          >
            Expert repair and maintenance solutions for all your home appliances
            in Dammam, Saudi Arabia. All brands serviced.
          </p>
        </div>

        {/* Service Cards - 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="premium-card animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(3,3,3,0.8) 0%, transparent 60%)",
                  }}
                />
                {/* Icon Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(212, 150, 14, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-400)",
                    border: "1px solid rgba(212, 150, 14, 0.2)",
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--dark-100)",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.88rem",
                        color: "var(--dark-50)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--gold-400)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/message/UZNK27G2N6CIG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    padding: "12px 24px",
                    fontSize: "0.9rem",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
