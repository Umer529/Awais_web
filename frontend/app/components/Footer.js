"use client";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--dark-800)",
        borderTop: "1px solid rgba(212, 150, 14, 0.08)",
      }}
    >
      {/* Main Footer */}
      <div className="container" style={{ padding: "60px 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <Image
                src="/logo.png"
                alt="Al Sheikh Cooling Center"
                width={44}
                height={44}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid var(--gold-600)",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                  }}
                >
                  Al Sheikh
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--gold-400)",
                  }}
                >
                  Cooling Center
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--dark-100)",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Your trusted partner for all cooling and appliance needs. Premium
              service, genuine parts, and unmatched expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "20px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {["Home", "Services", "Why Us", "Testimonials", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--dark-100)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--gold-400)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--dark-100)")
                    }
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "20px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Services
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                "AC Repair & Service",
                "Refrigerator Repair",
                "Washing Machine Repair",
                "Oven Repair",
                "Gas Refilling",
                "Emergency Service",
              ].map((service) => (
                <span
                  key={service}
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--dark-100)",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "20px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Connect With Us
            </h4>
            <a
              href="https://wa.me/message/UZNK27G2N6CIG1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                fontSize: "0.85rem",
                padding: "10px 20px",
                marginBottom: "20px",
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
              Chat on WhatsApp
            </a>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--dark-200)",
                lineHeight: 1.7,
              }}
            >
              Available 24/7 for emergency services. Typical response time under
              5 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "20px 24px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--dark-300)",
            }}
          >
            © {currentYear} Al Sheikh Cooling Center. All rights reserved.
          </span>
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--dark-300)",
            }}
          >
            Premium Cooling &amp; Appliance Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
