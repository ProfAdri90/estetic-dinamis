export default function ClientCategory({ title, logos }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
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
