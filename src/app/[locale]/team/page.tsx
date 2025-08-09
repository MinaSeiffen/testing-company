"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const teamRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("team");

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Experienced leader with over 15 years in the technology industry. Passionate about innovation and building exceptional teams.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@company.com",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Technology expert with deep expertise in software architecture and emerging technologies. Leads our technical strategy and innovation efforts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "michael@company.com",
    },
    {
      name: "Emily Rodriguez",
      position: "Design Director",
      bio: "Creative design leader with a passion for user experience and beautiful interfaces. Brings over 10 years of design expertise to our projects.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com",
    },
    {
      name: "David Kim",
      position: "Senior Developer",
      bio: "Full-stack developer with expertise in modern web technologies. Passionate about clean code and scalable solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "david@company.com",
    },
    {
      name: "Lisa Wang",
      position: "Marketing Manager",
      bio: "Strategic marketing professional with a track record of driving growth and building strong customer relationships.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "lisa@company.com",
    },
    {
      name: "Alex Thompson",
      position: "Product Manager",
      bio: "Product strategist with experience in agile methodologies and user-centered design. Focuses on delivering value to customers.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "alex@company.com",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-member",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".team-member",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={teamRef} className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-member group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our team and work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaboration to achieve exceptional results.",
              },
              {
                title: "Innovation",
                description: "We constantly push boundaries and embrace new ideas to create innovative solutions.",
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality work and exceeding expectations.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-xl shadow-lg">
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
