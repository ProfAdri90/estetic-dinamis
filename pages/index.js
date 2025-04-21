import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("id");
  const switchLang = () => setLang(lang === "id" ? "en" : "id");

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const values = lang === "id"
  ? ["Adaptif", "Profesionalisme", "Kreativitas Strategis", "Kolaboratif", "Terpercaya", "Berkelanjutan"]
  : ["Adaptive", "Professionalism", "Strategic Creativity", "Collaborative", "Trusted", "Sustainable"];

  const successStory = [
  { year: 1997, text: lang === "id" ? "Menangani kasus Bentoel Group" : "Handled Bentoel Group case" },
  { year: 1998, text: lang === "id" ? "Krisis komunikasi Bank Bali" : "Bank Bali communication crisis" },
  { year: 2000, text: lang === "id" ? "Menangani media relation Mayora Group" : "Handled media relation for Mayora Group" },
  { year: 2004, text: lang === "id" ? "Kasus penolakan reklamasi PIK – Agung Podomoro" : "Reclamation rejection case PIK – Agung Podomoro" },
  { year: 2013, text: lang === "id" ? "Krisis komunikasi lahan Teluk Jambe – Karawang" : "Land communication crisis Teluk Jambe – Karawang" },
  { year: 2014, text: lang === "id" ? "Reklamasi Pantura Jakarta – APL" : "North Coast Jakarta reclamation – APL" },
  { year: 2016, text: lang === "id" ? "Serah terima apartemen Antasari 45 – Cowell Dev" : "Apartment handover Antasari 45 – Cowell Dev" },
  { year: 2019, text: lang === "id" ? "Pemulihan reputasi Saigon Delight – kasus keracunan" : "Reputation recovery of Saigon Delight – food poisoning case" },
  { year: 2025, text: lang === "id" ? "Transformasi Estetic generasi baru" : "Estetic transformation for the new generation" }
];


  const testimonials = [
  {
    name: "Andre Sukendra Atmadja",
    title: lang === "id" ? "Direktur Utama PT Mayora Indah Tbk" : "President Director of PT Mayora Indah Tbk",
    text: lang === "id"
      ? "Jasa yang ditawarkan memang sesuai dengan keperluan Mayora sebagai Perusahaan yang memiliki banyak produk, kualitas yang ditawarkan sungguh luar biasa"
      : "The services offered are exactly what Mayora needs as a company with many products, and the quality is truly outstanding."
  },
  {
    name: "Tri Wahyuni",
    title: lang === "id" ? "Corporate Secretary PT Duta Pertiwi Nusantara Tbk" : "Corporate Secretary of PT Duta Pertiwi Nusantara Tbk",
    text: lang === "id"
      ? "Estetic menawarkan hal yang kami butuhkan dalam segi media relation dan pelayanan manajemen event"
      : "Estetic provided exactly what we needed in terms of media relations and event management services."
  },
  {
    name: "Ariesman Widjaja",
    title: lang === "id" ? "Ex Direktur Utama PT Agung Podomoro Land Tbk" : "Former President Director of PT Agung Podomoro Land Tbk",
    text: lang === "id"
      ? "Satu kata untuk Estetic, Lanjutkan!"
      : "One word for Estetic: Keep it up!"
  }
];


  const team = [
    { name: "Profesor Adri", title: lang === "id" ? "Direktur Utama" : "President Director", desc: lang === "id" ? "Aktif dalam dunia kehumasan sejak 2012 hingga kini." : "Active in the world of public relations since 2012 until now." },
    { name: "Meidita Sari H", title: lang === "id" ? "Manager Pengembangan Bisnis" : "Business Development Manager", desc: lang === "id" ? "Sejak 2015 aktif dalam pengembangan bisnis dan ide." : "Active in business development and ideation since 2015." },
    { name: "Desti Indri Parawansa", title: lang === "id" ? "Direktur Keuangan" : "Finance Director", desc: lang === "id" ? "Aktif sejak 2016 dalam pengelolaan keuangan di sektor swasta dan pemerintah." : "Active since 2016 in financial management in both private and government sectors." }
  ];

  const services = {
  konsultansi:
    lang === "id"
      ? ["Public relations & strategi komunikasi", "Manajemen perusahaan & krisis isu", "Penanganan isu publik", "Investor relations", "Government relations"]
      : ["Public relations & communication strategy", "Corporate & crisis issue management", "Public issue handling", "Investor relations", "Government relations"],
  media:
    lang === "id"
      ? ["Konferensi pers", "Press tour", "Manajemen press release", "Press gathering", "Media visit", "Manajemen informasi", "Pembangunan opini", "Manajemen sosial media"]
      : ["Press conference", "Press tour", "Press release management", "Press gathering", "Media visit", "Information management", "Opinion building", "Social media management"],
  event:
    lang === "id"
      ? ["RUPS", "IPO", "Pameran, seminar, workshop", "Talkshow", "Peluncuran produk baru", "Pemasaran digital", "Periklanan"]
      : ["AGM", "IPO", "Exhibition, seminar, workshop", "Talkshow", "New product launch", "Digital marketing", "Advertising"]
};


  return (
    <div className="min-h-screen bg-[#082846] text-white font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-[#082846] shadow-lg flex justify-between items-center px-6 py-4">
        <img src="/logo.png" alt="Logo" className="h-[100px] object-contain" />
        <nav className="flex gap-4 text-[#082846] font-semibold">
          <button onClick={() => scrollTo("tentang")}>
          {lang === "id" ? "Tentang" : "About"}
          </button>
          <button onClick={() => scrollTo("nilai")}>
          {lang === "id" ? "Nilai" : "Values"}
          </button>
          <button onClick={() => scrollTo("sukses")}>
          {lang === "id" ? "Sukses" : "Success"}
          </button>
          <button onClick={() => scrollTo("testimoni")}>
          {lang === "id" ? "Testimoni" : "Testimonials"}
          </button>
          <button onClick={() => scrollTo("tim")}>
          {lang === "id" ? "Tim" : "Team"}
          </button>
          <button onClick={() => scrollTo("layanan")}>
          {lang === "id" ? "Layanan" : "Services"}
          </button>
          <button onClick={() => scrollTo("kontak")}>
          {lang === "id" ? "Kontak" : "Contact"}
          </button>
          <button onClick={switchLang} className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded">{lang === "id" ? "ID" : "EN"}</button>
        </nav>
      </header>

      <section id="tentang" className="scroll-mt-[100px] text-center py-20 px-8">
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
      <section id="nilai" className="scroll-mt-[100px] bg-white text-[#082846] text-center py-20 px-8">
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
      <section id="sukses" className="scroll-mt-[100px] text-center py-20 px-8">
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
      <section id="testimoni" className="scroll-mt-[100px] bg-white text-[#082846] text-center py-20 px-8">
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

<section id="tim" className="scroll-mt-[100px] bg-white text-[#082846] text-center py-20 px-8">
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
     <section id="layanan" className="scroll-mt-[100px] text-center py-20 px-8">
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
      <section id="kontak" className="scroll-mt-[100px] text-center py-20 px-8">
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
