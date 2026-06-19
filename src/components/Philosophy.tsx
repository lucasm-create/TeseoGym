import { Dumbbell, Users } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border mt-12 relative">
      <div className="absolute right-0 top-0 bottom-0 select-none overflow-hidden -z-10 opacity-5 flex items-center pointer-events-none">
        <span className="font-display text-[20vw] leading-none whitespace-nowrap rotate-90 origin-right translate-x-1/2 text-white">FUERZA</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side */}
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl mb-6">NUESTRA FILOSOFÍA</h2>
          <div className="w-16 h-1 bg-brand-yellow mb-8"></div>
          <div className="space-y-6 font-body text-brand-text-muted text-lg">
            <p>
              No somos un gimnasio comercial. Somos un centro de alto rendimiento diseñado para quienes buscan superar sus límites. Aquí no hay espejos para selfies, solo hierro, sudor y resultados.
            </p>
            <p>
              La disciplina forja el carácter. El poder se construye repetición a repetición.
            </p>
          </div>
        </div>

        {/* Right Side - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Feature 1 */}
          <div className="bg-brand-surface border border-brand-border p-8 min-h-[280px] flex flex-col">
            <Dumbbell className="w-10 h-10 text-brand-yellow mb-8" />
            <h3 className="text-3xl mb-4 mt-auto">EQUIPAMIENTO<br />PRO</h3>
            <p className="font-body text-brand-text-muted text-sm leading-relaxed">
              Barras olímpicas y discos de calibración profesional.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-brand-surface border border-brand-border p-8 min-h-[280px] flex flex-col">
            <Users className="w-10 h-10 text-brand-yellow mb-8" />
            <h3 className="text-3xl mb-4 mt-auto">COMUNIDAD</h3>
            <p className="font-body text-brand-text-muted text-sm leading-relaxed">
              Entrená rodeado de personas con tus mismos objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
