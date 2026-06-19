import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl mb-6 leading-[0.9]">
            EN EL CENTRO DE LA<br />
            ACCIÓN
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mb-8"></div>
          
          <p className="font-body text-brand-text-muted text-lg mb-12 leading-relaxed">
            Ubicados estratégicamente en Rosario, Santa Fe.<br />
            Instalaciones de nivel internacional preparadas para recibir a los atletas más exigentes de la región.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
              <div>
                <h4 className="font-mono text-xs text-brand-yellow tracking-widest uppercase mb-1">Dirección</h4>
                <p className="font-body text-brand-text-muted">Perú 1658, Rosario, Santa Fe, Argentina</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
              <div>
                <h4 className="font-mono text-xs text-brand-yellow tracking-widest uppercase mb-1">Horarios</h4>
                <div className="font-body text-brand-text-muted space-y-1">
                  <p>Lunes a Viernes: 6:00 - 23:00</p>
                  <p>Sábados: 8:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[9/16] bg-[#1a1a1a] border border-[#353535] overflow-hidden flex items-center justify-center p-4">
             {/* Simple visual map placeholder using an image mimicking a dark mode google map */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 opacity-40 grayscale"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")' }}
            ></div>
             {/* Map marker */}
             <div className="relative z-10 animate-bounce">
                <MapPin className="w-12 h-12 text-brand-yellow" fill="#131313" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
