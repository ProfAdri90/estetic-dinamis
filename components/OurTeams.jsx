import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Profesor Adri", title: "Direktur Utama", image: "/team/profadri.jpeg" },
  { name: "Dul Jonih", title: "Direktur", image: "/team/duljoni.jpeg" },
  { name: "Desti", title: "Direktur Keuangan", image: "/team/desti.jpeg" },
  { name: "Budi", title: "Manajer Bisnis", image: "/team/budi.jpeg" },
  { name: "Didit", title: "Manajer Bisnis", image: "/team/didit.jpeg" },
  { name: "Martin", title: "Manajer Operasional", image: "/team/martin.jpeg" },
  { name: "Azka", title: "Manajer Event", image: "/team/azka.jpeg" },
  { name: "Putri", title: "Manajer Pemasaran", image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  return (
    <section id="our-team" className="scroll-mt-[140px] px-4 py-16 bg-[#082846]">
      <div className="max-w-[1520px] mx-auto grid grid-cols-8 gap-0">
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
