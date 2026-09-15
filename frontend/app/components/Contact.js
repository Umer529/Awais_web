"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
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
          top: "-150px",
          right: "-150px",
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
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Ready to <span className="gold-text">Book</span>?
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Reach out to us via WhatsApp for the fastest response. We typically
            reply within minutes.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/message/UZNK27G2N6CIG1"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-card"
            className="premium-card"
            style={{
              padding: "40px",
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(37, 211, 102, 0.1)",
                border: "1px solid rgba(37, 211, 102, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#25D366"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "8px",
                fontFamily: "var(--font-heading)",
              }}
            >
              WhatsApp Us
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--dark-100)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Click to chat with us directly. Get instant quotes, book services, and order products.
            </p>
            <div
              className="btn btn-whatsapp"
              style={{ width: "100%" }}
            >
              Start Chat Now
            </div>
          </a>

          {/* Visit Card */}
          <div
            className="premium-card"
            style={{ padding: "40px", textAlign: "center" }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(212, 150, 14, 0.08)",
                border: "1px solid rgba(212, 150, 14, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "var(--gold-400)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "8px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Visit Our Shop
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--dark-100)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Visit our shop in Dammam for expert advice,
              on-site consultations, and same-day repairs.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "0.88rem",
                  color: "var(--dark-50)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Open: 9:00 AM – 10:00 PM Daily
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "0.88rem",
                  color: "var(--dark-50)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call for inquiries
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "0.88rem",
                  color: "var(--dark-50)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Dammam, Saudi Arabia
              </div>
            </div>
          </div>

          {/* Booking Process Card */}
          <div
            className="premium-card"
            style={{ padding: "40px", textAlign: "center" }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(212, 150, 14, 0.08)",
                border: "1px solid rgba(212, 150, 14, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "var(--gold-400)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "8px",
                fontFamily: "var(--font-heading)",
              }}
            >
              How It Works
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              {[
                { step: "01", text: "Message us on WhatsApp" },
                { step: "02", text: "Describe your issue or need" },
                { step: "03", text: "Get an instant quote" },
                { step: "04", text: "We visit & fix it!" },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span
                    className="gold-text"
                    style={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      fontFamily: "var(--font-heading)",
                      minWidth: "30px",
                    }}
                  >
                    {item.step}
                  </span>
                  <span
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--dark-50)",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
