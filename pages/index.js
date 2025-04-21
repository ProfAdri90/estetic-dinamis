import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("id");
  const switchLang = () => setLang(lang === "id" ? "en" : "id");

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const values = ["Adaptif", "Profesionalisme", "Kreativitas Strategis", "Kolaboratif", "Terpercaya", "Berkelanjutan"];
  const successStory = [...]; // (keep previous content)
  const testimonials = [...];
  const team = [...];
  const services = {...};

  return (
    <div className="min-h-screen bg-[#082846] text-white font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-[#082846] shadow-lg flex justify-between items-center px-6 py-4">
        <img src="/logo.png" alt="Logo" className="h-[300px] w-[720px] object-contain" />
        <nav className="flex gap-6 text-[#082846] font-semibold">
          <button onClick={() => scrollTo("tentang")}>Tentang</button>
          <button onClick={() => scrollTo("nilai")}>Nilai</button>
          <button onClick={() => scrollTo("sukses")}>Sukses</button>
          <button onClick={() => scrollTo("tim")}>Tim</button>
          <button onClick={() => scrollTo("layanan")}>Layanan</button>
          <button onClick={() => scrollTo("kontak")}>Kontak</button>
          <button onClick={switchLang} className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded">{lang === "id" ? "ID" : "EN"}</button>
        </nav>
      </header>

      <section id="tentang" className="text-center py-20 px-8">...konten...</section>
      <section id="nilai" className="bg-white text-[#082846] px-8 py-16">...konten...</section>
      <section id="sukses" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">...konten...</section>
      <section id="testimoni" className="bg-white text-[#082846] px-8 py-16">...konten...</section>
      <section id="tim" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">...konten...</section>
      <section id="layanan" className="bg-white text-[#082846] px-8 py-16">...konten...</section>
      <section id="kontak" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">...konten...</section>
    </div>
  );
}
