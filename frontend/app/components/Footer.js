"use client";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#071e3d",
        color: "#ffffff",
        borderTop: "3px solid var(--primary-blue)",
      }}
    >
      <div className="container" style={{ padding: "56px 20px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "36px",
            marginBottom: "40px",
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <Logo size={44} variant="navy" />
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
                  {t.nav.brand}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#93c5fd" }}>
                  {t.nav.subBrand}
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#cbd5e1", lineHeight: 1.7, maxWidth: "300px", marginBottom: "12px" }}>
              {t.footer.brandDesc}
            </p>

            <div style={{ fontSize: "0.82rem", color: "#93c5fd", display: "flex", alignItems: "flex-start", gap: "6px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t.footer.address}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
              {isRTL ? "روابط سريعة" : "Quick Links"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <a href="#home" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>{t.nav.home}</a>
              <a href="#services" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>{t.nav.services}</a>
              <a href="#why-us" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>{t.nav.whyUs}</a>
              <a href="#reviews" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>{t.nav.reviews}</a>
              <a href="#contact" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>{t.nav.contact}</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
              {isRTL ? "خدمات الصيانة" : "Repair Services"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "#94a3b8" }}>
              <span>{isRTL ? "صيانة وتعبئة فريون مكيفات" : "AC Repair & Gas Recharge"}</span>
              <span>{isRTL ? "صيانة ثلاجات وفريزر" : "Refrigerator & Freezer Service"}</span>
              <span>{isRTL ? "صيانة غسالات ونشافات" : "Washing Machine Repairs"}</span>
              <span>{isRTL ? "صيانة وتصليح أفران" : "Oven & Stove Diagnostics"}</span>
            </div>
          </div>

          {/* Direct Emergency Contact */}
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
              {isRTL ? "اتصال الطوارئ" : "Emergency Direct Line"}
            </h4>

            <a
              href="tel:+966556906093"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "#60a5fa",
                marginBottom: "12px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+966 55 690 6093</span>
            </a>

            <div style={{ marginTop: "12px" }}>
              <a
                href="https://wa.me/message/UZNK27G2N6CIG1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "8px 16px", fontSize: "0.88rem" }}
              >
                {t.nav.bookWhatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.82rem",
            color: "#94a3b8",
          }}
        >
          <span>© {currentYear} {t.nav.brand} {t.nav.subBrand}. {t.footer.copyright}</span>
          <span>📍 {t.footer.coverage}</span>
        </div>
      </div>
    </footer>
  );
}
