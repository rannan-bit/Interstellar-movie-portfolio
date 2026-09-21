import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Cast", href: "#cast" },
  { label: "Trailer", href: "#trailer" },
];

const SCROLL_OFFSET = 80;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [expanded, setExpanded] = useState(false);

  /* ----------------------------------------
     Navbar scroll detection
  ---------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ----------------------------------------
     Scroll spy
  ---------------------------------------- */
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ----------------------------------------
     Smooth navigation
  ---------------------------------------- */
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      SCROLL_OFFSET;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(href.substring(1));

    // Close mobile menu
    setExpanded(false);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`interstellar-header ${
        scrolled ? "header-scrolled" : ""
      }`}
      data-bs-theme="dark"
    >
      {/* Animated space particles */}
      <div className="header-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Container className="header-container">

        {/* --------------------------------
            LOGO
        -------------------------------- */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="interstellar-logo"
        >
          <span className="logo-symbol">
            ✦
          </span>

          <span className="logo-text">
            INTERSTELLAR
          </span>
        </Navbar.Brand>

        {/* --------------------------------
            MOBILE TOGGLE
        -------------------------------- */}
        <Navbar.Toggle
          aria-controls="interstellar-nav"
          className={`interstellar-toggle ${
            expanded ? "menu-open" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* --------------------------------
            NAVIGATION
        -------------------------------- */}
        <Navbar.Collapse id="interstellar-nav">
          <Nav className="ms-auto interstellar-nav">

            {NAV_LINKS.map((link, index) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;

              return (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href)
                  }
                  className={`interstellar-link ${
                    isActive ? "active" : ""
                  }`}
                >
                  <span className="nav-number">
                    0{index + 1}
                  </span>

                  <span className="nav-label">
                    {link.label}
                  </span>

                  <span className="nav-line"></span>

                  <span className="nav-glow"></span>
                </Nav.Link>
              );
            })}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;