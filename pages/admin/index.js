// pages/admin/index.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  
  function StatBox({ label, count }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center border border-gray-200">
      <h2 className="text-2xl font-bold text-[#d7b940]">{count}</h2>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

  const [counts, setCounts] = useState({
  testimonies: 0,
  clients: 0,
  media: 0,
  portfolio: 0,
});

useEffect(() => {
  async function fetchCounts() {
    const testi = await supabase.from("Testimoni").select("*", { count: "exact", head: true });
    const client = await supabase.from("Clients").select("*", { count: "exact", head: true });
    const media = await supabase.from("MediaPartners").select("*", { count: "exact", head: true });
    const porto = await supabase.from("Portofolio").select("*", { count: "exact", head: true });

    setCounts({
      testimonies: testi.count || 0,
      clients: client.count || 0,
      media: media.count || 0,
      portfolio: porto.count || 0,
    });
  }

  if (isLoggedIn) fetchCounts();
}, [isLoggedIn]);


  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Estetic Admin</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/admin" className="text-blue-600 hover:underline">🏠 Dashboard</Link>
          <Link href="/admin/testimonies" className="hover:text-blue-600">🗣️ Kelola Testimoni</Link>
          <Link href="/admin/clients" className="hover:text-green-600">🏢 Kelola Klien</Link>
          <Link href="/admin/media" className="hover:text-indigo-600">📰 Media Partner</Link>
          <Link href="/admin/portfolio" className="hover:text-purple-600">📂 Portofolio</Link>
          <button
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
            className="mt-6 text-red-600 hover:underline text-left"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Selamat datang di Dashboard Admin</h1>
        <p className="text-gray-700">Silakan pilih menu di sidebar untuk mulai mengelola konten Estetic Communication.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
  {[
    { label: "Testimoni", value: counts.testimonies },
    { label: "Klien", value: counts.clients },
    { label: "Portofolio", value: counts.portfolio },
    { label: "Media Partner", value: counts.media },
  ].map((item, i) => (
    <div key={i} className="bg-white p-6 rounded shadow text-center">
      <p className="text-3xl font-bold text-[#d7b940]">{item.value}</p>
      <p className="text-sm text-gray-600 mt-1">{item.label}</p>
    </div>
  ))}
</div>


      </main>
    </div>
  );
}
