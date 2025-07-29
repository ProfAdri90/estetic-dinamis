export default function ClientCategory({ title, logos }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full place-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
}
