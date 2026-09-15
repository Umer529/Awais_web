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
        <div style={{ textAlign: "center", marginBottom: "40px", maxWidth: "680px", margin: "0 auto 40px" }}>
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

          {/* Google Reviews Trust Strip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "10px 20px",
              backgroundColor: "var(--bg-slate)",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-light)",
              marginTop: "8px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-main)" }}>
                4.9
              </span>
            </div>
            <div style={{ display: "flex", gap: "2px", color: "#f59e0b" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
              {t.testimonials.ratingNote}
            </span>
          </div>
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

              {/* Author, Location & Timestamp */}
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
                  <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", display: "flex", gap: "6px", alignItems: "center" }}>
                    <span>📍 {item.location}</span>
                    {item.date && (
                      <>
                        <span>•</span>
                        <span>{item.date}</span>
                      </>
                    )}
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
