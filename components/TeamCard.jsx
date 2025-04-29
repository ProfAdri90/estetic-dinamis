import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-[250px] aspect-[3/4] overflow-hidden group"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      {/* MOBILE LANGSUNG TAMPIL */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-2 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs">{title}</p>
      </div>
    </motion.div>
  );
}
