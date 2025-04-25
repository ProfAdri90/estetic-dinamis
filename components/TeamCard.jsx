// components/TeamCard.jsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ name, title, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-[180px] h-[270px] overflow-hidden"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden group">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-xs md:text-sm">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-[10px] md:text-xs">{title}</p>
      </div>
        {/* Mobile: always show text */}
        <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 md:hidden">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-200">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
