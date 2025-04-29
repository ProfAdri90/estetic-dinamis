import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeamCard({ image, name, title, lang }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSize = () => setIsMobile(window.innerWidth < 768);
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-[160px] md:w-[180px] aspect-[3/4] overflow-hidden group"
    >
      <Image
        src={image}
        alt={name}
        fill
        className={`object-cover transition duration-500 ${
          isMobile ? "grayscale-0" : "grayscale group-hover:grayscale-0"
        }`}
      />

      <div
        className={`absolute bottom-0 left-0 w-full p-2 transition-all duration-500 text-center ${
          isMobile
            ? "bg-black/60 backdrop-blur-sm opacity-100"
            : "bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        }`}
      >
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-200">{title}</p>
      </div>
    </motion.div>
  );
}
