import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-indigo-100 py-6 flex flex-col md:flex-row items-center justify-between px-8 gap-4 text-sm">
      <p>&copy; {new Date().getFullYear()} Carlos Tranquilino Carlos Roman. All rights reserved.</p>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/valium69mg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-tranquilino-carlos-rom%C3%A1n-678a50302/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:carlostranquilino.cr@gmail.com"
          className="hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
