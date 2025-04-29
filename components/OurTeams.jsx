import Image from "next/image";

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

export default function OurTeams({ lang = "id" }) {
  return (
    <section id="tim" className="bg-[#082846] text-white py-16">
      {/* Judul cuma satu */}
      <h2 className="text-4xl font-bold text-center mb-12">
        {lang === "id" ? "Tim Kami" : "Our Team"}
      </h2>

      {/* GRID TIM */}
      <div className="grid grid-cols-2 md:grid-cols-8 gap-0 max-w-full mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group w-full aspect-[3/4] overflow-hidden">
            {/* FOTO */}
            <Image
              src={member.image}
              alt={lang === "id" ? member.nameId : member.nameEn}
              layout="fill"
              objectFit="cover"
              className="transition duration-500 grayscale group-hover:grayscale-0"
            />

            {/* OVERLAY (HOVER hanya di desktop) */}
            <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex-col justify-center items-center text-center px-2">
              <p className="text-sm font-semibold">{lang === "id" ? member.nameId : member.nameEn}</p>
              <p className="text-xs">{lang === "id" ? member.titleId : member.titleEn}</p>
            </div>

            {/* MOBILE: Nama langsung muncul */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/70 text-center text-xs p-1">
              <p className="font-semibold">{lang === "id" ? member.nameId : member.nameEn}</p>
              <p>{lang === "id" ? member.titleId : member.titleEn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
