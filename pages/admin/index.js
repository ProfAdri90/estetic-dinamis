// pages/admin/index.js
import Link from "next/link";
import { useEffect } from "react";
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
    testimoni: 0,
    clients: 0,
    portofolio: 0,
    mediapartners: 0,
  });

  useEffect(() => {
    if (!isLoggedIn) router.push("/admin/login");

    async function fetchData() {
      const t = await supabase.from("Testimoni").select("*");
      const c = await supabase.from("clients").select("*");
      const p = await supabase.from("portofolio").select("*");
      const m = await supabase.from("mediapartners").select("*");

      setCounts({
        testimoni: t.data?.length || 0,
        clients: c.data?.length || 0,
        portofolio: p.data?.length || 0,
        mediapartners: m.data?.length || 0,
      });
    }

    if (isLoggedIn) fetchData();
  }, [isLoggedIn, router]);

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
  <StatBox label="Testimoni" count={counts.testimoni} />
  <StatBox label="Klien" count={counts.clients} />
  <StatBox label="Portofolio" count={counts.portofolio} />
  <StatBox label="Media Partner" count={counts.mediapartners} />
</div>

      </main>
    </div>
  );
}
