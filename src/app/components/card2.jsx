import React from "react";

const Card2 = ({ rating, title, testimonial, name, location, avatarUrl }) => {
  return (
    <div className="bg-gradient-to-br from-[rgba(10,2,26,1)] to-[rgba(23,12,46,1)] text-white rounded-xl p-6 border border-[rgba(32,16,64,1)]">

      <div className="flex gap-2 mb-4">
        {[...Array(rating)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {testimonial}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
