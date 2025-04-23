import React from "react";

export default function PartnerMedia({ lang }) {
  const mediaPartners = [
    { name: "kompas", url: "#" },
    { name: "beritasatu", url: "#" },
    { name: "tempo", url: "#" },
    { name: "antaranews", url: "#" },
    { name: "kontan", url: "#" },
    { name: "republika", url: "#" },
    { name: "metrotvnews", url: "#" },
    { name: "kumparan", url: "#" },
    { name: "bisnis", url: "#" },
    { name: "bisnispro", url: "#" },
    {
      name: "tribunnews",
      url: "https://www.tribunnews.com/tribunners/2016/05/24/terkait-reklamasi-teluk-jakarta-investor-membutuhkan-kepastian-hukum",
    },
    { name: "mediaindo", url: "#" },
    { name: "suara", url: "#" },
    { name: "detik", url: "#" },
    { name: "liputan62", url: "#" },
  ];

  return (
    <section id="partner-media" className="py-16 bg-[#082846] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
  {lang === 'en' ? 'Media Partners' : 'Partner Media'}
</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {mediaPartners.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`/media-logos/${media.name}.png`}
                alt={media.name}
                className="max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
