import { useState } from "react";
import Link from "next/link";

export default function Custom404() {
  const [lang, setLang] = useState("id");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#082846] text-white px-6 text-center">
      <img src="/logo.png" alt="Estetic Logo" className="h-16 mb-6" />
      <h1 className="text-5xl font-bold text-[#d7b940] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        {lang === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
      </h2>
      <p className="text-lg mb-6 max-w-xl">
        {lang === "id"
          ? "Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan."
          : "Sorry, the page you are looking for doesn't exist or has been moved."}
      </p>
      <Link href="/">
        <a className="bg-[#d7b940] text-[#082846] px-6 py-3 rounded font-bold hover:brightness-110 transition">
          {lang === "id" ? "Kembali ke Beranda" : "Back to Home"}
        </a>
      </Link>
    </div>
  );
}
