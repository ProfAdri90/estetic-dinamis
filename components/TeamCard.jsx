import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-[140px] md:w-[200px] aspect-[2/3] overflow-hidden group shadow-md hover:shadow-xl"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
      />

      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 opacity-0 md:group-hover:opacity-100 transition-all duration-500">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-200">{title}</p>
      </div>
    </motion.div>
  );
}
