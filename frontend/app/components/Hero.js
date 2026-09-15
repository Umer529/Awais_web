"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, lang, isRTL } = useLanguage();
  const [selectedAppliance, setSelectedAppliance] = useState("ac");
  // Default is empty array (no options marked by default)
  const [selectedFaults, setSelectedFaults] = useState([]);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherText, setOtherText] = useState("");

  const faultsList = t.diagnostic.faults[selectedAppliance] || t.diagnostic.faults.ac;
  const applianceName = t.diagnostic.appliances[selectedAppliance];

  const handleApplianceChange = (key) => {
    setSelectedAppliance(key);
    setSelectedFaults([]); // Reset issue selection on appliance switch
    setOtherChecked(false);
    setOtherText("");
  };

  const handleToggleFault = (faultId) => {
    setSelectedFaults((prev) =>
      prev.includes(faultId)
        ? prev.filter((id) => id !== faultId)
        : [...prev, faultId]
    );
  };

  // Build professional WhatsApp message
  const selectedFaultLabels = faultsList
    .filter((f) => selectedFaults.includes(f.id))
    .map((f) => f.label);

  if (otherChecked && otherText.trim()) {
    selectedFaultLabels.push(`${t.diagnostic.otherLabel}: "${otherText.trim()}"`);
  } else if (otherChecked) {
    selectedFaultLabels.push(t.diagnostic.otherLabel);
  }

  let waMessage = "";
  if (lang === "ar") {
    if (selectedFaultLabels.length > 0) {
      const issuesList = selectedFaultLabels.map((lbl) => `• ${lbl}`).join("\n");
      waMessage = `السلام عليكم - مركز الشيخ للصيانة،\nأحتاج خدمة صيانة منزلية لجهاز: *${applianceName}*.\n\nالأعطال المحددة:\n${issuesList}\n\n📍 الموقع: الدمام / الظهران\nأرجو تأكيد موعد توفر الفني.`;
    } else {
      waMessage = `السلام عليكم - مركز الشيخ للصيانة،\nأحتاج فحص وصيانة منزلية لجهاز: *${applianceName}* بالدمام / الظهران.\n\nأرجو تأكيد موعد وصول الفني.`;
    }
  } else {
    if (selectedFaultLabels.length > 0) {
      const issuesList = selectedFaultLabels.map((lbl) => `• ${lbl}`).join("\n");
      waMessage = `Hello Al Sheikh Cooling Center,\nI need repair service for my *${applianceName}*.\n\nReported Issues:\n${issuesList}\n\n📍 Location: Dammam / Dhahran\nPlease confirm available technician dispatch.`;
    } else {
      waMessage = `Hello Al Sheikh Cooling Center,\nI would like to request an on-site inspection & repair service for my *${applianceName}* in Dammam / Dhahran.\n\nPlease confirm available technician dispatch.`;
    }
  }

  return (
    <section
      id="home"
      style={{
        paddingTop: "108px",
        paddingBottom: "60px",
        backgroundColor: "var(--bg-slate)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Operational Dispatch Notice Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            padding: "10px 18px",
            backgroundColor: "#ffffff",
            border: "1px solid var(--border-light)",
            borderInlineStart: "4px solid var(--primary-blue)",
            borderRadius: "var(--radius-md)",
            marginBottom: "28px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--primary-blue)", display: "flex", alignItems: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)" }}>
              {t.hero.dispatchNotice}
            </span>
          </div>

          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--primary-blue)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{t.hero.dispatchArrival}</span>
          </div>
        </div>

        {/* Hero Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "flex-start",
          }}
          className="hero-split-grid"
        >
          {/* Left: Headlines, Price Anchor & Direct Actions */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--text-main)",
                lineHeight: 1.2,
                marginBottom: "16px",
                letterSpacing: "-0.5px",
              }}
            >
              {t.hero.headline}
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "20px",
                maxWidth: "540px",
              }}
            >
              {t.hero.subheadline}
            </p>

            {/* Clear Price Anchor Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "#ecfdf5",
                border: "1.5px solid #a7f3d0",
                borderRadius: "var(--radius-md)",
                marginBottom: "28px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#065f46" }}>
                {t.hero.priceAnchor}
              </span>
            </div>

            {/* Clean 2-Choice CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              {/* Primary Call Action */}
              <a
                href="tel:+966556906093"
                className="btn btn-primary-call"
                style={{
                  padding: "14px 28px",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {t.hero.callNow}
              </a>

              {/* Secondary WhatsApp Action */}
              <a
                href={`https://wa.me/message/UZNK27G2N6CIG1?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  padding: "14px 24px",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.hero.whatsappChat}
              </a>
            </div>

            {/* Google Reviews Trust Strip */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "20px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#f59e0b", display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </span>
              <span>{t.hero.googleReviews}</span>
            </div>

            {/* 3 Core Trust Pillars (Replaced Emojis with Lucide SVG Icons) */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                  {t.hero.trustPill1}
                </span>
              </div>
              <span style={{ color: "var(--border-focus)" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                  {t.hero.trustPill2}
                </span>
              </div>
              <span style={{ color: "var(--border-focus)" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                  {t.hero.trustPill3}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Reinstated Real Technician Visual & Streamlined Diagnostics */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Real Technician Hero Image Card */}
            <div
              className="pro-card"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "260px",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <Image
                src="/hero-technician-gulf.jpg"
                alt="Al Sheikh Certified AC and Appliance Technician in Dammam"
                fill
                sizes="(max-width: 960px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
                priority
              />

              {/* Repositioned Arrival Badge Overlay (P1.6) */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  insetInlineEnd: "14px",
                  backgroundColor: "rgba(11, 79, 138, 0.92)",
                  color: "#ffffff",
                  backdropFilter: "blur(6px)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{t.hero.arrivalBadge}</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  insetInlineStart: "16px",
                  insetInlineEnd: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#ffffff",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>{t.hero.technicianBadge}</div>
                  <div style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>{t.hero.technicianSub}</div>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(11, 79, 138, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {isRTL ? "الدمام والظهران" : "Dammam & Dhahran"}
                </span>
              </div>
            </div>

            {/* Streamlined Diagnostics Widget (Multi-Select Lead Qualifier) */}
            <div
              className="pro-card"
              style={{
                padding: "20px 22px",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Header with Title & Price - Never wraps awkwardly */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid var(--border-light)",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--primary-blue)",
                    }}
                  >
                    {t.diagnostic.title}
                  </h3>
                </div>
                <span
                  className="pill-price"
                  style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                >
                  {t.diagnostic.priceVal}
                </span>
              </div>

              {/* Step 1: Appliance Selector */}
              <div style={{ marginBottom: "14px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--text-subtle)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  {t.diagnostic.step1}
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "6px",
                  }}
                >
                  {["ac", "fridge", "washer", "oven"].map((key) => {
                    const isSelected = selectedAppliance === key;
                    return (
                      <button
                        key={key}
                        onClick={() => handleApplianceChange(key)}
                        style={{
                          padding: "8px 4px",
                          borderRadius: "var(--radius-md)",
                          border: isSelected
                            ? "2px solid var(--primary-blue)"
                            : "1px solid var(--border-light)",
                          backgroundColor: isSelected ? "var(--primary-blue-light)" : "var(--bg-slate)",
                          color: isSelected ? "var(--primary-blue)" : "var(--text-main)",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {t.diagnostic.appliances[key]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: What's the problem? (Multi-select Checkboxes) */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--text-subtle)",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.diagnostic.step2}
                  </label>
                  {(selectedFaults.length > 0 || otherChecked) && (
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--primary-blue)",
                        fontWeight: 700,
                      }}
                    >
                      {selectedFaults.length + (otherChecked ? 1 : 0)} {lang === "ar" ? "محدد" : "selected"}
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {faultsList.map((fault) => {
                    const isChecked = selectedFaults.includes(fault.id);
                    return (
                      <button
                        key={fault.id}
                        type="button"
                        onClick={() => handleToggleFault(fault.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "9px 12px",
                          borderRadius: "var(--radius-sm)",
                          border: isChecked
                            ? "1.5px solid var(--primary-blue)"
                            : "1px solid var(--border-light)",
                          backgroundColor: isChecked ? "#f0f9ff" : "#ffffff",
                          color: isChecked ? "var(--primary-blue-dark)" : "var(--text-muted)",
                          fontSize: "0.85rem",
                          fontWeight: isChecked ? 700 : 500,
                          cursor: "pointer",
                          textAlign: isRTL ? "right" : "left",
                          transition: "all 0.15s ease",
                          width: "100%",
                        }}
                      >
                        {/* Square Checkbox Indicator */}
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "1.5px solid var(--primary-blue)"
                              : "1.5px solid var(--border-focus)",
                            backgroundColor: isChecked ? "var(--primary-blue)" : "#ffffff",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.15s ease",
                          }}
                        >
                          {isChecked && (
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        <span style={{ flexGrow: 1 }}>{fault.label}</span>
                      </button>
                    );
                  })}

                  {/* 5th Checkbox: Other / Something else not listed (P1.10) */}
                  <button
                    type="button"
                    onClick={() => setOtherChecked(!otherChecked)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "9px 12px",
                      borderRadius: "var(--radius-sm)",
                      border: otherChecked
                        ? "1.5px solid var(--primary-blue)"
                        : "1px solid var(--border-light)",
                      backgroundColor: otherChecked ? "#f0f9ff" : "#ffffff",
                      color: otherChecked ? "var(--primary-blue-dark)" : "var(--text-muted)",
                      fontSize: "0.85rem",
                      fontWeight: otherChecked ? 700 : 500,
                      cursor: "pointer",
                      textAlign: isRTL ? "right" : "left",
                      transition: "all 0.15s ease",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        border: otherChecked
                          ? "1.5px solid var(--primary-blue)"
                          : "1.5px solid var(--border-focus)",
                        backgroundColor: otherChecked ? "var(--primary-blue)" : "#ffffff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.15s ease",
                      }}
                    >
                      {otherChecked && (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <span style={{ flexGrow: 1 }}>{t.diagnostic.otherLabel}</span>
                  </button>

                  {/* Free-text field for Other */}
                  {otherChecked && (
                    <input
                      type="text"
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                      placeholder={t.diagnostic.otherPlaceholder}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: "var(--radius-sm)",
                        border: "1.5px solid var(--primary-blue)",
                        fontSize: "0.85rem",
                        color: "var(--text-main)",
                        backgroundColor: "#ffffff",
                        outline: "none",
                        marginTop: "2px",
                        boxShadow: "0 0 0 3px rgba(11, 79, 138, 0.08)",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Step 3: Fast WhatsApp Dispatch Button */}
              <a
                href={`https://wa.me/message/UZNK27G2N6CIG1?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  justifyContent: "center",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "8px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t.diagnostic.cta}</span>
              </a>

              {/* Emergency Call Secondary Text */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  color: "var(--text-subtle)",
                }}
              >
                <span>{t.diagnostic.urgentHelp}</span>
                <a
                  href="tel:+966556906093"
                  style={{
                    color: "var(--primary-blue)",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  {t.diagnostic.callDirect}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
