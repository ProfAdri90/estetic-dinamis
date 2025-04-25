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
      <h2 className="text-center text-3xl font-bold mb-10">Tim Kami</h2>

      <div className="flex justify-between max-w-[1440px] mx-auto gap-[6px]">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <TeamCard image={member.image} name={member.name} title={member.title} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
