import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayush Saxena | Full Stack Developer",
  description:
    "Portfolio of Ayush Saxena - Full Stack Developer, AI & Machine Learning Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative overflow-x-hidden bg-[#0d1117] text-white">

  <Spotlight />

  <main className="relative z-10">
    {children}
  </main>

</body>
    </html>
  );
}