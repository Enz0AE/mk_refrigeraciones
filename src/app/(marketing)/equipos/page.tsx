import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";

export const metadata: Metadata = {
  title: "Equipos Frigoríficos — Contenedores Reefer y Exhibidores | MK Refrigeraciones",
  description:
    "Catálogo de equipos de frío industrial: contenedores reefer 3/6/12 m, exhibidores verticales, bateas carniceras y unidades evaporadoras.",
  openGraph: {
    title: "Equipos Frigoríficos Industriales — MK Refrigeraciones",
    description:
      "Soluciones modulares, contenedores reefer y sistemas de exhibición comercial para mantener la cadena de frío con precisión técnica.",
  },
};

interface Equipo {
  id: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  especificaciones: { clave: string; valor: string }[];
  imagen: string;
  orden: number;
}

const TIPO_META: Record<string, { title: string; desc: string }> = {
  contenedores: {
    title: "Contenedores Reefer",
    desc: "Soluciones modulares portátiles (3, 6 y 12 m).",
  },
  comercial: {
    title: "Línea Comercial: Exhibición y Bateas",
    desc: "Sistemas diseñados para la venta directa al público, combinando estética impecable con rendimiento térmico superior.",
  },
  evaporadores: {
    title: "Unidades Evaporadoras",
    desc: "Sistemas de intercambio térmico de alta eficiencia para cámaras frigoríficas industriales.",
  },
};

const TIPO_SECTION_BG: Record<string, string> = {
  contenedores: "bg-white",
  comercial: "bg-surface-container-low border-y border-outline-variant",
  evaporadores: "bg-white",
};

async function getEquipos() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("equipos")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data as Equipo[]) || [];
}

function groupByTipo(equipos: Equipo[]): Record<string, Equipo[]> {
  return equipos.reduce<Record<string, Equipo[]>>((acc, eq) => {
    (acc[eq.tipo] ??= []).push(eq);
    return acc;
  }, {});
}

export default async function EquiposPage() {
  const equipos = await getEquipos();
  const grouped = groupByTipo(equipos);

  return (
    <>
      {/* Hero */}
      <section className="w-full py-section-gap px-margin-edge bg-surface-container-low border-b border-outline-variant relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-surface-tint/10 text-primary-container font-mono text-label-sm uppercase tracking-widest mb-6 border border-outline-variant">
            Catálogo Industrial 2024
          </span>
          <h1 className="font-display text-display-lg md:text-[64px] md:leading-[72px] text-primary-container mb-6 max-w-4xl mx-auto">
            Soluciones Frigoríficas de Alta Capacidad
          </h1>
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg">
            Equipamiento modular, contenedores reefer y sistemas de exhibición
            comercial diseñados para mantener la cadena de frío con precisión
            técnica absoluta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contenedores"
              className="w-full sm:w-auto px-8 py-4 bg-primary-container text-white font-mono font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 text-technical"
            >
              <span>Ver Contenedores</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </Link>
            <Link
              href="#comercial"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary-container text-primary-container font-mono font-bold hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 text-technical"
            >
              <span>Línea Comercial</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {Object.entries(grouped).map(([tipo, items]) => {
        const meta = TIPO_META[tipo];
        const bgClass = TIPO_SECTION_BG[tipo] || "bg-white";
        const sectionId = tipo;

        if (items.length === 0) return null;

        return (
          <section
            key={tipo}
            className={`w-full py-section-gap px-margin-edge ${bgClass}`}
            id={sectionId}
          >
            <div className="max-w-[1280px] mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="font-heading text-headline-lg text-primary-container mb-2">
                    {meta?.title || tipo}
                  </h2>
                  <p className="font-body text-body-md text-on-surface-variant">
                    {meta?.desc || ""}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-md">
                {items.map((eq) => (
                  <div
                    key={eq.id}
                    className="bg-white border border-outline-variant flex flex-col h-full group hover:shadow-[0_4px_20px_-4px_rgba(10,37,64,0.1)] transition-shadow duration-300"
                  >
                    {eq.imagen ? (
                      <div className="relative w-full h-64 overflow-hidden border-b border-outline-variant bg-surface-variant">
                        <Image
                          alt={eq.nombre}
                          src={eq.imagen}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-64 overflow-hidden border-b border-outline-variant bg-surface-container-low flex items-center justify-center">
                        <span className="material-symbols-outlined text-[64px] text-outline">ac_unit</span>
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-[22px] text-primary-container mb-2">
                        {eq.nombre}
                      </h3>
                      {eq.descripcion && (
                        <p className="text-on-surface-variant text-sm mb-4 flex-1">
                          {eq.descripcion}
                        </p>
                      )}
                      {eq.especificaciones &&
                        eq.especificaciones.length > 0 && (
                          <div className="space-y-2 font-mono text-[13px] text-primary-container mb-6">
                            {eq.especificaciones.map((spec, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 border-b border-surface-variant pb-1"
                              >
                                <span className="material-symbols-outlined text-[16px] text-outline">
                                  check_small
                                </span>
                                <span className="font-medium">{spec.clave}:</span>
                                <span>{spec.valor}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      <Link
                        href="/cotizacion"
                        prefetch={false}
                        className="block w-full py-3 bg-primary text-white font-mono font-bold hover:bg-primary-container transition-colors uppercase text-technical text-center mt-auto"
                      >
                        Cotizar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Modalidades de Adquisición (static) */}
      <section className="w-full py-section-gap px-margin-edge bg-white border-t border-outline-variant">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-md">
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant p-8 md:p-10 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
            <h2 className="font-heading text-headline-lg text-primary-container mb-6">
              Unidades Evaporadoras
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mb-8 max-w-lg">
              Sistemas de intercambio térmico de alta eficiencia para cámaras
              frigoríficas industriales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">
                  Capacidad Frigorífica
                </span>
                <span className="font-bold text-primary-container block">
                  Desde 2.5 kW hasta 80 kW
                </span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">
                  Paso de Aleta
                </span>
                <span className="font-bold text-primary-container block">
                  4.5mm / 6.0mm / 9.0mm
                </span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">
                  Descongelamiento
                </span>
                <span className="font-bold text-primary-container block">
                  Eléctrico / Gas Caliente
                </span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">
                  Carcasa
                </span>
                <span className="font-bold text-primary-container block">
                  Aluminio Magnesio Pinta blanca
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary-container text-white p-8 md:p-10 flex-1 flex flex-col justify-center">
              <h3 className="font-heading text-[28px] mb-8">
                Modalidades de Adquisición
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-safety-orange transition-colors duration-300">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">
                      Venta Directa
                    </h4>
                    <p className="text-white/70 text-sm font-body">
                      Equipos nuevos y reacondicionados con garantía de 12 meses
                      y servicio técnico prioritario.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-secondary-fixed-dim group-hover:text-primary-container transition-colors duration-300">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">
                      Alquiler Mensual
                    </h4>
                    <p className="text-white/70 text-sm font-body">
                      Ideal para picos de producción o eventos. Mantenimiento
                      preventivo incluido en la cuota.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors duration-300">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">
                      Leasing Operativo
                    </h4>
                    <p className="text-white/70 text-sm font-body">
                      Renovación tecnológica constante. Cuotas deducibles de
                      impuestos con opción a compra.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contacto"
                className="mt-10 w-full py-4 bg-safety-orange text-white font-mono font-bold hover:brightness-110 transition-colors uppercase tracking-wider text-technical block text-center"
              >
                Consultar Opciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
