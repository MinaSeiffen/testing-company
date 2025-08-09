"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { formatDate } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postRef = useRef<HTMLDivElement>(null);

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const blogPost = {
    id: parseInt(params.id),
    title: "The Future of Web Development in 2024",
    content: `
      <p class="mb-6">
        The web development landscape is constantly evolving, with new technologies and frameworks emerging every year. As we move into 2024, several key trends are shaping the future of web development.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">1. AI-Powered Development Tools</h2>
      <p class="mb-6">
        Artificial Intelligence is revolutionizing how developers work. From AI-powered code completion to automated testing and debugging, AI tools are becoming an integral part of the development workflow.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Advanced Frameworks and Libraries</h2>
      <p class="mb-6">
        Modern frameworks like Next.js, React, and Vue.js continue to evolve with new features and capabilities. These frameworks are making it easier than ever to build scalable, performant web applications.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Performance and Optimization</h2>
      <p class="mb-6">
        With the increasing importance of Core Web Vitals and user experience, performance optimization has become a top priority for developers. Techniques like code splitting, lazy loading, and server-side rendering are more important than ever.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Security and Privacy</h2>
      <p class="mb-6">
        As cyber threats continue to evolve, security has become a critical concern for web applications. Developers must stay up-to-date with the latest security best practices and implement robust security measures.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Mobile-First Development</h2>
      <p class="mb-6">
        With mobile devices accounting for the majority of web traffic, mobile-first development is no longer optional. Responsive design and mobile optimization are essential for success.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
      <p class="mb-6">
        The future of web development is bright and full of opportunities. By staying up-to-date with the latest trends and technologies, developers can build better, more innovative web applications that meet the evolving needs of users.
      </p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    category: "Technology",
    excerpt: "Explore the latest trends and technologies that are shaping the future of web development, from AI-powered tools to advanced frameworks.",
  };

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
    }, postRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={postRef} className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {blogPost.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
              {blogPost.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-on-scroll">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center text-gray-500 mb-8 animate-on-scroll">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(blogPost.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-xl overflow-hidden animate-on-scroll">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none animate-on-scroll">
            <div
              dangerouslySetInnerHTML={{
                __html: blogPost.content,
              }}
              className="text-gray-700 leading-relaxed"
            />
          </article>
        </div>
      </section>
    </div>
  );
}
