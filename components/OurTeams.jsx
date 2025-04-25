// components/OurTeams.jsx
import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Profesor Adri", title: "Direktur Utama", image: "/team/profadri.jpeg" },
  { name: "Dul Jonih Iskandar", title: "Direktur", image: "/team/duljoni.jpeg" },
  { name: "Desti Purnamasari", title: "Direktur Keuangan", image: "/team/desti.jpeg" },
  { name: "Budi Purnomo Perdanu", title: "Manajer Pengembangan Bisnis", image: "/team/budi.jpeg" },
  { name: "Meilinda Sari Hartania", title: "Manajer Pengembangan Bisnis", image: "/team/didit.jpeg" },
  { name: "Martin Herlambang", title: "Manajer Operasional", image: "/team/martin.jpeg" },
  { name: "Rizka Bintang Utara", title: "Manajer Event", image: "/team/azka.jpeg" },
  { name: "Putri Kumbara", title: "Manajer Pemasaran", image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  return (
   <section id="our-team" className="scroll-mt-[140px] px-4 py-12 bg-[#082846]">
  <div className="flex justify-center gap-6 w-full max-w-[1600px] mx-auto">
    {teamMembers.map((member, index) => (
      <TeamCard
        key={index}
        name={member.name}
        title={member.title}
        image={member.image}
      />
    ))}
  </div>
</section>
  );
}

