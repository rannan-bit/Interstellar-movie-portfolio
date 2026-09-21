import React, { useState } from "react";
import { Container, Ratio, Button } from "react-bootstrap";

/* =========================================================
   TRAILER CONFIG
   ========================================================= */

const VIDEO_ID = "zSWdZVtXT7E";

const POSTER = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

export default function Trailer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="trailer" className="itr-trailer">

      {/* =================================================
          ATMOSPHERE
         ================================================= */}

      <div className="itr-trailer__nebula" />

      <div
        className="itr-trailer__stars"
        aria-hidden="true"
      >
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
            HEADER
           ================================================= */}

        <header className="itr-trailer__head">

          <div className="itr-trailer__eyebrow">
            <span />
            <small>TRANSMISSION · 2014</small>
            <span />
          </div>

          <p className="itr-trailer__kicker">
            THE JOURNEY BEGINS
          </p>

          <h2 className="itr-trailer__heading">
            Watch the <em>Trailer</em>
          </h2>

          <p className="itr-trailer__sub">
            The journey begins where the known universe ends.
          </p>
        </header>

        {/* =================================================
            CINEMATIC SCREEN
           ================================================= */}

        <div className="itr-screen">

          <div className="itr-screen__topbar">
            <div className="itr-screen__status">
              <span />
              TRANSMISSION READY
            </div>

            <div className="itr-screen__code">
              INT / 2014 / 001
            </div>
          </div>

          <div className="itr-screen__frame">

            <div className="itr-screen__corners">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />
            </div>

            <Ratio aspectRatio="16x9">

              {playing ? (
                <iframe
                  src={EMBED}
                  title="Interstellar — official trailer"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder="0"
                />
              ) : (
                <button
                  type="button"
                  className="itr-screen__poster"
                  onClick={() => setPlaying(true)}
                  aria-label="Play the Interstellar trailer"
                >
                  <img
                    src={POSTER}
                    alt="Interstellar trailer"
                    aria-hidden="true"
                  />

                  <span className="itr-screen__veil" />

                  <span className="itr-screen__scan" />

                  <span className="itr-screen__play-ring">
                    <span className="itr-screen__play">
                      <svg
                        viewBox="0 0 24 24"
                        width="26"
                        height="26"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>

                  <span className="itr-screen__label">
                    PLAY TRAILER
                  </span>

                  <span className="itr-screen__duration">
                    02:24
                  </span>
                </button>
              )}

            </Ratio>
          </div>

          {/* Bottom screen HUD */}
          <div className="itr-screen__bottom">
            <div>
              <span>STATUS</span>
              <strong>
                {playing ? "PLAYING" : "STANDBY"}
              </strong>
            </div>

            <div>
              <span>SOURCE</span>
              <strong>EARTH</strong>
            </div>

            <div className="itr-screen__signal">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* =================================================
            QUOTE
           ================================================= */}

        <div className="itr-trailer__quote-wrap">
          <span className="itr-trailer__quote-line" />

          <blockquote className="itr-trailer__quote">
            "Do not go gentle into that good night."
          </blockquote>

          <p className="itr-trailer__quote-author">
            — Dylan Thomas
          </p>

          <span className="itr-trailer__quote-line" />
        </div>

        {/* =================================================
            CTA
           ================================================= */}

        <div className="itr-trailer__actions">
          <Button
            href="#story"
            variant="link"
            className="itr-trailer__cta"
          >
            <span>Explore the story</span>
            <span className="itr-trailer__cta-arrow">
              ↗
            </span>
          </Button>
        </div>

        {/* =================================================
            FINAL TRANSMISSION
           ================================================= */}

        <div className="itr-trailer__footer">
          <span />
          <p>
            <strong>TRANSMISSION COMPLETE</strong>
            <br />
            THE UNKNOWN AWAITS
          </p>
          <span />
        </div>

      </Container>
    </section>
  );
}