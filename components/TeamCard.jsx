import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title, mobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-[180px] aspect-[3/4] relative group overflow-hidden"
    >
      <Image
        src={image}
        alt={name}
        fill
        className={`object-cover transition duration-500 ${
          mobile ? "" : "grayscale group-hover:grayscale-0"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full p-2 text-center text-white bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          mobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-xs">{title}</p>
      </div>
    </motion.div>
  );
}
