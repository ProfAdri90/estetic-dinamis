"use client";
import Image from "next/image";

const teamMembers = [
  {
    id: "tasril",
    name: { id: "Tasril Jamal", en: "Tasril Jamal" },
    title: { id: "Komisaris & ", en: "Commissioner & " },
    image: "/team/tasril.jpg",
  },
  {
    id: "fachry",
    name: { id: "Fachryansyah Farandi", en: "Fachryansyah Farandi" },
    title: { id: "Komisaris", en: "Commissioner" },
    image: "/team/fachry.jpg",
  },
  {
    id: "adri",
    name: { id: "Adri Muhammad", en: "Adri Muhammad" },
    title: { id: "Direktur", en: "Director" },
    image: "/team/profadri.jpg",
  },
   {
    id: "desta",
    name: { id: "Desta Pretty Indriawanti", en: "Desta Pretty Indriawanti" },
    title: { id: "Kepala Keuangan & Akuntansi", en: "Head of Finance & Accounting" },
    image: "/team/desta.jpg",
  },
  {
    id: "dana",
    name: { id: "Dana Mahendra", en: "Dana Mahendra" },
    title: { id: "Kepala Pengembangan Bisnis", en: "Head of Business Development" },
    image: "/team/budi.jpg",
  },
  {
    id: "meiditha",
    name: { id: "Meiditha Hartaniah", en: "Meiditha Hartaniah" },
    title: { id: "Kepala Perencana Event Kreatif", en: "Head of Creative Event Planner" },
    image: "/team/didit.jpg",
  },
  {
    id: "cica",
    name: { id: "Annysa Yuliaty", en: "Annysa Yuliaty" },
    title: { id: "Kepala Kepegawaian & SDM", en: "Head of HR & Talent" },
    image: "/team/cica.jpg",
  },
 
  {
    id: "martin",
    name: { id: "Martin Erlambang", en: "Martin Erlambang" },
    title: { id: "Spesialis PR Digital", en: "Digital PR Specialist" },
    image: "/team/martin.jpg",
  },
  
];

export default function OurTeams({ lang }) {
  return (
    <section id="tim" className="bg-[#082846] py-16 scroll-mt-[140px]">
     
      <div className="grid grid-cols-2 md:grid-cols-8 gap-[1px] w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-full aspect-[3/4] overflow-hidden"
          >
            <Image
              src={member.image}
              alt={member.name[lang]}
              fill
              className="object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
            />
            <div
              className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-center text-sm text-white transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
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
