import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "BÁSICO",
      price: "$XXXXXX",
      features: [
        "Acceso área musculación",
        "Horario limitado (8am - 4pm)",
        "Vestuarios"
      ],
      isPopular: false
    },
    {
      name: "PRO",
      price: "$XXXXXX",
      features: [
        "Acceso total 24/7",
        "Clases funcionales libres",
        "Rutina personalizada mensual",
        "Área Powerlifting"
      ],
      isPopular: true
    },
    {
      name: "ÉLITE",
      price: "$XXXXXX",
      features: [
        "Todo lo del plan PRO",
        "4 sesiones con Personal Trainer",
        "Seguimiento nutricional",
        "Merchandising exclusivo"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="planes" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border text-center">
      <h2 className="text-5xl md:text-7xl mb-4">PLANES Y MEMBRESÍAS</h2>
      <p className="font-body text-brand-text-muted text-lg mb-16">Sin contratos ocultos. Pura fuerza.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative bg-brand-surface border flex flex-col p-8 pt-12 min-h-[500px] ${
              plan.isPopular ? 'border-brand-yellow' : 'border-brand-border'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-black font-mono text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                Más Elegido
              </div>
            )}
            
            <h3 className="text-3xl mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl md:text-6xl font-display">{plan.price}</span>
              <span className="font-mono text-sm text-brand-text-muted">/mes</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3 font-body text-brand-text-muted text-sm">
                  <Check className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full font-display uppercase p-4 transition-colors ${
                plan.isPopular 
                  ? 'bg-brand-yellow text-black hover:bg-white' 
                  : 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
              }`}
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
