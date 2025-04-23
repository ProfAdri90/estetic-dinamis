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
    { name: "tribunnews", url: "https://www.tribunnews.com/tribunners/2016/05/24/terkait-reklamasi-teluk-jakarta-investor-membutuhkan-kepastian-hukum" },
    { name: "mediaindo", url: "#" },
    { name: "suara", url: "#" },
    { name: "detik", url: "#" },
    { name: "liputan62", url: "#" }
  ];

  return (
    <section className="scroll-mt-[140px] py-16 px-4 bg-white text-[#082846] text-center">
      <h3 className="text-2xl font-bold mb-6">
        {lang === "id" ? "Partner Media" : "Media Partners"}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center max-w-6xl mx-auto">
        {mediaPartners.map((media) => (
          <a
            key={media.name}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition"
          >
            <img
              src={`/media-logos/${media.name}.png`}
              alt={media.name}
              className="h-10 object-contain mx-auto"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

