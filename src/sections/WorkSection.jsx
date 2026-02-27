// sections/WorkSection.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./work.css";

const WORK = [
  {
    id: "imipharm",
    name: "imiPharm",
    type: "Marketplace Search Platform",
    description:
      "A fast pharmacy search experience built to help users find medication availability in nearby pharmacies with minimal friction.",
    problem: "Users waste time searching multiple pharmacies for availability.",
    solution: "A real-time search flow that connects users to nearby pharmacies and reduces time-to-find.",
    stack: ["React", "Node.js", "MySQL", "REST APIs"],
    cover: "/images/imipharm/hero.png",
    gallery: ["/images/imipharm/1.png", "/images/imipharm/2.png", "/images/imipharm/3.png"],
  },
  {
    id: "goalroute",
    name: "GoalRoute",
    type: "Roadmap Management Web App",
    description:
      "A roadmap and task management system designed for clarity: track progress, ownership, and delivery status from a single dashboard.",
    problem: "Teams struggle to track tasks, progress, and ownership in one place.",
    solution: "Roadmaps + tasks + progress metrics with admin controls and clean UX for execution.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    cover: "/images/goalroute/hero.png",
    gallery: ["/images/goalroute/1.png", "/images/goalroute/2.png", "/images/goalroute/3.png"],
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    type: "Personal Portfolio",
    description:
      "A high-converting personal portfolio built to win freelance clients—showcasing projects, skills, and proof with a clean, fast, responsive design.",
    problem: "Freelance clients need quick proof of capability and past execution before starting a conversation.",
    solution:
      "A conversion-focused layout with clear positioning, selected work, and streamlined navigation—optimized for speed and mobile.",
    stack: ["React", "CSS System", "SEO Structure"],
    cover: "/images/portfolio/hero.png",
    gallery: ["/images/portfolio/1.png", "/images/portfolio/2.png", "/images/portfolio/3.png"],
  },
];

function clampIndex(i, len) {
  if (len <= 0) return 0;
  if (i < 0) return len - 1;
  if (i >= len) return 0;
  return i;
}

export default function WorkSection() {
  const [openId, setOpenId] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const activeProject = useMemo(() => WORK.find((p) => p.id === openId) || null, [openId]);

  const images = useMemo(() => {
    if (!activeProject) return [];
    return [activeProject.cover, ...(activeProject.gallery || [])].filter(Boolean);
  }, [activeProject]);

  const close = () => {
    setOpenId(null);
    setActiveImgIndex(0);
  };

  const open = (id) => {
    setOpenId(id);
    setActiveImgIndex(0);
  };

  const next = () => setActiveImgIndex((i) => clampIndex(i + 1, images.length));
  const prev = () => setActiveImgIndex((i) => clampIndex(i - 1, images.length));

  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId, images.length]);

  return (
    <section className="exe-work" id="work" aria-labelledby="work-title">
      <div className="exe-container">
        <div className="exe-workHead">
          <span className="exe-kicker">Selected Work</span>
          <h2 className="exe-h2" id="work-title">
            Case Studies That Show Execution
          </h2>
          <p className="exe-sub">Click any project to view details and the full UI gallery.</p>
        </div>

        <div className="exe-workGrid">
          {WORK.map((w) => (
            <article className="exe-workCard" key={w.id}>
              <button className="exe-workMedia" type="button" onClick={() => open(w.id)} aria-label={`Open ${w.name}`}>
                <img className="exe-workImg" src={w.cover} alt={`${w.name} hero`} loading="lazy" />
                <div className="exe-workMediaOverlay">
                  <span className="exe-workMediaTag">View Gallery</span>
                </div>
              </button>

              <div className="exe-workTop">
                <div>
                  <h3 className="exe-workTitle">{w.name}</h3>
                  <div className="exe-workType">{w.type}</div>
                </div>
                <span className="exe-workBadge">Case Study</span>
              </div>

              <div className="exe-workBody">
                <p className="exe-workDesc">{w.description}</p>

                <div className="exe-stack">
                  {w.stack.map((t) => (
                    <span className="exe-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exe-workFooter">
                <a className="exe-btn exe-btnSecondary" href="#proposal">
                  Build Something Similar
                </a>
                <button className="exe-btn exe-btnPrimary" type="button" onClick={() => open(w.id)}>
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ===== Modal Overlay ===== */}
      {activeProject && (
        <div className="exe-modalOverlay" role="dialog" aria-modal="true" aria-label={`${activeProject.name} details`}>
          <button className="exe-modalBackdrop" type="button" onClick={close} aria-label="Close dialog" />

          <div className="exe-modal" role="document">
            <div className="exe-modalHeader">
              <div>
                <div className="exe-modalTitle">{activeProject.name}</div>
                <div className="exe-modalSub">{activeProject.type}</div>
              </div>

              <button className="exe-modalClose" type="button" onClick={close} aria-label="Close">
                <img src="/icons/close.png" alt="" />
              </button>
            </div>

            <div className="exe-modalGrid">
              {/* Gallery */}
              <div className="exe-modalGallery">
                <div className="exe-modalMain">
                  <button className="exe-navBtn" type="button" onClick={prev} aria-label="Previous image">
                    ‹
                  </button>

                  {/* IMPORTANT: make the "hero wallpaper" fit without side cropping */}
                  <img
                    className={`exe-modalImg ${activeImgIndex === 0 ? "isHero" : ""}`}
                    src={images[activeImgIndex]}
                    alt={`${activeProject.name} screenshot ${activeImgIndex + 1}`}
                  />

                  <button className="exe-navBtn" type="button" onClick={next} aria-label="Next image">
                    ›
                  </button>
                </div>

                <div className="exe-thumbs" role="list" aria-label="Gallery thumbnails">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      className={`exe-thumb ${i === activeImgIndex ? "isActive" : ""}`}
                      type="button"
                      onClick={() => setActiveImgIndex(i)}
                      role="listitem"
                      aria-label={`Open image ${i + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>

                <div className="exe-modalHint">ESC to close • ← → to navigate</div>
              </div>

              {/* Details */}
              <div className="exe-modalDetails">
                <div className="exe-detailBlock">
                  <div className="exe-detailLabel">Overview</div>
                  <div className="exe-detailText">{activeProject.description}</div>
                </div>

                <div className="exe-detailBlock">
                  <div className="exe-detailLabel">Problem</div>
                  <div className="exe-detailText">{activeProject.problem}</div>
                </div>

                <div className="exe-detailBlock">
                  <div className="exe-detailLabel">Solution</div>
                  <div className="exe-detailText">{activeProject.solution}</div>
                </div>

                <div className="exe-detailBlock">
                  <div className="exe-detailLabel">Stack</div>
                  <div className="exe-detailChips">
                    {activeProject.stack.map((t) => (
                      <span className="exe-chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="exe-detailCtas">
                  <a className="exe-btn exe-btnPrimary" href="#proposal" onClick={close}>
                    Request a Proposal
                  </a>
                  <button className="exe-btn exe-btnSecondary" type="button" onClick={close}>
                    Back to Work
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile footer close (extra usability) */}
            <div className="exe-modalMobileBar">
              <button className="exe-btn exe-btnSecondary" type="button" onClick={close}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}