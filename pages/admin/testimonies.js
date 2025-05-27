// pages/admin/testimonies.js
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function TestimoniAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    title: "",
    content: "",
    lang: "id",
    rating: 5,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    setLoading(true);
    const { data, error } = await supabase
      .from("Testimoni")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Fetch error:", error);
    else setTestimonials(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("Testimoni").insert([form]);
    if (error) return alert("Gagal menyimpan testimoni.");
    setForm({ name: "", title: "", content: "", lang: "id", rating: 5 });
    setShowForm(false);
    fetchTestimonials();
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Kelola Testimoni</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + Tambah Testimoni
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded">
          <div>
            <label className="block">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border w-full px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block">Jabatan</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border w-full px-2 py-1 rounded"
            />
          </div>
          <div>
            <label className="block">Isi Testimoni</label>
            <textarea
              name="content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="border w-full px-2 py-1 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block">Bahasa</label>
            <select
              value={form.lang}
              onChange={(e) => setForm({ ...form, lang: e.target.value })}
              className="border px-2 py-1 rounded"
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
          <div>
            <label className="block">Rating (1–5)</label>
            <input
              type="number"
              min={1}
              max={5}
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
              className="border px-2 py-1 rounded"
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Simpan
          </button>
        </form>
      )}

      <div className="mt-10 space-y-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          testimonials.map((t) => (
            <div
              key={t.id}
              className="p-4 border-l-4 border-yellow-500 bg-white shadow rounded"
            >
              <p className="italic mb-2">"{t.content}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.title}</p>
              <div className="flex text-yellow-500">
                {Array.from({ length: t.rating || 0 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.811l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.988 2.135c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.571-.38-1.811.588-1.811h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
