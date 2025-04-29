"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    id: "prof-adri",
    name: { id: "Profesor Adri", en: "Professor Adri" },
    title: { id: "Direktur Utama", en: "President Director" },
    image: "/team/profadri.jpeg",
  },
  {
    id: "dul-joni",
    name: { id: "Dul Jonih Iskandar", en: "Dul Jonih Iskandar" },
    title: { id: "Direktur", en: "Director" },
    image: "/team/duljoni.jpeg",
  },
  {
    id: "desti",
    name: { id: "Desti Purnamasari", en: "Desti Purnamasari" },
    title: { id: "Direktur Keuangan", en: "Finance Director" },
    image: "/team/desti.jpeg",
  },
  {
    id: "budi",
    name: { id: "Budi Mariono Perdanu", en: "Budi Mariono Perdanu" },
    title: { id: "Manajer Pengembangan Bisnis", en: "Business Development Manager" },
    image: "/team/budi.jpeg",
  },
  {
    id: "meilinda",
    name: { id: "Meilinda Sari Hartati", en: "Meilinda Sari Hartati" },
    title: { id: "Manajer Perencana Event Kreatif", en: "Creative Event Planner Manager" },
    image: "/team/didit.jpeg",
  },
  {
    id: "martin",
    name: { id: "Martin Herlambang Simanjuntak", en: "Martin Herlambang Simanjuntak" },
    title: { id: "Manajer Operasional", en: "Operational Manager" },
    image: "/team/martin.jpeg",
  },
  {
    id: "rizka",
    name: { id: "Rizka Bintang Utara", en: "Rizka Bintang Utara" },
    title: { id: "Manajer Event", en: "Event Manager" },
    image: "/team/azka.jpeg",
  },
  {
    id: "putri",
    name: { id: "Putri Pangabean", en: "Putri Pangabean" },
    title: { id: "Manajer Pemasaran", en: "Marketing Manager" },
    image: "/team/putri.jpeg",
  },
];

export default function OurTeams() {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "id";
    setLang(storedLang);
  }, []);

  return (
    <section id="tim" className="bg-[#082846] py-16 scroll-mt-[140px]">
      <h2 className="text-center text-white text-3xl font-bold mb-12">
        {lang === "id" ? "Tim Kami" : "Our Team"}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-8 gap-[1px] w-full">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group w-full aspect-[3/4] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name[lang]}
              fill
              className={`object-cover transition duration-500 grayscale md:group-hover:grayscale-0`}
            />
            <div
              className={`absolute bottom-0 left-0 w-full bg-black/60 p-2 text-center text-sm text-white transition-opacity duration-300
                md:opacity-0 md:group-hover:opacity-100 opacity-100`}
            >
              <p className="font-bold leading-tight">{member.name[lang]}</p>
              <p className="text-xs leading-tight">{member.title[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
