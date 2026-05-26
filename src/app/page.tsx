import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-primary border-b border-outline-variant overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzN-bQppD639mrCGoCsJ5eJDaajpkzxGFHe2VQOjmnzmiZLqMJmMo-SRt5Svn7KncJa0Nrf_YWt8mYYxQReddi5G50vM4PDkGfxNODe8nxI9QpOVg9vI2c8Lgwk9Lfe9fiDEOwGbeKbIEyoeB8Ua5E2zseidzsWyYRMbsj00SySM8xAvB0K8w4McRjMbeGc9Qdyc436uroDLHXdm_9MS6VArFpccolYEdBlAsYidvDNgPfjlEinuR6hagMMvO0XM801YzEDowUVh0')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-margin-edge w-full grid grid-cols-1 md:grid-cols-12 gap-gutter-md py-section-gap">
          <div className="md:col-span-8 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 bg-primary-container border border-outline-variant px-4 py-2">
              <span className="w-2 h-2 bg-secondary-fixed-dim rounded-full animate-pulse" />
              <span className="font-mono text-label-sm text-secondary-fixed-dim uppercase tracking-wider">
                Soluciones de Alta Capacidad
              </span>
            </div>
            <h1 className="font-display text-display-lg text-white max-w-3xl">
              Expertos en Frío Industrial con 20 a&ntilde;os de trayectoria
            </h1>
            <p className="font-body text-body-md text-surface-variant max-w-2xl text-lg">
              Dise&ntilde;o, montaje y mantenimiento de infraestructuras frigor&iacute;ficas modulares. Aseguramos la integridad de su cadena de fr&iacute;o con tecnolog&iacute;a de punta y est&aacute;ndares internacionales.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/cotizacion"
                className="bg-safety-orange text-white font-mono font-bold px-8 py-4 flex items-center gap-2 border border-transparent shadow-[4px_4px_0px_0px_rgba(10,37,64,0.3)] hover:brightness-110 transition-all text-technical"
              >
                <span className="material-symbols-outlined">chat</span>
                Cotizar por WhatsApp
              </Link>
              <Link
                href="/equipos"
                className="bg-transparent border border-outline-variant text-white font-mono font-bold px-8 py-4 flex items-center gap-2 hover:bg-surface-variant/10 transition-colors text-technical"
              >
                Ver Soluciones
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-outline-variant bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-margin-edge py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="flex items-center gap-4 md:px-4">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed-variant">verified</span>
              </div>
              <div>
                <h3 className="font-heading text-headline-mobile text-on-surface text-lg">Garant&iacute;a de trabajo</h3>
                <p className="font-body text-body-md text-on-surface-variant text-sm mt-1">Soporte post-instalaci&oacute;n continuo.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed-variant">support_agent</span>
              </div>
              <div>
                <h3 className="font-heading text-headline-mobile text-on-surface text-lg">Atenci&oacute;n personalizada</h3>
                <p className="font-body text-body-md text-on-surface-variant text-sm mt-1">Asesoramiento t&eacute;cnico especializado.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed-variant">precision_manufacturing</span>
              </div>
              <div>
                <h3 className="font-heading text-headline-mobile text-on-surface text-lg">Materiales de primera</h3>
                <p className="font-body text-body-md text-on-surface-variant text-sm mt-1">Componentes certificados y duraderos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-section-gap bg-background" id="servicios">
        <div className="max-w-[1280px] mx-auto px-margin-edge w-full">
          <div className="flex flex-col items-start gap-4 mb-16">
            <h2 className="font-heading text-headline-lg text-on-surface md:text-display-lg md:font-display">
              Soluciones Modulares
            </h2>
            <p className="font-body text-body-md text-on-surface-variant max-w-3xl">
              Desarrollamos infraestructuras adaptadas a las exigencias t&eacute;rmicas de su industria, garantizando eficiencia energ&eacute;tica y control absoluto.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-md">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest border border-outline-variant flex flex-col hover:border-secondary transition-colors">
              <div className="relative h-64 overflow-hidden bg-surface-variant border-b border-outline-variant">
                <img
                  alt="Cámara frigorífica industrial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFemx7OsdtB3Bt0WXTExXBp9Nc5WOdvlovAbEVDthmX7i-4EYMMTVBYSp5qlV1QvhH3_ZE9otuOOA0GC4DXmkTs4KBskxKx1p22GFUxMtvoX6TblFK8T1D4bD-3en9CaIibXzmk8agbe8GbMgxTlo3KXz3xoTmKU9Ko__clBvc2SgxwVQaqi6T4uKmyhG9vDPBwI8G1-7Z8a9mFTKNQQz6SxG5anYUMYCmtWqsdwoiKqMxEZvZvwaaNsEGLvOvyriFlQgUqJuUais"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="font-heading text-headline-mobile text-on-surface">Instalaciones Frigor&iacute;ficas</h3>
                <div className="text-technical font-mono text-on-surface-variant grid grid-cols-2 gap-2 bg-surface-container-low p-4 border border-outline-variant/50">
                  <div><span className="block text-outline text-xs uppercase mb-1">Rango Temp.</span>-30&deg;C a +15&deg;C</div>
                  <div><span className="block text-outline text-xs uppercase mb-1">Volumen</span>A medida</div>
                </div>
                <p className="font-body text-body-md text-on-surface-variant mt-2 flex-1">
                  Montaje de c&aacute;maras frigor&iacute;ficas de paneles poliuretano inyectado para congelados y refrigerados.
                </p>
                <Link
                  href="/instalaciones"
                  className="mt-4 font-mono text-technical text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver Detalles T&eacute;cnicos <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group bg-primary text-on-primary border border-primary-container flex flex-col">
              <div className="relative h-64 overflow-hidden bg-primary-container border-b border-primary-container">
                <img
                  alt="Contenedor reefer industrial"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity hover:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis"
                />
                <div className="absolute top-4 right-4 bg-safety-orange text-white font-mono text-[10px] px-2 py-1 uppercase tracking-widest font-bold">
                  Alta Demanda
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary-fixed-dim" />
                <h3 className="font-heading text-headline-mobile text-white pl-2">Contenedores Reefer</h3>
                <div className="text-technical font-mono text-surface-variant grid grid-cols-2 gap-2 bg-primary-container p-4 border border-outline-variant/20 ml-2">
                  <div><span className="block text-on-primary-container text-xs uppercase mb-1">Formatos</span>20ft / 40ft</div>
                  <div><span className="block text-on-primary-container text-xs uppercase mb-1">Uso</span>Port&aacute;til/Fijo</div>
                </div>
                <p className="font-body text-body-md text-surface-variant mt-2 flex-1 pl-2">
                  Venta y alquiler de contenedores mar&iacute;timos refrigerados. Soluci&oacute;n inmediata para almacenamiento en obra o predios.
                </p>
                <Link
                  href="/equipos"
                  className="mt-4 font-mono text-technical text-secondary-fixed-dim font-bold flex items-center gap-2 hover:gap-3 transition-all pl-2"
                >
                  Consultar Disponibilidad <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-lowest border border-outline-variant flex flex-col hover:border-secondary transition-colors">
              <div className="relative h-64 overflow-hidden bg-surface-variant border-b border-outline-variant">
                <img
                  alt="Exhibidores y bateas refrigeradas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkkl5F6bQsfdQ6pp5f3i3-txgprRUyapQOLhjEfZOhoCMDt0KX2zJx6_su2wxvJzDer8J9Xm-nwjG_0hxeauhrg2T4Kv1AKRxN0z9jEFx_8owFWJrSqLHS5BnPmi5xP11xO7a4tlfj1S7v3YwdzymQyznl4sp2RY8gT_7vcPrNvfsyBkoTuunDQiJjHEOD8ilyDwUb14m2sq1tk84mV2Np_OjN2niyemn_CgxETuRIQ2eZwuyCPCmvDaXqBr31eIJ995YSF9l-720"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="font-heading text-headline-mobile text-on-surface">Exhibidores y Bateas</h3>
                <div className="text-technical font-mono text-on-surface-variant grid grid-cols-2 gap-2 bg-surface-container-low p-4 border border-outline-variant/50">
                  <div><span className="block text-outline text-xs uppercase mb-1">Aplicaci&oacute;n</span>Comercial</div>
                  <div><span className="block text-outline text-xs uppercase mb-1">Eficiencia</span>Clase A</div>
                </div>
                <p className="font-body text-body-md text-on-surface-variant mt-2 flex-1">
                  Equipamiento de exhibici&oacute;n para supermercados y comercios. Dise&ntilde;o robusto para alto tr&aacute;nsito y m&aacute;xima visibilidad del producto.
                </p>
                <Link
                  href="/equipos"
                  className="mt-4 font-mono text-technical text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver Cat&aacute;logo <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-outline-variant bg-surface-container-lowest py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter-md">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h2 className="font-heading text-headline-lg text-on-surface mb-4">Ubicaci&oacute;n Estrat&eacute;gica</h2>
              <p className="font-body text-body-md text-on-surface-variant">
                Nuestra base de operaciones en Garup&aacute; nos permite brindar un servicio &aacute;gil y eficiente a toda la provincia y regi&oacute;n del NEA, reduciendo tiempos de respuesta en mantenimiento y montaje.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <span className="material-symbols-outlined text-outline mb-2 block">location_on</span>
                <h4 className="font-mono text-technical font-bold text-on-surface mb-1">Direcci&oacute;n</h4>
                <p className="font-body text-body-md text-on-surface-variant text-sm">Ruta 12, Garup&aacute;<br />Misiones, Argentina</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="material-symbols-outlined text-outline mb-2 block">schedule</span>
                <h4 className="font-mono text-technical font-bold text-on-surface mb-1">Horario Operativo</h4>
                <p className="font-body text-body-md text-on-surface-variant text-sm">Lunes a Viernes: 08:00 - 18:00<br />Guardia 24/7 para clientes</p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="bg-primary text-white font-mono font-bold px-8 py-4 hover:bg-primary-container transition-colors w-fit border border-transparent text-technical"
            >
              Obtener Direcciones
            </Link>
          </div>
          <div className="bg-surface-variant border border-outline-variant h-[400px] lg:h-auto min-h-[400px] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-surface-container-highest flex items-center justify-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjf-tK8ZhpPHJ0BA1zzRX1RkEbpF5oL97EMq5RYq1r11kD3bJv-DfJc-jlY3Q3a1e4qrLvmQpV30-e1beVrIOAt4aHEttLl8vsX788eh5yftlder6PaD80beuNz-CzopnsXnIsubRNMfZBLpco2A4lLRcqu3wtEn0XnA58_5TntFRH8RboKnQL_vzGHdxr2oStl5_zh-KlHj2JtOZQ0fxhW_KisUCUNJQR9mlkCvYuC7_kVUJrAAu4PPOHqYfIs7j6A29dJQQvn_k')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              <div className="bg-white p-4 shadow-[4px_4px_0px_0px_rgba(10,37,64,0.3)] border border-outline-variant relative z-10 flex items-center gap-3">
                <span className="material-symbols-outlined text-safety-orange">warehouse</span>
                <span className="font-mono text-technical font-bold text-primary">Planta MK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
