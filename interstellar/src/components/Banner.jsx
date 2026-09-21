import React, { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import "../App.css";

function Banner() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* ----------------------------------------
     Mouse Parallax Effect
  ---------------------------------------- */
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // range -10 to 10
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="home" className="interstellar-hero">
      {/* Dynamic Event Horizon Accretion Glow */}
      <div className="hero-accretion-glow" aria-hidden="true" />

      {/* Parallax Background Layer */}
      <div
        className="interstellar-hero-bg"
        aria-hidden="true"
        style={{
          transform: `scale(1.08) translate3d(${mousePos.x * -0.5}px, ${
            mousePos.y * -0.5
          }px, 0px)`,
        }}
      />

      {/* Dark cinematic gradient overlays */}
      <div className="interstellar-hero-overlay" aria-hidden="true" />

      {/* Atmospheric nebula glow */}
      <div className="hero-atmosphere" aria-hidden="true" />

      {/* Floating star particles */}
      <div className="hero-stars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Container
        className="interstellar-hero-content"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${
            mousePos.y * 0.3
          }px, 0px)`,
        }}
      >
        
        {/* Eyebrow */}
        <div className="hero-eyebrow-wrapper">
          <span className="hero-eyebrow-line" />
          <p className="interstellar-hero-eyebrow">
            A CHRISTOPHER NOLAN FILM
          </p>
          <span className="hero-eyebrow-line" />
        </div>

        {/* Main Title with Metallic Gradient */}
        <h1 className="interstellar-hero-title">
          <span className="title-inter">INTER</span>
          <span className="title-stellar">STELLAR</span>
          <span className="title-glow" aria-hidden="true" />
        </h1>

        {/* Tagline Quote */}
        <div className="hero-tagline-wrapper">
          <span className="quote-mark">“</span>
          <p className="interstellar-hero-tagline">
            Mankind was born on Earth.
            <br />
            It was never meant to die here.
          </p>
        </div>

        {/* Movie Meta Information & Score Badge */}
        <div className="interstellar-hero-meta">
          <span className="meta-pill">2014</span>
          <span className="meta-sep">·</span>
          <span className="meta-pill">DIR. CHRISTOPHER NOLAN</span>
          <span className="meta-sep">·</span>
          <span className="meta-pill">SCI-FI · ADVENTURE · DRAMA</span>
          <span className="meta-sep">·</span>
          <span className="meta-pill">2H 49M</span>
        </div>

        {/* Relativity Telemetry Widget */}
       

        {/* CTA Buttons */}
        <div className="interstellar-hero-cta">
          <a href="#story" className="interstellar-btn btn-primary-glow">
            <span>EXPLORE THE STORY</span>
          </a>

          <a href="#trailer" className="interstellar-btn interstellar-btn-outline">
            <span>WATCH TRAILER</span>
          </a>
        </div>
      </Container>

    
    </section>
  );
}

export default Banner;
