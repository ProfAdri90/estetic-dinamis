import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminTestimonies() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("testimoni")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal ambil data:", error);
      } else {
        setTestimonials(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kelola Testimoni</h1>

      <div className="mb-4">
        <Link
          href="/admin/testimonies/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Tambah Testimoni
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {testimonials.map((t) => (
            <div key={t.id} className="p-4 border rounded bg-white shadow">
              <p className="italic mb-2">"{t.content}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-600 mb-2">{t.title}</p>

              {t.rating && (
                <div className="flex gap-1 mb-2 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              )}

              {/* Tombol edit & delete opsional */}
              {/* <div className="flex gap-2 mt-2">
                <Link
                  href={`/admin/testimonies/edit/${t.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Hapus
                </button>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
