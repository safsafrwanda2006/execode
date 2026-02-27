import React from "react";
import "./services.css";

const SERVICES = [
  {
    title: "Custom Web Development",
    desc: "Enterprise-grade websites tailored to your business goals.",
    points: ["Marketing sites & landing pages", "Responsive UI engineering", "SEO-ready structure"],
    tag: "Web",
  },
  {
    title: "Web Applications",
    desc: "Scalable platforms, dashboards, and SaaS systems.",
    points: ["Admin panels & dashboards", "SaaS MVP to scale", "API-driven architecture"],
    tag: "Apps",
  },
  {
    title: "UI/UX Engineering",
    desc: "User-centered interfaces designed for conversion.",
    points: ["Conversion-first layout", "Design systems & components", "Accessibility basics"],
    tag: "UX",
  },
  {
    title: "Performance Optimization",
    desc: "Speed, SEO structure, and clean architecture.",
    points: ["Core Web Vitals improvements", "Code splitting & caching", "Technical SEO foundations"],
    tag: "Perf",
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="servicesHead">
          <div className="kicker">Our Core Services</div>
          <h2 id="services-title" className="servicesTitle">
            What We Engineer
          </h2>
          <p className="servicesSub">
            Structured delivery across strategy, design, and engineering — built to scale with your business.
          </p>
        </div>

        <div className="servicesGrid">
          {SERVICES.map((s) => (
            <article className="serviceCard" key={s.title}>
              <div className="serviceTop">
                <span className="serviceTag">{s.tag}</span>
                <span className="serviceLine" aria-hidden="true" />
              </div>

              <h3 className="serviceTitle">{s.title}</h3>
              <p className="serviceDesc">{s.desc}</p>

              <ul className="servicePoints">
                {s.points.map((p) => (
                  <li key={p}>
                    <span className="check" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="serviceFooter">
                <a className="serviceLink" href="#proposal">
                  Request a Proposal <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="servicesBottom">
          <div className="bottomCard">
            <div className="bottomTitle">Built for Freelance Platforms — Ready for Scale</div>
            <div className="bottomDesc">
              Clear scope, clean delivery, and agency-level communication. Perfect for Upwork / Mostaqel clients.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}