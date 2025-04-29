import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    id: "property",
    title: { id: "Properti & Real Estat", en: "Property & Real Estate" },
    items: [
      { name: "Pantai Indah Kapuk" },
      { name: "PT Duta Pertiwi Tbk" },
      { name: "PT Pudjiadi Prestige Tbk" },
      { name: "Blok M Square" },
      { name: "PT Citra Marga Nusaphala Persada Tbk" },
      { name: "PT Pudjiadi & Son Tbk" },
      { name: "PT Adhi Karya Tbk" },
      { name: "PT Agung Podomoro Tbk" },
    ]
  },
  {
    id: "fnb",
    title: { id: "Makanan & Minuman", en: "Food & Beverages" },
    items: [
      { name: "PT Mayora Indah Tbk" },
    ]
  },
  {
    id: "finance",
    title: { id: "Keuangan & Perbankan", en: "Financial Services" },
    items: [
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
      }
    ]
  },
  {
    id: "textile",
    title: { id: "Tekstil & Garmen", en: "Textile & Garment" },
    items: [
      { name: "PT Pan Brothers Tbk" },
      { name: "Texmaco Group" },
    ]
  },
  {
    id: "tobacco",
    title: { id: "Rokok", en: "Tobacco" },
    items: [
      { name: "PT Bentoel Internasional Investama Tbk" },
      { name: "PT BAT Indonesia Tbk" },
    ]
  },
  {
    id: "plastics",
    title: { id: "Plastik & Kemasan", en: "Plastics & Packaging" },
    items: [
      { name: "PT Dynaplast Tbk" },
    ]
  },
  {
    id: "ceramic",
    title: { id: "Keramik & Kaca", en: "Ceramics & Glass" },
    items: [
      { name: "PT Arwana Citramulia Tbk" },
      { name: "PT Mulia Industrindo Tbk" },
    ]
  },
  {
    id: "chemical",
    title: { id: "Kimia", en: "Chemicals" },
    items: [
      { name: "PT Duta Pertiwi Nusantara Tbk" },
      { name: "PT Eterindo Wahanatama Tbk" },
    ]
  }
];

export default function ClientGrid({ lang }: { lang: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = document.getElementById("klien")?.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.8) setShow(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="klien" className="py-16 px-4 md:px-16 bg-white text-[#082846]">
      <h2 className="text-3xl font-bold text-center mb-12">
        {lang === "id" ? "Klien Kami" : "Our Clients"}
      </h2>
      {clients.map((category) => (
        <div key={category.id} className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            {lang === "id" ? category.title.id : category.title.en}
          </h3>
         <div className="text-sm text-center text-gray-600 px-2">
            {category.items.map((item, idx) => (
              <motion.div
                key={item.name}
                className="aspect-square bg-white rounded-lg shadow-inner flex flex-col items-center justify-center p-2 text-center border border-gray-200 hover:border-yellow-500 transition-transform duration-500 transform hover:scale-105 perspective"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                {item.oldLogo && item.newLogo ? (
                  <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                    <div
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <Image src={item.oldLogo} alt={item.name} width={100} height={100} className="object-contain" />
                    </div>
                    <div
                      className="absolute w-full h-full flex items-center justify-center [transform:rotateY(180deg)]"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
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
