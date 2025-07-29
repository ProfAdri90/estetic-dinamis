export default function ClientCategory({ title, logos }) {
  return (
    <div className="border-2 border-red-500 rounded-xl p-6 bg-white shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center text-black">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="max-h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
