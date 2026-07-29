"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Online Admission System",
    description:
      "A Django-based admission portal with student registration, admin dashboard, email integration, payment gateway and online application management.",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    github: "https://github.com/aayushgi/Online-Admission-System",
    live: "https://online-admission-system-l9f1.onrender.com",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Content-based movie recommendation system built using Machine Learning and deployed with Streamlit.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/aayushgi/movie-recommender.git",
    live: "https://movie-recommender-ayushgi.streamlit.app/",
  },
  {
    title: "Credit Wise Loan Approval",
    description:
      "Machine Learning model to predict loan approval using applicant details and financial features.",
    tech: ["Python", "ML", "Logistic Regression"],
    github: "https://github.com/aayushgi/Python_New/tree/master/ML%20Projects/credit_wise_loan_approval",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: "#0a0e14",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Background effects — same as Hero */}
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
        style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            className="font-medium tracking-widest uppercase text-sm"
            style={{ color: "#9ca3af", marginBottom: "0.75rem" }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#ffffff" }}>
            My <span style={{ color: "#ffffff" }}>Projects</span>
          </h2>
          <div
            style={{
              width: "5rem",
              height: "4px",
              margin: "1.5rem auto 0",
              borderRadius: "9999px",
              background: "linear-gradient(to right, #6b7280, #d1d5db)",
            }}
          />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "stretch" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
      className="relative rounded-xl overflow-hidden border transition-all duration-300"
      style={{
        background: "linear-gradient(to bottom, #111111, #000000)",
        borderColor: "#3f3f46",
        width: "100%",
        boxSizing: "border-box",
        padding: "1.5rem",
      }}
    >
      <h3
        className="text-xl font-bold"
        style={{ color: "#ffffff", marginBottom: "0.75rem" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm"
        style={{ color: "#a1a1aa", lineHeight: "1.6", marginBottom: "0.5rem" }}
      >
        {expanded ? project.description : project.description.slice(0, 80) + "..."}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="text-sm transition-colors"
        style={{ color: "#d4d4d8", marginBottom: "1rem", display: "block" }}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs rounded-full border"
            style={{
              backgroundColor: "#18181b",
              color: "#d4d4d8",
              borderColor: "#3f3f46",
              padding: "0.25rem 0.75rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm rounded-lg border transition-colors"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderColor: "#3f3f46",
            color: "#ffffff",
            padding: "0.5rem 1rem",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm rounded-lg transition-colors"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "0.5rem 1rem",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}