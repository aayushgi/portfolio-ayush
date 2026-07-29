"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// 1) Go to https://formspree.io, sign up free, create a new form.
// 2) Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxabcd)
// 3) Paste it below. Every submission will land directly in your inbox.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meeynywa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: "#0a0e14",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Background effects — same as Hero / Projects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-6 sm:left-10 h-[220px] sm:h-[320px] lg:h-[420px] w-[220px] sm:w-[320px] lg:w-[420px] rounded-full bg-cyan-500/20 blur-[80px] sm:blur-[120px] lg:blur-[140px]"
          animate={{ opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-6 sm:right-10 h-[220px] sm:h-[320px] lg:h-[420px] w-[220px] sm:w-[320px] lg:w-[420px] rounded-full bg-fuchsia-500/15 blur-[80px] sm:blur-[120px] lg:blur-[140px]"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] sm:h-[420px] w-[360px] sm:w-[420px] rounded-full bg-blue-600/10 blur-[120px] lg:blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div
        className="relative z-10"
        style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-medium tracking-widest uppercase text-sm"
          style={{ color: "#9ca3af", marginBottom: "0.75rem" }}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ color: "#ffffff" }}
        >
          Contact Me
        </motion.h2>

        <div
          style={{
            width: "5rem",
            height: "4px",
            margin: "1.5rem auto 1.5rem",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #6b7280, #d1d5db)",
          }}
        />

        <p style={{ color: "#a1a1aa", marginBottom: "3rem" }}>
          Interested in working together? Feel free to reach out — I usually reply within a day.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl border"
          style={{
            background: "linear-gradient(to bottom, #111111, #000000)",
            borderColor: "#3f3f46",
            padding: "2rem",
            textAlign: "left",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-colors"
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-colors"
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
              }}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-colors"
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl font-medium transition-colors"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "0.9rem",
                opacity: status === "sending" ? 0.6 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ color: "#d4d4d8", textAlign: "center" }}>
                Message sent — thanks! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#ef4444", textAlign: "center" }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#3f3f46",
              margin: "2rem 0",
            }}
          />

          {/* Contact info inside the same card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                value: "mrayushsaxena09@gmail.com",
                href: "mailto:mrayushsaxena09@gmail.com",
              },
              {
                icon: <FaGithub />,
                label: "GitHub",
                value: "github.com/aayushgi",
                href: "https://github.com/aayushgi",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                value: "linkedin.com/in/ayush-saxena",
                href: "https://www.linkedin.com/in/ayush-saxena-69b554278/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-lg transition-all duration-300"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#18181b",
                  padding: "0.9rem 1rem",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    minWidth: "38px",
                    borderRadius: "9999px",
                    backgroundColor: "#000000",
                    border: "1px solid #3f3f46",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                >
                  {item.icon}
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#9ca3af", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.label}
                  </span>
                  <span style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 500 }}>
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}