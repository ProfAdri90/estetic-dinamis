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

  return (
    <div className="min-h-screen bg-[#082846] text-white font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-[#082846] shadow-lg flex justify-between items-center px-6 py-4">
        <img src="/logo.png" alt="Logo" className="h-[100px] object-contain" />
        <nav className="flex gap-4 text-[#082846] font-semibold">
          <button onClick={() => scrollTo("tentang")}>Tentang</button>
          <button onClick={() => scrollTo("nilai")}>Nilai</button>
          <button onClick={() => scrollTo("sukses")}>Sukses</button>
          <button onClick={() => scrollTo("tim")}>Tim</button>
          <button onClick={() => scrollTo("layanan")}>Layanan</button>
          <button onClick={() => scrollTo("kontak")}>Kontak</button>
          <button onClick={switchLang} className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded">{lang === "id" ? "ID" : "EN"}</button>
        </nav>
      </header>

      <section id="tentang" className="text-center py-20 px-8">
  <h2 className="text-4xl font-semibold mb-6">
    {lang === "id" ? "Tentang Estetic" : "About Estetic"}
  </h2>
  <p className="max-w-4xl mx-auto leading-relaxed text-lg">
    {lang === "id"
      ? "Estetic Communication adalah perusahaan konsultan komunikasi yang berdiri sejak tahun 1997, berkomitmen untuk menjadi mitra strategis dalam membangun reputasi dan kepercayaan publik. Dengan pengalaman panjang dalam public relations, media relations, dan event management, kami telah menjadi bagian dari berbagai proyek komunikasi nasional dari sektor korporasi, pemerintahan, hingga organisasi publik."
      : "Estetic Communication is a communication consultancy established in 1997, committed to being a strategic partner in building public trust and reputation. With a long-standing experience in public relations, media relations, and event management, we’ve been involved in numerous national-level communication projects across corporate, government, and public sectors."}
  </p>
  <p className="max-w-4xl mx-auto mt-6 leading-relaxed text-lg">
    {lang === "id"
      ? "Kini Estetic berada dalam fase transformasi generasi kedua, menggabungkan pengalaman konvensional dengan pendekatan komunikasi modern berbasis data dan teknologi."
      : "Estetic is now undergoing a transformation under the second generation leadership, combining conventional experience with modern, data-driven communication strategies."}
  </p>
</section>
      <section id="nilai" className="bg-white text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-6 text-center">
    {lang === "id" ? "Nilai Perusahaan" : "Company Values"}
  </h3>
  <div className="flex flex-wrap justify-center gap-4">
    {values.map((value, index) => (
      <motion.span
        key={index}
        className="bg-[#082846] text-white px-4 py-2 rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        {value}
      </motion.span>
    ))}
  </div>
</section>
      <section id="sukses" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Cerita Sukses" : "Success Story"}
  </h3>
  <div className="flex flex-col gap-6 max-w-3xl mx-auto">
    {successStory.map((item, index) => (
      <motion.div
        key={index}
        className="border-l-4 border-[#d7b940] pl-4 relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="absolute left-[-12px] top-1 w-4 h-4 bg-[#d7b940] rounded-full"></div>
        <p className="text-sm font-bold mb-1">{item.year}</p>
        <p>{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>
      <section id="testimoni" className="bg-white text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Testimoni Klien" : "Client Testimonials"}
  </h3>
  <div className="flex flex-col gap-6 max-w-4xl mx-auto">
    {testimonials.map((t, index) => (
      <motion.div
        key={index}
        className="p-6 border-l-4 border-[#d7b940] bg-[#fefefe] shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <p className="text-md italic mb-2">"{t.text}"</p>
        <p className="font-bold text-sm">{t.name}</p>
        <p className="text-xs text-gray-600">{t.title}</p>
      </motion.div>
    ))}
  </div>
</section>

<section id="tim" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Tim Kami" : "Our Team"}
  </h3>
  <div className="flex flex-col gap-8 max-w-4xl mx-auto">
    {team.map((person, i) => (
      <motion.div
        key={i}
        className="bg-white p-6 rounded shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        <h4 className="text-xl font-bold mb-1">{person.name}</h4>
        <p className="text-sm font-semibold mb-2 text-[#d7b940]">{person.title}</p>
        <p className="text-sm">{person.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
      <section id="layanan" className="bg-white text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Layanan Kami" : "Our Services"}
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div>
      <h4 className="font-bold text-lg mb-2">Konsultansi</h4>
      <ul className="list-disc list-inside">
        {services.konsultansi.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-2">Public & Media Relations</h4>
      <ul className="list-disc list-inside">
        {services.media.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-2">Special Event Management</h4>
      <ul className="list-disc list-inside">
        {services.event.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  </div>
</section>
      <section id="kontak" className="bg-[#f9f9f9] text-[#082846] px-8 py-16">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Hubungi Kami" : "Contact Us"}
  </h3>
  <form className="max-w-xl mx-auto space-y-4">
    <input type="text" placeholder={lang === "id" ? "Nama" : "Name"} className="w-full px-4 py-2 border rounded" />
    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
    <textarea placeholder={lang === "id" ? "Pesan" : "Message"} rows="5" className="w-full px-4 py-2 border rounded"></textarea>
    <button type="submit" className="bg-[#d7b940] text-[#082846] px-6 py-2 rounded font-bold">
      {lang === "id" ? "Kirim Pesan" : "Send Message"}
    </button>
  </form>
</section>
    </div>
  );
}
