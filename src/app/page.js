import Hero from "./components/hero";
import SubContainer from "./components/subcontainer";
import Card2 from "./components/card2";

export default function Home() {
  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estaten was outstanding. The team's dedication and professionalism made finding our home classes. Highly recommend!",
      name: "Wade Warren",
      location: "USA, California",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estaten was outstanding. The team's dedication and professionalism made finding our home classes. Highly recommend!",
      name: "Emelie Thomson",
      location: "USA, Florida",
      avatarUrl: "/Profile.jpg"
    },
    {
      rating: 5,
      title: "Exceptional Service!",
      testimonial: "Our experience with Estaten was outstanding. The team's dedication and professionalism made finding our home classes. Highly recommend!",
      name: "John Doe",
      location: "USA, Nevada",
      avatarUrl: "/Profile.jpg"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Hero />
      
      {/* Testimonials Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Dig deeper.</h2>
            <p className="text-gray-400 text-lg">Learn from visionaries across the greater Solana ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card2 key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <SubContainer />
    </div>
  );
}
