import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-section-gap border-t border-outline-variant" aria-label="Pie de página">
      <div className="max-w-[1280px] mx-auto px-margin-edge grid grid-cols-1 md:grid-cols-4 gap-gutter-md">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="font-heading text-headline-mobile md:text-headline-lg font-bold text-on-primary">
            MK REFRIGERACIONES
          </div>
          <p className="font-mono text-label-sm text-on-primary opacity-70 mt-auto pt-8">
            &copy; {new Date().getFullYear()} MK Refrigeraciones. Ruta 12, Garup&aacute;, Misiones. Excelencia en Fr&iacute;o Industrial.
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
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-mono text-label-sm uppercase tracking-wider text-outline">Contacto Directo</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary-container p-4 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary-fixed-dim mb-2 block" aria-hidden="true">phone_in_talk</span>
              <p className="text-technical font-mono text-on-primary">Ventas y Asesoramiento</p>
              <p className="text-body-md font-bold mt-1 text-white" aria-label={process.env.NEXT_PUBLIC_PHONE_SALES || ""}>{process.env.NEXT_PUBLIC_PHONE_SALES}</p>
            </div>
            <div className="bg-primary-container p-4 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary-fixed-dim mb-2 block" aria-hidden="true">build</span>
              <p className="text-technical font-mono text-on-primary">Guardia Técnica</p>
              <p className="text-body-md font-bold mt-1 text-white" aria-label={process.env.NEXT_PUBLIC_PHONE_TECH || ""}>{process.env.NEXT_PUBLIC_PHONE_TECH}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
