// pages/admin/index.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient"; // ⬅️ jangan lupa ini

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const [counts, setCounts] = useState({
    testimonies: 0,
    clients: 0,
    media: 0,
    portfolio: 0,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }

    async function fetchCounts() {
      const { count: testiCount } = await supabase
        .from("Testimoni")
        .select("*", { count: "exact", head: true });

      const { count: clientCount } = await supabase
        .from("Clients")
        .select("*", { count: "exact", head: true });

      const { count: mediaCount } = await supabase
        .from("MediaPartners")
        .select("*", { count: "exact", head: true });

      const { count: portoCount } = await supabase
        .from("Portofolio")
        .select("*", { count: "exact", head: true });

      setCounts({
        testimonies: testiCount || 0,
        clients: clientCount || 0,
        media: mediaCount || 0,
        portfolio: portoCount || 0,
      });
    }

    fetchCounts();
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen flex bg-gray-100">
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

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Selamat datang di Dashboard Admin</h1>
        <p className="text-gray-700 mb-6">Silakan pilih menu di sidebar untuk mulai mengelola konten Estetic Communication.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

