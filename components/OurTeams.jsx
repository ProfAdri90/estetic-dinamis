import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Profesor Adri", title: { id: "Direktur Utama", en: "President Director" }, image: "/team/profadri.jpeg" },
  { name: "Dul Jonih Iskandar", title: { id: "Direktur", en: "Director" }, image: "/team/duljoni.jpeg" },
  { name: "Desti Purnamasari", title: { id: "Direktur Keuangan", en: "Finance Director" }, image: "/team/desti.jpeg" },
  { name: "Budi Mariono Perdanu", title: { id: "Manajer Pengembangan Bisnis", en: "Business Development Manager" }, image: "/team/budi.jpeg" },
  { name: "Meilinda Sari Hartati", title: { id: "Manajer Perencana Event Kreatif", en: "Creative Event Planning Manager" }, image: "/team/didit.jpeg" },
  { name: "Martin Herlambang Simanjuntak", title: { id: "Manajer Operasional", en: "Operations Manager" }, image: "/team/martin.jpeg" },
  { name: "Rizka Bintang Utara", title: { id: "Manajer Event", en: "Event Manager" }, image: "/team/azka.jpeg" },
  { name: "Putri Pangabean", title: { id: "Manajer Pemasaran", en: "Marketing Manager" }, image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  return (
    <section id="tim" className="bg-[#082846] text-white py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Tim Kami
      </motion.h2>

      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-8 gap-4 px-2">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
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
