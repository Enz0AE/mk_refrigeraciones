"use client";

import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";

export default function InstalacionesPage() {
  useEffect(() => {
    document.title = "Instalaciones Frigoríficas — Cámaras de Frío Industrial | MK Refrigeraciones";
  }, []);
  return (
    <>
      {/* Hero */}
      <section
        className="w-full min-h-[70vh] flex items-center relative overflow-hidden py-section-gap"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 15, 34, 0.85), rgba(0, 15, 34, 0.95)), url('data:image/svg+xml;utf8,<svg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h40v40H0z\" fill=\"none\"/><path d=\"M39 0v40M0 39h40\" stroke=\"%23314865\" stroke-width=\"1\" opacity=\"0.3\"/></svg>')",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-margin-edge w-full relative z-10">
          <div className="max-w-3xl border-l-4 border-safety-orange pl-gutter-md">
            <p className="font-mono text-technical text-secondary-fixed-dim mb-4 tracking-widest uppercase">
              Divisi&oacute;n Proyectos
            </p>
            <h1 className="font-display text-display-lg text-on-primary mb-6">
              Instalaciones Frigor&iacute;ficas de Alta Capacidad
            </h1>
            <p className="font-body text-body-md text-surface-variant mb-8 max-w-2xl">
              Ingenier&iacute;a t&eacute;rmica de precisi&oacute;n para la industria agroalimentaria y log&iacute;stica. Dise&ntilde;o, montaje y puesta en marcha de c&aacute;maras de fr&iacute;o estructuradas con paneles modulares de alta eficiencia energ&eacute;tica.
            </p>
            <div className="flex gap-4">
              <button className="bg-safety-orange text-on-primary font-mono font-bold px-gutter-md py-3 hover:brightness-110 transition-colors text-technical">
                ESPECIFICACIONES T&Eacute;CNICAS
              </button>
              <button className="border border-secondary text-on-primary font-mono px-gutter-md py-3 hover:bg-secondary/20 transition-colors text-technical">
                VER CAT&Aacute;LOGO
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/4 hidden lg:block opacity-20 pointer-events-none">
          <div className="font-mono text-technical text-secondary-fixed-dim">
            TEMP_OP: -25&deg;C / +5&deg;C<br />
            ISO_CLASS: PIR 100MM<br />
            VOL_MAX: 15.000 M3
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-section-gap bg-surface max-w-[1280px] mx-auto px-margin-edge w-full">
        <div className="mb-12 border-b border-frost-blue pb-4 flex justify-between items-end">
          <div>
            <h2 className="font-heading text-headline-lg text-primary">Ingenier&iacute;a T&eacute;rmica</h2>
            <p className="font-body text-body-md text-industrial-gray mt-2">
              Soluciones modulares adaptadas a requerimientos espec&iacute;ficos de carga t&eacute;rmica.
            </p>
          </div>
          <div className="font-mono text-technical text-secondary hidden md:block">MOD.01-A</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
          {/* Mini Chambers */}
          <div className="bg-surface-container-lowest border border-frost-blue p-gutter-md hover:border-secondary transition-colors relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-frost-blue">
                <span className="material-symbols-outlined text-primary">storefront</span>
              </div>
              <span className="font-mono text-technical bg-secondary-fixed/20 text-on-secondary-fixed-variant px-2 py-1">VOL &lt; 100m&sup3;</span>
            </div>
            <h3 className="font-heading text-headline-mobile text-primary mb-3">Minic&aacute;maras Comerciales</h3>
            <p className="font-body text-body-md text-on-surface-variant mb-6">
              Dise&ntilde;adas para locales comerciales, supermercados y gastronom&iacute;a. Montaje r&aacute;pido con sistemas de acople exc&eacute;ntrico (Fast-Fit) garantizando estanqueidad total.
            </p>
            <ul className="font-mono text-technical text-industrial-gray space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Paneles de 60mm a 100mm
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Equipos monoblock o split
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Puertas batientes o corredizas
              </li>
            </ul>
          </div>
          {/* Industrial Chambers */}
          <div className="bg-surface-container-lowest border border-frost-blue p-gutter-md hover:border-secondary transition-colors relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-frost-blue">
                <span className="material-symbols-outlined text-primary">factory</span>
              </div>
              <span className="font-mono text-technical bg-secondary-fixed/20 text-on-secondary-fixed-variant px-2 py-1">VOL &gt; 100m&sup3;</span>
            </div>
            <h3 className="font-heading text-headline-mobile text-primary mb-3">C&aacute;maras Industriales</h3>
            <p className="font-body text-body-md text-on-surface-variant mb-6">
              Complejos frigor&iacute;ficos de gran escala para centros log&iacute;sticos y frigor&iacute;ficos. Estructuras autoportantes con paneles de alta densidad para c&aacute;maras de congelado y t&uacute;neles.
            </p>
            <ul className="font-mono text-technical text-industrial-gray space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Paneles PIR hasta 200mm
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Centrales de fr&iacute;o multiprop&oacute;sito
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_box</span> Barreras de vapor industriales
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-section-gap bg-surface-container-lowest border-y border-frost-blue">
        <div className="max-w-[1280px] mx-auto px-margin-edge w-full">
          <div className="mb-12 border-b border-frost-blue pb-4">
            <h2 className="font-heading text-headline-lg text-primary">Casos de Estudio</h2>
            <p className="font-body text-body-md text-industrial-gray mt-2">Implementaciones recientes en el sector industrial.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-md">
            {/* Large Feature */}
            <div className="lg:col-span-8 group relative overflow-hidden border border-frost-blue bg-surface">
              <div className="aspect-[1.33] w-full bg-surface-container relative">
                <Image
                  alt="Industrial cold room installation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0fqef8oxBOo5Mm7TM69Hi_DAmQcFZIM9LLnVn3UL-FVKnPHdmAtDVj4enCCqJexMbLB-PKAlye24Kw8di26q4_UvP9wTuAuZn3q9JOAit-Xpap_amhEAlGyeMnDyHJCPFgIBZW_mAtuPaVw3aMlyuCrtLkYAhcgVprKCZbq1NbsFGAcZjwgQftioVRDzCawMgn0-yuw7rULfYW-cBj2_3ZcLKOit5dOAiEOIRQOBu8rC1r8Km7h2W2FT8tYowdi9o2RgRncoRySM"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-4 border-t border-frost-blue bg-surface-container-lowest">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading text-headline-mobile text-primary">Centro Log&iacute;stico Frontera</h4>
                    <p className="font-mono text-technical text-industrial-gray mt-1">C&aacute;mara de Congelados (-25&deg;C) | 5.000 m&sup3;</p>
                  </div>
                  <span className="font-mono text-technical bg-surface-container px-2 py-1 text-on-surface-variant border border-frost-blue">REF: CLF-042</span>
                </div>
              </div>
            </div>
            {/* Vertical Feature */}
            <div className="lg:col-span-4 group relative overflow-hidden border border-frost-blue bg-surface">
              <div className="aspect-[0.75] w-full bg-surface-container relative">
                <Image
                  alt="Technical detail of refrigeration unit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwJp8VWNSZAzua6wSXKldM3vg9jBAF8Kv6fzHoRXPjQgs2G-EKjoMpbVF9li6EjlKU8wjT0PMxFgYPrs_norvOOCXF4bk8W1XCopQY4vVNyMt6znbLD-b_Jq0_yayGH_UF5KrHyRAZ6iQczi8A3-f9wTecFq9pDai3ydyoZafsDXrZnYwWCq33EeVXINcUYZ6-dwh65jsYRxyoo1Y1B_mZarkGAa1WMrd9lTMFWVQpajfPFQBpvXBQ6uNytpclkQUqcBPYb6WQg78"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-4 border-t border-frost-blue bg-surface-container-lowest">
                <h4 className="font-heading text-headline-mobile text-primary">Planta Procesadora Sur</h4>
                <p className="font-mono text-technical text-industrial-gray mt-1">T&uacute;nel de Congelado R&aacute;pido | Sistema NH3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Advantages */}
      <section className="py-section-gap bg-primary text-on-primary">
        <div className="max-w-[1280px] mx-auto px-margin-edge w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
            <div className="md:col-span-1">
              <h2 className="font-heading text-headline-lg mb-4">Ventajas Estructurales</h2>
              <p className="font-body text-body-md text-surface-variant mb-8">
                Nuestros montajes priorizan la durabilidad, el aislamiento t&eacute;rmico estricto y la facilidad de mantenimiento en entornos de exigencia continua.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
              <div className="border border-surface-tint p-6 bg-primary-container">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl mb-4">layers</span>
                <h4 className="font-heading text-headline-mobile mb-2">Aislaci&oacute;n PUR/PIR</h4>
                <p className="font-body text-body-md text-surface-variant">
                  Uso exclusivo de paneles con n&uacute;cleo de Poliuretano (PUR) o Poliisocianurato (PIR), garantizando un coeficiente de conductividad t&eacute;rmica m&iacute;nimo y alta resistencia al fuego.
                </p>
              </div>
              <div className="border border-surface-tint p-6 bg-primary-container">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl mb-4">build_circle</span>
                <h4 className="font-heading text-headline-mobile mb-2">Mantenimiento Preventivo</h4>
                <p className="font-body text-body-md text-surface-variant">
                  Dise&ntilde;o enfocado en la accesibilidad a componentes cr&iacute;ticos (v&aacute;lvulas, evaporadores, tableros) para facilitar rutinas de mantenimiento sin interrumpir la cadena de fr&iacute;o.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-section-gap bg-surface max-w-[1280px] mx-auto px-margin-edge w-full">
        <div className="max-w-3xl mx-auto border border-frost-blue bg-surface-container-lowest p-gutter-md shadow-[4px_4px_0px_rgba(10,37,64,0.1)]">
          <div className="mb-8 border-b border-frost-blue pb-4">
            <h2 className="font-heading text-headline-lg text-primary">Consulta Técnica</h2>
            <p className="font-mono text-technical text-industrial-gray mt-2">
              Complete los datos para solicitar pre-evaluación de proyecto.
            </p>
          </div>
          <InstallFormContent />
        </div>
      </section>
    </>
  );
}

function InstallFormContent() {
  const [form, setForm] = useState({ company: "", contact: "", chamberType: "Media Temperatura (0° a 5°C)", volume: "", location: "", details: "" });
  const [errors, setErrors] = useState<Partial<Record<"company" | "contact", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof typeof errors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors: typeof errors = {};
    if (!form.company.trim()) fieldErrors.company = "La empresa es requerida";
    if (!form.contact.trim()) fieldErrors.contact = "El contacto técnico es requerido";
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/instalaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: string, hasError: boolean) =>
    `w-full bg-surface-bright border p-3 focus:border-secondary focus:ring-0 font-body text-primary transition-colors focus:border-b-2 ${
      hasError ? "border-safety-orange" : "border-frost-blue"
    }`;

  if (status === "sent") {
    return (
      <div className="bg-[#DCFCE7] border border-[#86EFAC] p-6 text-center">
        <span className="material-symbols-outlined text-4xl text-[#166534] mb-2">check_circle</span>
        <p className="font-heading text-headline-mobile text-[#166534]">Solicitud enviada</p>
        <p className="font-body text-body-md text-[#15803D] mt-1">Evaluaremos su proyecto y lo contactaremos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-technical text-primary mb-2">EMPRESA / RAZÓN SOCIAL</label>
          <input value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass("company", !!errors.company)} type="text" />
          {errors.company && <p className="text-safety-orange font-mono text-[12px] mt-1">{errors.company}</p>}
        </div>
        <div>
          <label className="block font-mono text-technical text-primary mb-2">CONTACTO TÉCNICO</label>
          <input value={form.contact} onChange={(e) => update("contact", e.target.value)} className={inputClass("contact", !!errors.contact)} type="text" />
          {errors.contact && <p className="text-safety-orange font-mono text-[12px] mt-1">{errors.contact}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block font-mono text-technical text-primary mb-2">TIPO DE CÁMARA</label>
          <select value={form.chamberType} onChange={(e) => update("chamberType", e.target.value)} className="w-full bg-surface-bright border border-frost-blue p-3 focus:border-secondary focus:ring-0 font-body text-primary transition-colors focus:border-b-2 rounded-none appearance-none">
            <option>Media Temperatura (0° a 5°C)</option>
            <option>Baja Temperatura (-20° a -25°C)</option>
            <option>Túnel de Congelado</option>
          </select>
        </div>
        <div>
          <label className="block font-mono text-technical text-primary mb-2">VOLUMEN ESTIMADO (m³)</label>
          <input value={form.volume} onChange={(e) => update("volume", e.target.value)} className="w-full bg-surface-bright border border-frost-blue p-3 focus:border-secondary focus:ring-0 font-body text-primary transition-colors focus:border-b-2" type="number" />
        </div>
        <div>
          <label className="block font-mono text-technical text-primary mb-2">UBICACIÓN (Provincia)</label>
          <input value={form.location} onChange={(e) => update("location", e.target.value)} className="w-full bg-surface-bright border border-frost-blue p-3 focus:border-secondary focus:ring-0 font-body text-primary transition-colors focus:border-b-2" type="text" />
        </div>
      </div>
      <div>
        <label className="block font-mono text-technical text-primary mb-2">ESPECIFICACIONES ADICIONALES</label>
        <textarea value={form.details} onChange={(e) => update("details", e.target.value)} className="w-full bg-surface-bright border border-frost-blue p-3 focus:border-secondary focus:ring-0 font-body text-primary transition-colors focus:border-b-2" rows={4} />
      </div>
      {status === "error" && (
        <p className="text-safety-orange font-mono text-technical">Error al enviar. Intente nuevamente.</p>
      )}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-safety-orange text-on-primary font-mono font-bold px-8 py-3 hover:brightness-110 transition-colors flex items-center gap-2 text-technical disabled:opacity-50"
        >
          {status === "sending" ? "ENVIANDO..." : "ENVIAR SOLICITUD"} <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </form>
  );
}
