export default function ClientCategory({ title, logos }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
      <h3 className="text-xl font-semibold text-[#082846] mb-4 tracking-wide">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full place-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="max-h-12 w-auto object-contain transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
