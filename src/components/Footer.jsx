"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "#0a0e14",
        borderTop: "1px solid #3f3f46",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>
          Ayush<span style={{ color: "#9ca3af" }}>.</span>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.25rem" }}>
          <a
            href="https://github.com/aayushgi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition-colors"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-saxena-69b554278/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition-colors"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mrayushsaxena09@gmail.com"
            className="rounded-full transition-colors"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "1px",
            backgroundColor: "#3f3f46",
          }}
        />

        <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
          © 2026 Ayush Saxena. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}