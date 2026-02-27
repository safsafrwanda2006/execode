// sections/SiteFooter.jsx
import React from "react";
import "./footer.css";

export default function SiteFooter() {
  return (
    <footer className="exe-footer" id="contact">
      <div className="exe-container exe-footerGrid">
        <div className="exe-footerBrand">
          <div className="exe-footerLogo">
            <span className="exe-footerMark" aria-hidden="true" />
            <div>
              <div className="exe-footerName">ExeCode<span className="exe-footerDot">.</span></div>
              <div className="exe-footerTag">Digital Engineering Agency</div>
            </div>
          </div>
          <p className="exe-footerDesc">
            High-performance web solutions engineered for scalability, speed, and measurable business outcomes.
          </p>
        </div>

        <div className="exe-footerCol">
          <div className="exe-footerTitle">Company</div>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#proposal">Proposal</a>
        </div>

        <div className="exe-footerCol">
          <div className="exe-footerTitle">Contact</div>
          <a href="mailto:contact@execode.studio">contact@execode.studio</a>
          <a href="#proposal">Request a Proposal</a>
        </div>

        <div className="exe-footerBottom">
          <div>© {new Date().getFullYear()} ExeCode. All rights reserved.</div>
          <div className="exe-footerSmall">
            Built for freelance platforms • Engineered for scale
          </div>
        </div>
      </div>
    </footer>
  );
}