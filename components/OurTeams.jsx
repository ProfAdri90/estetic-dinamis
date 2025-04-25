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

export default function OurTeams() {
  return (
    <section id="tim" className="scroll-mt-[140px] px-4 py-16 bg-[#082846] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
      
      {/* DESKTOP GRID */}
      <div className="hidden md:flex flex-col items-center gap-6">
        <div className="flex justify-center gap-4 flex-wrap max-w-[1200px]">
          {teamMembers.slice(0, 6).map((member, index) => (
            <TeamCard key={index} image={member.image} name={member.name} title={member.title} />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {teamMembers.slice(6, 8).map((member, index) => (
            <TeamCard key={index + 6} image={member.image} name={member.name} title={member.title} />
          ))}
        </div>
      </div>

      {/* MOBILE GRID */}
      <div className="md:hidden grid grid-cols-2 gap-6 max-w-sm mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            mobile
          />
        ))}
      </div>
    </section>
  );
}
