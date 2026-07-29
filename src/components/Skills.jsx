"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandPython } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const categories = {
  "AI & ML": [
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "Scikit-Learn", icon: <TbBrandPython size={28} /> },
    { name: "Pandas", icon: <SiPandas size={28} /> },
    { name: "NumPy", icon: <SiNumpy size={28} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={28} /> },
    { name: "PyTorch", icon: <SiPytorch size={28} /> },
    { name: "Hugging Face", icon: <SiHuggingface size={28} /> },
    { name: "LLM", icon: <FaBrain size={28} /> },
    { name: "RAG", icon: <FaBrain size={28} /> },
    { name: "Prompt Engineering", icon: <FaBrain size={28} /> },
  ],
  Backend: [
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "Django", icon: <SiDjango size={28} /> },
    { name: "REST API", icon: <FaBrain size={28} /> },
  ],
  Frontend: [
    { name: "HTML", icon: <SiHtml5 size={28} /> },
    { name: "CSS", icon: <SiCss size={28} /> },
    { name: "JavaScript", icon: <SiJavascript size={28} /> },
    { name: "React", icon: <SiReact size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql size={28} /> },
    { name: "SQLite", icon: <SiSqlite size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit size={28} /> },
    { name: "GitHub", icon: <SiGithub size={28} /> },
    { name: "VS Code", icon: <VscCode size={28} /> },
    { name: "Postman", icon: <SiPostman size={28} /> },
  ],
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  const [active, setActive] = useState("AI & ML");

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundColor: "#0a0e14",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Background effects — same theme as Hero / Projects / Contact */}
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

      {/* Main content */}
      <div
        className="relative z-10"
        style={{ maxWidth: "1152px", marginLeft: "auto", marginRight: "auto" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-medium tracking-widest uppercase text-sm"
          style={{ color: "#9ca3af", marginBottom: "0.75rem", textAlign: "center" }}
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ color: "#ffffff", textAlign: "center" }}
        >
          My Tech Stack
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

        <p style={{ color: "#a1a1aa", textAlign: "center", marginBottom: "3rem" }}>
          Technologies I use to build modern web and AI applications.
        </p>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          {Object.keys(categories).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActive(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium transition-all duration-300"
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
                border: "1px solid #3f3f46",
                backgroundColor: active === tab ? "#ffffff" : "#18181b",
                color: active === tab ? "#000000" : "#d4d4d8",
              }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{ gap: "1.75rem", justifyItems: "center" }}
          >
            {categories[active].map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.25 } }}
                className="rounded-xl border transition-all duration-300"
                style={{
                  width: "100%",
                  minHeight: "160px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "linear-gradient(to bottom, #111111, #000000)",
                  borderColor: "#3f3f46",
                  padding: "1.5rem",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ color: "#ffffff", marginBottom: "1rem" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold" style={{ color: "#ffffff", fontSize: "1.05rem" }}>
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}