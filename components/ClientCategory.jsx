// components/ClientCategory.jsx
import clientData from "../data/clientData";

export default function ClientCategory({ title, logos }) {
  return (
    <section className="mb-12">
      <h3 className="text-lg md:text-xl font-bold uppercase text-[#082846] text-center mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
