import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container, Modal } from "react-bootstrap";

/* =========================================================
   GALLERY DATA
   ========================================================= */

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Event Horizon",
    category: "GARGANTUA",
    filter: "GARGANTUA",
    size: "feature",
    src: "https://4kwallpapers.com/images/wallpapers/gargantua-black-3840x2160-9621.jpg",
  },
  {
    id: 2,
    title: "Last Harvest",
    category: "EARTH",
    filter: "EARTH",
    size: "std",
    src: "https://th.bing.com/th/id/R.c70b1ad61717493256a2dbed8c2788cc?rik=LH4sfWadnU85Sw&riu=http%3a%2f%2fi.gzn.jp%2fimg%2f2013%2f12%2f15%2finterstellar%2f01.jpg&ehk=UQ%2fnFHW3EOBSH9AvfrJwnlMofXCz3h4OEpf0EoIIhto%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    title: "Docking Sequence",
    category: "THE ENDURANCE",
    filter: "ENDURANCE",
    size: "tall",
    src: "https://cdna.artstation.com/p/assets/images/images/006/022/274/large/steve-burg-endurance-ext-friday-0816-010-resize.jpg?1495482208",
  },
  {
    id: 4,
    title: "Miller's Ocean",
    category: "DISTANT WORLDS",
    filter: "WORLDS",
    size: "wide",
    src: "https://picfiles.alphacoders.com/610/thumb-1920-610668.png",
  },
  {
    id: 5,
    title: "Launch Window",
    category: "THE JOURNEY",
    filter: "JOURNEY",
    size: "std",
    src: "https://images8.alphacoders.com/585/thumb-1920-585646.png",
  },
  {
    id: 6,
    title: "Ice Clouds of Mann",
    category: "DISTANT WORLDS",
    filter: "WORLDS",
    size: "std",
    src: "https://static1.colliderimages.com/wordpress/wp-content/uploads/interstellar-34.jpg",
  },
  {
    id: 7,
    title: "The Tesseract",
    category: "BEYOND TIME",
    filter: "TIME",
    size: "wide",
    src: "https://i.pinimg.com/originals/31/58/05/315805972c905d8aa8e275e71d009ad6.jpg",
  },
  {
    id: 8,
    title: "Corn Line",
    category: "EARTH",
    filter: "EARTH",
    size: "std",
    src: "https://thefilmitself.com/wp-content/uploads/2015/11/image0252.jpg?w=882",
  },
  {
    id: 9,
    title: "Hull and Silence",
    category: "THE ENDURANCE",
    filter: "ENDURANCE",
    size: "std",
    src: "https://wallpaperaccess.com/full/6266970.png",
  },
  {
    id: 10,
    title: "Slingshot",
    category: "THE JOURNEY",
    filter: "JOURNEY",
    size: "tall",
    src: "https://images.hdqwalls.com/download/interstellar-voyage-1280x1024.jpg",
  },
];

const FILTERS = [
  { key: "ALL", label: "All" },
  { key: "JOURNEY", label: "Journey" },
  { key: "WORLDS", label: "Worlds" },
  { key: "GARGANTUA", label: "Gargantua" },
  { key: "EARTH", label: "Earth" },
  { key: "ENDURANCE", label: "Endurance" },
  { key: "TIME", label: "Beyond Time" },
];

/* =========================================================
   GALLERY TILE
   ========================================================= */

function GalleryTile({ item, index, onOpen }) {
  return (
    <button
      type="button"
      className={`itr-tile itr-tile--${item.size}`}
      onClick={onOpen}
      aria-label={`Open ${item.title}`}
      style={{ "--tile-delay": `${index * 70}ms` }}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
      />

      {/* Cinematic overlays */}
      <span className="itr-tile__veil" />
      <span className="itr-tile__scan" />
      <span className="itr-tile__glow" />

      {/* Corner frame */}
      <span className="itr-tile__corner itr-tile__corner--tl" />
      <span className="itr-tile__corner itr-tile__corner--br" />

      {/* Image number */}
      <span className="itr-tile__number">
        {String(item.id).padStart(2, "0")}
      </span>

      {/* Metadata */}
      <span className="itr-tile__meta">
        <span className="itr-tile__cat">
          {item.category}
        </span>

        <span className="itr-tile__title">
          {item.title}
        </span>

        <span className="itr-tile__open">
          VIEW IMAGE <b>↗</b>
        </span>
      </span>
    </button>
  );
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

function Lightbox({
  items,
  index,
  onClose,
  onStep,
}) {
  const item = index === null ? null : items[index];

  /* Keyboard navigation */
  useEffect(() => {
    if (index === null) return undefined;

    const onKey = (event) => {
      if (event.key === "ArrowRight") {
        onStep(1);
      }

      if (event.key === "ArrowLeft") {
        onStep(-1);
      }

      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onStep, onClose]);

  /* Prevent background scroll */
  useEffect(() => {
    if (index !== null) {
      document.body.classList.add("itr-gallery-open");
    }

    return () => {
      document.body.classList.remove("itr-gallery-open");
    };
  }, [index]);

  return (
    <Modal
      show={index !== null}
      onHide={onClose}
      centered
      size="xl"
      backdrop
      dialogClassName="itr-lightbox"
      contentClassName="itr-lightbox__content"
      aria-labelledby="itr-lightbox-title"
    >
      {item && (
        <div className="itr-lightbox__inner">

          {/* Close */}
          <button
            type="button"
            className="itr-lb-btn itr-lb-btn--close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            className="itr-lb-btn itr-lb-btn--prev"
            onClick={() => onStep(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Stage */}
          <div
            className="itr-lightbox__stage"
            onClick={onClose}
          >
            <div className="itr-lightbox__image-wrap">
              <img
                src={item.src}
                alt={item.title}
                onClick={(event) =>
                  event.stopPropagation()
                }
              />
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            className="itr-lb-btn itr-lb-btn--next"
            onClick={() => onStep(1)}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Caption */}
          <div className="itr-lightbox__caption">
            <div className="itr-lightbox__caption-top">
              <span className="itr-lightbox__cat">
                {item.category}
              </span>

              <span className="itr-lightbox__count">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            <h4
              id="itr-lightbox-title"
              className="itr-lightbox__title"
            >
              {item.title}
            </h4>

            <div className="itr-lightbox__hint">
              <span>←</span>
              USE ARROW KEYS TO NAVIGATE
              <span>→</span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

/* =========================================================
   GALLERY SECTION
   ========================================================= */

export default function Gallery() {
  const [active, setActive] = useState("ALL");
  const [openIndex, setOpenIndex] = useState(null);

  const visible = useMemo(() => {
    if (active === "ALL") {
      return GALLERY_ITEMS;
    }

    return GALLERY_ITEMS.filter(
      (item) => item.filter === active
    );
  }, [active]);

  const step = useCallback(
    (direction) => {
      setOpenIndex((current) => {
        if (current === null || visible.length === 0) {
          return current;
        }

        return (
          (current + direction + visible.length) %
          visible.length
        );
      });
    },
    [visible.length]
  );

  const changeFilter = (key) => {
    setOpenIndex(null);
    setActive(key);
  };

  return (
    <section id="gallery" className="itr-gallery">

      {/* =================================================
          BACKGROUND
         ================================================= */}

      <div className="itr-gallery__nebula" />

      <div
        className="itr-gallery__stars"
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

        <header className="itr-gallery__head">

          <div className="itr-gallery__eyebrow">
            <span />
            <small>MISSION ARCHIVE · VISUAL LOG</small>
            <span />
          </div>

          <p className="itr-gallery__kicker">
            THROUGH THE LENS
          </p>

          <h2 className="itr-gallery__heading">
            The <em>Universe</em>
            <br />
            of Interstellar
          </h2>

          <p className="itr-gallery__sub">
            A visual journey through worlds, moments,
            machines and memories beyond the boundaries
            of space and time.
          </p>
        </header>

        {/* =================================================
            FILTERS
           ================================================= */}

        <div
          className="itr-filters"
          role="tablist"
          aria-label="Gallery filters"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={active === filter.key}
              className={`itr-filter ${
                active === filter.key
                  ? "is-active"
                  : ""
              }`}
              onClick={() =>
                changeFilter(filter.key)
              }
            >
              <span className="itr-filter__dot" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* =================================================
            GALLERY GRID
           ================================================= */}

        <div
          className="itr-grid"
          key={active}
          aria-live="polite"
        >
          {visible.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              index={index}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </div>

        {/* =================================================
            FOOTER
           ================================================= */}

        <div className="itr-gallery__footer">
          <span />
          <p>
            <strong>{visible.length}</strong>{" "}
            VISUAL RECORDS
          </p>
          <span />
        </div>
      </Container>

      {/* =================================================
          LIGHTBOX
         ================================================= */}

      <Lightbox
        items={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onStep={step}
      />
    </section>
  );
}