import { Container } from "react-bootstrap";
import "../App.css";

function Banner() {
  return (
    <section id="home" className="interstellar-hero">

      {/* Background */}
      <div
        className="interstellar-hero-bg"
        aria-hidden="true"
      />

      {/* Dark cinematic gradient */}
      <div
        className="interstellar-hero-overlay"
        aria-hidden="true"
      />

      {/* Atmospheric glow */}
      <div
        className="hero-atmosphere"
        aria-hidden="true"
      />

      {/* Small stars */}
      <div
        className="hero-stars"
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

      <Container className="interstellar-hero-content">

        {/* Eyebrow */}
        <div className="hero-eyebrow-wrapper">
          <span className="hero-eyebrow-line" />

          <p className="interstellar-hero-eyebrow">
            A CHRISTOPHER NOLAN FILM
          </p>

          <span className="hero-eyebrow-line" />
        </div>


        {/* Main title */}
        <h1 className="interstellar-hero-title">
          <span>INTER</span>
          <span>STELLAR</span>
        </h1>


        {/* Tagline */}
        <p className="interstellar-hero-tagline">
          Mankind was born on Earth.
          <br />
          It was never meant to die here.
        </p>


        {/* Movie information */}
        <div className="interstellar-hero-meta">

          <span>2014</span>

          <i />

          <span>CHRISTOPHER NOLAN</span>

          <i />

          <span>SCI-FI · DRAMA · ADVENTURE</span>

          <i />

          <span>2H 49M</span>

        </div>


        {/* Description */}
        <p className="interstellar-hero-subtext">
          The end of Earth will not be the end of us.
        </p>


        {/* Buttons */}
        <div className="interstellar-hero-cta">

          <a
            href="#story"
            className="interstellar-btn"
          >
            <span>Explore the Story</span>
            <span className="btn-arrow">↗</span>
          </a>

          <a
            href="#trailer"
            className="interstellar-btn interstellar-btn-outline"
          >
            <span className="play-icon">▶</span>
            <span>Watch Trailer</span>
          </a>

        </div>

      </Container>


      {/* Bottom cinematic information */}
      <div className="hero-bottom">

        <div className="hero-location">
          <span className="hero-location-dot" />
          <span>EARTH · 2014</span>
        </div>


        <div className="hero-scroll">

          <span className="scroll-text">
            ENTER THE UNKNOWN
          </span>

          <span className="scroll-line" />

          <span className="scroll-arrow">
            ↓
          </span>

        </div>


        <div className="hero-coordinate">
          43° 02' 17" N
        </div>

      </div>

    </section>
  );
}

export default Banner;