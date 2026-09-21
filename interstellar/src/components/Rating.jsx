import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

/* =========================================================
   MOVIE DATA & AWARDS
   ========================================================= */

const INTERSTELLAR = {
  title: "Interstellar",
  meta: ["2014", "PG-13", "2h 49m"],
  director: "Christopher Nolan",
  genres: ["Adventure", "Drama", "Sci-Fi"],

  imdb: {
    score: 8.7,
    outOf: 10,
  },

  scores: [
    {
      source: "Rotten Tomatoes",
      value: "73% Critics / 92% Audience",
    },
    {
      source: "Metacritic",
      value: "74 / 100",
    },
    {
      source: "Global Box Office",
      value: "$731.5 Million",
    },
  ],
};

const AWARDS = [
  {
    title: "OSCAR® WINNER",
    subtitle: "Best Achievement in Visual Effects",
    recipient: "Paul Franklin, Andrew Lockley, Ian Hunter, Scott Fisher",
    icon: "🏆",
    badge: "ACADEMY AWARDS 2015",
  },
  {
    title: "8.7 / 10 IMDB",
    subtitle: "Top 250 Movies #20",
    recipient: "Over 2.1 Million Public Ratings",
    icon: "⭐️",
    badge: "GLOBAL AUDIENCE RATING",
  },
  {
    title: "92% AUDIENCE SCORE",
    subtitle: "Rotten Tomatoes Certified Fresh",
    recipient: "Verified Audience & Critical Consensus",
    icon: "🍿",
    badge: "CRITICAL RECEPTION",
  },
  {
    title: "BAFTA & GRAMMY®",
    subtitle: "Best Original Score & Special Effects",
    recipient: "Composer Hans Zimmer · Syncopy",
    icon: "🎼",
    badge: "MUSIC & SOUND DESIGN",
  },
];

/* =========================================================
   IN VIEW HOOK
   ========================================================= */

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* =========================================================
   SCORE DIAL
   ========================================================= */

function ScoreDial({ score, outOf, visible }) {
  const R = 52;
  const C = 2 * Math.PI * R;
  const filled = C * (score / outOf);

  return (
    <div className={`itr-dial ${visible ? "is-visible" : ""}`}>
      <svg
        viewBox="0 0 120 120"
        aria-label={`Score ${score} out of ${outOf}`}
      >
        <defs>
          <linearGradient
            id="itrDialStroke"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        <circle
          className="itr-dial__track"
          cx="60"
          cy="60"
          r={R}
        />

        <circle
          className="itr-dial__value"
          cx="60"
          cy="60"
          r={R}
          strokeDasharray={`${filled} ${C - filled}`}
        />
      </svg>

      <div className="itr-dial__readout">
        <span className="itr-dial__score">
          {score}
        </span>

        <span className="itr-dial__outof">
          /{outOf}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   STAT ROW
   ========================================================= */

function StatRow({ label, value, index, visible }) {
  return (
    <div
      className={`itr-stat ${visible ? "is-visible" : ""}`}
      style={{
        "--stat-delay": `${index * 130}ms`,
      }}
    >
      <div className="itr-stat__label">
        <span>{label}</span>
      </div>

      <span
        className="itr-stat__rule"
        aria-hidden="true"
      />

      <span className="itr-stat__value">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   RATING SECTION
   ========================================================= */

export default function Rating({
  movie = INTERSTELLAR,
}) {
  const [sectionRef, visible] = useInView(0.2);

  const {
    title,
    meta,
    director,
    genres,
    imdb,
    scores,
  } = movie;

  return (
    <section
      id="ratings"
      ref={sectionRef}
      className={`itr-ratings ${
        visible ? "is-visible" : ""
      }`}
    >
      {/* Atmosphere Nebula */}
      <div className="itr-ratings__nebula" />

      <div className="itr-ratings__stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>
        {/* Section Header */}
        <header className="itr-ratings__head">
          <span className="itr-ratings__eyebrow">
            MISSION ARCHIVE · CRITICAL RESPONSE
          </span>

          <h2 className="itr-ratings__heading">
            Accreditations & Reception
          </h2>

          <p className="itr-ratings__sub">
            Global critical recognition, Academy Awards, and verified audience response.
          </p>
        </header>

        {/* 4-Card Film Awards Grid */}
        <Row className="award-cards-grid g-4 mb-5">
          {AWARDS.map((award) => (
            <Col key={award.title} lg={3} md={6} xs={12}>
              <div className="award-card section-glass-card">
                <div className="award-card-header">
                  <span className="award-icon">{award.icon}</span>
                  <span className="award-badge">{award.badge}</span>
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-subtitle">{award.subtitle}</p>
                <p className="award-recipient">{award.recipient}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Main Rating Card */}
        <article className="itr-card section-glass-card">
          <Row className="g-0 align-items-stretch">
            {/* Left Movie Identity */}
            <Col xs={12} lg={7} className="itr-card__left">
              <div className="itr-card__mission">
                <span className="itr-card__mission-dot" />
                FILM DATABASE / ACCREDITATION 001
              </div>

              <h2 className="itr-card__title">
                {title}
              </h2>

              <div className="itr-card__meta">
                {meta.map((item, index) => (
                  <React.Fragment key={item}>
                    <span className="meta-item-tag">{item}</span>
                    {index < meta.length - 1 && <i className="meta-dot" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="itr-card__divider" />

              <dl className="itr-card__credits">
                <div className="itr-credit">
                  <dt>DIRECTOR</dt>
                  <dd>{director}</dd>
                </div>

                <div className="itr-credit">
                  <dt>GENRES</dt>
                  <dd>
                    {genres.map((genre) => (
                      <span key={genre} className="genre-tag">
                        {genre}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="itr-card__quote">
                <span>“</span>
                <p>
                  Mankind was born on Earth. It was never meant to die here.
                </p>
              </div>
            </Col>

            {/* Right Public Score & Additional Metrics */}
            <Col xs={12} lg={5} className="itr-card__right">
              <div className="itr-card__right-head">
                <span>PUBLIC & CRITICAL SCORE</span>
                <span className="itr-card__code">VERIFIED 2014</span>
              </div>

              <div className="itr-card__imdb">
                <ScoreDial
                  score={imdb.score}
                  outOf={imdb.outOf}
                  visible={visible}
                />

                <div className="itr-card__imdb-info">
                  <p className="imdb-title">IMDb RATING</p>
                  <span className="imdb-sub">Global Audience Verdict</span>
                  <small className="imdb-score-text">
                    {imdb.score} / {imdb.outOf} (2.1M+ Votes)
                  </small>
                </div>
              </div>

              <div className="itr-card__stats">
                <p className="itr-card__stats-title">ADDITIONAL METRICS</p>

                {scores.map((score, index) => (
                  <StatRow
                    key={score.source}
                    label={score.source}
                    value={score.value}
                    index={index}
                    visible={visible}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </article>
      </Container>
    </section>
  );
}