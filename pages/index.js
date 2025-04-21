import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("id");
  const switchLang = () => setLang(lang === "id" ? "en" : "id");

  const values = ["Adaptif", "Profesionalisme", "Kreativitas Strategis", "Kolaboratif", "Terpercaya", "Berkelanjutan"];
  const successStory = [
    { year: 1997, text: "Menangani kasus Bentoel Group" },
    { year: 1998, text: "Krisis komunikasi Bank Bali" },
    { year: 2000, text: "Menangani media relation Mayora Group" },
    { year: 2004, text: "Kasus penolakan reklamasi PIK – Agung Podomoro" },
    { year: 2013, text: "Krisis komunikasi lahan Teluk Jambe – Karawang" },
    { year: 2014, text: "Reklamasi Pantura Jakarta – APL" },
    { year: 2016, text: "Serah terima apartemen Antasari 45 – Cowell Dev" },
    { year: 2019, text: "Pemulihan reputasi Saigon Delight – kasus keracunan" },
    { year: 2025, text: "Transformasi Estetic generasi baru" }
  ];
  const testimonials = [
    { name: "Andre Sukendra Atmadja", title: "Direktur Utama PT Mayora Indah Tbk", text: "Jasa yang ditawarkan memang sesuai dengan keperluan Mayora sebagai Perusahaan yang memiliki banyak produk, kualitas yang ditawarkan sungguh luar biasa" },
    { name: "Tri Wahyuni", title: "Corporate Secretary PT Duta Pertiwi Nusantara Tbk", text: "Estetic menawarkan hal yang kami butuhkan dalam segi media relation dan pelayanan manajemen event" },
    { name: "Ariesman Widjaja", title: "Ex Direktur Utama PT Agung Podomoro Land Tbk", text: "Satu kata untuk Estetic, Lanjutkan!" }
  ];
  const team = [
    { name: "Profesor Adri", title: lang === "id" ? "Direktur Utama" : "President Director", desc: lang === "id" ? "Aktif dalam dunia kehumasan sejak 2012 hingga kini." : "Active in the world of public relations since 2012 until now." },
    { name: "Meidita Sari H", title: lang === "id" ? "Manager Pengembangan Bisnis" : "Business Development Manager", desc: lang === "id" ? "Sejak 2015 aktif dalam pengembangan bisnis dan ide." : "Active in business development and ideation since 2015." },
    { name: "Desti Indri Parawansa", title: lang === "id" ? "Direktur Keuangan" : "Finance Director", desc: lang === "id" ? "Aktif sejak 2016 dalam pengelolaan keuangan di sektor swasta dan pemerintah." : "Active since 2016 in financial management in both private and government sectors." }
  ];
  const services = {
    konsultansi: ["Public relations & strategi komunikasi", "Manajemen perusahaan & krisis isu", "Penanganan isu publik", "Investor relations", "Government relations"],
    media: ["Konferensi pers", "Press tour", "Manajemen press release", "Press gathering", "Media visit", "Manajemen informasi", "Pembangunan opini", "Manajemen sosial media"],
    event: ["RUPS", "IPO", "Pameran, seminar, workshop", "Talkshow", "Peluncuran produk baru", "Pemasaran digital", "Periklanan"]
  };

  return <div className="min-h-screen bg-[#082846] text-white font-sans">Konten Estetic</div>;
}