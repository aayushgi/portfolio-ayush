"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const STACK = ["Django", "Python", "AI/ML", "Data Science", "Data Analytics"];
const ROLES = ["Full Stack Developer", "AI/ML Enthusiast", "Data Science", "Problem Solver"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function useTypewriter(words, { typingSpeed = 70, deletingSpeed = 40, pause = 1500 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundColor: "#0a0e14",
        paddingTop: "var(--nav-height)",
        scrollMarginTop: "var(--nav-height)",
      }}
    >
      {/* Background effects — same theme as Projects / Contact / Skills / About */}
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
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 place-items-center"
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          minHeight: "calc(100vh - 80px)",
          gap: "3rem",
        }}
      >
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            style={{
              marginTop: "3rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              border: "1px solid #3f3f46",
              backgroundColor: "#18181b",
              padding: "0.4rem 1rem",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            <p style={{ color: "#d4d4d8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px" }}>
              Welcome to my portfolio
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", marginTop: "1.5rem" }}
          >
            <span style={{ display: "block", color: "#ffffff" }}>AYUSH</span>
            <span style={{ display: "block", color: "#ffffff" }}>SAXENA</span>
          </motion.h1>

          <motion.div variants={itemVariants} style={{ marginTop: "1.5rem", height: "3.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 600, color: "#d4d4d8", display: "flex", alignItems: "center" }}>
              <span>{typedRole}</span>
              <span
                style={{
                  marginLeft: "0.5rem",
                  display: "inline-block",
                  width: "3px",
                  height: "1.75rem",
                  backgroundColor: "#ffffff",
                }}
                className="animate-pulse"
              />
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.65rem", marginTop: "1.5rem" }}
          >
            {STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#d4d4d8",
                  backgroundColor: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "9999px",
                  padding: "0.4rem 0.9rem",
                }}
              >
                <span style={{ height: "6px", width: "6px", borderRadius: "9999px", backgroundColor: "#ffffff" }} />
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            style={{
              marginTop: "1.5rem",
              maxWidth: "560px",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "#a1a1aa",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Passionate about Data Science, Machine Learning, and Full-Stack Web Development.
            I build intelligent, data-driven applications using Python, Django, SQL, React,
            and modern AI technologies to solve real-world problems with clean, scalable solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="font-semibold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                borderRadius: "1rem",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "1rem 2rem",
                fontSize: "1rem",
              }}
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="font-semibold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                borderRadius: "1rem",
                border: "1px solid #3f3f46",
                backgroundColor: "#18181b",
                color: "#ffffff",
                padding: "1rem 2rem",
                fontSize: "1rem",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
            {[
              { icon: <FaGithub />, href: "https://github.com/aayushgi" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ayush-saxena-69b554278/" },
              { icon: <FaEnvelope />, href: "mailto:mrayushsaxena09@gmail.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  border: "1px solid #3f3f46",
                  backgroundColor: "#18181b",
                  color: "#ffffff",
                  fontSize: "1.15rem",
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "2rem" }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "1.5rem",
                background: "linear-gradient(to top right, #3f3f46, #71717a, #3f3f46)",
                filter: "blur(30px)",
              }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "1.5rem",
                border: "2px dashed rgba(255,255,255,0.2)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            <div
              style={{
                position: "relative",
                width: "320px",
                height: "320px",
                borderRadius: "1rem",
                padding: "2px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "calc(1rem - 2px)",
                  backgroundColor: "#111111",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/Profile.jpeg"
                  alt="Ayush Saxena"
                  width={720}
                  height={720}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}