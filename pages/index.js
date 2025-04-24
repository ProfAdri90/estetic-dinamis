import { useState, useEffect } from "react";
import PartnerMedia from "../components/PartnerMedia";
/*import { useState } from "react";*/
/*import { motion } from "framer-motion";*/
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  const [lang, setLang] = useState("id");
  const switchLang = () => setLang(lang === "id" ? "en" : "id");
  const heroImages = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, 5000); // ganti gambar setiap 5 detik

  return () => clearInterval(interval);
}, []);

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
  },
    {
    name: "Herman Sutanta",
    title: lang === "id" ? "Manajer Legal PT Agung Podomoro Land Tbk" : "Legal Manager of PT Agung Podomoro Land Tbk",
    text: lang === "id"
      ? "Konslutan PR yang diisi orang-orang hebat"
      : "Public relations consultant filled with great people"
  },
    {
    name: "Junih Gunawan",
    title: lang === "id" ? "Sekretaris Perusahaan PT Mayora Indah Tbk" : "Corporate Secretary of PT Mayora Indah Tbk",
    text: lang === "id"
      ? "Salah satu perusahaan PR terbaik di Indonesia"
      : "One of the best PR companies in Indonesia"
    },
    {
  name: "Irman Gusman",
  title: lang === "id" ? "Anggota DPD RI" : "Senator Indonesian Republic",
  text: lang === "id"
    ? "Estetic Communication adalah mitra strategis yang mampu menerjemahkan visi lembaga menjadi narasi publik yang kuat dan kredibel."
    : "Estetic Communication is a strategic partner capable of transforming institutional vision into a strong and credible public narrative."
},
{
  name: "Sastri Bakry",
  title: lang === "id" ? "Penulis & Budayawan" : "Writer and cultural figure",
  text: lang === "id"
    ? "Estetic menunjukkan pemahaman yang mendalam terhadap dinamika budaya dan komunikasi, menjadikannya relevan di tengah arus perubahan zaman."
    : "Estetic demonstrates deep understanding of cultural and communication dynamics, making it highly relevant amid the tides of change."
},
{
  name: "Tommy Sasangka",
  title: lang === "id" ? "Wartawan Senior" : "Senior Journalist",
  text: lang === "id"
    ? "Estetic memiliki kepekaan jurnalistik yang jarang dimiliki oleh lembaga komunikasi lainnya, menjadikannya mitra terpercaya dalam mengelola citra dan isu."
    : "Estetic possesses a journalistic sensitivity rarely found in other communication firms, making it a trusted partner in managing image and issues."
},
{
  name: "Stefanus Pramono",
  title: lang === "id" ? "Pimpinan Redaksi Tempo" : "Editor in Chief of Tempo",
  text: lang === "id"
    ? "Kolaborasi dengan Estetic selalu berjalan profesional dan berbasis data, sesuatu yang kami nilai sangat penting dalam industri media."
    : "Collaboration with Estetic is always professional and data-driven — a value we consider crucial in the media industry."
},
{
  name: "Imron Mahrus",
  title: lang === "id" ? "Ketua Komisi Informasi Provinsi Banten" : "Chairman of the Banten Province Information Commission",
  text: lang === "id"
    ? "Estetic konsisten dalam menyuarakan keterbukaan informasi publik dengan pendekatan komunikasi yang edukatif dan strategis."
    : "Estetic consistently champions public information transparency through educational and strategic communication approaches."
}
];


  const team = [
  {
    name: "Profesor Adri",
    title: lang === "id" ? "Direktur Utama" : "President Director",
    desc: lang === "id"
      ? "Aktif dalam dunia kehumasan sejak 2012 hingga kini."
      : "Active in the world of public relations since 2012 until now.",
    photo: "/team/pro.png"
  },
  {
    name: "Meidita Sari H",
    title: lang === "id" ? "Manager Pengembangan Bisnis" : "Business Development Manager",
    desc: lang === "id"
      ? "Sejak 2015 aktif dalam pengembangan bisnis dan ide."
      : "Active in business development and ideation since 2015.",
    photo: "/team/didit.png"
  },
  {
    name: "Desti Indri Parawansa",
    title: lang === "id" ? "Direktur Keuangan" : "Finance Director",
    desc: lang === "id"
      ? "Aktif sejak 2016 dalam pengelolaan keuangan di sektor swasta dan pemerintah."
      : "Active since 2016 in financial management in both private and government sectors.",
    photo: "/team/desti.png"
  }
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
      ? ["RUPS", "Pameran, seminar, workshop", "Talkshow", "Peluncuran produk baru", "Pemasaran digital", "Periklanan"]
      : ["General Meeting", "Exhibition, seminar, workshop", "Talkshow", "New product launch", "Digital marketing", "Advertising"]
};

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTesti, setCurrentTesti] = useState(0);
  const nextTesti = () => {
  setCurrentTesti((prev) => (prev + 1) % testimonials.length);
};

const prevTesti = () => {
  setCurrentTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};
 const [counts, setCounts] = useState({
  client: 0,
  kegiatan: 0,
  jurnalis: 0,
  rilis: 0
});
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTesti((prev) => (prev + 1) % testimonials.length);
  }, 5000); // Ganti testimoni setiap 5 detik

  return () => clearInterval(interval);
}, [testimonials.length]);
  
const [showCounter, setShowCounter] = useState(false);

useEffect(() => {
  if (!showCounter) return;

  const targets = {
    client: 45,
    kegiatan: 500,
    jurnalis: 500,
    rilis: 2000,
  };

  const interval = setInterval(() => {
    setCounts((prev) => {
      const next = { ...prev };
      let updated = false;

      for (let key in targets) {
        if (next[key] < targets[key]) {
          next[key] += Math.ceil(targets[key] / 80);
          if (next[key] > targets[key]) next[key] = targets[key];
          updated = true;
        }
      }

      if (!updated) clearInterval(interval);
      return next;
    });
  }, 30);

  return () => clearInterval(interval);
}, [showCounter]);

// Observer untuk aktifin showCounter
useEffect(() => {
  const section = document.getElementById("tentang");
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowCounter(true);
        observer.unobserve(section);
      }
    },
    {
      rootMargin: "-100px 0px", // offset atas dikurangi 100px
      threshold: 0.1, // cukup 10% terlihat
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);
  
  // Fallback trigger untuk mobile (jaga-jaga observer ga ke-trigger)
useEffect(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    setTimeout(() => setShowCounter(true), 2000); // nyala otomatis setelah 2 detik
  }
}, []);

  const [showCTA, setShowCTA] = useState(false);

useEffect(() => {
  const kontakSection = document.getElementById('kontak');
  if (!kontakSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowCTA(entry.isIntersecting);
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(kontakSection);

  return () => observer.disconnect();
}, []);

  return (
  <div className="w-full min-h-screen font-sans bg-[#082846] text-white">
    
    {/* STICKY HEADER */}
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-[#082846] shadow-md flex justify-between items-center px-6 py-4">
  <img src="/logo.png" alt="Logo" className="h-[40px] md:h-[60px] object-contain"/>

  {/* Desktop Menu */}
  <nav className="hidden md:flex gap-4 text-white font-semibold drop-shadow">
    <button onClick={() => scrollTo("tentang")}>{lang === "id" ? "Tentang" : "About"}</button>
    <button onClick={() => scrollTo("nilai")}>{lang === "id" ? "Nilai" : "Values"}</button>
    <button onClick={() => scrollTo("sukses")}>{lang === "id" ? "Sukses" : "Success"}</button>
    <button onClick={() => scrollTo("testimoni")}>{lang === "id" ? "Testimoni" : "Testimonials"}</button>
    <button onClick={() => scrollTo("tim")}>{lang === "id" ? "Tim" : "Team"}</button>
    <button onClick={() => scrollTo("layanan")}>{lang === "id" ? "Layanan" : "Services"}</button>
    <button onClick={() => scrollTo("kontak")}>{lang === "id" ? "Kontak" : "Contact"}</button>
    <button
      onClick={switchLang}
      className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded"
    >
      {lang === "id" ? "ID" : "EN"}
    </button>
  </nav>

  {/* Mobile Menu */}
  <div className="md:hidden flex items-center gap-2">
    <button
      onClick={switchLang}
      className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded"
    >
      {lang === "id" ? "ID" : "EN"}
    </button>
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-[#082846] text-3xl font-bold"
    >
      ☰
    </button>
  </div>
</header>


    {/* DROPDOWN */}
   <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="dropdown"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white text-[#082846] px-6 py-4 flex flex-col gap-2 shadow-md z-40 fixed top-[100px] left-0 right-0"
    >
      <button onClick={() => { scrollTo("tentang"); setMenuOpen(false); }}>{lang === "id" ? "Tentang" : "About"}</button>
      <button onClick={() => { scrollTo("nilai"); setMenuOpen(false); }}>{lang === "id" ? "Nilai" : "Values"}</button>
      <button onClick={() => { scrollTo("sukses"); setMenuOpen(false); }}>{lang === "id" ? "Sukses" : "Success"}</button>
      <button onClick={() => { scrollTo("testimoni"); setMenuOpen(false); }}>{lang === "id" ? "Testimoni" : "Testimonials"}</button>
      <button onClick={() => { scrollTo("tim"); setMenuOpen(false); }}>{lang === "id" ? "Tim" : "Team"}</button>
      <button onClick={() => { scrollTo("layanan"); setMenuOpen(false); }}>{lang === "id" ? "Layanan" : "Services"}</button>
      <button onClick={() => { scrollTo("kontak"); setMenuOpen(false); }}>{lang === "id" ? "Kontak" : "Contact"}</button>
    </motion.div>
  )}
</AnimatePresence>

<section className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
  {/* Background image loop */}
  {heroImages.map((img, idx) => (
    <motion.img
      key={img}
      src={img}
      alt=""
      className="absolute inset-0 w-full h-full object-cover z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: idx === heroIndex ? 1 : 0 }}
      transition={{ duration: 1 }}
    />
  ))}

  {/* Overlay transparan di atas background */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

  {/* Konten (logo + teks) HARUS z-20 */}
 <div className="relative h-28 md:h-44 z-30 w-auto mx-auto mb-2">
  <img
    src="/logo.png"
    alt="Estetic Logo"
    className="h-full w-auto object-contain mx-auto drop-shadow-lg"
    style={{
      filter: "drop-shadow(0 0 10px rgba(215, 185, 64, 0.4)) drop-shadow(0 0 20px rgba(215, 185, 64, 0.3))",
    }}
  />
    <p className="text-lg md:text-xl max-w-2xl drop-shadow-lg px-4">
      {lang === "id"
        ? "Kami memahami dinamika industri modern, dan kami siap untuk memastikan pesan Anda sampai dengan tepat, berdampak dan bernilai."
        : "We understand the dynamics of modern industries and are ready to ensure your message is delivered accurately, impactfully, and meaningfully."}
    </p>
  </div>
</section>



      <section id="tentang" className="scroll-mt-[180px] text-center py-20 px-8">
  <h2 className="text-4xl font-semibold mb-6">
    {lang === "id" ? "Tentang Estetic" : "About Estetic"}
  </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-10">
  <div>
    <h4 className="text-4xl font-bold text-[#d7b940] flex items-start justify-center">
      {counts.client}
      <span className="ml-1 text-2xl align-top">+</span>
    </h4>
    <p className="mt-2 text-lg">{lang === "id" ? "Klien" : "Clients"}</p>
  </div>
  <div>
    <h4 className="text-4xl font-bold text-[#d7b940] flex items-start justify-center">
      {counts.kegiatan}
      <span className="ml-1 text-2xl align-top">+</span>
    </h4>
    <p className="mt-2 text-lg">{lang === "id" ? "Kegiatan PR" : "PR Activities"}</p>
  </div>
  <div>
    <h4 className="text-4xl font-bold text-[#d7b940] flex items-start justify-center">
      {counts.jurnalis}
      <span className="ml-1 text-2xl align-top">+</span>
    </h4>
    <p className="mt-2 text-lg">{lang === "id" ? "Jurnalis" : "Journalists"}</p>
  </div>
  <div>
    <h4 className="text-4xl font-bold text-[#d7b940] flex items-start justify-center">
      {counts.rilis}
      <span className="ml-1 text-2xl align-top">+</span>
    </h4>
    <p className="mt-2 text-lg">{lang === "id" ? "Publikasi Rilis" : "Press Releases"}</p>
  </div>
</div>
  <p className="max-w-4xl mx-auto leading-relaxed text-lg">
    {lang === "id"
      ? "Estetic Communication adalah perusahaan konsultan komunikasi yang berdiri sejak tahun 1997, berkomitmen untuk menjadi mitra strategis dalam membangun reputasi dan kepercayaan publik. Dengan pengalaman panjang dalam public relations, media relations, dan event management, kami telah menjadi bagian dari berbagai proyek komunikasi nasional dari sektor korporasi, pemerintahan, hingga organisasi publik."
      : "Estetic Communication is a communication consultancy established in 1997, committed to being a strategic partner in building public trust and reputation. With a long-standing experience in public relations, media relations, and event management, we’ve been involved in numerous national-level communication projects across corporate, government, and public sectors."}
  </p>
  <p className="max-w-4xl mx-auto mt-6 leading-relaxed text-lg">
    {lang === "id"
      ? "Kini Estetic berada dalam fase transformasi generasi kedua, menggabungkan pengalaman konvensional dengan pendekatan komunikasi modern berbasis data dan teknologi."
      : "Estetic is now undergoing a transformation under the second generation leadership, combining conventional experience with modern, data-driven communication strategies."}
    {/* PARTNER MEDIA */}
  <PartnerMedia lang={lang} />
  </p>
</section>
  

      <section id="nilai" className="scroll-mt-[180px] bg-white text-[#082846] text-center py-20 px-8">
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
      <section id="sukses" className="scroll-mt-[180px] text-center py-20 px-8">
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
    <section id="testimoni" className="scroll-mt-[180px] bg-white text-[#082846] text-center py-20 px-8">
  <h3 className="text-3xl font-bold mb-10">
    {lang === "id" ? "Testimoni Klien" : "Client Testimonials"}
  </h3>

  <div className="max-w-xl mx-auto">
    <motion.div
      key={currentTesti}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6 border-l-4 border-[#d7b940] bg-[#fefefe] shadow-md"
    >
      <p className="text-md italic mb-4">"{testimonials[currentTesti].text}"</p>
      <p className="font-bold text-sm">{testimonials[currentTesti].name}</p>
      <p className="text-xs text-gray-600">{testimonials[currentTesti].title}</p>
    </motion.div>

    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={prevTesti}
        className="px-4 py-2 border border-[#d7b940] text-[#082846] rounded hover:bg-[#d7b940] hover:text-white transition"
      >
        ←
      </button>
      <button
        onClick={nextTesti}
        className="px-4 py-2 border border-[#d7b940] text-[#082846] rounded hover:bg-[#d7b940] hover:text-white transition"
      >
        →
      </button>
    </div>
  </div>
</section>



<section id="tim" className="scroll-mt-[180px] bg-white text-[#082846] text-center py-20 px-8">
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
        {/* FOTO PROFIL TIM */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#d7b940] shadow-md">
  <img
    src={person.photo}
    alt={person.name}
    className="w-full h-full object-cover"
  />
</div>


          {/* NAMA PROFIL TIM */}
        <h4 className="text-xl font-bold mb-1">{person.name}</h4>
        <p className="text-sm font-semibold mb-2 text-[#d7b940]">{person.title}</p>
        <p className="text-sm">{person.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
    <section id="layanan" className="scroll-mt-[140px] text-center py-20 px-8 bg-white text-[#082846]">
  <h3 className="text-3xl font-bold mb-10">
    {lang === "id" ? "Layanan Kami" : "Our Services"}
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* 1. Strategic Communication */}
    <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
      <img src="/service-icons/strategic.png" alt="Strategic" className="h-16 mb-4" />
      <h4 className="text-xl font-bold mb-2">
        {lang === "id" ? "Komunikasi Strategis" : "Strategic Communication"}
      </h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>{lang === "id" ? "Perencanaan PR & Komunikasi" : "PR & Communication Planning"}</li>
        <li>{lang === "id" ? "Pembangunan Narasi Korporat" : "Corporate Narrative Building"}</li>
        <li>{lang === "id" ? "Manajemen Krisis" : "Crisis Management"}</li>
        <li>{lang === "id" ? "Pemetaan Pemangku Kepentingan" : "Stakeholder Mapping"}</li>
        <li>{lang === "id" ? "Hubungan Pemerintah & Urusan Publik" : "Public Affairs & Government Relations"}</li>
      </ul>
    </div>

    {/* 2. Media Relations & Reputation */}
    <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
      <img src="/service-icons/media.png" alt="Media" className="h-16 mb-4" />
      <h4 className="text-xl font-bold mb-2">
        {lang === "id" ? "Media & Reputasi" : "Media Relations & Reputation"}
      </h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>{lang === "id" ? "Penempatan Media (earned/paid)" : "Media Placement (earned/paid)"}</li>
        <li>{lang === "id" ? "Pelatihan Media" : "Media Training"}</li>
        <li>{lang === "id" ? "Konferensi/Gathering Pers" : "Press Conference / Gathering"}</li>
        <li>{lang === "id" ? "Monitoring Media" : "Media Monitoring"}</li>
        <li>{lang === "id" ? "Penanganan Framing & Isu" : "Journalistic Framing & Issue Handling"}</li>
      </ul>
    </div>

    {/* 3. Digital & Content PR */}
    <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
      <img src="/service-icons/digital.png" alt="Digital" className="h-16 mb-4" />
      <h4 className="text-xl font-bold mb-2">
        {lang === "id" ? "Digital & Konten PR" : "Digital & Content PR"}
      </h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>{lang === "id" ? "PR Digital & SEO-PR" : "Digital PR & SEO-PR"}</li>
        <li>{lang === "id" ? "Manajemen Media Sosial" : "Social Media Management"}</li>
        <li>{lang === "id" ? "Strategi Influencer/KOL" : "Influencer / KOL Strategy"}</li>
        <li>{lang === "id" ? "Produksi Multimedia" : "Multimedia Production (video, infographics, etc)"}</li>
      </ul>
    </div>

    {/* 4. Event & Activation */}
    <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
      <img src="/service-icons/event.png" alt="Event" className="h-16 mb-4" />
      <h4 className="text-xl font-bold mb-2">
        {lang === "id" ? "Event & Aktivasi" : "Event & Activation"}
      </h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>{lang === "id" ? "Peluncuran Produk/Jasa" : "Launching Product/Service"}</li>
        <li>{lang === "id" ? "Brand Activation & Roadshow" : "Brand Activation & Roadshow"}</li>
        <li>{lang === "id" ? "Townhall / RUPS" : "Townhall / RUPS"}</li>
        <li>{lang === "id" ? "Expo, Seminar, Talkshow" : "Expo, Seminar, Talkshow"}</li>
      </ul>
    </div>

    {/* 5. Investor & Internal Communication */}
    <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
      <img src="/service-icons/investor.png" alt="Investor" className="h-16 mb-4" />
      <h4 className="text-xl font-bold mb-2">
        {lang === "id" ? "Investor & Komunikasi Internal" : "Investor & Internal Communications"}
      </h4>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>{lang === "id" ? "Materi Hubungan Investor" : "Investor Relations Decks"}</li>
        <li>{lang === "id" ? "Newsletter Internal" : "Internal Newsletter"}</li>
        <li>{lang === "id" ? "Laporan ESG & Keberlanjutan" : "ESG & Sustainability Reports"}</li>
        <li>{lang === "id" ? "Employer Branding" : "Employer Branding"}</li>
        <li>{lang === "id" ? "Strategi Komunikasi IPO" : "Development of IPO Communication Strategies"}</li>
        <li>{lang === "id" ? "Manajemen Komunikasi Keuangan & IPO" : "Management of IPO and Financial Communications"}</li>
      </ul>
    </div>
  </div>
</section>

 <section className="bg-white text-[#082846] py-20 px-4" id="kontak">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

      {/* Kolom 1: Gambar Estetik + Judul */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-[#082846]">
          {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
        </h2>
        <img src="/assets/hub.png" alt="Office" className="w-full h-auto " />
      </div>

      {/* Kolom 2: Info Kontak + Tagline */}
     <p
  className="text-xl md:text-2xl font-extrabold text-[#d7b940] drop-shadow-md leading-snug"
  style={{
    WebkitTextStroke: "0.8px #082846", // outline biru dongker
    color: "#d7b940",
  }}
>
        Helping brands tell stories that people believe & remember, with an aesthetic way
      </p>

        <div className="space-y-6 text-base">
          <div className="flex items-start gap-4">
            <img src="/assets/phone.png" alt="Phone" className="w-6 h-6 mt-1" />
            <p>+62 812-1212-1212</p>
          </div>
          <div className="flex items-start gap-4">
            <img src="/assets/email.png" alt="Email" className="w-6 h-6 mt-1" />
            <p>Communicatewith@estetic.co.id</p>
          </div>
          <div className="flex items-start gap-4">
            <img src="/assets/map.png" alt="Map" className="w-6 h-6 mt-1" />
            <p>Jl. Pelita Raya Blok P No. 5-6, Tangerang</p>
          </div>
        </div>
      </div>

      {/* Kolom 3: Form Kontak */}
      <form className="space-y-4">
        <input type="text" placeholder={lang === 'id' ? 'Nama' : 'Name'} className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
        <input type="text" placeholder={lang === 'id' ? 'Subjek' : 'Subject'} className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
        <textarea placeholder={lang === 'id' ? 'Pesan' : 'Message'} rows="5" className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]"></textarea>
        <button type="submit" className="bg-[#d7b940] text-[#082846] px-6 py-2 rounded font-bold w-full">
          {lang === 'id' ? 'Kirim Pesan' : 'Send Message'}
        </button>
      </form>
    </div>

    {/* CTA & Logo */}
    <div className="text-center mt-16">
      <p className="text-lg font-medium italic text-[#082846]">Let’s build your story together.</p>
      <div className="flex justify-center mt-6">
        <img src="/logo.png" alt="Estetic Logo" className="h-20 w-auto" />
      </div>
    </div>
  </div>
</section>


<AnimatePresence>
  {showCTA && (
    <motion.a
      key="whatsappCTA"
      href="https://wa.me/62813"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <img
      src="/whatsapp.png"
      alt="Chat via WhatsApp"
      style={{ width: "105px", height: "105px" }}
      className="drop-shadow-lg rounded-full object-contain"
    />
  </motion.a>
)}
</AnimatePresence>

  
  <footer className="bg-[#082846] text-white text-center py-6 mt-10">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} Estetic Communication. All rights reserved.
  </p>
</footer>
    </div>
    

  );
}
