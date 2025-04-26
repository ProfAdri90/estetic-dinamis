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
    <section id="tim" className="scroll-mt-[140px] py-20 bg-[#082846] text-white">
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4 justify-items-center px-4 md:px-12"> 
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <TeamCard
              image={member.image}
              name={member.name}
              title={member.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
