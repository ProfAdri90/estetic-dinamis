import { useEffect, useState } from "react";
import useTestimonials from "../lib/useTestimonials";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials({ lang }) {
  const { testimonials, loading } = useTestimonials(lang);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (loading || testimonials.length === 0)
    return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="p-6 border-l-4 border-[#d7b940] bg-[#fefefe] shadow-md rounded"
        >
          <p className="text-md italic mb-4 text-[#082846]">
            "{testimonials[index].content}"
          </p>
          <p className="font-bold text-[#082846] text-sm">
            {testimonials[index].name}
          </p>
          <p className="text-xs text-gray-600">{testimonials[index].title}</p>
          <div className="flex justify-center mt-2 text-yellow-500">
            {Array.from({ length: testimonials[index].rating || 0 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.811l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.988 2.135c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.571-.38-1.811.588-1.811h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="px-4 py-2 border border-[#d7b940] text-[#082846] rounded hover:bg-[#d7b940] hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="px-4 py-2 border border-[#d7b940] text-[#082846] rounded hover:bg-[#d7b940] hover:text-white transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
