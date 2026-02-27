// sections/ProposalSection.jsx
import React, { useState } from "react";
import "./proposal.css";

export default function ProposalSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Website",
    budget: "Under $300",
    message: "",
  });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("projectType", form.projectType);
    fd.append("budget", form.budget);
    fd.append("message", form.message);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbybXFeuIDVgO8oMulL1XjVDzSJS-WaclNQIukN-_Bfn4OQQmnfqniuPNoYkd-iFzVMw/exec",
        { method: "POST", body: fd },
      );

      // لو السكربت رجّع خطأ/صفحة بدل JSON
      let data = null;
      try {
        data = await res.json();
      } catch (_) {}

      if (!res.ok || (data && data.status && data.status !== "success")) {
        throw new Error("Submission failed");
      }

      alert("Submitted. Please check our response soon.");

      // ✅ reset form
      setForm({
        name: "",
        email: "",
        projectType: "Website",
        budget: "Under $300",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="exe-proposal"
      id="proposal"
      aria-labelledby="proposal-title"
    >
      <div className="exe-container">
        <div className="exe-proposalGrid">
          <div className="exe-proposalText">
            <span className="exe-kicker">Request a Proposal</span>
            <h2 className="exe-h2" id="proposal-title">
              Tell Us What You’re Building
            </h2>
            <p className="exe-sub">
              We respond with a clear scope, timeline, and next steps — built
              for clients from freelance platforms.
            </p>

            <div className="exe-proposalStats" role="list">
              <div className="exe-pStat" role="listitem">
                <div className="exe-pNum">24h</div>
                <div className="exe-pLbl">Typical Response</div>
              </div>
              <div className="exe-pStat" role="listitem">
                <div className="exe-pNum">Clean</div>
                <div className="exe-pLbl">Scope & Milestones</div>
              </div>
              <div className="exe-pStat" role="listitem">
                <div className="exe-pNum">Secure</div>
                <div className="exe-pLbl">Professional Delivery</div>
              </div>
            </div>
          </div>

          <form className="exe-form" onSubmit={onSubmit}>
            <div className="exe-formRow">
              <label className="exe-label">
                Full Name
                <input
                  className="exe-input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="exe-label">
                Email
                <input
                  className="exe-input"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>

            <div className="exe-formRow">
              <label className="exe-label">
                Project Type
                <select
                  className="exe-input"
                  name="projectType"
                  value={form.projectType}
                  onChange={onChange}
                >
                  <option>Website</option>
                  <option>Landing Page</option>
                  <option>Web Application</option>
                  <option>Dashboard / Admin</option>
                </select>
              </label>
              <label className="exe-label">
                Budget
                <select
                  className="exe-input"
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                >
                  <option>Under $300</option>
                  <option>$300 – $800</option>
                  <option>$800 – $2000</option>
                  <option>$2000+</option>
                </select>
              </label>
            </div>

            <label className="exe-label">
              Project Details
              <textarea
                className="exe-input exe-textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Goals, pages/screens, features, deadline..."
                required
              />
            </label>

            <div className="exe-formActions">
              <button
                className="exe-btn exe-btnPrimary"
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>

              {/* Email fallback - change the email address to your real one */}
              <a
                className="exe-btn exe-btnSecondary"
                href="mailto:makzomltd@gmail.com"
              >
                Contact Directly via Email
              </a>
            </div>

            <div className="exe-formNote">
              You’ll get a professional response with scope, timeline, and next
              steps.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
