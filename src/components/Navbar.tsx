import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between bg-[#131313]/90 backdrop-blur-md border-b border-brand-border">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-display tracking-wide uppercase">
        TESEO GYM
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#c6c6c7]">
        <a href="#inicio" className="text-brand-yellow border-b-2 border-brand-yellow pb-1">Inicio</a>
        <a href="#servicios" className="hover:text-white transition-colors pb-1">Servicios</a>
        <a href="#planes" className="hover:text-white transition-colors pb-1">Planes</a>
        <a href="#contacto" className="hover:text-white transition-colors pb-1">Contacto</a>
      </div>

      {/* CTA Button */}
      <a href="#contacto" className="hidden md:block bg-brand-yellow text-black font-display px-6 py-2 uppercase hover:bg-white transition-colors text-sm">
        Empezá Hoy
      </a>
    </nav>
  );
}
