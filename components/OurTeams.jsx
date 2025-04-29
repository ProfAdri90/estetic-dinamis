import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Profesor Adri", title: "Direktur Utama", image: "/team/profadri.jpeg" },
  { name: "Dul Jonih Iskandar", title: "Direktur", image: "/team/duljoni.jpeg" },
  { name: "Desti Purnamasari", title: "Direktur Keuangan", image: "/team/desti.jpeg" },
  { name: "Budi Mariono Perdanu", title: "Manajer Business Development", image: "/team/budi.jpeg" },
  { name: "Meilinda Sari Hartati", title: "Manajer Creative Event Planner", image: "/team/didit.jpeg" },
  { name: "Martin Herlambang Simanjuntak", title: "Manajer Operasional", image: "/team/martin.jpeg" },
  { name: "Rizka Bintang Utara", title: "Manajer Event", image: "/team/azka.jpeg" },
  { name: "Putri Pangabean", title: "Manajer Pemasaran", image: "/team/putri.jpeg" },
];

export default function OurTeams() {
  return (
    <section id="tim" className="bg-[#082846] text-white py-16">
      <div className="text-4xl font-bold text-center mb-12">
        Tim Kami
      </div>

      <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-14">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden"
          >
            {/* FOTO */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              {/* OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 md:opacity-0">
                <p className="text-sm font-semibold text-white">{member.name}</p>
                <p className="text-xs text-gray-200">{member.title}</p>
              </div>
            </div>

            {/* MOBILE langsung muncul nama */}
            <div className="block md:hidden mt-2 text-center">
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-300">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
