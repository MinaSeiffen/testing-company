"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
          ".hero-title",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
          .fromTo(
              ".hero-subtitle",
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "-=0.5"
          )
          .fromTo(
              ".hero-description",
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "-=0.5"
          )
          .fromTo(
              ".hero-cta",
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "-=0.5"
          );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Professional Portfolio
            </h1>
            <h2 className="hero-subtitle text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Creating Digital Excellence
            </h2>
            <p className="hero-description text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We deliver exceptional digital solutions with cutting-edge technology and innovative design
            </p>
            <div className="hero-cta">
              <Link
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
  );
}