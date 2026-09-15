"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="contact"
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
            {t.contact.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "14px",
            }}
          >
            {t.contact.title}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            {t.contact.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Direct Phone Call Card */}
          <div
            className="pro-card"
            style={{
              padding: "32px 24px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "var(--primary-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-blue)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
              {t.contact.callCardTitle}
            </h3>

            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.contact.callCardDesc}
            </p>

            <a
              href="tel:+966556906093"
              className="btn btn-primary-call"
              style={{ width: "100%", marginTop: "auto", fontSize: "1rem", fontWeight: 700 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t.contact.callBtn}
            </a>
          </div>

          {/* WhatsApp Chat Card */}
          <div
            className="pro-card"
            style={{
              padding: "32px 24px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgba(37, 211, 102, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--whatsapp-green)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
              {t.contact.whatsappCardTitle}
            </h3>

            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.contact.whatsappCardDesc}
            </p>

            <a
              href="https://wa.me/message/UZNK27G2N6CIG1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: "100%", marginTop: "auto", fontSize: "1rem", fontWeight: 700 }}
            >
              {t.contact.whatsappBtn}
            </a>
          </div>

          {/* Workshop & Real Address Card */}
          <div
            className="pro-card"
            style={{
              padding: "32px 24px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "var(--primary-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-blue)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
              {t.contact.shopCardTitle}
            </h3>

            <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-blue-dark)" }}>
              📍 {t.contact.shopAddress}
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.contact.shopCardDesc}
            </p>

            <div
              style={{
                marginTop: "auto",
                padding: "10px 14px",
                backgroundColor: "var(--bg-slate)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{t.contact.hours}</span>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div
          className="pro-card"
          style={{
            overflow: "hidden",
            backgroundColor: "#ffffff",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
              backgroundColor: "var(--bg-slate-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "var(--primary-blue)", display: "flex" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-main)" }}>
                {isRTL ? "مقر الورشة وتغطية الخدمة بالدمام والظهران" : "Service Workshop & Rapid Coverage (Dammam & Dhahran)"}
              </span>
            </div>
            <span style={{ fontSize: "0.82rem", color: "var(--text-subtle)", fontWeight: 600 }}>
              {isRTL ? "١٨ شارع السوق، الدمام ٣٢٢٤٢" : "18th St, Al Souq, Dammam 32242"}
            </span>
          </div>
          <div style={{ position: "relative", width: "100%", height: "340px" }}>
            <iframe
              title="Al Sheikh Cooling Center Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.2848243615!2d50.045050518349275!3d26.432800539358245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e29a997ef2b7%3A0x867083049d53c2ee!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1710500000000!5m2!1sen!2ssa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
