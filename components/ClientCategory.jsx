// components/ClientCategory.jsx
export default function ClientCategory({ title, logos }) {
  return (
    <section className="mb-12">
      <h3 className="text-lg md:text-xl font-bold uppercase text-[#082846] text-center mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}


// pages/our-clients.jsx
import ClientCategory from "@/components/ClientCategory";

const clientData = [
  {
    title: "Property & Real Estate",
    logos: [
      { src: "/client-logos/adhi.png", alt: "PT Adhi Karya Tbk" },
      { src: "/client-logos/apl.png", alt: "PT Agung Podomoro Tbk" },
      { src: "/client-logos/blokm.png", alt: "Blok M Square" },
      { src: "/client-logos/cmnp.png", alt: "PT Citra Marga Nusaphala Persada Tbk" },
      { src: "/client-logos/dutapertiwi.png", alt: "PT Duta Pertiwi Tbk" },
      { src: "/client-logos/pudjiadi.png", alt: "PT Pudjiadi Prestige Tbk" },
      { src: "/client-logos/pik.png", alt: "Pantai Indah Kapuk" },
      { src: "/client-logos/pson.png", alt: "PT Pudjiadi & Son Tbk" },
      { src: "/client-logos/themaj.png", alt: "The Maj Residence" },
      { src: "/client-logos/antasari45.png", alt: "Antasari 45" },
       { src: "/client-logos/buva.png", alt: "Bukit Uluwatu Villa" },
    ],
  },
  {
    title: "FMCG",
    logos: [
      { src: "/client-logos/mayora.png", alt: "PT Mayora Indah Tbk" },
      { src: "/client-logos/saigon.png", alt: "Saigon Delight" },
      { src: "/client-logos/campina.png", alt: "Campina" },
      { src: "/client-logos/bentoel.png", alt: "PT Bentoel Internasional Investama Tbk" },
       { src: "/client-logos/bat.png", alt: "PT BAT Indonesia Tbk" },
    ],
  },
  {
    title: "Financial",
    logos: [
      { src: "/client-logos/bankbali.png", alt: "Bank Bali" },
      { src: "/client-logos/permata.png", alt: "Permata Bank" },
      { src: "/client-logos/buana.png", alt: "Bank Buana" },
      { src: "/client-logos/uob.png", alt: "UOB" },
      { src: "/client-logos/swadesi.png", alt: "Bank Swadesi" },
      { src: "/client-logos/boii.png", alt: "Bank of India Indonesia" },
    ],
  },
  {
    title: "Textile & Garments",
    logos: [
      { src: "/client-logos/texmaco.png", alt: "Texmaco Group" },
      { src: "/client-logos/panbrothers.png", alt: "PT Pan Brothers Tbk" },
    ],
    {
    title: "Manfucature",
    logos: [
      { src: "/client-logos/dynaplast.png", alt: "PT Dynaplast Tbk" },
      { src: "/client-logos/arwana.png", alt: "PT Arwana Citramulia Tbk" },
      { src: "/client-logos/muliaindustri.png", alt: "PT Mulia Industrindo Tbk" },
      { src: "/client-logos/dpn.png", alt: "PT Duta Pertiwi Nusantara Tbk" },
      { src: "/client-logos/eterindo.png", alt: "PT Eterindo Wahanatama Tbk" },
      { src: "/client-logos/ks.png", alt: "PT Krakatau Steel Tbk" },
    ],
  }
];

export default function OurClients() {
  return (
    <div className="bg-white py-16 px-4 text-[#082846]">
      <div className="max-w-7xl mx-auto">
        {clientData.map((group, index) => (
          <ClientCategory key={index} title={group.title} logos={group.logos} />
        ))}
      </div>
    </div>
  );
}
