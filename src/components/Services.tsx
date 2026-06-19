export default function Services() {
  const services = [
    {
      title: "FUNCIONAL",
      imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "MUSCULACIÓN",
      imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "POWERLIFTING",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border">
      <div className="mb-12">
        <p className="font-mono text-brand-yellow text-xs tracking-widest uppercase mb-2">Qué hacemos</p>
        <h2 className="text-5xl md:text-7xl">NUESTROS SERVICIOS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden border border-brand-border bg-brand-surface border-t-0 border-l-0 border-r-0 border-b-0">
            <div className="absolute inset-0 border border-[#353535] z-20 pointer-events-none"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0 grayscale"
              style={{ backgroundImage: `url("${service.imageUrl}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/50 to-[#131313] z-10 opacity-90"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-8 z-20">
              <h3 className="text-3xl md:text-4xl text-white">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
