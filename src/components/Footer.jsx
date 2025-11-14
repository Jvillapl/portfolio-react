function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Jose F. Villaplana. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Hecho con React + Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
