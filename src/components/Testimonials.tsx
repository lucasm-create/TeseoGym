import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "El mejor gimnasio de Rosario para entrenar pesado. El equipamiento es de primera y el ambiente te motiva a dar el 100% cada día.",
      name: "MARCOS RODRÍGUEZ",
      role: "Local Guide • Google Maps"
    },
    {
      text: "Excelente lugar para Powerlifting. Tienen racks de competición y barras de calidad. No hay otro lugar igual en la zona.",
      name: "LUCÍA FERNÁNDEZ",
      role: "Google Maps Review"
    },
    {
      text: "Comunidad increíble. Los profes saben mucho y te ayudan a corregir la técnica constantemente. Muy recomendable.",
      name: "JAVIER GÓMEZ",
      role: "Google Maps Review"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border">
      <div className="mb-12">
        <p className="font-mono text-brand-yellow text-xs tracking-widest uppercase mb-2">Testimonios</p>
        <h2 className="text-5xl md:text-7xl">LO QUE DICE NUESTRA TRIBU</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#1a1a1a] border border-[#353535] p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow" fill="#E2FF00" />
                ))}
              </div>
              <p className="font-body italic text-brand-text-muted text-base leading-relaxed">
                "{review.text}"
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-display tracking-wide uppercase text-lg">{review.name}</h4>
              <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mt-1">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
