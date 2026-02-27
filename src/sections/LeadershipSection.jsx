// sections/LeadershipSection.jsx
import React from "react";
import "./leadership.css";

const TEAM = [
  {
    id: "mustafa",
    name: "Mustafa Khamis",
    role: "Technical Lead",
    img: "/images/member/mustafa4.png",
    highlight: true,
    points: [
      "System architecture & API design",
      "Full-stack engineering (React, Node.js)",
      "Performance, scalability, clean delivery",
    ],
    ctas: true,
  },
  {
    id: "designer",
    name: "Amina Saleh",
    role: "UI/UX & Graphic Designer",
    img: "/images/member/woman.png",
    highlight: false,
    points: [
      "Brand identity & visual systems",
      "Conversion-focused UI/UX design",
      "Design handoff & component-ready layouts",
    ],
  },
  {
    id: "strategy",
    name: "Mortada Hasabo",
    role: "Full stack strategist",
    img: "/images/member/mortada.png", // put this image in /public
    highlight: false,
    points: [
      "Client acquisition strategy",
      "Proposal writing for freelance platforms",
      "Scope planning & delivery alignment",
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section className="exe-lead" id="leadership" aria-labelledby="lead-title">
      <div className="exe-container">
        <div className="exe-leadHead">
          <span className="exe-kicker">Leadership</span>
          <h2 className="exe-h2" id="lead-title">
            Leadership Built for Execution
          </h2>
          <p className="exe-sub">
            A focused core team leading architecture, design, and delivery
            strategy — engineered to scale.
          </p>
        </div>

        <div
          className="exe-teamGrid"
          role="list"
          aria-label="ExeCode core team"
        >
          {TEAM.map((m) => (
            <article
              key={m.id}
              className={`exe-teamCard ${m.highlight ? "isFounder" : ""}`}
              role="listitem"
            >
              <div className="exe-teamTop">
                <div className="exe-avatarWrap" aria-hidden="true">
                  <img
                    className="exe-avatarImg"
                    src={m.img}
                    alt={`${m.name} photo`}
                  />
                </div>

                <div className="exe-teamMeta">
                  <div className="exe-leadName">{m.name}</div>
                  <div className="exe-leadRole">{m.role}</div>
                  {m.highlight && (
                    <span className="exe-founderBadge">Founder</span>
                  )}
                </div>
              </div>

              <ul className="exe-leadPoints">
                {m.points.map((p) => (
                  <li key={p}>
                    <span className="exe-dot" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              {m.ctas && (
                <div className="exe-leadCtas">
                  <a className="exe-btn exe-btnPrimary" href="#proposal">
                    Work With ExeCode
                  </a>
                  <a className="exe-btn exe-btnSecondary" href="#work">
                    View Case Studies
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="exe-leadNote">
          Team expansion is ongoing — execution standards remain consistent
          across every delivery.
        </div>
      </div>
    </section>
  );
}
