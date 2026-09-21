import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const STORY_CARDS = [
  {
    number: "01",
    title: "A Dying Earth",
    description:
      "As Earth struggles with environmental collapse, humanity faces an uncertain future and the search for a new home begins.",
    image:
      "https://thoughtcatalog.com/wp-content/uploads/2025/01/interstellar.jpg?resize=1140",
  },
  {
    number: "02",
    title: "Beyond the Known",
    description:
      "A mysterious wormhole near Saturn opens a path toward distant galaxies and worlds beyond human reach.",
    image:
      "https://blenderartists.org/uploads/default/original/4X/6/e/8/6e865d4c7df39fdc5cbd266862fd43eb61689d75.png",
  },
  {
    number: "03",
    title: "Into the Abyss",
    description:
      "Near a massive black hole, gravity bends space and time, turning every moment into a precious part of the journey.",
    image:
      "https://www.slashgear.com/img/gallery/what-is-inside-a-black-hole-heres-what-astronomers-say/l-intro-1652980516.jpg",
  },
  {
    number: "04",
    title: "For Those We Leave Behind",
    description:
      "Cooper and his crew venture into the unknown, carrying humanity's hope while facing impossible choices.",
    image:
      "https://wallpaperaccess.com/full/9439089.jpg",
  },
];

function Story() {
  return (
    <section id="story" className="interstellar-story">

      {/* Background atmosphere */}
      <div className="story-space-glow" aria-hidden="true" />

      {/* Small particles */}
      <div className="story-stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container>

        {/* ----------------------------------------
            SECTION HEADER
        ---------------------------------------- */}
        <div className="interstellar-story-heading">

          <div className="story-heading-top">
            <span className="story-heading-line" />

            <p className="interstellar-story-eyebrow">
              THE JOURNEY
            </p>

            <span className="story-heading-line" />
          </div>

          <h2 className="interstellar-story-title">
            Explore the Story
          </h2>

          <p className="interstellar-story-subtitle">
            A journey beyond the boundaries
            <br className="d-md-none" /> of space and time.
          </p>

          <div className="story-heading-orbit">
            <span />
          </div>

        </div>


        {/* ----------------------------------------
            STORY CARDS
        ---------------------------------------- */}
        <Row className="g-4">

          {STORY_CARDS.map((card, index) => (

            <Col
              key={card.title}
              lg={3}
              md={6}
              xs={12}
            >

              <article
                className="interstellar-story-card"
                style={{
                  "--card-delay": `${index * 0.15}s`,
                }}
              >

                {/* Image */}
                <div className="interstellar-story-card-img-wrap">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="interstellar-story-card-img"
                    loading="lazy"
                  />

                  <div className="interstellar-story-card-img-overlay" />

                  {/* Chapter number */}
                  <div className="story-card-number">
                    {card.number}
                  </div>

                

                </div>


                {/* Content */}
                <div className="interstellar-story-card-body">

                  <p className="story-card-label">
                    CHAPTER {card.number}
                  </p>

                  <h3 className="interstellar-story-card-title">
                    {card.title}
                  </h3>

                  <p className="interstellar-story-card-text">
                    {card.description}
                  </p>

                  

                </div>

              </article>

            </Col>

          ))}

        </Row>


        {/* ----------------------------------------
            BOTTOM MESSAGE
        ---------------------------------------- */}
        <div className="story-bottom">

          <span className="story-bottom-line" />

          <p>
            ***
          </p>

          <span className="story-bottom-line" />

        </div>

      </Container>
    </section>
  );
}

export default Story;