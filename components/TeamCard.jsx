// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ image, name, title }) {
  return (
    <div className="group relative w-[240px] aspect-[2/3] overflow-hidden shadow-md">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover md:grayscale md:group-hover:grayscale-0 transition duration-500"
      />
      
      {/* INFO: langsung muncul di mobile, hover muncul di desktop */}
      <div className="absolute bottom-0 left-0 w-full px-3 py-2
        backdrop-blur-sm bg-black/60 text-white text-center
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        translate-y-0 md:translate-y-full md:group-hover:translate-y-0
        transition-all duration-500 ease-in-out">
        
        <h3 className="text-sm font-semibold">{name}</h3>
        <hr className="my-1 border-t border-gray-300 w-8 mx-auto" />
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
}


