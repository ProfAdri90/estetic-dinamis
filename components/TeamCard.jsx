import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamCard({ image, name, title }) {
  return (
    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-500">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
      />
      
      {/* Text Layer */}
      <div
        className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-center py-2
          md:opacity-0 md:group-hover:opacity-100
          transition-all duration-500 ease-in-out text-xs md:text-sm"
      >
        <h3 className="text-xs md:text-sm font-bold">{name}</h3>
        <p className="text-[10px] md:text-xs">{title}</p>
      </div>
    </div>
  );
}
