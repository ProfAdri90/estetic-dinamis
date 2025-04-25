// components/TeamCard.jsx
import Image from "next/image";

export default function TeamCard({ name, title, image }) {
  return (
  <div className="flex-1 px-2">
  <div className="relative group aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
    />
    <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/50 p-2 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
      <h3 className="text-white text-sm font-semibold">{name}</h3>
      <hr className="my-1 border-t border-gray-300 w-8" />
      <p className="text-xs text-gray-200">{title}</p>
    </div>
  </div>
</div>
  );
}


