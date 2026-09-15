"use client";
import { useLanguage } from "../context/LanguageContext";

export default function WhyUs() {
  const { t, isRTL } = useLanguage();

  const icons = [
    // 12+ Years in Dammam & Dhahran (Calendar / Award / Landmark)
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>,
    // Multi-Brand Certified Technicians (UserCheck / Badge)
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>,
    // Fully Stocked Mobile Vans / Genuine Spare Parts (Wrench & Gear - P2.12)
    <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>,
    // 30-Day Written Warranty (ShieldCheck)
    <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>,
  ];

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-slate)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "680px", margin: "0 auto 48px" }}>
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            {t.whyUs.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "14px",
            }}
          >
            {t.whyUs.title}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            {t.whyUs.description}
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {t.whyUs.points.map((point, index) => (
            <div
              key={index}
              className="pro-card"
              style={{
                padding: "28px 24px",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--primary-blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icons[index]}
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "var(--primary-blue-dark)",
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
