// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ name, title, image }) {
  return (
    <div className="relative group w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-md">
      <Image
        src={image}
        alt={name}
        width={800}
        height={450}
        className="object-cover w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/50 p-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <hr className="my-1 border-t border-gray-300 w-10" />
        <p className="text-sm text-gray-200">{title}</p>
      </div>
    </div>
  );
}

