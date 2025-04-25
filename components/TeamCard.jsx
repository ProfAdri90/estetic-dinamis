// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ image, name, title }) {
  return (
    <div className="relative w-[360px] aspect-[2/3] overflow-hidden shadow-md bg-white">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale md:group-hover:grayscale-0 transition duration-500"
      />
      <div className={`
        absolute bottom-0 left-0 w-full text-white text-center p-2
        backdrop-blur-sm bg-black/60
        md:opacity-0 md:group-hover:opacity-100 md:translate-y-full md:group-hover:translate-y-0
        transition-all duration-500 ease-in-out
      `}>
        <h3 className="text-sm font-semibold">{name}</h3>
        <hr className="my-1 border-t border-gray-300 w-8 mx-auto" />
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
}

