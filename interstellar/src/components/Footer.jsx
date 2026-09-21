import React from "react";
import { Container } from "react-bootstrap";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Science", href: "#science" },
  { label: "Cast", href: "#cast" },
  { label: "Endurance", href: "#endurance" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trailer", href: "#trailer" },
];

const SOCIAL_LINKS = [
  {
    label: "IMDb",
    href: "https://www.imdb.com/title/tt0816692/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=fVgawHv6Ngs",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="itr-footer">

      {/* =================================================
          ATMOSPHERE
         ================================================= */}

      <div className="itr-footer__nebula" />

      <div
        className="itr-footer__stars"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container className="itr-footer__inner">

        {/* =================================================
            FINAL MESSAGE
           ================================================= */}

        <div className="itr-footer__hero">

          <div className="itr-footer__eyebrow">
            <span />
            <small>END OF TRANSMISSION</small>
            <span />
          </div>

          <p className="itr-footer__kicker">
            WE ARE EXPLORERS
          </p>

          <h2 className="itr-footer__title">
            Inter<em>stellar</em>
          </h2>

          <p className="itr-footer__tagline">
            We are explorers. We always have been.
          </p>

        </div>

        {/* =================================================
            NAVIGATION
           ================================================= */}

        <div className="itr-footer__section">

          <div className="itr-footer__section-label">
            <span>01</span>
            NAVIGATION
          </div>

          <nav
            className="itr-footer__nav"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="itr-footer__link"
              >
                <span className="itr-footer__link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.label}</span>

                <span className="itr-footer__link-arrow">
                  ↗
                </span>
              </a>
            ))}
          </nav>

        </div>

        {/* =================================================
            MISSION INFORMATION
           ================================================= */}

        <div className="itr-footer__mission">

          <div className="itr-footer__mission-block">
            <span>DIRECTOR</span>
            <strong>
              Christopher Nolan
            </strong>
          </div>

          <div className="itr-footer__mission-block">
            <span>RELEASE</span>
            <strong>2014</strong>
          </div>

          <div className="itr-footer__mission-block">
            <span>GENRE</span>
            <strong>
              Sci-Fi · Drama · Adventure
            </strong>
          </div>

          <div className="itr-footer__mission-block">
            <span>MISSION</span>
            <strong>
              FIND A NEW HOME
            </strong>
          </div>

        </div>

        {/* =================================================
            SOCIAL
           ================================================= */}

        <div className="itr-footer__social-row">

          <div className="itr-footer__section-label">
            <span>02</span>
            EXTERNAL SIGNALS
          </div>

          <div className="itr-footer__social">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="itr-footer__badge"
                aria-label={social.label}
              >
                <span>{social.label}</span>
                <b>↗</b>
              </a>
            ))}
          </div>

        </div>

        {/* =================================================
            QUOTE
           ================================================= */}

        <div className="itr-footer__quote-wrap">

          <span className="itr-footer__quote-line" />

          <blockquote className="itr-footer__quote">
            "Mankind was born on Earth.
            It was never meant to die here."
          </blockquote>

          <span className="itr-footer__quote-line" />

        </div>

        {/* =================================================
            FINAL HUD
           ================================================= */}

        <div className="itr-footer__bottom">

          <div className="itr-footer__status">
            <span />
            TRANSMISSION COMPLETE
          </div>

          <div className="itr-footer__coordinates">
            EARTH · 2014 · 001
          </div>

          <div className="itr-footer__signal">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

        </div>

        {/* =================================================
            COPYRIGHT
           ================================================= */}

        <div className="itr-footer__copyright">
          <p>
            © {new Date().getFullYear()} Movie Portfolio
          </p>

          <p>
            A FAN-MADE INTERSTELLAR EXPERIENCE
          </p>
        </div>

      </Container>
    </footer>
  );
}