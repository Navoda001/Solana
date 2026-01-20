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
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "./Profile.jpg"
    }
  ];

  const itemsPerPage = 9; 
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="bg-black min-h-screen">
      <Hero />
       <div className="flex justify-center pb-16 relative">
          {/* Glow effect under the laptop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[921px] h-[250px] bg-gradient-to-t from-purple-600/50 via-fuchsia-500/30 to-transparent blur-3xl rounded-full"></div>
          <Image
            src="/Rectangle.png"
            alt="Rectangle Image"
            width={921}
            height={540}
            className="relative z-10"
          />
        </div>

      <div className="container mx-auto px-20 py-16">
        <div className="mb-12">
          <h2 className="text-white text-5xl lg:text-6xl font-normal mb-4">
            Dig deeper.
          </h2>
          <p className="text-gray-400 text-lg">
            Learn from resources across the greater Solana ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getCurrentTestimonials().map((testimonial, index) => (
            <Card2
              key={index}
              rating={testimonial.rating}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              location={testimonial.location}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>

        {/* Dot Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? "w-10 h-3 bg-purple-500"
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>      
      <SubContainer />    </div>
  );
};

export default Page2;