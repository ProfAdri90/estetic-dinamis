import { useState, useEffect } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: { id: "Profesor Adri", en: "Professor Adri" },
    title: { id: "Direktur Utama", en: "President Director" },
    image: "/team/profadri.jpeg",
  },
  {
    name: { id: "Dul Jonih Iskandar", en: "Dul Jonih Iskandar" },
    title: { id: "Direktur", en: "Director" },
    image: "/team/duljoni.jpeg",
  },
  {
    name: { id: "Desti Purnamasari", en: "Desti Purnamasari" },
    title: { id: "Direktur Keuangan", en: "Finance Director" },
    image: "/team/desti.jpeg",
  },
  {
    name: { id: "Budi Mariono Perdanu", en: "Budi Mariono Perdanu" },
    title: { id: "Manajer Pengembangan Bisnis", en: "Business Development Manager" },
    image: "/team/budi.jpeg",
  },
  {
    name: { id: "Meilinda Sari Hartati", en: "Meilinda Sari Hartati" },
    title: { id: "Manajer Perencana Event Kreatif", en: "Creative Event Planning Manager" },
    image: "/team/didit.jpeg",
  },
  {
    name: { id: "Martin Herlambang Simanjuntak", en: "Martin Herlambang Simanjuntak" },
    title: { id: "Manajer Operasional", en: "Operations Manager" },
    image: "/team/martin.jpeg",
  },
  {
    name: { id: "Rizka Bintang Utara", en: "Rizka Bintang Utara" },
    title: { id: "Manajer Event", en: "Event Manager" },
    image: "/team/azka.jpeg",
  },
  {
    name: { id: "Putri Pangabean", en: "Putri Pangabean" },
    title: { id: "Manajer Pemasaran", en: "Marketing Manager" },
    image: "/team/putri.jpeg",
  },
];

export default function OurTeams() {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language;
      setLang(browserLang.startsWith("en") ? "en" : "id");
    }
  }, []);

  return (
    <section id="tim" className="bg-[#082846] py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        {lang === "id" ? "Tim Kami" : "Our Team"}
      </h2>

      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center sm:justify-between gap-y-6 px-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-[22vw] sm:w-[22vw] aspect-[3/4] overflow-hidden group"
            style={{ maxWidth: "180px" }}
          >
            <Image
              src={member.image}
              alt={member.name[lang]}
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute bottom-0 w-full text-center text-white text-sm px-2 py-2 bg-black/60 backdrop-blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100 sm:opacity-100 sm:static sm:bg-transparent sm:backdrop-blur-0">
              <p className="font-semibold">{member.name[lang]}</p>
              <p className="text-xs">{member.title[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
