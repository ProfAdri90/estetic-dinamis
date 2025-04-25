// components/OurTeams.jsx
import TeamCard from "./TeamCard";

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

      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-x-6 gap-y-10">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </section>
  );
}


