// components/OurTeams.jsx
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Profesor Adri", title: "Direktur Utama", image: "/team/profadri.jpeg" },
  { name: "Dul Jonih Iskandar", title: "Direktur", image: "/team/duljoni.jpeg" },
  { name: "Desti Purnamasari", title: "Direktur Keuangan", image: "/team/desti.jpeg" },
  { name: "Budi Mariono Perdanu", title: "Manajer Bisnis", image: "/team/budi.jpeg" },
  { name: "Meilinda Sari Hartati", title: "Manajer Bisnis", image: "/team/didit.jpeg" },
  { name: "Martin Herlambang Simanjuntak", title: "Manajer Operasional", image: "/team/martin.jpeg" },
  { name: "Rizka Bintang Utara", title: "Manajer Event", image: "/team/azka.jpeg" },
  { name: "Putri Pangabean", title: "Manajer Pemasaran", image: "/team/putri.jpeg" },
];

export default function TeamCard({ image, name, title }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden group">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-xs md:text-sm">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-[10px] md:text-xs">{title}</p>
      </div>
    </div>
  );
}
