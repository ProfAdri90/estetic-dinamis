import TeamCard from "./TeamCard";

const teamMembers = [
  { name: "Profesor Adri", image: "/team/profadri.jpeg" },
  { name: "Dul Jonih", image: "/team/duljoni.jpeg" },
  { name: "Desti", image: "/team/desti.jpeg" },
  { name: "Budi", image: "/team/budi.jpeg" },
  { name: "Didit", image: "/team/didit.jpeg" },
  { name: "Martin", image: "/team/martin.jpeg" },
  { name: "Azka", image: "/team/azka.jpeg" },
  { name: "Putri", image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  return (
    <section id="our-team" className="scroll-mt-[140px] px-4 py-16 bg-[#082846]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-8 gap-0">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} image={member.image} name={member.name} />
        ))}
      </div>
    </section>
  );
}
