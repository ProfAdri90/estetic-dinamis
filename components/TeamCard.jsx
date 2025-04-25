// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ image, name, title }) {
  return (
    <div className="w-[280px] aspect-[2/3] relative group overflow-hidden shadow-md">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />

      <div className={`
        absolute bottom-0 left-0 w-full px-3 py-2
        backdrop-blur-sm bg-black/60
        transition-all duration-500 ease-in-out
        text-white text-center

        md:opacity-0 md:group-hover:opacity-100
        md:translate-y-full md:group-hover:translate-y-0
        opacity-100 translate-y-0
      `}>
        <h3 className="text-sm font-semibold">{name}</h3>
        <hr className="my-1 border-t border-gray-300 w-6 mx-auto" />
        <p className="text-xs text-gray-200">{title}</p>
      </div>
    </div>
  );
}
