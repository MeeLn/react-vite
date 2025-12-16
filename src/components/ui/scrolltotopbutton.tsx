"use client";

import { useState, useEffect } from "react";
//import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToTop = (duration = 600) => {
    const start = window.scrollY;
    const startTime = performance.now();

    function scroll(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // easeInOutQuad

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
  };

  const scrollToTop = () => {
    smoothScrollToTop();
  };
  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed lg:bottom-6 lg:right-6 bottom-16 right-6 bg-primary text-white border-2 border-primary px-3 py-2 rounded-full hover:bg-muted hover:text-primary transition"
        >
          <span className="w-4 h-4 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              name="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </span>
        </button>
      )}
    </>
  );
}
