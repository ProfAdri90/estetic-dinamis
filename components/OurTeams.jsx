import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { nameId: "Profesor Adri", nameEn: "Professor Adri", titleId: "Direktur Utama", titleEn: "President Director", image: "/team/profadri.jpeg" },
  { nameId: "Dul Jonih Iskandar", nameEn: "Dul Jonih Iskandar", titleId: "Direktur", titleEn: "Director", image: "/team/duljoni.jpeg" },
  { nameId: "Desti Purnamasari", nameEn: "Desti Purnamasari", titleId: "Direktur Keuangan", titleEn: "Finance Director", image: "/team/desti.jpeg" },
  { nameId: "Budi Mariono Perdanu", nameEn: "Budi Mariono Perdanu", titleId: "Manajer Pengembangan Bisnis", titleEn: "Business Development Manager", image: "/team/budi.jpeg" },
  { nameId: "Meilinda Sari Hartati", nameEn: "Meilinda Sari Hartati", titleId: "Manajer Perencana Event Kreatif", titleEn: "Creative Event Planning Manager", image: "/team/didit.jpeg" },
  { nameId: "Martin Herlambang Simanjuntak", nameEn: "Martin Herlambang Simanjuntak", titleId: "Manajer Operasional", titleEn: "Operations Manager", image: "/team/martin.jpeg" },
  { nameId: "Rizka Bintang Utara", nameEn: "Rizka Bintang Utara", titleId: "Manajer Event", titleEn: "Event Manager", image: "/team/azka.jpeg" },
  { nameId: "Putri Pangabean", nameEn: "Putri Pangabean", titleId: "Manajer Pemasaran", titleEn: "Marketing Manager", image: "/team/putri.jpeg" },
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
        Tim Kami / Our Team
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-0 max-w-[1600px] mx-auto px-2">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[190px] h-[250px]">
              <Image
                src={member.image}
                alt={member.nameId}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
                sizes="(max-width: 768px) 50vw, 12vw"
              />
              {/* Desktop Hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center">
                <p className="text-sm font-bold text-center">{member.nameId} / {member.nameEn}</p>
                <p className="text-xs text-center">{member.titleId} / {member.titleEn}</p>
              </div>
              {/* Mobile, show always */}
              <div className="block md:hidden absolute inset-0 bg-black/50 opacity-100 transition duration-500 flex flex-col justify-center items-center">
                <p className="text-sm font-bold text-center">{member.nameId} / {member.nameEn}</p>
                <p className="text-xs text-center">{member.titleId} / {member.titleEn}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
