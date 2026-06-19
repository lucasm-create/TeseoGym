import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      {/* Gradient Overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#131313] via-[#131313]/90 to-transparent"></div>
      
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tight mb-4 flex flex-col items-start gap-2">
            <span className="text-white">DOMINÁ TU POTENCIAL</span>
            {/* The image shows a block highlight. */}
            <span className="text-brand-yellow">EN TESEO GYM</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-brand-text-muted mt-8 max-w-xl pl-4 border-l-2 border-brand-yellow">
            Entrenamiento de alto rendimiento en el corazón de Rosario.<br />
            Fuerza, disciplina y comunidad.
          </p>
          
          <button className="mt-12 group flex items-center gap-3 bg-brand-yellow text-black font-display text-xl uppercase px-8 py-4 hover:bg-white transition-all">
            Unite a la comunidad
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
