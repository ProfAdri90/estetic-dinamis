import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PartnerMedia from "../components/PartnerMedia";
import OurTeams from "../components/OurTeams";
import clientData from "../data/clientData";
import Testimonials from "../components/Testimonials";

export default function Home() {
  // ==== LOGIC ====
  const [lang, setLang] = useState("en");
  const switchLang = () => setLang(lang === "id" ? "en" : "id");

  // HERO SLIDER
  const heroImages = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // SCROLL
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // COUNTER
  const [counts, setCounts] = useState({ client: 0, kegiatan: 0, jurnalis: 0, rilis: 0 });
  const [showCounter, setShowCounter] = useState(false);
  useEffect(() => {
    if (!showCounter) return;
    const targets = { client: 45, kegiatan: 500, jurnalis: 500, rilis: 2000 };
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
  useEffect(() => {
    const section = document.getElementById("tentang");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShowCounter(true); observer.unobserve(section); } },
      { rootMargin: "-100px 0px", threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // SUCCESS STORY
  const successStories = [
  {
    year: "1997",
    title: {
      id: "Awal Perjalanan PR Estetic",
      en: "The PR Journey Begins"
    },
    desc: {
      id: "Proyek perdana Estetic dalam merancang strategi komunikasi untuk brand besar nasional.",
      en: "Estetic’s first major step in developing a public relations strategy for a national brand."
    },
    bg: "/bgsukses/first.png"
  },
  {
    year: "1998",
    title: {
      id: "Membangun Narasi Finansial",
      en: "Financial Narrative Building"
    },
    desc: {
      id: "Merancang komunikasi publik untuk industri keuangan dengan pendekatan yang terpercaya.",
      en: "Crafted public communication strategies for the financial sector with a trusted approach."
    },
    bg: "/bgsukses/dua.png"
  },
  {
    year: "2000",
    title: {
      id: "Sinergi Media Korporasi Mayora",
      en: "Media Relations for Mayora"
    },
    desc: {
      id: "Menginisiasi hubungan media strategis jangka panjang bersama korporasi consumer goods.",
      en: "Initiated long-term strategic media partnerships with a major consumer goods company."
    },
    bg: "/bgsukses/tiga.png"
  },
  {
    year: "2004",
    title: {
      id: "Komunikasi Pembangunan Perkotaan",
      en: "Urban Development Communication"
    },
    desc: {
      id: "Menyusun strategi komunikasi korporat untuk ekspansi kawasan properti terpadu.",
      en: "Built strategic corporate messaging for integrated property development projects."
    },
    bg: "/bgsukses/empat.png"
  },
  {
    year: "2013",
    title: {
      id: "PR Berbasis Stakeholder Industri",
      en: "Stakeholder-Focused PR Planning"
    },
    desc: {
      id: "Mengembangkan strategi komunikasi berbasis pemetaan pemangku kepentingan di sektor industri.",
      en: "Developed PR strategy based on stakeholder mapping in the industrial sector."
    },
    bg: "/bgsukses/lima.png"
  },
  {
    year: "2014",
    title: {
      id: "Narasi Proyek Infrastruktur Pesisir",
      en: "Coastal Infrastructure Narrative"
    },
    desc: {
      id: "Mengelola komunikasi publik pada proyek pengembangan kawasan pesisir skala besar.",
      en: "Managed public messaging for a large-scale coastal infrastructure initiative."
    },
    bg: "/bgsukses/enam.png"
  },
  {
    year: "2016",
    title: {
      id: "Komunikasi Strategis Antasari 45",
      en: "Strategic Communication for Antasari 45"
    },
    desc: {
      id: "Mengembangkan strategi komunikasi proaktif dalam proyek hunian yang bersinggungan dengan pembangunan infrastruktur publik.",
      en: "Developed proactive communication strategies for a residential project intersecting with major public infrastructure development."
    },
    bg: "/bgsukses/tujuh.png"
  },
  {
    year: "2019",
    title: {
      id: "Reputasi Restoran Premium",
      en: "Premium Restaurant Reputation Recovery"
    },
    desc: {
      id: "Menyusun strategi komunikasi untuk membangun kembali kepercayaan pelanggan restoran.",
      en: "Built a strategic PR campaign to restore customer confidence in a premium dining brand."
    },
    bg: "/bgsukses/delapan.png"
  },
  {
    year: "2025",
    title: {
      id: "Transformasi Generasi Kedua",
      en: "Second Generation Transformation"
    },
    desc: {
      id: "Estetic bertransformasi menuju era baru berbasis data dan teknologi.",
      en: "Estetic transforms into a data and technology-driven agency."
    },
    bg: "/bgsukses/sembilan.png"
  }
];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % successStories.length), 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  // WHATSAPP CTA
  const [showCTA, setShowCTA] = useState(false);
  useEffect(() => {
    const kontakSection = document.getElementById('kontak');
    if (!kontakSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowCTA(entry.isIntersecting), { threshold: 0.4 }
    );
    observer.observe(kontakSection);
    return () => observer.disconnect();
  }, []);

  // FORM
  const [formStatus, setFormStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xvgakqjg", {
        method: "POST", headers: { "Accept": "application/json" }, body: formData,
      });
      setFormStatus(response.ok ? "success" : "error");
      if (response.ok) e.target.reset();
    } catch { setFormStatus("error"); }
  };

  // ==== RENDER ====
  return (
    <div className="min-h-screen font-sans bg-white text-[#082846]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-[#082846] to-white/80 flex justify-between items-center px-6 py-4">
        <img src="/logo.png" alt="Logo" className="h-12 md:h-16" />
        <nav className="hidden md:flex gap-6 text-[#082846] font-semibold">
          <button onClick={() => scrollTo("tentang")}>{lang === "id" ? "Tentang" : "About"}</button>
          <button onClick={() => scrollTo("sukses")}>{lang === "id" ? "Sukses" : "Success"}</button>
          <button onClick={() => scrollTo("testimoni")}>{lang === "id" ? "Testimoni" : "Testimonials"}</button>
          <button onClick={() => scrollTo("tim")}>{lang === "id" ? "Tim" : "Team"}</button>
          <button onClick={() => scrollTo("layanan")}>{lang === "id" ? "Layanan" : "Services"}</button>
          <button onClick={() => scrollTo("clients")}>{lang === "id" ? "Klien" : "Our Clients"}</button>
          <button onClick={() => scrollTo("kontak")}>{lang === "id" ? "Kontak" : "Contact"}</button>
          <button onClick={switchLang} className="bg-[#d7b940] text-[#082846] px-2 py-1 rounded">{lang === "id" ? "ID" : "EN"}</button>
        </nav>
      </header>

      {/* HERO - SLIDER + GRADIENT OVERLAY */}
      <section className="relative flex flex-col items-center justify-center h-[80vh] text-center px-4 overflow-hidden">
        {/* Images */}
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
        {/* Gradasi: dongker ke putih */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(8,40,70,0.9) 0%, rgba(255,255,255,0.85) 100%)"
          }}
        />
        {/* Logo & Tagline */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Estetic Logo"
            className="h-28 md:h-40 w-auto mx-auto drop-shadow-xl"
            style={{
              filter: "drop-shadow(0 0 10px rgba(215, 185, 64, 0.35)) drop-shadow(0 0 40px #fff5)"
            }}
          />
          <h1 className="text-2xl md:text-4xl font-extrabold mt-6 mb-2 tracking-wider text-[#082846] drop-shadow-lg">
            Shaping Reputation & Building Trust<br className="hidden md:inline" />Through Generations
          </h1>
        </div>
        {/* Dots nav */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === heroIndex ? "bg-[#d7b940]" : "bg-white/50"} transition`}
              onClick={() => setHeroIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* ABOUT & COUNTER */}
      <section id="tentang" className="py-20 px-4 bg-white">
     <div className="max-w-3xl mx-auto text-center space-y-7">
            <CounterItem label={lang === "id" ? "Klien" : "Clients"} value={counts.client} />
            <CounterItem label={lang === "id" ? "Kegiatan PR" : "PR Activities"} value={counts.kegiatan} />
            <CounterItem label={lang === "id" ? "Jurnalis" : "Journalists"} value={counts.jurnalis} />
            <CounterItem label={lang === "id" ? "Publikasi Rilis" : "Press Releases"} value={counts.rilis} />
     <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#082846]">
      {lang === "id"
        ? "Karena Setiap Brand Punya Cerita"
        : "Because Every Brand Has a Story"}
    </h2>
    <p className="text-lg">
      {lang === "id"
        ? <>Di dunia yang penuh hiruk-pikuk, kami percaya setiap brand layak untuk didengar.
          <br />
          <span className="font-semibold">Sejak 1997</span>, Estetic Communication didorong oleh keyakinan bahwa cerita membangun reputasi—dan reputasi membangun warisan.</>
        : <>In a world full of noise, we believe every brand deserves to be heard.
          <br />
          <span className="font-semibold">Since 1997</span>, Estetic Communication has been driven by the belief that stories shape reputations—and reputations build legacies.</>
      }
    </p>
    <p className="text-lg">
      {lang === "id"
        ? "Kami memulai dari sebuah ruangan kecil di pojok, mendampingi brand melewati kemenangan sunyi maupun badai di depan publik. Kami belajar bahwa kepercayaan tidak dimenangkan dengan berteriak paling keras, tapi dengan mendengarkan, memahami, dan selalu hadir—berulang kali."
        : "We started from a small corner room, standing by brands through quiet victories and public storms. We’ve learned that trust isn’t won by shouting the loudest, but by listening, understanding, and showing up—again and again."
      }
    </p>
    <p className="text-lg">
      {lang === "id"
        ? <>Hari ini, teknologi dan pemberitaan terus berubah. Misi kami sederhana:<br />
            Membantu brand berkembang, bukan sekadar terlihat.<br />
            Membangun reputasi yang bertahan lama, bukan tren yang cepat berlalu.</>
        : <>Today, as technology shifts and headlines come and go, our mission is simple:<br />
            Help brands grow, not just get noticed.<br />
            Build reputations that last, not just trends that fade.</>
      }
    </p>
    <div className="mt-6">
      <span className="block text-xl font-bold text-[#d7b940]">
        {lang === "id" ? "Siap menceritakan kisahmu?" : "Ready to tell your story?"}
      </span>
      <span className="block text-lg mt-1">
        {lang === "id"
          ? "Mari ciptakan sesuatu yang tak terlupakan—bersama."
          : "Let’s create something unforgettable—together."}
      </span>
    </div>
  </div>
</section>


      {/* SUCCESS STORIES */}
      <section id="sukses" className="py-20 relative bg-[#f7f8fa]">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#082846]">
            {lang === 'id' ? 'Cerita Sukses' : 'Success Story'}
          </h2>
          <div className="relative rounded-3xl shadow-lg overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={successStories[activeIndex]?.year || 'default'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${successStories[activeIndex]?.bg || '/default.jpg'})`,
                  minHeight: 260, filter: "brightness(0.7)"
                }}
              />
            </AnimatePresence>
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-[260px] px-6">
              <motion.div
                key={successStories[activeIndex]?.year + "-text"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl space-y-2 p-4 rounded-xl bg-white/60 shadow-xl backdrop-blur"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-[#d7b940]">
                  {successStories[activeIndex]?.year}
                </h1>
                <h2 className="text-lg md:text-2xl font-semibold">
                  {lang === "id"
                    ? successStories[activeIndex]?.title.id
                    : successStories[activeIndex]?.title.en}
                </h2>
                <p className="text-base md:text-lg">
                  {lang === "id"
                    ? successStories[activeIndex]?.desc.id
                    : successStories[activeIndex]?.desc.en}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {successStories.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-[#d7b940]" : "bg-[#082846]/30"} transition`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" className="py-20 bg-white text-[#082846] text-center">
        <h3 className="text-3xl font-bold mb-10">{lang === "id" ? "Testimoni Klien" : "Client Testimonials"}</h3>
        <Testimonials lang={lang} />
      </section>

      {/* TEAM */}
      <section id="tim" className="py-16 bg-[#f7f8fa]">
        <h3 className="text-3xl font-bold mb-10 text-center text-[#082846]">{lang === "id" ? "Tim Kami" : "Our Team"}</h3>
        <OurTeams lang={lang} />
      </section>

      {/* SERVICES */}
      <section id="layanan" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10 text-[#082846]">{lang === "id" ? "Layanan Kami" : "Our Services"}</h3>
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
    {/* 6. Crisis Management*/}
<div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md text-left">
  <img src="/service-icons/crisis.png" alt="Crisis" className="h-16 mb-4" />
  <h4 className="text-xl font-bold mb-2">
    {lang === "id" ? "Manajemen Krisis" : "Crisis Management"}
  </h4>
  <ul className="list-disc pl-5 text-sm space-y-1">
    <li>{lang === "id" ? "Pemantauan" : "Monitoring"}</li>
    <li>{lang === "id" ? "Pemulihan Citra Negatif" : "Negative Image Recovery"}</li>
    <li>{lang === "id" ? "Manajemen Isu Sensitif" : "Sensitive Issue Management"}</li>
    <li>{lang === "id" ? "Strategi Reputasi Saat Krisis" : "Crisis-Time Reputation Strategy"}</li>
    <li>{lang === "id" ? "Protokol Komunikasi Darurat" : "Emergency Communication Protocols"}</li>
  </ul>
</div>
  </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#082846]">Our Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {clientData.map((category, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-h-[220px]">
                <h4 className="mb-4 text-lg font-bold text-[#082846]">{category.title}</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.logos.map((logo, idx) => (
                    <img key={idx} src={logo.src} alt={logo.alt} className="h-12 max-w-[96px] object-contain" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white py-20 px-4" id="kontak">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#082846]">{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</h2>
              <img src="/assets/hub.png" alt="Office" className="w-full h-auto " />
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-extrabold text-[#d7b940] drop-shadow-md leading-snug">
                Helping brands tell stories that people believe & remember, with an aesthetic way
              </p>
              <ContactInfo />
            </div>
            <ContactForm handleSubmit={handleSubmit} lang={lang} formStatus={formStatus} />
          </div>
          <div className="text-center mt-16">
            <p className="text-lg font-medium italic text-[#082846]">Let’s build your story together.</p>
            <div className="flex justify-center mt-6">
              <img src="/logo.png" alt="Estetic Logo" className="h-20 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
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
            <img src="/whatsapp.png" alt="Chat via WhatsApp" style={{ width: "105px", height: "105px" }} className="drop-shadow-lg rounded-full object-contain" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-[#082846] text-white text-center py-6 mt-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Estetic Communication. All rights reserved.</p>
      </footer>
    </div>
  );
}

// === Helper Components ===
function CounterItem({ label, value }) {
  return (
    <div>
      <h4 className="text-4xl font-bold text-[#d7b940] flex items-start justify-center">
        {value}<span className="ml-1 text-2xl align-top">+</span>
      </h4>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );
}
function ContactInfo() {
  return (
    <div className="space-y-6 text-base">
      <div className="flex items-start gap-4"><img src="/assets/phone.png" alt="Phone" className="w-6 h-6 mt-1" /><p>+62 812-1212-1212</p></div>
      <div className="flex items-start gap-4"><img src="/assets/email.png" alt="Email" className="w-6 h-6 mt-1" /><p>info@estetic.co.id</p></div>
      <div className="flex items-start gap-4"><img src="/assets/map.png" alt="Map" className="w-6 h-6 mt-1" /><p>Jl. Pelita Raya Blok P No. 5-6, Tangerang</p></div>
    </div>
  );
}
function ContactForm({ handleSubmit, lang, formStatus }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder={lang === 'id' ? 'Nama' : 'Name'} required className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
      <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
      <input type="text" name="subject" placeholder={lang === 'id' ? 'Subjek' : 'Subject'} required className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]" />
      <textarea name="message" placeholder={lang === 'id' ? 'Pesan' : 'Message'} rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded text-[#082846]"></textarea>
      <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />
      <button type="submit" className="bg-[#d7b940] text-[#082846] px-6 py-2 rounded font-bold w-full">
        {lang === 'id' ? 'Kirim Pesan' : 'Send Message'}
      </button>
      {formStatus === "success" && <p className="text-green-600 text-sm mt-2">{lang === "id" ? "Pesan berhasil dikirim!" : "Message sent successfully!"}</p>}
      {formStatus === "error" && <p className="text-red-600 text-sm mt-2">{lang === "id" ? "Gagal mengirim pesan. Silakan coba lagi." : "Failed to send message. Please try again."}</p>}
    </form>
  );
}
