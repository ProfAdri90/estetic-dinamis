import Image from "next/image";

export default function TeamCard({ image, name, title }) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden group">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm bg-black/60 px-2 py-1 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3 className="text-white text-xs font-semibold leading-tight">{name}</h3>
        <hr className="my-1 border-t border-gray-300 w-5" />
        <p className="text-[10px] text-gray-200 leading-tight">{title}</p>
      </div>
    </div>
  );
}
