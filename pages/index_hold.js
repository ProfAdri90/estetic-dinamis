import { useState } from "react";

export default function UnderConstruction() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bguc.svg')" }}
    >
      <div className="absolute inset-0 bg-[#082846]/80 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <img
          src="/logo.png"
          alt="Estetic Logo"
          className="h-20 md:h-28 mb-6 drop-shadow-xl mx-auto"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-[#d7b940] drop-shadow mb-4">
          Coming Soon
        </h1>

        <p className="text-white text-lg md:text-xl max-w-xl mx-auto mb-6 drop-shadow">
          Please contact us at{" "}
          <a
            href="mailto:info@estetic.co.id"
            className="underline text-[#d7b940] hover:opacity-80"
          >
            info@estetic.co.id
          </a>{" "}
          for further information.
        </p>
      </div>
    </div>
  );
}
