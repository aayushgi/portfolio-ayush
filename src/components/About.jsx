"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundColor: "#0a0e14",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Background effects — same theme as Hero / Projects / Contact / Skills */}
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
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
        style={{ maxWidth: "896px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            className="font-medium tracking-widest uppercase text-sm"
            style={{ color: "#9ca3af", marginBottom: "0.75rem" }}
          >
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#ffffff" }}>
            About Me
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
        </div>

        <div style={{ textAlign: "center" }}>
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#ffffff", marginBottom: "1.5rem" }}
          >
            Hi, I'm <span style={{ color: "#ffffff" }}>Ayush Saxena</span>
          </h3>

          <p
            style={{
              color: "#a1a1aa",
              lineHeight: "1.8",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            I'm a Computer Science student passionate about Full Stack
            Development, Artificial Intelligence, Data Science and Machine
            Learning. I enjoy building scalable web applications and solving
            real-world problems through technology.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "1.5rem", marginTop: "3rem" }}
          >
            {[
              { emoji: "🚀", stat: "3+", label: "Projects", sub: "Completed Successfully" },
              { emoji: "🏆", stat: "5+", label: "Certificates", sub: "Industry & Academic" },
              { emoji: "🎓", stat: "2027", label: "Graduation", sub: "B.Tech CSE" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-xl border transition-all duration-300"
                style={{
                  background: "linear-gradient(to bottom, #111111, #000000)",
                  borderColor: "#3f3f46",
                  minHeight: "170px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{item.emoji}</div>
                <h2 className="font-bold" style={{ color: "#ffffff", fontSize: "2rem" }}>
                  {item.stat}
                </h2>
                <p style={{ marginTop: "0.5rem", fontSize: "1.1rem", fontWeight: 600, color: "#ffffff" }}>
                  {item.label}
                </p>
                <span style={{ fontSize: "0.85rem", color: "#9ca3af", marginTop: "0.25rem" }}>
                  {item.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}