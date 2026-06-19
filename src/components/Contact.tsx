import { Share2, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contacto" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-brand-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Contact Info */}
          <div>
            <h2 className="text-5xl md:text-7xl mb-6">CONTACTANOS</h2>
            <p className="font-body text-brand-text-muted text-lg mb-16 max-w-md">
              ¿Listo para empezar? Dejanos tu mensaje y nos pondremos en contacto con vos para coordinar tu primera visita.
            </p>

            <div className="space-y-10">
              <div>
                <p className="font-mono text-brand-yellow text-xs tracking-widest uppercase mb-2">Email</p>
                <a href="mailto:info@teseogym.com" className="font-display text-2xl hover:text-brand-yellow transition-colors">
                  INFO@TESEOGYM.COM
                </a>
              </div>
              
              <div>
                <p className="font-mono text-brand-yellow text-xs tracking-widest uppercase mb-2">Teléfono</p>
                <a href="tel:+543414562751" className="font-display text-2xl hover:text-brand-yellow transition-colors">
                  +54 341 4562751
                </a>
              </div>

              <div>
                <p className="font-mono text-brand-yellow text-xs tracking-widest uppercase mb-2">Instagram</p>
                <a href="#" className="font-display text-2xl hover:text-brand-yellow transition-colors">
                  TESEO_GYM_ROSARIO
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="text-brand-text-muted hover:text-brand-yellow transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
                <button className="text-brand-text-muted hover:text-brand-yellow transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-[#1a1a1a] border border-[#353535] p-8 md:p-12">
            <form className="space-y-6 flex flex-col h-full">
              <div className="space-y-2">
                <label className="font-mono text-xs text-white uppercase tracking-widest">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-[#131313] border border-[#353535] text-white p-4 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-white uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-[#131313] border border-[#353535] text-white p-4 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>

              <div className="space-y-2 flex-grow">
                <label className="font-mono text-xs text-white uppercase tracking-widest">Mensaje</label>
                <textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  rows={4}
                  className="w-full bg-[#131313] border border-[#353535] text-white p-4 focus:outline-none focus:border-brand-yellow transition-colors resize-none h-full min-h-[120px]"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-brand-yellow text-black font-display text-xl uppercase p-4 hover:bg-white transition-colors mt-auto"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-[#353535] py-8 px-6 md:px-16 mt-12 bg-[#0e0e0e]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-2xl tracking-wide uppercase">
            TESEO GYM
          </div>
          
          <div className="flex gap-6 font-mono text-xs text-brand-text-muted hover:[&>a]:text-brand-yellow">
            <a href="#" className="transition-colors">Instagram</a>
            <a href="#" className="transition-colors">Facebook</a>
            <a href="#" className="transition-colors">WhatsApp</a>
            <a href="#" className="transition-colors">Location</a>
          </div>

          <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 TESEO GYM. ROSARIO, ARGENTINA.
          </div>
        </div>
      </footer>
    </>
  );
}
