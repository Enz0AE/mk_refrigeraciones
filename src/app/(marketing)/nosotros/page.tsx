import Link from "next/link";

const timeline = [
  { year: "2004", event: "Fundación de MK Refrigeraciones en Garupá, Misiones" },
  { year: "2008", event: "Primera instalación industrial de gran escala" },
  { year: "2012", event: "Incorporación de línea de contenedores reefer" },
  { year: "2016", event: "Expansión a toda la región del NEA" },
  { year: "2020", event: "Certificación en sistemas de frío industrial" },
  { year: "2024", event: "20 años de trayectoria — Más de 500 proyectos ejecutados" },
];

const values = [
  { icon: "precision_manufacturing", title: "Precisión Técnica", desc: "Cada proyecto es diseñado y ejecutado con estándares de ingeniería de precisión." },
  { icon: "verified", title: "Calidad Garantizada", desc: "Utilizamos materiales certificados y componentes de primeras marcas." },
  { icon: "support_agent", title: "Acompañamiento", desc: "Soporte post-instalación continuo con guardia técnica 24/7." },
  { icon: "handshake", title: "Confianza", desc: "Relaciones de largo plazo basadas en transparencia y resultados." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge text-center">
          <h1 className="font-display text-display-lg mb-4">Sobre Nosotros</h1>
          <p className="font-body text-body-md text-surface-variant max-w-2xl mx-auto">
            20 años de experiencia en frío industrial, construyendo soluciones que mantienen la cadena de frío de la región.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-section-gap">
            <div>
              <h2 className="font-heading text-headline-lg text-primary mb-6">Nuestra Historia</h2>
              <p className="font-body text-body-md text-on-surface-variant mb-4">
                Fundada en 2004 en Garupá, Misiones, MK Refrigeraciones nació con la visión de proveer soluciones de frío industrial de alta calidad a la región del Noreste Argentino.
              </p>
              <p className="font-body text-body-md text-on-surface-variant mb-4">
                Desde entonces, hemos crecido hasta convertirnos en un referente regional en instalaciones frigoríficas, contenedores reefer y equipamiento comercial para la cadena de frío.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Con más de 500 proyectos ejecutados, nuestro equipo de ingenieros y técnicos especializados garantiza soluciones a medida para cada cliente.
              </p>
            </div>
            <div className="bg-surface-variant border border-outline-variant h-[400px] overflow-hidden">
              <img
                alt="Historia MK Refrigeraciones"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzN-bQppD639mrCGoCsJ5eJDaajpkzxGFHe2VQOjmnzmiZLqMJmMo-SRt5Svn7KncJa0Nrf_YWt8mYYxQReddi5G50vM4PDkGfxNODe8nxI9QpOVg9vI2c8Lgwk9Lfe9fiDEOwGbeKbIEyoeB8Ua5E2zseidzsWyYRMbsj00SySM8xAvB0K8w4McRjMbeGc9Qdyc436uroDLHXdm_9MS6VArFpccolYEdBlAsYidvDNgPfjlEinuR6hagMMvO0XM801YzEDowUVh0"
              />
            </div>
          </div>

          {/* Timeline */}
          <h2 className="font-heading text-headline-lg text-primary mb-8 text-center">Trayectoria</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <div className="font-heading text-headline-mobile text-primary">{t.event}</div>
                  </div>
                  <div className="relative z-10 w-8 h-8 bg-secondary rounded-full border-4 border-background shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="md:hidden font-heading text-headline-mobile text-primary mb-1">{t.event}</div>
                    <span className="font-mono text-technical text-secondary font-bold">{t.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low border-y border-outline-variant py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <h2 className="font-heading text-headline-lg text-primary mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-container-lowest border border-outline-variant p-6 text-center group hover:border-secondary transition-colors"
              >
                <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl text-on-primary-fixed-variant group-hover:text-white">{v.icon}</span>
                </div>
                <h3 className="font-heading text-headline-mobile text-primary mb-2">{v.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap text-center">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <h2 className="font-heading text-headline-lg text-primary mb-4">¿Hablamos de su Proyecto?</h2>
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
