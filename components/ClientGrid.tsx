import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "Bank Bali sekarang menjadi Bank Permata",
    oldLogo: "/client-logos/bankbali.png",
    newLogo: "/client-logos/permata.png"
  },
  {
    name: "Bank Buana sekarang menjadi Bank UOB Indonesia",
    oldLogo: "/client-logos/buana.png",
    newLogo: "/client-logos/uob.png"
  },
  {
    name: "Bank Swadesi sekarang menjadi Bank of India Indonesia",
    oldLogo: "/client-logos/swadesi.png",
    newLogo: "/client-logos/boii.png"
  },
  { name: "Pantai Indah Kapuk", logo: "/client-logos/pik.png" },
  { name: "PT Duta Pertiwi Tbk", logo: "/client-logos/dutapertiwi.png" },
  { name: "PT Pudjiadi Prestige Tbk", logo: "/client-logos/pudjiadi.png" },
  { name: "Blok M Square", logo: "/client-logos/blokm.png" },
  { name: "PT Citra Marga Nusaphala Persada Tbk", logo: "/client-logos/cmnp.png" },
  { name: "PT Pudjiadi & Son Tbk", logo: "/client-logos/pson.png" },
  { name: "PT Adhi Karya Tbk", logo: "/client-logos/adhi.png" },
  { name: "PT Agung Podomoro Tbk", logo: "/client-logos/apl.png" },
  { name: "PT Mayora Indah Tbk", logo: "/client-logos/mayora.png" },
  { name: "PT Pan Brothers Tbk", logo: "/client-logos/panbrothers.png" },
  { name: "Texmaco Group", logo: "/client-logos/texmaco.png" },
  { name: "PT Bentoel Internasional Investama Tbk", logo: "/client-logos/bentoel.png" },
  { name: "PT BAT Indonesia Tbk", logo: "/client-logos/bat.png" },
  { name: "PT Dynaplast Tbk", logo: "/client-logos/dynaplast.png" },
  { name: "PT Arwana Citramulia Tbk", logo: "/client-logos/arwana.png" },
  { name: "PT Mulia Industrindo Tbk", logo: "/client-logos/muliaindustri.png" },
  { name: "PT Duta Pertiwi Nusantara Tbk", logo: "/client-logos/dpn.png" },
  { name: "PT Eterindo Wahanatama Tbk", logo: "/client-logos/eterindo.png" }
];

export default function ClientGrid({ lang }: { lang: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = document.getElementById("klien")?.getBoundingClientRect().top;
      if (top && top < window.innerHeight * 0.8) setShow(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="klien" className="py-20 px-4 md:px-16 bg-white text-[#082846] text-center">
      <h2 className="text-3xl font-bold mb-10">
        {lang === "id" ? "Klien Kami" : "Our Clients"}
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {clients.map((item, idx) => {
          const isFlip = item.oldLogo && item.newLogo;
          return (
            <motion.div
              key={item.name}
              className={`bg-white rounded-lg shadow-sm flex flex-col items-center justify-center p-4 text-center border border-gray-200 transition-transform duration-500 ${isFlip ? '' : 'hover:scale-105'} hover:border-yellow-500`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={show ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05 }}
            >
              {isFlip ? (
                <div className="relative w-20 h-20 mb-2 [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full flex items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                    <Image src={item.oldLogo} alt={item.name} width={80} height={80} className="object-contain" />
                  </div>
                  <div className="absolute w-full h-full flex items-center justify-center [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                    <Image src={item.newLogo} alt={item.name + ' baru'} width={80} height={80} className="object-contain" />
                  </div>
                </div>
              ) : (
                <Image src={item.logo} alt={item.name} width={80} height={80} className="object-contain mb-2" />
              )}
              <p className="text-sm font-medium text-[#082846] leading-tight">
                {item.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
