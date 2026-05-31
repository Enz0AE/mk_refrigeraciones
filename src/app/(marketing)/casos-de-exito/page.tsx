import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito — Proyectos de Frío Industrial | Refrigeraciones MK",
  description:
    "Conozca nuestros proyectos realizados: Centro Logístico Frontera, Planta Procesadora Sur y Supermercados Mayoristas en Misiones.",
  openGraph: {
    title: "Casos de Éxito — Refrigeraciones MK",
    description:
      "Proyectos de instalaciones frigoríficas, túneles de congelado y exhibición comercial ejecutados en la región del NEA.",
  },
};

const cases = [
  {
    ref: "CLF-042",
    title: "Centro Logístico Frontera",
    location: "Posadas, Misiones",
    type: "Cámara de Congelados",
    temp: "-25°C",
    volume: "5.000 m³",
    desc: "Implementación de cámara de congelado para centro de distribución fronterizo. Paneles PIR de 150mm con central de frío multipropósito y sistema de monitoreo IoT.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0fqef8oxBOo5Mm7TM69Hi_DAmQcFZIM9LLnVn3UL-FVKnPHdmAtDVj4enCCqJexMbLB-PKAlye24Kw8di26q4_UvP9wTuAuZn3q9JOAit-Xpap_amhEAlGyeMnDyHJCPFgIBZW_mAtuPaVw3aMlyuCrtLkYAhcgVprKCZbq1NbsFGAcZjwgQftioVRDzCawMgn0-yuw7rULfYW-cBj2_3ZcLKOit5dOAiEOIRQOBu8rC1r8Km7h2W2FT8tYowdi9o2RgRncoRySM",
  },
  {
    ref: "PPS-021",
    title: "Planta Procesadora Sur",
    location: "Oberá, Misiones",
    type: "Túnel de Congelado Rápido",
    temp: "-35°C",
    volume: "800 m³",
    desc: "Túnel de congelado IQF para planta procesadora de alimentos. Sistema de refrigeración por amoníaco (NH3) con capacidad de 2.500 kg/hora.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwJp8VWNSZAzua6wSXKldM3vg9jBAF8Kv6fzHoRXPjQgs2G-EKjoMpbVF9li6EjlKU8wjT0PMxFgYPrs_norvOOCXF4bk8W1XCopQY4vVNyMt6znbLD-b_Jq0_yayGH_UF5KrHyRAZ6iQczi8A3-f9wTecFq9pDai3ydyoZafsDXrZnYwWCq33EeVXINcUYZ6-dwh65jsYRxyoo1Y1B_mZarkGAa1WMrd9lTMFWVQpajfPFQBpvXBQ6uNytpclkQUqcBPYb6WQg78",
  },
  {
    ref: "GMS-003",
    title: "Supermercados Mayoristas",
    location: "Garupá, Misiones",
    type: "Exhibición Comercial",
    temp: "2°C a 8°C",
    volume: "120 m lineales",
    desc: "Equipamiento completo de línea de exhibición para supermercado mayorista: bateas carniceras, exhibidores verticales de lácteos y góndolas refrigeradas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPr04QuopphuDHaJtJtfMLZJqT8q6MNKsz1Kq92iPyupeeAiwExMd648qNTm6jjHBsJ5pxtDPP9yNltH_RolTb2u7i9WZEnkDLe6dUm0dMzxNtMTpslbJtd9ejb_pR6QkQxEYzHGnh_pKtBf7Fqgx0c3UtYqmsDym-bH_t7SDsTl4YipzmhSSQrJe-rgUkaRD-txVTf_Dd8U7ZnVPdTfZUNTGl1QEJZN4QwI_aTim-WeeC27156tzAc5Y1GzeJaShGhurZ9vhdgaU",
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge text-center">
          <h1 className="font-display text-display-lg mb-4">Casos de Éxito</h1>
          <p className="font-body text-body-md text-surface-variant max-w-2xl mx-auto">
            Conozca algunos de los proyectos que hemos desarrollado para nuestros clientes en la región.
          </p>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge flex flex-col gap-12">
          {cases.map((c, i) => (
            <div
              key={c.ref}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface-container-lowest border border-outline-variant ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-80 lg:h-full min-h-[300px] overflow-hidden bg-surface-variant">
                  <Image
                    alt={c.title}
                    src={c.image}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={`lg:col-span-5 p-6 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-mono text-label-sm text-secondary font-bold uppercase tracking-wider mb-2">
                  {c.ref}
                </span>
                <h2 className="font-heading text-headline-lg text-primary mb-4">{c.title}</h2>
                <div className="grid grid-cols-2 gap-4 font-mono text-technical text-on-surface-variant mb-6">
                  <div>
                    <span className="block text-label-sm uppercase text-outline">Ubicación</span>
                    {c.location}
                  </div>
                  <div>
                    <span className="block text-label-sm uppercase text-outline">Tipo</span>
                    {c.type}
                  </div>
                  <div>
                    <span className="block text-label-sm uppercase text-outline">Temperatura</span>
                    {c.temp}
                  </div>
                  <div>
                    <span className="block text-label-sm uppercase text-outline">Capacidad</span>
                    {c.volume}
                  </div>
                </div>
                <p className="font-body text-body-md text-on-surface-variant">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low border-y border-outline-variant py-section-gap text-center">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <h2 className="font-heading text-headline-lg text-primary mb-4">¿Proyecto Similar?</h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
            Contáctenos para discutir su proyecto. Tenemos la experiencia y capacidad para ejecutarlo.
          </p>
          <Link
            href="/cotizacion"
            className="inline-block bg-safety-orange text-white font-mono font-bold px-8 py-4 hover:brightness-110 transition-colors text-technical"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </>
  );
}
