function About() {
  return (
    <section id="sobre-mi" className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Sobre mí</h2>
      <div className="grid md:grid-cols-[3fr,2fr] gap-6 items-start text-sm text-slate-300">
        <p>
          Soy Jose F. Villaplana, desarrollador web con experiencia construyendo proyectos reales para reservas de
          negocios, sitios informativos y plataformas educativas. Me especializo en crear soluciones rápidas,
          funcionales y escalables usando <span className="font-semibold text-emerald-300">React, Tailwind CSS, Node/Express y Google Sheets</span> como backend ágil.
          <br /><br />
          Mi objetivo es ayudar a negocios y profesionales a tener presencia online efectiva, con sitios y sistemas
          que no solo se vean profesionales, sino que realmente cumplan su función: atraer clientes, gestionar reservas,
          informar y convertir visitantes en ventas.
        </p>
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
          <p className="text-xs font-medium text-slate-400 mb-3">Stack tecnológico</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">React</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Vite</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Node.js</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Express</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Google Sheets API</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Git/GitHub</span>
            <span className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">Netlify/Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
