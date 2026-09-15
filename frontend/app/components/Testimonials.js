"use client";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    location: "Al Faisaliyah, Dammam",
    rating: 5,
    text: "Exceptional service! They repaired my split AC in under 2 hours. The technician was professional, clean, and explained everything. Highly recommend Al Sheikh Cooling Center!",
    service: "AC Repair",
  },
  {
    id: 2,
    name: "Fatima Al-Harbi",
    location: "Al Shati, Dammam",
    rating: 5,
    text: "My washing machine wasn't draining properly. They diagnosed the issue quickly and fixed it on the spot. Very reasonable pricing and honest work. Will call again!",
    service: "Washing Machine Repair",
  },
  {
    id: 3,
    name: "Muhammad Al-Qahtani",
    location: "Al Rakah, Dammam",
    rating: 5,
    text: "My refrigerator stopped cooling suddenly. They came the same day, found the issue, and replaced the compressor. Works perfectly now. A+ experience!",
    service: "Refrigerator Repair",
  },
  {
    id: 4,
    name: "Sara Al-Dosari",
    location: "Al Murjan, Dammam",
    rating: 5,
    text: "Called them for AC gas refilling. They came within 2 hours, checked for leaks first, and then did the refilling. Very thorough and professional. Fair prices too!",
    service: "AC Gas Refilling",
  },
  {
    id: 5,
    name: "Hassan Al-Ghamdi",
    location: "Al Adamah, Dammam",
    rating: 5,
    text: "My oven heating element stopped working. Their technician replaced it quickly and even cleaned the whole unit. Excellent and reliable service across Dammam!",
    service: "Oven Repair",
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--gold-400)" : "var(--dark-400)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background: "var(--dark-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
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
            <span>Customer Reviews</span>
          </div>
          <h2 className="section-title">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Don&apos;t just take our word for it — hear from hundreds of
            satisfied customers across the city.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Active Testimonial */}
          <div
            className="glass-card"
            style={{
              padding: "40px",
              marginBottom: "30px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "30px",
                fontSize: "4rem",
                lineHeight: 1,
                color: "rgba(212, 150, 14, 0.1)",
                fontFamily: "var(--font-heading)",
              }}
            >
              &ldquo;
            </div>

            <StarRating rating={testimonials[activeIndex].rating} />

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--dark-50)",
                lineHeight: 1.9,
                margin: "20px 0 28px",
                fontStyle: "italic",
              }}
            >
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>

            <div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {testimonials[activeIndex].name}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--dark-200)",
                  marginTop: "4px",
                }}
              >
                {testimonials[activeIndex].location}
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "4px 14px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(212, 150, 14, 0.08)",
                  border: "1px solid rgba(212, 150, 14, 0.15)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--gold-400)",
                }}
              >
                {testimonials[activeIndex].service}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: index === activeIndex ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "var(--radius-full)",
                  background:
                    index === activeIndex
                      ? "var(--gold-400)"
                      : "var(--dark-400)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
