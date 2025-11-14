function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400"></div>
          <span className="font-semibold text-sm sm:text-base tracking-tight">
            Jose F. Villaplana — Desarrollo Web
          </span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
          <a href="#proyectos" className="hover:text-emerald-400">Proyectos</a>
          <a href="#servicios" className="hover:text-emerald-400">Servicios</a>
          <a href="#sobre-mi" className="hover:text-emerald-400">Sobre mí</a>
          <a href="#contacto" className="hover:text-emerald-400">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="text-xs sm:text-sm font-medium px-3 py-2 rounded-full border border-emerald-400/60 hover:bg-emerald-400 hover:text-slate-950 transition"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}

export default Header;
