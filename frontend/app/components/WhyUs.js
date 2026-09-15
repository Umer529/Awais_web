"use client";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Certified Technicians",
    description:
      "Our team is professionally trained and certified with years of hands-on experience across all major brands.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same-Day Service",
    description:
      "We understand urgency. Book before noon and get same-day service at your doorstep — no extra charges.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We provide upfront quotes before any work begins so you're always in control.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    title: "Service Warranty",
    description:
      "Every repair comes with a service warranty. If the same issue reoccurs, we fix it free of charge.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Genuine Spare Parts",
    description:
      "We only use original, manufacturer-approved spare parts to ensure lasting performance and reliability.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "City-Wide Coverage",
    description:
      "We cover the entire city and surrounding areas. No location is too far for our service team to reach.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        background: "var(--dark-950)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 150, 14, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            The <span className="gold-text">Al Sheikh</span> Difference
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            We don&apos;t just fix appliances — we build lasting relationships
            through trust, quality, and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                padding: "32px",
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-lg)",
                transition: "all var(--transition-medium)",
                cursor: "default",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--card-hover-border)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  minWidth: "52px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(212, 150, 14, 0.08)",
                  border: "1px solid rgba(212, 150, 14, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-400)",
                }}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "8px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--dark-100)",
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
