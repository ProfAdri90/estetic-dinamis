import React from "react";

export default function PartnerMedia({ lang }) {
  const mediaPartners = [
    { name: "kompas", url: "https://www.kompas.tv/nasional/201190/dibatalkan-sepihak-pemenang-tender-baju-dinas-dprd-kota-tangerang-akan-ajukan-gugatan" },
    { name: "beritasatu", url: "https://www.beritasatu.com/news/420005/reklamasi-pantai-utara-jakarta-untuk-kepentingan-warga" },
    { name: "tempo", url: "https://www.tempo.co/arsip/reklamasi-teluk-jakarta-ini-saran-pakar-lingkungan-untuk-anies-909033" },
    { name: "antaranews", url: "https://www.antaranews.com/berita/2772345/pembangunan-apartemen-the-maj-residences-bekasi-tetap-berjalan" },
    { name: "kontan", url: "https://investasi.kontan.co.id/news/mayora-indah-myor-meluncurkan-produk-cokelat-baru-simak-rekomendasi-sahamnya" },
    { name: "republika", url: "https://news.republika.co.id/berita/obdvhk330/reklamasi-bisa-pulihkan-kualitas-teluk-jakarta-ini-kata-pakar" },
    { name: "metrotvnews", url: "https://www.medcom.id/nasional/metro/GNlJOzPk-gerindra-beri-sinyal-lanjutkan-reklamasi" },
    { name: "kumparan", url: "#" },
    { name: "bisnis", url: "https://market.bisnis.com/read/20220622/192/1546513/duta-pertiwi-nusantara-dpns-bagi-dividen-rp15-per-saham-bulan-depan" },
    { name: "bisnispro", url: "https://bisnispro.id/bongkar-pasang-papan-reklame-di-pos-pol-harmoni-dan-lapangan-banteng-jakarta-pusat-ada-apa/" },
    {
      name: "tribunnews",
      url: "https://www.tribunnews.com/tribunners/2016/05/24/terkait-reklamasi-teluk-jakarta-investor-membutuhkan-kepastian-hukum",
    },
    { name: "mediaindo", url: "https://epaper.mediaindonesia.com/detail/penggunaan-air-tanah-dalam-tenggelamkan-jakarta" },
    { name: "suara", url: "https://www.medcom.id/nasional/metro/GNlJOzPk-gerindra-beri-sinyal-lanjutkan-reklamasi" },
    { name: "detik", url: "https://food.detik.com/berita-boga/d-4847333/kasus-keracunan-makanan-di-jakarta-pihak-resto-dan-mal-beri-klarifikasi" },
    { name: "liputan62", url: "https://www.liputan6.com/bisnis/read/4168749/the-maj-residences-hunian-dengan-filosofi-jepang-di-bekasi-barat" },
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
