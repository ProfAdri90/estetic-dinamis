import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const teamMembers = [
  { id: 1, name_id: "Profesor Adri", name_en: "Professor Adri", title_id: "Direktur Utama", title_en: "President Director", image: "/team/profadri.jpeg" },
  { id: 2, name_id: "Dul Jonih Iskandar", name_en: "Dul Jonih Iskandar", title_id: "Direktur", title_en: "Director", image: "/team/duljoni.jpeg" },
  { id: 3, name_id: "Desti Purnamasari", name_en: "Desti Purnamasari", title_id: "Direktur Keuangan", title_en: "Finance Director", image: "/team/desti.jpeg" },
  { id: 4, name_id: "Budi Mariono Perdanu", name_en: "Budi Mariono Perdanu", title_id: "Manajer Pengembangan Bisnis", title_en: "Business Development Manager", image: "/team/budi.jpeg" },
  { id: 5, name_id: "Meilinda Sari Hartati", name_en: "Meilinda Sari Hartati", title_id: "Manajer Perencana Event Kreatif", title_en: "Creative Event Planner Manager", image: "/team/didit.jpeg" },
  { id: 6, name_id: "Martin Herlambang Simanjuntak", name_en: "Martin Herlambang Simanjuntak", title_id: "Manajer Operasional", title_en: "Operational Manager", image: "/team/martin.jpeg" },
  { id: 7, name_id: "Rizka Bintang Utara", name_en: "Rizka Bintang Utara", title_id: "Manajer Event", title_en: "Event Manager", image: "/team/azka.jpeg" },
  { id: 8, name_id: "Putri Pangabean", name_en: "Putri Pangabean", title_id: "Manajer Pemasaran", title_en: "Marketing Manager", image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    // Optional: detect lang from browser or setting
    setLang("id");
  }, []);

  return (
    <section id="tim" className="bg-[#082846] text-white py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {lang === "id" ? "Tim Kami" : "Our Team"}
      </motion.h2>

      {/* Flex container */}
      <div className="flex flex-wrap w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-1/8 flex-shrink-0"
            style={{ width: "12.5%", aspectRatio: "3/4" }}
          >
            {/* Gambar */}
            <img
              src={member.image}
              alt={lang === "id" ? member.name_id : member.name_en}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Overlay info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 text-white text-center transition duration-500">
              <p className="text-sm font-bold">{lang === "id" ? member.name_id : member.name_en}</p>
              <p className="text-xs">{lang === "id" ? member.title_id : member.title_en}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive adjustment mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          #tim .group {
            width: 50% !important;
          }
          #tim img {
            filter: grayscale(0) !important;
          }
          #tim .group div {
            opacity: 100 !important;
          }
        }
      `}</style>
    </section>
  );
}
