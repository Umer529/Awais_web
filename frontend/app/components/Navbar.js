"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled
          ? "rgba(3, 3, 3, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212, 150, 14, 0.1)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <Image
            src="/logo.png"
            alt="Al Sheikh Cooling Center"
            width={48}
            height={48}
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
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Al Sheikh
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--gold-400)",
              }}
            >
              Cooling Center
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: "0.88rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.replace("#", "")
                    ? "var(--gold-400)"
                    : "var(--dark-100)",
                transition: "color 0.3s",
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--gold-400)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color =
                  activeSection === link.href.replace("#", "")
                    ? "var(--gold-400)"
                    : "var(--dark-100)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/UZNK27G2N6CIG1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "10px 24px", fontSize: "0.85rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--gold-400)",
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--gold-400)",
              transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--gold-400)",
              transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        style={{
          display: mobileOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "20px 24px",
          gap: "16px",
          background: "rgba(3, 3, 3, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(212, 150, 14, 0.1)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color:
                activeSection === link.href.replace("#", "")
                  ? "var(--gold-400)"
                  : "var(--dark-100)",
              padding: "8px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/message/UZNK27G2N6CIG1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ textAlign: "center", marginTop: "8px" }}
        >
          Book on WhatsApp
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
