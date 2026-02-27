// sections/WhySection.jsx
import React from "react";
import "./why.css";

const ITEMS = [
  {
    img: "/icons/structure.png",
    title: "Structured Delivery",
    desc: "Clear scope, milestones, and agency-level communication from day one.",
  },
  {
    img: "/icons/scalable.png",
    title: "Scalable Architecture",
    desc: "Clean systems built to grow — maintainable code and reliable foundations.",
  },
  {
    img: "/icons/performance.png",
    title: "Performance-Driven",
    desc: "Speed, Core Web Vitals, and SEO structure are part of the build — not an afterthought.",
  },
  {
    img: "/icons/support.png",
    title: "Long-Term Support",
    desc: "We don’t disappear after launch — you get updates, fixes, and improvements.",
  },
];

export default function WhySection() {
  return (
    <section className="exe-why" id="why" aria-labelledby="why-title">
      <div className="exe-container">
        <div className="exe-whyHead">
          <span className="exe-kicker">Why ExeCode</span>
          <h2 className="exe-h2" id="why-title">
            Built Like an Agency — Executed Like Engineers
          </h2>
          <p className="exe-sub">Clients choose us for structure, clarity, and technical precision.</p>
        </div>

        <div className="exe-whyGrid">
          {ITEMS.map((x) => (
            <article className="exe-whyCard" key={x.title}>
              <img src={x.img} alt={x.title} />
              <h3 className="exe-whyTitle">{x.title}</h3>
              <p className="exe-whyDesc">{x.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}