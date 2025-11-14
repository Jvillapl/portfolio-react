function ServiceCard({ title, description, items }) {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-xs mb-3">{description}</p>
      <ul className="text-[11px] text-slate-300 space-y-1">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Sitios web a medida",
      description: "Sitios en HTML o React optimizados, responsive y listos para producción.",
      items: ["Landing pages", "Sitios informativos", "Portafolios y blogs"]
    },
    {
      title: "Sistemas y automatizaciones",
      description: "Integraciones con Google Sheets, Node/Express y APIs para negocios reales.",
      items: ["Sistemas de reservas", "Formularios avanzados", "Paneles simples"]
    },
    {
      title: "Ecommerce y catálogos",
      description: "Sitios y catálogos listos para conectar con Instagram, Facebook o tiendas online.",
      items: ["Catálogos de productos", "Integración redes sociales", "Optimización para ventas"]
    }
  ];

  return (
    <section id="servicios" className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Servicios</h2>
      <p className="text-sm text-slate-300 mb-6 max-w-2xl">
        Trabajo contigo para construir soluciones que no solo se vean bien, sino que realmente
        funcionen para tu negocio: reservas, ventas, información, contacto y más.
      </p>

      <div className="grid md:grid-cols-3 gap-5 text-sm">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
