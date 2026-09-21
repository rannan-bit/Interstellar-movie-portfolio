import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

/* =========================================================
   MISSION DATA
   ========================================================= */

const MISSION = {
  image: "https://wallpaperaccess.com/full/6266970.png",

  fields: [
    {
      label: "Mission",
      value: "Lazarus / Endurance Mission",
    },
    {
      label: "Objective",
      value: "Find a habitable world for humanity.",
    },
    {
      label: "Destination",
      value: "Beyond the Wormhole",
    },
    {
      label: "Crew",
      value: "Cooper · Amelia Brand · Romilly · Doyle",
    },
    {
      label: "Vessel",
      value: "Endurance",
    },
  ],
};

/* =========================================================
   REVEAL HOOK
   ========================================================= */

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* =========================================================
   ENDURANCE SECTION
   ========================================================= */

export default function Endurance() {
  const [sectionRef, inView] = useInView(0.2);

  return (
    <section
      id="endurance"
      ref={sectionRef}
      className={`itr-endurance ${inView ? "is-visible" : ""}`}
    >
      {/* Atmospheric background */}
      <div className="itr-endurance__nebula" />
      <div className="itr-endurance__stars" aria-hidden="true">
        <span />
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

        <header className="itr-endurance__head">
          <div className="itr-endurance__eyebrow">
            <span className="itr-endurance__eyebrow-line" />
            <span>MISSION ARCHIVE · 01</span>
            <span className="itr-endurance__eyebrow-line" />
          </div>

          <p className="itr-endurance__kicker">
            THE VESSEL
          </p>

          <h2 className="itr-endurance__heading">
            The <em>Endurance</em>
          </h2>

          <p className="itr-endurance__sub">
            Humanity's vessel into the unknown.
          </p>

          <p className="itr-endurance__desc">
            The Endurance carries Cooper and his crew beyond the boundaries
            of the known universe, through the wormhole and toward worlds
            that could become humanity's new home.
          </p>
        </header>

        {/* =================================================
            MAIN MISSION DISPLAY
           ================================================= */}

        <Row className="itr-endurance__body align-items-stretch g-0">
          {/* -------------------------------------------------
              SHIP VISUAL
             ------------------------------------------------- */}

          <Col xs={12} lg={7} className="itr-endurance__figure">
            <div className="itr-hull">

              {/* Image */}
              <div className="itr-hull__image">
                <img
                  src={MISSION.image}
                  alt="The Endurance spacecraft in deep space"
                  loading="lazy"
                />
              </div>

              {/* Atmospheric layers */}
              <span className="itr-hull__veil" />
              <span className="itr-hull__glow" />

              {/* Corner HUD */}
              <div className="itr-hull__corner itr-hull__corner--tl" />
              <div className="itr-hull__corner itr-hull__corner--tr" />
              <div className="itr-hull__corner itr-hull__corner--bl" />
              <div className="itr-hull__corner itr-hull__corner--br" />

              {/* Image information */}
              <div className="itr-hull__label">
                <strong>ENDURANCE</strong>
              </div>

             

              {/* Scan line */}
              <div className="itr-hull__scan" />
            </div>
          </Col>

          {/* -------------------------------------------------
              MISSION HUD
             ------------------------------------------------- */}

          <Col xs={12} lg={5} className="itr-endurance__panel">
            <div className="itr-hud">

              {/* Panel header */}
              <div className="itr-hud__header">
                <div>
                  <p className="itr-hud__micro">
                    MISSION CONTROL
                  </p>

                  <h3>Flight Data</h3>
                </div>

                <div className="itr-hud__signal">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* Mission status */}
             

              {/* Data fields */}
              <dl className="itr-hud__fields">
                {MISSION.fields.map((field, index) => (
                  <div
                    className="itr-hud__field"
                    key={field.label}
                    style={{
                      "--itr-delay": `${index * 100}ms`,
                    }}
                  >
                    <div className="itr-hud__field-index">
                      0{index + 1}
                    </div>

                    <div className="itr-hud__field-content">
                      <dt>{field.label}</dt>
                      <dd>{field.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              <div className="itr-hud__footer">
                <Button
                  href="#story"
                  variant="link"
                  className="itr-hud__cta"
                >
                  <span>Explore the Mission</span>
                  <span className="itr-hud__cta-arrow">
                    ↗
                  </span>
                </Button>

                
              </div>
            </div>
          </Col>
        </Row>

        {/* =================================================
            BOTTOM STATEMENT
           ================================================= */}

        <div className="itr-endurance__bottom">
          <span />
          <p>
            <strong>THE MISSION</strong>
            <br />
            IS HUMANITY'S LAST HOPE
          </p>
          <span />
        </div>
      </Container>
    </section>
  );
}