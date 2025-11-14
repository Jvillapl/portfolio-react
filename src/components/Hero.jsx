function Hero() {
  return (
    <section className="grid lg:grid-cols-[3fr,2fr] gap-10 items-center mb-16">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">
          Desarrollo Web Profesional
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
          Soy Jose F. Villaplana, construyo sitios web modernos, rápidos y listos para vender.
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
          Desarrollo soluciones a medida con <span className="font-semibold text-emerald-300">React, Tailwind, Node/Express y Google Sheets</span>.
          Desde sistemas de reservas hasta sitios informativos, enfocados en negocios reales.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="#proyectos"
            className="px-5 py-2.5 rounded-full bg-emerald-400 text-slate-950 text-sm font-semibold hover:bg-emerald-300 transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-full border border-slate-600 text-sm hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            Cotizar un sitio
          </a>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-slate-700">React</span>
          <span className="px-3 py-1 rounded-full border border-slate-700">Tailwind CSS</span>
          <span className="px-3 py-1 rounded-full border border-slate-700">Node / Express</span>
          <span className="px-3 py-1 rounded-full border border-slate-700">Google Sheets / APIs</span>
        </div>
      </div>

      {/* Highlight card */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
        <div>
          <p className="text-xs font-medium text-slate-400 mb-1">Último proyecto</p>
          <p className="text-sm font-semibold">Sistema de Reservas Online con control de aforo</p>
          <p className="text-xs text-slate-400 mt-1">
            Frontend en React/Tailwind + backend Node/Express conectado a Google Sheets.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="bg-slate-800/70 rounded-xl p-3">
            <p className="font-semibold text-emerald-300">+100</p>
            <p className="text-slate-400 text-[11px]">Reservas gestionadas</p>
          </div>
          <div className="bg-slate-800/70 rounded-xl p-3">
            <p className="font-semibold text-emerald-300">100%</p>
            <p className="text-slate-400 text-[11px]">Responsive</p>
          </div>
          <div className="bg-slate-800/70 rounded-xl p-3">
            <p className="font-semibold text-emerald-300">Integrado</p>
            <p className="text-slate-400 text-[11px]">Google Sheets</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
