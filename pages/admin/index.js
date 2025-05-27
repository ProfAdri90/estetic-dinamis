// pages/admin/index.js
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Estetic Admin Dashboard</h1>
        <div className="space-y-4">
          <Link href="/admin/testimonies" className="block p-3 bg-blue-600 text-white rounded text-center hover:bg-blue-700">
            Kelola Testimoni
          </Link>
          <Link href="/admin/clients" className="block p-3 bg-green-600 text-white rounded text-center hover:bg-green-700">
            Kelola Klien
          </Link>
          <Link href="/admin/media" className="block p-3 bg-indigo-600 text-white rounded text-center hover:bg-indigo-700">
            Kelola Media Partner
          </Link>
          <Link href="/admin/portfolio" className="block p-3 bg-purple-600 text-white rounded text-center hover:bg-purple-700">
            Kelola Portofolio
          </Link>
          <button
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
            className="block w-full p-3 bg-red-600 text-white rounded text-center hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
