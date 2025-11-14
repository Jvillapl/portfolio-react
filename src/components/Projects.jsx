function ProjectCard({ title, tech, description, features, liveUrl, githubUrl, gradient }) {
  return (
    <article className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
      <div className={`aspect-video rounded-xl ${gradient} border border-slate-800 mb-2 flex items-center justify-center text-xs text-slate-400`}>
        Screenshot {title} (añadir imagen real aquí)
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-xs text-emerald-300 mb-1">{tech}</p>
        <p className="text-sm text-slate-300 mb-3">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-[11px] text-slate-200 mb-3">
        {features.map((feature, index) => (
          <span key={index} className="px-2.5 py-1 rounded-full bg-slate-800/80">
            {feature}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-xs">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-full bg-emerald-400 text-slate-950 font-medium hover:bg-emerald-300 transition"
        >
          Ver sitio
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-full border border-slate-600 hover:border-emerald-400 text-slate-200 transition"
        >
          Ver código (GitHub)
        </a>
      </div>
    </article>
  );
}

function Projects() {
  const projects = [
    {
      title: "Sistema de Reservas Online",
      tech: "React · Tailwind · Node/Express · Google Sheets",
      description: "Plataforma de reservas con control de aforo, calendario y confirmaciones, conectada a un backend en Node/Express que usa Google Sheets como base de datos rápida.",
      features: ["Reservas y aforo", "Integración Sheets", "SPA en React"],
      liveUrl: "https://lavacarr.netlify.app/",
      githubUrl: "#",
      gradient: "bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-slate-500/10"
    },
    {
      title: "Sitio de Medicina Interna – UCIMED",
      tech: "React · Tailwind · Publicación de artículos",
      description: "Plataforma informativa para estudiantes de Medicina Interna, donde se exponen artículos científicos y material académico organizado por temas.",
      features: ["Artículos científicos", "Diseño limpio", "Contenido educativo"],
      liveUrl: "https://med-inter.netlify.app/",
      githubUrl: "#",
      gradient: "bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-slate-500/10"
    }
  ];

  return (
    <section id="proyectos" className="mb-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-1">Proyectos destacados</h2>
          <p className="text-sm text-slate-300">
            Algunos de los sistemas y sitios que he construido recientemente.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        
        {/* Placeholder para futuros proyectos */}
        <article className="bg-slate-900/40 border border-dashed border-slate-700 rounded-2xl p-5 flex flex-col gap-3 justify-center text-center">
          <p className="text-sm text-slate-300">
            Más proyectos en camino…
          </p>
          <p className="text-xs text-slate-500">
            Puedo añadir nuevos sistemas, landing pages o ecommerce a medida que los vaya
            terminando.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
