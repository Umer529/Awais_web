"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const serviceImages = {
  ac: "/ac-service.jpg",
  fridge: "/refrigerator-service.jpg",
  washer: "/washing-machine-service.jpg",
  oven: "/oven-service.jpg",
};

export default function Services() {
  const { t, lang, isRTL } = useLanguage();

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "680px", margin: "0 auto 48px" }}>
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            {t.services.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "14px",
            }}
          >
            {t.services.title}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "24px",
          }}
        >
          {t.services.items.map((srv) => {
            const imgPath = serviceImages[srv.id] || "/ac-service.jpg";
            const waMsg =
              lang === "ar"
                ? `السلام عليكم، أحتاج حجز موعد صيانة لخدمة: (${srv.title}). أرجو التواصل معي بالدمام/الخبر.`
                : `Hello, I would like to book a service for: ${srv.title}. Please contact me for dispatch in Dammam/Khobar.`;

            return (
              <div
                key={srv.id}
                className="pro-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Service Image */}
                <div style={{ position: "relative", height: "180px", width: "100%" }}>
                  <Image
                    src={imgPath}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      insetInlineEnd: "10px",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 8px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    ⚡ {srv.speed}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--primary-blue-dark)",
                      }}
                    >
                      {srv.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: "18px",
                      flexGrow: 1,
                    }}
                  >
                    {srv.desc}
                  </p>

                  <div
                    style={{
                      paddingTop: "14px",
                      marginTop: "auto",
                      borderTop: "1px solid var(--border-light)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "0.82rem",
                      }}
                    >
                      <span style={{ color: "var(--text-subtle)", fontWeight: 600 }}>
                        {t.services.inspectionLabel || (isRTL ? "الفحص المبدئي" : "Initial Inspection")}
                      </span>
                      <span
                        className="pill-price"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                        }}
                      >
                        {srv.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/message/UZNK27G2N6CIG1?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "10px 16px",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t.services.bookService}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
