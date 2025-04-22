import { useState, useEffect } from "react";
/*import { useState } from "react";*/
/*import { motion } from "framer-motion";*/
import { motion, AnimatePresence } from "framer-motion";


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
  const targets = {
    client: 45,
    kegiatan: 500,
    jurnalis: 500,
    rilis: 2000
  };

  const interval = setInterval(() => {
    setCounts((prev) => {
      const next = { ...prev };
      let updated = false;

      for (let key in targets) {
        if (next[key] < targets[key]) {
          next[key] += Math.ceil(targets[key] / 80); // nambah cepat
          if (next[key] > targets[key]) next[key] = targets[key];
          updated = true;
        }
      }

      if (!updated) clearInterval(interval);
      return next;
    });
  }, 30); // tiap 30ms

  return () => clearInterval(interval);
}, []);
const heroImages = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];
const [heroIndex, setHeroIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  }, 5000); // ganti gambar tiap 5 detik
  return () => clearInterval(interval);
}, []);

  return (
  <div className="w-full min-h-screen font-sans bg-[#082846] text-white">
    
    {/* STICKY HEADER */}
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-[#082846] shadow-md flex justify-between items-center px-6 py-4">
  <img src="/logo.png" alt="Logo" className="h-[80px] object-contain" />

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
  {/* Background Crossfade */}
  {heroImages.map((img, idx) => (
    <motion.img
      key={img}
      src={img}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: idx === heroIndex ? 1 : 0 }}
      transition={{ duration: 1 }}
    />
  ))}

  {/* Overlay agar teks lebih terbaca */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

  {/* Konten */}
  <div className="relative z-20">
    <img
  src="/logo.png"
  alt="Estetic Logo"
  className="h-72 md:h-96 mx-auto mb-2 drop-shadow-2xl"
  />
    <p className="max-w-xl mx-auto text-lg font-medium drop-shadow">
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

    {/* Tombol navigasi */}
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
     <section id="layanan" className="scroll-mt-[140px] text-center py-20 px-8">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Layanan Kami" : "Our Services"}
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div>
      <h4 className="font-bold text-lg mb-2">
      {lang === "id" ? "Konsultansi" : "Consultancy"}
      </h4>
       <ul className="list-disc list-inside text-left pl-4">
        {services.konsultansi.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-2">
      {lang === "id" ? "Public & Media Relations" : "Public & Media Relations"}
      </h4>
       <ul className="list-disc list-inside text-left pl-4">
        {services.media.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-2">
      {lang === "id" ? "Manajemen Event Khusus" : "Special Event Management"}
      </h4>
      <ul className="list-disc list-inside text-left pl-4">
        {services.event.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  </div>
</section>
       <section id="kontak" className="scroll-mt-[180px] text-white py-20 px-8 bg-[#082846]">
  <h3 className="text-3xl font-bold mb-10 text-center">
    {lang === "id" ? "Hubungi Kami" : "Contact Us"}
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-sm">
    {/* Kolom Kiri - Info Kontak */}
    <div className="space-y-4">
      <p>
        📞{" "}
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="underline text-[#25D366] hover:text-[#1DA851]">
          +62 812-1212-1212
        </a>
      </p>
      <p>
        📧{" "}
        <a href="mailto:Communicatewith@estetic.co.id" className="underline text-blue-400 hover:text-blue-200">
          Communicatewith@estetic.co.id
        </a>
      </p>
      <p>
        📍 Jl. Pelita Raya Blok P No. 5-6, Tangerang
      </p>
    </div>

    {/* Kolom Kanan - Form */}
    <form className="space-y-4">
      <input type="text" placeholder={lang === "id" ? "Nama" : "Name"} className="w-full px-4 py-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
      <textarea placeholder={lang === "id" ? "Pesan" : "Message"} rows="5" className="w-full px-4 py-2 border rounded"></textarea>
      <button type="submit" className="bg-[#d7b940] text-[#082846] px-6 py-2 rounded font-bold">
        {lang === "id" ? "Kirim Pesan" : "Send Message"}
      </button>
    </form>
  </div>
</section>
                            <a
  href="https://wa.me/62813"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
>
  {/* Bubble teks yang muncul saat hover */}
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#25D366] text-sm font-medium px-3 py-1 rounded-full shadow-md">
    Chat with us
  </span>

  {/* Icon WhatsApp */}
  <img
    src="/whatsapp.png"
    alt="Chat via WhatsApp"
    className="w-12 h-12 drop-shadow-lg hover:scale-110 transition-transform duration-300"
  />
</a>

  
  <footer className="bg-[#082846] text-white text-center py-6 mt-10">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} Estetic Communication. All rights reserved.
  </p>
</footer>
    </div>
    

  );
}
