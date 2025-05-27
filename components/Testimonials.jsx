import useTestimonials from "../lib/useTestimonials";

export default function Testimonials({ lang }) {
  const { testimonials, loading } = useTestimonials(lang);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      {testimonials.map((t, i) => (
        <div key={i} className="p-4 bg-white rounded shadow text-[#082846]">
          <p className="italic mb-2">"{t.content}"</p>
          <p className="font-bold">{t.name}</p>
          <p className="text-sm">{t.title}</p>
          {t.rating && (
            <div className="flex justify-center mt-2">
              {[...Array(t.rating)].map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          )}
        </div>
      ))} {/* ← INI TUTUPAN .map */}
    </div>
  );
}
