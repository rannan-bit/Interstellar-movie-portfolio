import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Movie Overview", href: "#overview" },
  { label: "Story", href: "#story" },
  { label: "Science", href: "#science" },
  { label: "Cast", href: "#cast" },
  { label: "Endurance", href: "#endurance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Music", href: "#music" },
  { label: "Ratings", href: "#ratings" },
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
      setScrolled(window.scrollY > 20);
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
     Close mobile menu on ESC key or resize
  ---------------------------------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && expanded) {
        setExpanded(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1200 && expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [expanded]);

  /* ----------------------------------------
     Scroll spy with IntersectionObserver
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
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0.15, 0.4, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ----------------------------------------
     Smooth navigation click
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
      expand="xl"
      expanded={expanded}
      onToggle={setExpanded}
      className={`interstellar-header ${
        scrolled ? "header-scrolled" : ""
      }`}
      data-bs-theme="dark"
    >
      {/* Animated space particles */}
      <div className="header-stars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Container fluid="xl" className="header-container">
        {/* --------------------------------
            LOGO & BRANDING
        -------------------------------- */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="interstellar-logo"
        >
          <span className="logo-symbol" aria-hidden="true">
            ✦
          </span>

          <div className="logo-text-group">
            <span className="logo-text">INTERSTELLAR</span>
          </div>
        </Navbar.Brand>

        {/* --------------------------------
            MOBILE TOGGLE BUTTON
        -------------------------------- */}
        <Navbar.Toggle
          aria-controls="interstellar-nav"
          aria-label={expanded ? "Close navigation menu" : "Open navigation menu"}
          className={`interstellar-toggle ${
            expanded ? "menu-open" : ""
          }`}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </Navbar.Toggle>

        {/* --------------------------------
            NAVIGATION LINKS & CTA
        -------------------------------- */}
        <Navbar.Collapse id="interstellar-nav">
          <Nav className="ms-auto interstellar-nav">
            {NAV_LINKS.map((link) => {
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
                  <span className="nav-label">
                    {link.label}
                  </span>

                  <span className="nav-line"></span>

                  <span className="nav-glow"></span>
                </Nav.Link>
              );
            })}

            {/* HEADER CTA BUTTON */}
            <a
              href="#trailer"
              onClick={(e) => handleNavClick(e, "#trailer")}
              className="header-cta-btn"
            >
              <span className="cta-icon">▶</span>
              <span className="cta-text">TRAILER</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

