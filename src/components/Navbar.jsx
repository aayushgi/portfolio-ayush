"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl"
      style={{ backgroundColor: "rgba(10,14,20,0.75)", borderBottom: "1px solid #3f3f46" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#home" className="font-bold" style={{ fontSize: "1.75rem", color: "#ffffff" }}>
          Ayush<span style={{ color: "#9ca3af" }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
  {/* Resume Button - Always Visible */}
  <a
    href="/resume.pdf"
    className="font-medium"
    style={{
      borderRadius: "0.75rem",
      backgroundColor: "#ffffff",
      color: "#000000",
      padding: "0.5rem 1.25rem",
    }}
  >
    Resume
  </a>

  {/* Hamburger - Mobile Only */}
  <button
    onClick={() => setOpen(!open)}
    className="md:hidden"
    style={{ color: "#ffffff" }}
  >
    {open ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "#111111", borderTop: "1px solid #3f3f46" }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block transition-colors"
              style={{ color: "#d4d4d8", padding: "1rem 1.5rem" }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            onClick={() => setOpen(false)}
            className="block font-medium"
            style={{ color: "#ffffff", padding: "1rem 1.5rem", borderTop: "1px solid #3f3f46" }}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}