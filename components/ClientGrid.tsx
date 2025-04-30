import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    id: "property",
    title: { id: "Properti & Real Estat", en: "Property & Real Estate" },
    items: [
      { name: "Pantai Indah Kapuk", logo: "/client-logos/pik.png" },
      { name: "PT Duta Pertiwi Tbk", logo: "/client-logos/dutapertiwi.png" },
      { name: "PT Pudjiadi Prestige Tbk", logo: "/client-logos/pudjiadi.png" },
      { name: "Blok M Square", logo: "/client-logos/blokm.png" },
      { name: "PT Citra Marga Nusaphala Persada Tbk", logo: "/client-logos/cmnp.png" },
      { name: "PT Pudjiadi & Son Tbk", logo: "/client-logos/pson.png" },
      { name: "PT Adhi Karya Tbk", logo: "/client-logos/adhi.png" },
      { name: "PT Agung Podomoro Tbk", logo: "/client-logos/apl.png" }
    ]
  },
  {
    id: "fnb",
    title: { id: "Makanan & Minuman", en: "Food & Beverages" },
    items: [
      { name: "PT Mayora Indah Tbk", logo: "/client-logos/mayora.png" }
    ]
  },
  {
    id: "finance",
    title: { id: "Keuangan & Perbankan", en: "Financial Services" },
    items: [
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
      }
    ]
  },
  {
    id: "textile",
    title: { id: "Tekstil & Garmen", en: "Textile & Garment" },
    items: [
      { name: "PT Pan Brothers Tbk", logo: "/client-logos/panbrothers.png" },
      { name: "Texmaco Group", logo: "/client-logos/texmaco.png" }
    ]
  },
  {
    id: "tobacco",
    title: { id: "Rokok", en: "Tobacco" },
    items: [
      { name: "PT Bentoel Internasional Investama Tbk", logo: "/client-logos/bentoel.png" },
      { name: "PT BAT Indonesia Tbk", logo: "/client-logos/bat.png" }
    ]
  },
  {
    id: "plastics",
    title: { id: "Plastik & Kemasan", en: "Plastics & Packaging" },
    items: [
      { name: "PT Dynaplast Tbk", logo: "/client-logos/dynaplast.png" }
    ]
  },
  {
    id: "ceramic",
    title: { id: "Keramik & Kaca", en: "Ceramics & Glass" },
    items: [
      { name: "PT Arwana Citramulia Tbk", logo: "/client-logos/arwana.png" },
      { name: "PT Mulia Industrindo Tbk", logo: "/client-logos/muliaindustri.png" }
    ]
  },
  {
    id: "chemical",
    title: { id: "Kimia", en: "Chemicals" },
    items: [
      { name: "PT Duta Pertiwi Nusantara Tbk", logo: "/client-logos/dpn.png" },
      { name: "PT Eterindo Wahanatama Tbk", logo: "/client-logos/eterindo.png" }
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
          <h3 className="text-xl font-semibold mb-6 text-center">
            {lang === "id" ? category.title.id : category.title.en}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {category.items.map((item, idx) => (
              <div key={item.name} className="flex flex-col items-center space-y-2">
                <motion.div
                  className="w-[160px] aspect-square bg-white rounded-lg shadow-inner flex items-center justify-center p-4 text-center border border-gray-200 hover:border-yellow-500 transition-transform duration-500 transform perspective"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={show ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.oldLogo && item.newLogo ? (
                    <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                      <div className="absolute w-full h-full flex items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
                        <Image src={item.oldLogo} alt={item.name} width={80} height={80} className="object-contain" />
                      </div>
                      <div className="absolute w-full h-full flex items-center justify-center [transform:rotateY(180deg)]" style={{ backfaceVisibility: "hidden" }}>
                        <Image src={item.newLogo} alt={item.name + ' baru'} width={80} height={80} className="object-contain" />
                      </div>
                    </div>
                  ) : (
                    <Image src={item.logo!} alt={item.name} width={80} height={80} className="object-contain hover:scale-105 transition-transform duration-300" />
                  )}
                </motion.div>
                <p className="text-sm font-medium text-[#082846] text-center max-w-[160px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
