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

    {typeof t.rating === "number" && t.rating > 0 && (
      <div className="flex justify-center mb-2 text-yellow-500">
        {Array.from({ length: t.rating }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
          >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.565 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)}

        </div>
      ))} {/* ← INI TUTUPAN .map */}
    </div>
  );
}
