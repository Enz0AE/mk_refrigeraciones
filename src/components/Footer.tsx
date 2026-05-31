import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-section-gap border-t border-outline-variant" aria-label="Pie de página">
      <div className="max-w-[1280px] mx-auto px-margin-edge grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 font-heading text-headline-mobile md:text-headline-lg font-bold text-on-primary">
            <Image
              src="/Logo transparente refrigeracionesmk.svg"
              alt="Refrigeraciones MK"
              width={40}
              height={40}
              className="shrink-0"
            />
            REFRIGERACIONES MK
          </div>
          <p className="font-mono text-label-sm text-on-primary opacity-70 mt-auto pt-8">
            &copy; {new Date().getFullYear()} Refrigeraciones MK. Ruta 12, Garup&aacute;, Misiones. Excelencia en Fr&iacute;o Industrial.
          </p>
        </div>
        <nav className="md:col-span-1 flex flex-col gap-4" aria-label="Enlaces rápidos">
          <h4 className="font-mono text-label-sm uppercase tracking-wider text-outline">Secciones</h4>
          <Link className="font-body text-body-md text-on-primary opacity-70 hover:opacity-100 hover:text-secondary-fixed-dim transition-colors" href="/equipos">
            Equipos
          </Link>
          <Link className="font-body text-body-md text-on-primary opacity-70 hover:opacity-100 hover:text-secondary-fixed-dim transition-colors" href="/instalaciones">
            Instalaciones
          </Link>
          <Link className="font-body text-body-md text-on-primary opacity-70 hover:opacity-100 hover:text-secondary-fixed-dim transition-colors" href="/contacto">
            Contacto
          </Link>
        </nav>
        <div className="md:col-span-1 flex flex-col gap-4">
          <h4 className="font-mono text-label-sm uppercase tracking-wider text-outline">Contacto Directo</h4>
          <div className="bg-primary-container p-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-secondary-fixed-dim mb-2 block" aria-hidden="true">phone_in_talk</span>
            <p className="text-technical font-mono text-on-primary">Ventas y Asesoramiento</p>
            <p className="text-body-md font-bold mt-1 text-white" aria-label={process.env.NEXT_PUBLIC_PHONE_SALES || ""}>{process.env.NEXT_PUBLIC_PHONE_SALES}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
