"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Award, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("about");

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Target, number: "1000+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Globe, number: "25+", label: "Countries Served" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-on-scroll",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".animate-on-scroll",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-on-scroll">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("mission")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age. We strive to be the trusted partner 
                that transforms ideas into reality.
              </p>
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("vision")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading technology company that shapes the future of digital innovation, 
                creating lasting impact and value for our clients, employees, and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("values")}
            </h2>
            <p className="text-xl text-gray-600">
              The core principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality work and exceeding client expectations.",
              },
              {
                title: "Integrity",
                description: "Building trust through transparent communication, ethical practices, and reliable partnerships.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-gray-50 rounded-xl animate-on-scroll">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
