import React from "react";

const Card2 = ({ rating, title, testimonial, name, location, avatarUrl }) => {
  return (
    
    <div className="bg-linear-to-br from-[rgba(10,2,26,1)] to-[rgba(23,12,46,1)] text-white rounded-2xl p-8 min-w-xl border border-[rgba(32,16,64,1)]">

      <div className="flex gap-3 mb-6">
        {[...Array(rating)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        {testimonial}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-medium pb-2">{name}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
