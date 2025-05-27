// pages/admin/index.js
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/admin/login");
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
      </main>
    </div>
  );
}
