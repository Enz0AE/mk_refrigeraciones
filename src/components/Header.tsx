import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-primary text-on-primary sticky top-0 w-full z-50 h-20 border-b border-outline-variant">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-margin-edge w-full h-full">
        <Link
          href="/"
          className="font-heading text-headline-mobile md:text-headline-lg font-bold tracking-tighter text-on-primary"
        >
          MK REFRIGERACIONES
        </Link>
        <div className="hidden md:flex gap-gutter-md items-center h-full">
          <Link
            href="/instalaciones"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Instalaciones
          </Link>
          <Link
            href="/equipos"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Equipos
          </Link>
        </div>
        <Link
          href="/cotizacion"
          className="hidden md:inline-flex bg-safety-orange text-white font-mono font-bold px-6 py-3 hover:brightness-110 active:scale-95 transition-all duration-100 border border-transparent text-technical"
        >
          SOLICITAR PRESUPUESTO
        </Link>
        <button className="md:hidden text-on-primary">
          <span className="material-symbols-outlined text-[32px]">menu</span>
        </button>
      </div>
    </nav>
  );
}
