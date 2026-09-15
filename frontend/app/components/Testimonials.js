"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="reviews"
      className="section-padding"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "680px", margin: "0 auto 48px" }}>
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            {t.testimonials.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "14px",
            }}
          >
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {t.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="pro-card"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                backgroundColor: "var(--bg-slate)",
              }}
            >
              {/* Star Rating */}
              <div style={{ display: "flex", gap: "4px", color: "#f59e0b" }}>
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author & Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>
                    📍 {item.location}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--primary-blue)",
                    backgroundColor: "var(--primary-blue-light)",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  ✓ {isRTL ? "عميل موثق" : "Verified Customer"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
