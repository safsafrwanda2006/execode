// ExeCodeHero.jsx
// Drop-in React component + full CSS (no libs needed)

import React, { useEffect, useState } from "react";
import "./execode-hero.css";

export default function ExeCodeHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="pageContainer"
      onClick={(e) => {
        e.stopPropagation();
        setMenuOpen(false);
      }}
    >
      {/* ===== Header ===== */}
      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="#" aria-label="ExeCode home">
            <span className="brandMark" aria-hidden="true">
              <span className="logoE"></span>
              <span className="logoX">
                <span className="xA" />
                <span className="xB" />
                <span className="xArrow" />
              </span>
            </span>
           <span>
            <span className="brandText">
              ExeCode <span className="brandDot">.</span>
              </span>
              <small>Digital Engineering Agency</small>
            </span>
          </a>

          <nav
            className={`nav ${menuOpen ? "navOpen" : ""}`}
            aria-label="Primary"
          >
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a className="navCtaMobile" href="#proposal">
              Request a Proposal
            </a>
          </nav>

          <div className="headerCta">
            <a className="btn btnSecondary" href="#work">
              View Work
            </a>
            <a className="btn btnPrimary" href="#proposal">
              Request a Proposal
            </a>

            <button
              className="menuBtn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((v) => !v);
              }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <img
                src={menuOpen ? "./icons/close.png" : "./icons/menu.png"}
                alt=""
              />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero" id="top">
        <div className="container heroGrid">
          <div className="intro">
            <div className="eyebrow">
              <span className="pill">Engineering</span>
              <span className="muted">•</span>
              <span className="muted">Scalable Systems</span>
              <span className="muted">•</span>
              <span className="muted">Measurable Results</span>
            </div>

            <h1>Engineering Scalable Web Solutions for Growing Businesses</h1>

            <p>
              We design and build high-performance websites and web applications
              that drive measurable results.
            </p>

            <div className="heroBtns">
              <a className="btn btnPrimary" href="#proposal">
                Request a Proposal
              </a>
              <a className="btn btnSecondary" href="#work">
                View Our Work
              </a>
            </div>

            {/* Bottom elements (Trust/Stats) */}
            <div className="heroBottom" role="list" aria-label="Agency stats">
              <div className="stat" role="listitem">
                <div className="statNum">10+</div>
                <div className="statLabel">Completed Projects</div>
              </div>

              <div className="statDivider" aria-hidden="true" />

              <div className="stat" role="listitem">
                <div className="statNum">99%</div>
                <div className="statLabel">Client Satisfaction</div>
              </div>

              <div className="statDivider" aria-hidden="true" />

              <div className="stat" role="listitem">
                <div className="statNum">Fast</div>
                <div className="statLabel">Delivery & Support</div>
              </div>
            </div>

            <div className="microNote">
              *Numbers reflect combined delivery across our core leadership (you
              + partner).
            </div>
          </div>

          {/* Right side visual card (keeps it premium without needing an image) */}
          <div className="heroVisual" aria-hidden="true">
            <div className="visualCard">
              <div className="visualTop">
                <div className="chip">Architecture</div>
                <div className="chip">UI/UX</div>
                <div className="chip">Performance</div>
              </div>

              <div className="visualTitle">Execution Framework</div>
              <div className="visualList">
                <div className="vItem">
                  <span className="vDot" />
                  <span>Discovery → System Design</span>
                </div>
                <div className="vItem">
                  <span className="vDot" />
                  <span>Agile Build → QA & Optimization</span>
                </div>
                <div className="vItem">
                  <span className="vDot" />
                  <span>Launch → Continuous Support</span>
                </div>
              </div>

              <div className="visualFooter">
                <span className="badge">Enterprise-grade</span>
                <span className="badge">Clean code</span>
                <span className="badge">SEO-ready</span>
              </div>
            </div>

            {/* Glow elements */}
            <span className="glow glowA" />
            <span className="glow glowB" />
          </div>
        </div>
      </section>
    </div>
  );
}
