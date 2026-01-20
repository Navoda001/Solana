'use client'
import Image from "next/image";
import React, { useState } from "react";
import Hero from "./components/hero";
import Card2 from "./components/card2";
import SubContainer from "./components/subcontainer";

const Page2 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Hero />

      {/* Laptop/Dashboard Image */}
      <div className="relative flex justify-center items-center bg-black px-6 pb-16">
        {/* Purple glow effect under laptop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-purple-700/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-violet-500/50 blur-[80px] rounded-full"></div>
        <Image
          src="/Rectangle.png"
          alt="Dashboard Preview"
          width={1000}
          height={600}
          className="relative z-10 rounded-lg shadow-2xl"
          priority
        />
      </div>

      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Dig deeper.</h2>
            <p className="text-gray-400 text-base">
              Learn from resources across the greater Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <Card2 key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <SubContainer />
    </div>
  );
};

export default Page2;
