import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "../App.css";

const CAST = [
  {
    number: "01",
    actor: "Matthew McConaughey",
    character: "Cooper",
    role: "PILOT · ENGINEER",
    description:
      "A former NASA pilot and engineer who leads the mission through the wormhole in search of a new home for humanity.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/matthew-mcconaughey-on-tuesday-september-12-2023-news-photo-1700243243.jpg",
  },
  {
    number: "02",
    actor: "Anne Hathaway",
    character: "Dr. Amelia Brand",
    role: "SCIENTIST · ASTRONAUT",
    description:
      "A brilliant NASA scientist and astronaut who joins Cooper on the mission, guided by science, hope, and the belief that humanity's future lies beyond Earth.",
    image:
      "https://kep.index.hu/1/0/5375/53756/537560/53756065_3977427_1b59c057a862d1aa3895a6ab5081a779_wm.jpg",
  },
  {
    number: "03",
    actor: "Jessica Chastain",
    character: "Murphy Cooper",
    role: "SCIENTIST · PHYSICIST",
    description:
      "Cooper's daughter, who grows into a determined scientist and works to solve the gravitational equation that could save humanity.",
    image:
      "https://people.com/thmb/j7FuYuvB8KuUEMdak023Gl4YzeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(776x148:778x150)/jessica-chastain-red-carpet-tout-090823-78bd5683fee046b0952b2b569242e110.jpg",
  },
  {
    number: "04",
    actor: "Mackenzie Foy",
    character: "Young Murphy",
    role: "THE NEXT GENERATION",
    description:
      "Cooper's intelligent and curious daughter whose deep bond with her father becomes central to the mission and its consequences.",
    image:
      "https://wikibio.us/wp-content/uploads/2020/10/Mackenzie-Foy1.jpg",
  },
  {
    number: "05",
    actor: "Michael Caine",
    character: "Professor Brand",
    role: "PHYSICIST · MENTOR",
    description:
      "A leading NASA scientist who develops the plan to save humanity and sends the Endurance mission into the unknown.",
    image:
      "https://facts.net/wp-content/uploads/2024/10/50-facts-about-michael-caine-1728751266.jpg",
  },
  {
    number: "06",
    actor: "Matt Damon",
    character: "Dr. Mann",
    role: "ASTRONAUT · EXPLORER",
    description:
      "An astronaut stranded on a distant planet whose desperate circumstances expose the extreme choices survival can demand.",
    image:
      "https://www.cheatsheet.com/wp-content/uploads/2023/09/Matt-Damon-Bourne.jpg",
  },
  {
    number: "07",
    actor: "John Lithgow",
    character: "Donald",
    role: "FAMILY · EARTH",
    description:
      "Cooper's father-in-law who remains on Earth and becomes a steady presence for the Cooper family during Cooper's absence.",
    image:
      "https://people.com/thmb/QnPKDscnBncbHp3X5BLnfnpqs2Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/john-lithgow-120524-tout-2091cfa745d2490484f1fc2aa533fd38.jpg",
  },
  {
    number: "08",
    actor: "Ellen Burstyn",
    character: "Older Murphy",
    role: "MEMORY · LEGACY",
    description:
      "An older Murph who continues the work started by her father and becomes a key figure in humanity's search for survival.",
    image:
      "https://s.yimg.com/lo/mysterio/api/4760f11017775682a3eaa225ee03ad422241b33c37e14ac70cec6a1e5caffa6e/lightyear_networkapi/resizefill_w960%3Bquality_80%3Bformat_webp/https://media.zenfs.com/en/entertainment_weekly_785/ca9cbaa8a995ac1a9da472ea6245f110.jpg",
  },
];

function Cast() {
  return (
    <section
      id="cast"
      className="interstellar-cast"
      aria-labelledby="cast-title"
    >
      {/* Background atmosphere */}
      <div className="cast-nebula" aria-hidden="true" />

      <div className="cast-stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>
        {/* Section heading */}
        <div className="interstellar-cast-heading">

          <div className="cast-heading-line" aria-hidden="true">
            <span />
            <small>MISSION CREW</small>
            <span />
          </div>

          <p className="cast-heading-kicker">
            THE PEOPLE BEHIND THE JOURNEY
          </p>

          <h2
            id="cast-title"
            className="interstellar-cast-title"
          >
            The <em>Cast</em>
          </h2>

          <p className="interstellar-cast-subtitle">
            Eight lives connected by a journey beyond space and time.
          </p>

        </div>

        {/* Carousel */}
        <Carousel
          className="interstellar-cast-carousel"
          interval={5000}
          fade
          indicators
          controls
          touch
          pause="hover"
          aria-label="Interstellar cast members"
        >

          {CAST.map((member) => (

            <Carousel.Item key={member.number}>

              <div className="interstellar-cast-slide">

                {/* Character image */}
                <div className="cast-image-wrapper">

                  <img
                    className="interstellar-cast-slide-img"
                    src={member.image}
                    alt={`${member.actor} as ${member.character}`}
                    loading="lazy"
                    decoding="async"
                  />

                </div>

                {/* Cinematic overlays */}
                <div
                  className="interstellar-cast-slide-overlay"
                  aria-hidden="true"
                />

                <div
                  className="cast-image-vignette"
                  aria-hidden="true"
                />


                {/* Slide number */}
                <div
                  className="cast-slide-number"
                  aria-label={`Crew member ${member.number}`}
                >
                  <span>CREW</span>
                  {member.number}
                </div>


                {/* Character information */}
                <div className="interstellar-cast-slide-info">

                  {/* Role */}
                  <div className="cast-role">
                    {member.role}
                  </div>


                  {/* Actor */}
                  <h3 className="interstellar-cast-actor">
                    {member.actor}
                  </h3>


                  {/* Character */}
                  <div className="cast-character-line">

                    <span />

                    <p className="interstellar-cast-character">
                      {member.character}
                    </p>

                  </div>


                  {/* Description */}
                  {member.description && (
                    <p className="interstellar-cast-description">
                      {member.description}
                    </p>
                  )}


                  

                </div>

              </div>

            </Carousel.Item>

          ))}

        </Carousel>


        {/* Bottom statement */}
        <div className="cast-bottom-message">

          <span
            className="cast-bottom-line"
            aria-hidden="true"
          />

          <p>
            <span>WE ARE</span> THE EXPLORERS
          </p>

          <span
            className="cast-bottom-line"
            aria-hidden="true"
          />

        </div>

      </Container>

    </section>
  );
}

export default Cast;