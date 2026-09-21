import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

export default function Overview() {
  return (
    <section id="overview" className="itr-overview">

      {/* Atmospheric nebula & stars */}
      <div className="itr-overview__nebula" aria-hidden="true" />
      <div className="itr-overview__stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>

        <div className="itr-overview__layout">

          {/* LEFT LABEL & VERTICAL TRACKING */}
          <div className="itr-overview__side">

            <div className="itr-overview__eyebrow">
              <span className="eyebrow-dot" />
              <span>001 / MISSION BRIEF</span>
            </div>

            <span className="itr-overview__vertical">
              INTERSTELLAR
            </span>

            <div className="itr-overview__side-line" />

          </div>


          {/* MAIN CONTENT & MISSION SPECIFICATIONS */}
          <div className="itr-overview__content">

            <p className="itr-overview__kicker">
              THE MISSION BRIEFING
            </p>

            <h2 className="itr-overview__title">
              A Journey
              <br />
              <em>Beyond Time</em>
            </h2>

            <div className="itr-overview__rule" />

            <div className="itr-overview__body">

              <p className="itr-overview__summary lead">
                Earth is becoming increasingly uninhabitable, as devastating crop blight
                and dust storms threaten the immediate future of humanity.
              </p>

              <p className="itr-overview__summary">
                Former NASA pilot Cooper is recruited for a clandestine space mission through a
                newly discovered wormhole near Saturn. Alongside a specialized team of scientists
                and explorers, he travels beyond our galaxy in search of a habitable world to ensure
                humanity's survival.
              </p>

              <p className="itr-overview__summary">
                Venturing into the unknown reaches near Gargantua, the crew must confront gravitational
                time dilation, unknown alien physics, and the fragile emotional bonds connecting
                loved ones across light-years.
              </p>

            </div>

            {/* TELEMETRY HUD DATA GRID */}
            {/* <div className="itr-overview__metrics">

              <div className="itr-overview__metric">
                <span className="metric-label">DESTINATION</span>
                <strong className="metric-value">GARGANTUA SYSTEM</strong>
                <span className="metric-sub">Wormhole Entry / Saturn</span>
              </div>

              <div className="itr-overview__metric">
                <span className="metric-label">PRIMARY OBJECTIVE</span>
                <strong className="metric-value">PLAN A & PLAN B</strong>
                <span className="metric-sub">Gravity Eq. / Population</span>
              </div>

              <div className="itr-overview__metric">
                <span className="metric-label">TIME DILATION FACTOR</span>
                <strong className="metric-value">1 HR = 7 YRS</strong>
                <span className="metric-sub">Miller's Planet Orbit</span>
              </div>

            </div> */}

            {/* ACTION CTA */}
            {/* <div className="itr-overview__action">
              <a href="#story" className="itr-overview__btn">
                <span>EXPLORE THE STORY ARCHIVE</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div> */}

          </div>

        </div>

      </Container>

    </section>
  );
}
