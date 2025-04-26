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
        className="object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
      />

      <div
        className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md text-center py-2 
        md:opacity-0 md:group-hover:opacity-100 
        transition-all duration-500 ease-in-out text-white text-xs md:text-sm"
      >
        <h3 className="font-bold">{name}</h3>
        <p>{title}</p>
      </div>
    </motion.div>
  );
}
