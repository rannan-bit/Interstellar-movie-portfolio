import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const AWARDS = [
  {
    id: "oscar-vfx",
    year: "2015",
    award: "Academy Awards (Oscars)",
    category: "Best Visual Effects",
    recipient: "Paul Franklin, Andrew Lockley, Ian Hunter, Scott Fisher",
    result: "WINNER",
    badge: "OSCAR WINNER",
    number: "01",
  },
  {
    id: "bafta-vfx",
    year: "2015",
    award: "BAFTA Film Awards",
    category: "Special Visual Effects",
    recipient: "Paul Franklin, Andrew Lockley, Ian Hunter, Scott Fisher",
    result: "NOMINATED",
    badge: "NOMINEE",
    number: "02",
  },
  {
    id: "globes-score",
    year: "2015",
    award: "Golden Globe Awards",
    category: "Best Original Score - Motion Picture",
    recipient: "Hans Zimmer",
    result: "NOMINATED",
    badge: "NOMINEE",
    number: "03",
  },
  {
    id: "critics-scifi",
    year: "2015",
    award: "Critics' Choice Movie Awards",
    category: "Best Sci-Fi / Horror Movie",
    recipient: "Christopher Nolan & Syncopy",
    result: "WINNER",
    badge: "WINNER",
    number: "04",
  },
  {
    id: "critics-vfx",
    year: "2015",
    award: "Critics' Choice Movie Awards",
    category: "Best Visual Effects",
    recipient: "Double Negative / VFX Team",
    result: "WINNER",
    badge: "WINNER",
    number: "05",
  },
  {
    id: "saturn-scifi",
    year: "2015",
    award: "Saturn Awards",
    category: "Best Science Fiction Film",
    recipient: "Paramount Pictures / Warner Bros.",
    result: "WINNER",
    badge: "WINNER",
    number: "06",
  },
];

function LaurelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className="award-laurel-svg">
      <path d="M12 2L13.8 7.5H19.5L14.8 10.9L16.6 16.5L12 13.1L7.4 16.5L9.2 10.9L4.5 7.5H10.2L12 2Z" />
    </svg>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="itr-awards">

      {/* Atmospheric nebula & background particles */}
      <div className="itr-awards__nebula" aria-hidden="true" />
      <div className="itr-awards__stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="itr-awards__head">

          <div className="itr-awards__head-main">

            <div className="itr-awards__eyebrow">
              <span className="eyebrow-dot" />
              <span>ACCOLADES & RECOGNITION</span>
            </div>

            <h2 className="itr-awards__heading">
              Honors & Awards
            </h2>

            <p className="itr-awards__sub">
              A historical archive of cinematic achievements, technical breakthroughs, and critical acclaim.
            </p>

          </div>

          <div className="itr-awards__stats-strip">
            <div className="stat-pill">
              <strong className="stat-val">5</strong>
              <span className="stat-lbl">MAJOR WINS</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <strong className="stat-val">47+</strong>
              <span className="stat-lbl">NOMINATIONS</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <strong className="stat-val">2015</strong>
              <span className="stat-lbl">ACADEMY YEAR</span>
            </div>
          </div>

        </header>


        {/* =====================================================
            TOP FEATURED ACCOLADE HIGHLIGHT BAR
        ===================================================== */}

        <div className="itr-awards__banner">
          <div className="banner-laurel">
            <LaurelIcon />
          </div>

          <div className="banner-info">
            <span className="banner-tag">FEATURED HIGHLIGHT · 87TH ACADEMY AWARDS</span>
            <h3 className="banner-title">ACADEMY AWARD® WINNER</h3>
            <p className="banner-desc">Best Visual Effects — Awarded for unprecedented physics calculations of Gargantua & Wormholes.</p>
          </div>

          <div className="banner-badge">
            <span>OSCAR WINNER</span>
          </div>
        </div>


        {/* =====================================================
            ACCOLADES LIST (NON-CARD HORIZONTAL ROW LAYOUT)
        ===================================================== */}

        <div className="itr-awards-list">

          {AWARDS.map((item) => (

            <div
              key={item.id}
              className={`itr-award-row ${item.result === "WINNER" ? "itr-award-row--winner" : ""}`}
            >

              {/* Number & Year */}
              <div className="itr-award-row__meta">
                <span className="row-num">{item.number}</span>
                <span className="row-year">{item.year}</span>
              </div>

              {/* Icon */}
              <div className="itr-award-row__icon">
                <LaurelIcon />
              </div>

              {/* Main Info */}
              <div className="itr-award-row__main">
                <h3 className="row-award">{item.award}</h3>
                <p className="row-category">{item.category}</p>
                <span className="row-recipient">{item.recipient}</span>
              </div>

              {/* Status Badge */}
              <div className="itr-award-row__badge">
                <span className={`status-tag ${item.result === "WINNER" ? "status-tag--win" : "status-tag--nom"}`}>
                  {item.result === "WINNER" && <span className="star-icon">★</span>}
                  {item.badge}
                </span>
              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            QUOTE FOOTER
        ===================================================== */}

        <div className="itr-awards__quote">

          <span className="itr-awards__quote-line" />

          <blockquote>
            "Mankind was born on Earth. It was never meant to die here."
          </blockquote>

          <span className="itr-awards__quote-credit">
            — INTERSTELLAR (2014)
          </span>

          <span className="itr-awards__quote-line" />

        </div>

      </Container>

    </section>
  );
}