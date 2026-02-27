// sections/ProcessSection.jsx
import React from "react";
import "./process.css";

const STEPS = [
  { n: "01", title: "Strategic Discovery", desc: "Goals, scope, constraints, and success metrics." },
  { n: "02", title: "System Architecture", desc: "Structure first: data, APIs, pages, and flows." },
  { n: "03", title: "UI/UX Prototyping", desc: "Conversion-focused design before development." },
  { n: "04", title: "Agile Development", desc: "Clean code, scalable components, weekly progress." },
  { n: "05", title: "Testing & Optimization", desc: "Speed, responsiveness, and production readiness." },
  { n: "06", title: "Launch & Support", desc: "Deploy, monitor, and improve continuously." },
];

export default function ProcessSection() {
  return (
    <section className="exe-process" id="process" aria-labelledby="process-title">
      <div className="exe-container">
        <div className="exe-processHead">
          <span className="exe-kicker">Our Execution Framework</span>
          <h2 className="exe-h2" id="process-title">
            A Clear Process That Scales
          </h2>
          <p className="exe-sub">No guesswork. No chaos. You always know what happens next.</p>
        </div>

        <div className="exe-steps">
          {STEPS.map((s) => (
            <article className="exe-step" key={s.n}>
              <div className="exe-stepNum">{s.n}</div>
              <div className="exe-stepBody">
                <h3 className="exe-stepTitle">{s.title}</h3>
                <p className="exe-stepDesc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}