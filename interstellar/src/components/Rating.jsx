import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

/* =========================================================
   MOVIE DATA
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
      value: "73%",
    },
    {
      source: "Metacritic",
      value: "74/100",
    },
  ],
};

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
            <stop offset="0%" stopColor="#d8c8a5" />
            <stop offset="50%" stopColor="#b8a57b" />
            <stop offset="100%" stopColor="#77705c" />
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
        <span className="itr-stat__index">
          0{index + 1}
        </span>

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
      {/* =================================================
          ATMOSPHERE
         ================================================= */}

      <div className="itr-ratings__nebula" />

      <div
        className="itr-ratings__stars"
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

        {/* =================================================
            SECTION HEADER
           ================================================= */}

        <header className="itr-ratings__head">

          <div className="itr-ratings__eyebrow">
            <span />
            <small>
              MISSION ARCHIVE · CRITICAL RESPONSE
            </small>
            <span />
          </div>

          <p className="itr-ratings__kicker">
            THE RECEPTION
          </p>

          <h2 className="itr-ratings__heading">
            By the <em>Numbers</em>
          </h2>

          <p className="itr-ratings__sub">
            A snapshot of how the journey was received
            beyond the screen.
          </p>
        </header>

        {/* =================================================
            MAIN CARD
           ================================================= */}

        <article className="itr-card">

          {/* Decorative frame */}
          <span className="itr-card__corner itr-card__corner--tl" />
          <span className="itr-card__corner itr-card__corner--tr" />
          <span className="itr-card__corner itr-card__corner--bl" />
          <span className="itr-card__corner itr-card__corner--br" />

          <Row className="g-0 align-items-stretch">

            {/* =================================================
                MOVIE IDENTITY
               ================================================= */}

            <Col
              xs={12}
              lg={7}
              className="itr-card__left"
            >
              <div className="itr-card__mission">
                <span className="itr-card__mission-dot" />
                FILM DATABASE / 001
              </div>

              <h2 className="itr-card__title">
                {title}
              </h2>

              <div className="itr-card__meta">
                {meta.map((item, index) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>

                    {index < meta.length - 1 && (
                      <i />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="itr-card__divider" />

              <dl className="itr-card__credits">

                <div className="itr-credit">
                  <dt>Director</dt>

                  <dd>
                    {director}
                  </dd>
                </div>

                <div className="itr-credit">
                  <dt>Genre</dt>

                  <dd>
                    {genres.map((genre) => (
                      <span key={genre}>
                        {genre}
                      </span>
                    ))}
                  </dd>
                </div>

              </dl>

              <div className="itr-card__quote">
                <span>"</span>

                <p>
                  Mankind was born on Earth.
                  It was never meant to die here.
                </p>
              </div>
            </Col>

            {/* =================================================
                RATINGS
               ================================================= */}

            <Col
              xs={12}
              lg={5}
              className="itr-card__right"
            >
              <div className="itr-card__right-head">
                <span>PUBLIC SCORE</span>

                <span className="itr-card__code">
                  RATING / 001
                </span>
              </div>

              <div className="itr-card__imdb">

                <ScoreDial
                  score={imdb.score}
                  outOf={imdb.outOf}
                  visible={visible}
                />

                <div className="itr-card__imdb-info">
                  <p>IMDb</p>

                  <span>
                    Audience rating
                  </span>

                  <small>
                    {imdb.score} / {imdb.outOf}
                  </small>
                </div>
              </div>

              <div className="itr-card__stats">

                <p className="itr-card__stats-title">
                  ADDITIONAL METRICS
                </p>

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

              <div className="itr-card__signal">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </Col>

          </Row>
        </article>

        {/* =================================================
            FOOTER
           ================================================= */}

        <div className="itr-ratings__footer">
          <span />

          <p>
            <strong>DATA VERIFIED</strong>
            <br />
            EARTH · 2014
          </p>

          <span />
        </div>

      </Container>
    </section>
  );
}