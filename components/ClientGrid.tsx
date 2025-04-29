import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = {
  "Property & Real Estate": [
    { name: "Pantai Indah Kapuk" },
    { name: "PT Duta Pertiwi Tbk" },
    { name: "PT Pudjiadi Prestige Tbk" },
    { name: "Blok M Square" },
    { name: "PT Citra Marga Nusaphala Persada Tbk" },
    { name: "PT Pudjiadi & Son Tbk" },
    { name: "PT Adhi Karya Tbk" },
    { name: "PT Agung Podomoro Tbk" },
  ],
  "Makanan & Minuman": [
    { name: "PT Mayora Indah Tbk" },
  ],
  "Keuangan & Perbankan": [
    {
      name: "Bank Bali",
      oldLogo: "/logos/bankbali.png",
      newLogo: "/logos/permata.png",
      note: "Kini menjadi Bank Permata Tbk"
    },
    {
      name: "Bank Buana",
      oldLogo: "/logos/buana.png",
      newLogo: "/logos/uob.png",
      note: "Kini menjadi Bank UOB Indonesia"
    },
    {
      name: "Bank Swadesi",
      oldLogo: "/logos/swadesi.png",
      newLogo: "/logos/boii.png",
      note: "Kini menjadi Bank of India Indonesia"
    },
  ],
  "Tekstil & Garmen": [
    { name: "PT Pan Brothers Tbk" },
    { name: "Texmaco Group" },
  ],
  "Rokok": [
    { name: "PT Bentoel Internasional Investama Tbk" },
    { name: "PT BAT Indonesia Tbk" },
  ],
  "Plastik & Kemasan": [
    { name: "PT Dynaplast Tbk" },
  ],
  "Keramik & Kaca": [
    { name: "PT Arwana Citramulia Tbk" },
    { name: "PT Mulia Industrindo Tbk" },
  ],
  "Kimia": [
    { name: "PT Duta Pertiwi Nusantara Tbk" },
    { name: "PT Eterindo Wahanatama Tbk" },
  ]
};

export default function ClientGrid() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = document.getElementById("clients-section")?.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.8) setShow(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="clients-section" className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Klien Kami</h2>
      {Object.entries(clients).map(([category, logos]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {logos.map((item, idx) => (
              <motion.div
                key={item.name}
                className="aspect-square bg-white rounded-lg shadow-inner flex items-center justify-center p-2 border border-gray-200 hover:border-yellow-500 transition-transform duration-500 transform hover:scale-105 perspective"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                {item.oldLogo && item.newLogo ? (
                  <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
                      <Image src={item.oldLogo} alt={item.name} width={100} height={100} className="object-contain" />
                    </div>
                    <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden flex items-center justify-center">
                      <Image src={item.newLogo} alt={item.name + ' baru'} width={100} height={100} className="object-contain" />
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-center text-gray-600 px-2">
                    {item.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

