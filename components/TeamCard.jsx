import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="relative w-[150px] md:w-[180px] aspect-[3/4] overflow-hidden group shadow-md hover:shadow-xl"
>
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />

      {/* Nama dan jabatan */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-center p-2">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-300">{title}</p>
      </div>
    </motion.div>
  );
}
