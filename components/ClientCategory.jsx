export default function ClientCategory({ title, logos }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
      <h3 className="text-lg font-bold mb-4 text-center text-[#082846] uppercase tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 object-contain max-w-[120px]"
          />
        ))}
      </div>
    </div>
  );
}
