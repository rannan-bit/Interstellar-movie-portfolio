import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Science", href: "#science" },
  { label: "Cast", href: "#cast" },
  { label: "Endurance", href: "#endurance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Music", href: "#music" },
  { label: "Trailer", href: "#trailer" },
  { label: "Ratings", href: "#ratings" },
];

const SOCIAL_LINKS = [
  { label: "IMDb", href: "https://www.imdb.com/title/tt0816692/" },
  { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/m/interstellar_2014" },
  { label: "YouTube Trailer", href: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
  { label: "Warner Bros.", href: "https://www.warnerbros.com/movies/interstellar" },
];

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="itr-footer">
      {/* Background Star Particles */}
      <div className="itr-footer__stars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Container className="itr-footer__inner">
        {/* Top Branding & Quote Section */}
        <div className="itr-footer__top-brand">
          <div className="itr-footer__brand-title">
            <span className="brand-icon">✦</span>
            <span className="brand-text">INTERSTELLAR</span>
            <span className="brand-badge">A FILM BY CHRISTOPHER NOLAN</span>
          </div>

          <blockquote className="itr-footer__main-quote">
            “Mankind was born on Earth. It was never meant to die here.”
          </blockquote>
        </div>

        <hr className="itr-footer__divider" />

        {/* 4-Column Standard Footer Grid */}
        <Row className="itr-footer__grid">
          {/* Column 1: About Film */}
          <Col lg={3} md={6} className="itr-footer__col">
            <h4 className="footer-col-title">ABOUT THE FILM</h4>
            <p className="footer-col-text">
              When Earth becomes uninhabitable, a team of ex-NASA astronauts travels through a wormhole near Saturn in search of a new home for humanity.
            </p>
            <div className="footer-studios">
              <span className="studio-pill">PARAMOUNT</span>
              <span className="studio-pill">WARNER BROS</span>
              <span className="studio-pill">SYNCOPY</span>
            </div>
          </Col>

          {/* Column 2: Quick Navigation */}
          <Col lg={3} md={6} className="itr-footer__col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Film Details */}
          <Col lg={3} md={6} className="itr-footer__col">
            <h4 className="footer-col-title">FILM SPECS</h4>
            <ul className="footer-specs-list">
              <li>
                <span className="spec-label">DIRECTOR</span>
                <span className="spec-value">Christopher Nolan</span>
              </li>
              <li>
                <span className="spec-label">WRITERS</span>
                <span className="spec-value">Jonathan & Christopher Nolan</span>
              </li>
              <li>
                <span className="spec-label">SCORE</span>
                <span className="spec-value">Hans Zimmer</span>
              </li>
              <li>
                <span className="spec-label">FORMAT</span>
                <span className="spec-value">IMAX 70MM (1.43:1)</span>
              </li>
              <li>
                <span className="spec-label">RUNTIME</span>
                <span className="spec-value">169 Minutes</span>
              </li>
            </ul>
          </Col>

          {/* Column 4: External Media Signals */}
          <Col lg={3} md={6} className="itr-footer__col">
            <h4 className="footer-col-title">EXTERNAL SIGNALS</h4>
            <div className="footer-external-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-external-btn"
                >
                  <span>{social.label}</span>
                  <span className="ext-icon">↗</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="itr-footer__divider" />

        {/* Sub-Footer Legal & Back-To-Top Bar */}
        <div className="itr-footer__bottom-bar">
          <div className="itr-footer__copyright">
            <span>© {new Date().getFullYear()} INTERSTELLAR PORTFOLIO</span>
            <span className="legal-sep">·</span>
            <span className="legal-fan">FAN-MADE CINEMATIC EXPERIENCE</span>
          </div>

          <div className="itr-footer__system-status">
            <span className="status-dot" />
            <span>LAZARUS MISSION TRANSMISSION ONLINE</span>
          </div>

          <button
            onClick={handleScrollTop}
            className="itr-footer__back-top"
            aria-label="Scroll back to top of page"
          >
            <span>↑ BACK TO TOP</span>
          </button>
        </div>
      </Container>
    </footer>
  );
}