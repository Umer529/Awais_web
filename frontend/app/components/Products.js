"use client";

const products = [
  {
    id: 1,
    name: "Split AC 1.5 Ton",
    brand: "Haier",
    price: "PKR 85,000",
    originalPrice: "PKR 95,000",
    badge: "Best Seller",
    features: ["Inverter Technology", "Energy Efficient", "Self Clean", "WiFi Enabled"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="10" rx="2" />
        <path d="M12 14v4M8 18h8M6 8h.01M9 8h.01M14 8h4" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Split AC 1 Ton",
    brand: "Gree",
    price: "PKR 65,000",
    originalPrice: "PKR 72,000",
    badge: "Popular",
    features: ["Turbo Cooling", "Low Noise", "R-410A Gas", "Copper Condenser"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="10" rx="2" />
        <path d="M12 14v4M8 18h8M6 8h.01M9 8h.01M14 8h4" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Front Load Washer 8KG",
    brand: "Samsung",
    price: "PKR 110,000",
    originalPrice: "PKR 125,000",
    badge: "Premium",
    features: ["Eco Bubble™", "Digital Inverter", "Steam Wash", "Smart Control"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <circle cx="12" cy="14" r="2" />
        <path d="M7 6h.01M10 6h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Top Load Washer 12KG",
    brand: "Dawlance",
    price: "PKR 48,000",
    originalPrice: "PKR 55,000",
    badge: "Value",
    features: ["Full Auto", "Rust Proof Body", "Twin Tub", "Smart Load Sensor"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <circle cx="12" cy="14" r="2" />
        <path d="M7 6h.01M10 6h.01" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Double Door Fridge 350L",
    brand: "PEL",
    price: "PKR 92,000",
    originalPrice: "PKR 105,000",
    badge: "Hot Deal",
    features: ["Inverter Compressor", "No Frost", "Jumbo Freezer", "LED Display"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 10h16M8 6v0M8 14v2" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Side-by-Side Fridge 550L",
    brand: "LG",
    price: "PKR 185,000",
    originalPrice: "PKR 210,000",
    badge: "Luxury",
    features: ["Smart ThinQ™", "Door Cooling+", "Multi Air Flow", "Water Dispenser"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 10h16M8 6v0M8 14v2" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="section-padding"
      style={{
        background: "var(--dark-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative BG */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 150, 14, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            <span>Shop With Us</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gold-text">Products</span>
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Browse our curated selection of top-brand appliances. Competitive
            pricing with professional installation included.
          </p>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="premium-card animate-fade-up"
              style={{
                padding: "28px",
                animationDelay: `${index * 0.1}s`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top Row: Icon + Badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(212, 150, 14, 0.06)",
                    border: "1px solid rgba(212, 150, 14, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {product.icon}
                </div>
                <span
                  style={{
                    padding: "5px 14px",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(212, 150, 14, 0.1)",
                    border: "1px solid rgba(212, 150, 14, 0.2)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--gold-400)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Info */}
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--dark-200)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {product.brand}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "16px",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {product.name}
              </h3>

              {/* Features */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8rem",
                      color: "var(--dark-100)",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--gold-400)",
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--dark-300)",
                      textDecoration: "line-through",
                    }}
                  >
                    {product.originalPrice}
                  </div>
                  <div
                    className="gold-text"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {product.price}
                  </div>
                </div>
                <a
                  href={`https://wa.me/message/UZNK27G2N6CIG1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.85rem" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
