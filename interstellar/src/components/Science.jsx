import React, { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import "../App.css";

/* =========================================================
   SCIENCE VISUALS
========================================================= */

function WormholeGlyph() {
  const rings = [92, 74, 56, 38, 20];

  return (
    <svg
      viewBox="0 0 200 200"
      className="itr-glyph"
      aria-hidden="true"
    >
      {rings.map((radius, index) => (
        <circle
          key={radius}
          cx="100"
          cy="100"
          r={radius}
          className="itr-glyph__ring"
          style={{
            opacity: 0.85 - index * 0.13,
          }}
        />
      ))}

      <circle
        cx="100"
        cy="100"
        r="7"
        className="itr-glyph__core"
      />
    </svg>
  );
}


function BlackHoleGlyph() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="itr-glyph"
      aria-hidden="true"
    >
      <ellipse
        cx="100"
        cy="100"
        rx="92"
        ry="26"
        className="itr-glyph__disk"
      />

      <ellipse
        cx="100"
        cy="100"
        rx="92"
        ry="26"
        className="itr-glyph__disk itr-glyph__disk--top"
      />

      <circle
        cx="100"
        cy="100"
        r="30"
        className="itr-glyph__core"
      />

      <circle
        cx="100"
        cy="100"
        r="38"
        className="itr-glyph__horizon"
      />
    </svg>
  );
}


function TimeDilationGlyph() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="itr-glyph"
      aria-hidden="true"
    >
      <circle
        cx="42"
        cy="60"
        r="26"
        className="itr-glyph__ring"
      />

      <text
        x="42"
        y="65"
        className="itr-glyph__label"
      >
        1H
      </text>

      <path
        d="M78 60 H140"
        className="itr-glyph__arrow"
      />

      <path
        d="M132 52 L142 60 L132 68"
        className="itr-glyph__arrow"
        fill="none"
      />

      <circle
        cx="172"
        cy="60"
        r="18"
        className="itr-glyph__ring"
      />

      <text
        x="172"
        y="65"
        className="itr-glyph__label itr-glyph__label--sm"
      >
        7Y
      </text>
    </svg>
  );
}


function RelativityGlyph() {
  const lines = [-60, -30, 0, 30, 60];

  return (
    <svg
      viewBox="0 0 200 140"
      className="itr-glyph"
      aria-hidden="true"
    >
      {lines.map((y) => (
        <path
          key={y}
          d={`M0 ${70 + y * 0.35}
             Q100 ${70 - y * 0.9}
             200 ${70 + y * 0.35}`}
          className="itr-glyph__line"
        />
      ))}
    </svg>
  );
}


function DimensionsGlyph() {
  return (
    <svg
      viewBox="0 0 200 160"
      className="itr-glyph"
      aria-hidden="true"
    >
      {[0, 1, 2].map((index) => (
        <rect
          key={index}
          x={40 + index * 18}
          y={30 + index * 18}
          width="90"
          height="90"
          className="itr-glyph__cube"
          transform={`skewX(-${8 + index * 4})
                     skewY(${4 + index * 2})`}
        />
      ))}
    </svg>
  );
}


/* =========================================================
   SCIENCE DATA
========================================================= */

const TOPICS = [
  {
    id: "wormholes",
    number: "01",
    label: "SPACETIME",
    title: "Wormholes",
    blurb:
      "A theoretical shortcut through spacetime that could connect distant regions of the universe.",
    Glyph: WormholeGlyph,

    real:
      "Wormholes are theoretical solutions permitted by the equations of general relativity. However, no traversable wormhole has ever been observed, and it remains unknown whether one could exist or remain open long enough for matter to pass through.",

    film:
      "Interstellar places a stable, traversable wormhole near Saturn as the mechanism that allows the crew to travel to a distant galaxy.",

    extra:
      "Physicist Kip Thorne served as the film's scientific consultant and worked with the visual-effects team to create a scientifically informed representation of the wormhole.",
  },

  {
    id: "black-holes",
    number: "02",
    label: "GRAVITY",
    title: "Black Holes",
    blurb:
      "Regions of spacetime where gravity becomes so strong that nothing, not even light, can escape.",
    Glyph: BlackHoleGlyph,

    real:
      "Black holes are predicted by general relativity and supported by extensive observational evidence, including observations of stars orbiting massive compact objects and the Event Horizon Telescope's observations of black-hole environments.",

    film:
      "The film's black hole, Gargantua, was rendered using calculations based on gravitational lensing and relativistic physics.",

    extra:
      "The visual-effects work produced scientific material that was later discussed in academic research, helping illustrate how light behaves around a rapidly rotating black hole.",
  },

  {
    id: "time-dilation",
    number: "03",
    label: "RELATIVITY",
    title: "Time Dilation",
    blurb:
      "According to relativity, time can pass at different rates depending on gravity and motion.",
    Glyph: TimeDilationGlyph,

    real:
      "Time dilation is a real and experimentally measured effect. Clocks in different gravitational fields or moving at different speeds can tick at different rates. Modern technologies such as GPS account for relativistic time differences.",

    film:
      "On Miller's planet, close to Gargantua, one hour for the crew corresponds to roughly seven years passing for observers farther away.",

    extra:
      "The scale shown in the film is extreme, but the underlying principle of gravitational time dilation comes directly from general relativity.",
  },

  {
    id: "relativity",
    number: "04",
    label: "PHYSICS",
    title: "Relativity",
    blurb:
      "Space and time are interconnected, and gravity can curve spacetime itself.",
    Glyph: RelativityGlyph,

    real:
      "General relativity describes gravity through the curvature of spacetime caused by mass and energy. Its predictions have been tested through many astronomical and laboratory observations.",

    film:
      "Interstellar uses curved spacetime as a fundamental part of its story, influencing the wormhole, Gargantua, and the experience of time near massive objects.",
  },

  {
    id: "dimensions",
    number: "05",
    label: "THEORY",
    title: "Higher Dimensions",
    blurb:
      "Interstellar imagines a higher-dimensional perspective where time can be experienced in ways beyond our normal perception.",
    Glyph: DimensionsGlyph,

    real:
      "Some theoretical physics models propose additional spatial dimensions beyond the three dimensions we experience directly. However, no extra spatial dimensions have been experimentally confirmed.",

    film:
      "In the film's tesseract sequence, Cooper enters a higher-dimensional environment where moments in his daughter's bedroom can be perceived across time.",

    extra:
      "The tesseract is primarily a science-fiction storytelling device inspired by ideas about higher dimensions, rather than a depiction of an experimentally established physical structure.",
  },
];


/* =========================================================
   SCIENCE CARD
========================================================= */

function ScienceCard({ topic, onExplore }) {
  const {
    Glyph,
    number,
    label,
    title,
    blurb,
  } = topic;

  return (
    <article className="itr-sci-card">

      {/* Card number */}
      <div className="itr-sci-card__number">
        {number}
      </div>

      {/* Visual */}
      <div className="itr-sci-card__visual">
        <div className="itr-sci-card__orbit" />
        <Glyph />
      </div>

      {/* Content */}
      <div className="itr-sci-card__body">

        <p className="itr-sci-card__label">
          {label}
        </p>

        <h3 className="itr-sci-card__title">
          {title}
        </h3>

        <p className="itr-sci-card__blurb">
          {blurb}
        </p>

        <button
          type="button"
          className="itr-sci-card__explore"
          onClick={() => onExplore(topic)}
          aria-label={`Explore ${title}`}
        >
          <span>Explore</span>
          <span className="science-arrow">↗</span>
        </button>

      </div>

    </article>
  );
}


/* =========================================================
   SCIENCE
========================================================= */

function Science() {
  const [active, setActive] = useState(null);

  const closeModal = () => {
    setActive(null);
  };

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (!active) return;

    document.body.classList.add("science-modal-open");

    return () => {
      document.body.classList.remove("science-modal-open");
    };
  }, [active]);

  return (
    <section
      id="science"
      className="itr-science"
    >

      {/* Background atmosphere */}
      <div
        className="itr-science__nebula"
        aria-hidden="true"
      />

      <div
        className="itr-science__stars"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>

        {/* -----------------------------------------
            HEADER
        ----------------------------------------- */}

        <header className="itr-science__head">

          <div className="itr-science__eyebrow">
            <span />
            MISSION ARCHIVE
            <span />
          </div>

          <p className="itr-science__sub">
            WHERE SCIENCE MEETS THE UNKNOWN
          </p>

          <h2 className="itr-science__heading">
            The Science
          </h2>

          <p className="itr-science__desc">
            Interstellar explores some of the universe's
            most fascinating ideas — from wormholes and
            black holes to relativity, gravity, and the
            nature of time.
          </p>

          <div className="itr-science__coordinates">
            <span>44° 14' 12" N</span>
            <span className="coordinate-dot" />
            <span>DEEP SPACE ARCHIVE</span>
            <span className="coordinate-dot" />
            <span>STATUS: ACTIVE</span>
          </div>

        </header>


        {/* -----------------------------------------
            SCIENCE GRID
        ----------------------------------------- */}

        <div className="itr-sci-grid">

          {TOPICS.map((topic) => (
            <ScienceCard
              key={topic.id}
              topic={topic}
              onExplore={setActive}
            />
          ))}

        </div>


        {/* -----------------------------------------
            CLOSING STATEMENT
        ----------------------------------------- */}

        <div className="itr-science__theme">

          <span className="theme-line" />

          <p>
            Love is the one thing that transcends
            time and space.
          </p>

          <span className="theme-line" />

        </div>

      </Container>


      {/* -----------------------------------------
          MODAL
      ----------------------------------------- */}

      <Modal
        show={Boolean(active)}
        onHide={closeModal}
        centered
        size="lg"
        contentClassName="itr-sci-modal__content"
        backdropClassName="itr-sci-modal__backdrop"
        aria-labelledby="science-modal-title"
      >

        {active && (
          <ScienceModal
            topic={active}
            onClose={closeModal}
          />
        )}

      </Modal>

    </section>
  );
}


/* =========================================================
   SCIENCE MODAL
========================================================= */

function ScienceModal({ topic, onClose }) {
  const ActiveGlyph = topic.Glyph;

  return (
    <div className="itr-sci-modal">

      {/* Close button */}
      <button
        type="button"
        className="itr-sci-modal__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>


      {/* Visual */}
      <div className="itr-sci-modal__visual">
        <ActiveGlyph />
      </div>


      {/* Metadata */}
      <div className="itr-sci-modal__meta">
        <span>ARCHIVE {topic.number}</span>
        <span>•</span>
        <span>{topic.label}</span>
      </div>


      {/* Title */}
      <h3
        id="science-modal-title"
        className="itr-sci-modal__title"
      >
        {topic.title}
      </h3>


      {/* Real Science */}
      <div className="itr-sci-modal__section">

        <p className="itr-sci-modal__kicker">
          <span />
          REAL SCIENCE
        </p>

        <p className="itr-sci-modal__text">
          {topic.real}
        </p>

      </div>


      {/* Film */}
      <div className="itr-sci-modal__section">

        <p className="itr-sci-modal__kicker">
          <span />
          IN THE FILM
        </p>

        <p className="itr-sci-modal__text">
          {topic.film}
        </p>

      </div>


      {/* Extra */}
      {topic.extra && (
        <div className="itr-sci-modal__extra">
          {topic.extra}
        </div>
      )}


      {/* Action */}
      <div className="itr-sci-modal__actions">

        <Button
          variant="link"
          className="itr-sci-modal__back"
          onClick={onClose}
        >
          ← Back to Science
        </Button>

      </div>

    </div>
  );
}

export default Science;