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
    <section id="our-team" className="scroll-mt-[140px] px-4 py-20 bg-[#082846] text-center">
      <h2 className="text-white text-4xl font-bold mb-10">Tim Kami</h2>

      {/* Fade-in Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`
              flex justify-center
              ${index >= 6 ? "col-span-2 lg:col-start-3" : ""}
            `}
          >
            <TeamCard
              image={member.image}
              name={member.name}
              title={member.title}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}


