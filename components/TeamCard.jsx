import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full aspect-[3/4] overflow-hidden group"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale md:group-hover:grayscale-0 transition duration-500"
      />
      
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100">
        <p className="text-xs font-semibold text-white">{name}</p>
        <p className="text-[10px] text-gray-200">{title}</p>
      </div>

      {/* Untuk mobile: selalu tampil */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 md:hidden">
        <p className="text-xs font-semibold text-white">{name}</p>
        <p className="text-[10px] text-gray-200">{title}</p>
      </div>
    </motion.div>
  );
} 
