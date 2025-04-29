import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative w-[200px] md:w-[240px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg group"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
        sizes="(max-width: 768px) 50vw, 240px"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-3 md:p-4">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-xs text-gray-200">{title}</p>
      </div>

      {/* Mobile view: selalu tampil info */}
      <div className="md:hidden absolute bottom-0 left-0 w-full bg-black/60 p-3 flex flex-col">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-xs text-gray-200">{title}</p>
      </div>
    </motion.div>
  );
}

