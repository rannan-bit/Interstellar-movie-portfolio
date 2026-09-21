import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TRACKS = [
  {
    title: "Cornfield Chase",
    composer: "Hans Zimmer",
    duration: "02:06",
    spotifyId: "6a8oa7GncjrVYZuUsNVEMu",
  },
  {
    title: "Day One",
    composer: "Hans Zimmer",
    duration: "03:19",
    spotifyId: "1ClIKr4uKzosk6FOpHwLJM",
  },
  {
    title: "Stay",
    composer: "Hans Zimmer",
    duration: "06:52",
    spotifyId: "1PyEOnj3tdaHAcDcsqTYbv",
  },
  {
    title: "Mountains",
    composer: "Hans Zimmer",
    duration: "03:39",
    spotifyId: "74WwGZ5latu7pnSMkJztsp",
  },
  {
    title: "No Time for Caution",
    composer: "Hans Zimmer",
    duration: "04:06",
    spotifyId: "3oj8AG9wD7UBPJGCuy0NGT",
  },
  {
    title: "Where We're Going",
    composer: "Hans Zimmer",
    duration: "07:41",
    spotifyId: "6CYgAIHRRDEJmOfEOj7fW4",
  },
];

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(0);

  const track = TRACKS[currentTrack];

  return (
    <section id="music" className="itr-music">

      {/* BACKGROUND */}
      <div className="itr-music__nebula" />
      <div className="itr-music__stars" />

      <Container>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="itr-music__head">

          <div>

            <span className="itr-music__eyebrow">
              AUDIO ARCHIVE
            </span>

            <p className="itr-music__kicker">
              THE SOUND OF TIME
            </p>

            <h2 className="itr-music__heading">
              The Score
            </h2>

            <p className="itr-music__sub">
              Music that carries the journey beyond the boundaries
              of space and time.
            </p>

          </div>

          <div className="itr-music__coordinates">

            <span>
              EARTH · 2014
            </span>

            <span>
              AUDIO LOG · 001
            </span>

            <span>
              SIGNAL · SPOTIFY
            </span>

          </div>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <Row className="g-4 align-items-stretch">

          {/* =================================================
              SPOTIFY PLAYER
          ================================================= */}

          <Col lg={7}>

            <div className="itr-music__player">

              {/* CORNER DETAILS */}

              <div className="itr-music__corners">

                <span />
                <span />
                <span />
                <span />

              </div>


              {/* TOP HUD */}

              <div className="itr-music__top">

                <span>
                  MISSION AUDIO
                </span>

                <span className="itr-music__status">

                  <i />

                  SPOTIFY TRANSMISSION

                </span>

              </div>


              {/* VISUAL */}

              <div className="itr-music__visual">

                <div className="itr-music__orbit itr-music__orbit--one" />

                <div className="itr-music__orbit itr-music__orbit--two" />

                <div className="itr-music__orbit itr-music__orbit--three" />


                <div className="itr-music__core">

                  <div className="itr-music__core-inner">

                    <span>
                      {String(currentTrack + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>


                {/* AUDIO WAVE */}

                <div className="itr-music__wave">

                  {Array.from({ length: 24 }).map((_, index) => (

                    <span key={index} />

                  ))}

                </div>

              </div>


              {/* CURRENT TRACK */}

              <div className="itr-music__track-info">

                <span className="itr-music__track-label">
                  CURRENT TRANSMISSION
                </span>

                <h3>
                  {track.title}
                </h3>

                <p>
                  {track.composer}
                </p>

              </div>


              {/* SPOTIFY EMBED */}

              <div className="itr-music__spotify">

                <iframe
                  key={track.spotifyId}
                  src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${track.title} - Spotify`}
                />

              </div>


              {/* BOTTOM HUD */}

              <div className="itr-music__bottom">

                <span>
                  SIGNAL: STABLE
                </span>

                <span>
                  {track.duration}
                </span>

                <span>
                  DEEP SPACE
                </span>

              </div>

            </div>

          </Col>


          {/* =================================================
              TRACK LIST
          ================================================= */}

          <Col lg={5}>

            <div className="itr-music__playlist">

              <div className="itr-music__playlist-head">

                <div>

                  <span>
                    MISSION LOG
                  </span>

                  <h3>
                    Sound Archive
                  </h3>

                </div>

                <span className="itr-music__track-count">

                  {String(TRACKS.length).padStart(2, "0")} TRACKS

                </span>

              </div>


              {/* TRACKS */}

              <div className="itr-music__tracks">

                {TRACKS.map((item, index) => (

                  <button
                    key={item.spotifyId}
                    type="button"
                    className={`itr-music__track ${
                      currentTrack === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentTrack(index)}
                  >

                    {/* NUMBER */}

                    <span className="itr-music__track-number">

                      {String(index + 1).padStart(2, "0")}

                    </span>


                    {/* INFO */}

                    <span className="itr-music__track-content">

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.composer}
                      </small>

                    </span>


                    {/* DURATION */}

                    <span className="itr-music__track-duration">

                      {item.duration}

                    </span>


                    {/* INDICATOR */}

                    <span className="itr-music__track-arrow">

                      {currentTrack === index
                        ? "●"
                        : "↗"}

                    </span>

                  </button>

                ))}

              </div>

            </div>

          </Col>

        </Row>


        {/* =====================================================
            QUOTE
        ===================================================== */}

        <div className="itr-music__quote">

          <span className="itr-music__quote-line" />

          <blockquote>
            "Music is the emotional architecture
            of the journey."
          </blockquote>

          <span className="itr-music__quote-credit">
            THE JOURNEY
          </span>

          <span className="itr-music__quote-line" />

        </div>

      </Container>

    </section>
  );
}