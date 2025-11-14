function Contact() {
  return (
    <section id="contacto" className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contacto</h2>
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 max-w-2xl">
        <p className="text-sm text-slate-300 mb-6">
          ¿Tienes un proyecto en mente o necesitas un sitio web para tu negocio? Escríbeme y conversemos
          sobre cómo puedo ayudarte. Respondo rápido y siempre busco la mejor solución para cada caso.
        </p>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
              <span className="text-emerald-400">📧</span>
            </div>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <a href="mailto:tu-email@ejemplo.com" className="text-emerald-300 hover:text-emerald-200 transition">
                tu-email@ejemplo.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
              <span className="text-emerald-400">💼</span>
            </div>
            <div>
              <p className="text-xs text-slate-400">LinkedIn</p>
              <a 
                href="https://linkedin.com/in/tu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                linkedin.com/in/tu-perfil
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
              <span className="text-emerald-400">🐙</span>
            </div>
            <div>
              <p className="text-xs text-slate-400">GitHub</p>
              <a 
                href="https://github.com/tu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 transition"
              >
                github.com/tu-usuario
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <a
            href="mailto:tu-email@ejemplo.com"
            className="inline-block px-6 py-3 rounded-full bg-emerald-400 text-slate-950 text-sm font-semibold hover:bg-emerald-300 transition"
          >
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
