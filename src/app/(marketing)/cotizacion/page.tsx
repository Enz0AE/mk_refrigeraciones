"use client";

import { useState, useEffect } from "react";

const steps = [
  { label: "Servicio", icon: "construction" },
  { label: "Especificaciones", icon: "straighten" },
  { label: "Contacto", icon: "contact_mail" },
  { label: "Revisión", icon: "fact_check" },
];

const serviceOptions = [
  { value: "instalacion", label: "Instalación Frigorífica", desc: "Cámaras de frío, túneles de congelado" },
  { value: "contenedor", label: "Contenedor Reefer", desc: "Alquiler o compra de contenedores 10/20/40 ft" },
  { value: "exhibidor", label: "Exhibidor / Batea", desc: "Equipos comerciales para supermercados" },
  { value: "mantenimiento", label: "Mantenimiento", desc: "Servicio preventivo o correctivo" },
  { value: "otro", label: "Otro", desc: "Consulta personalizada" },
];

export default function CotizacionPage() {
  useEffect(() => {
    document.title = "Solicitar Presupuesto — MK Refrigeraciones | Cotización Frío Industrial";
  }, []);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "phone", string>>>({});
  const [form, setForm] = useState({
    service: "",
    temp: "",
    volume: "",
    location: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof typeof errors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const hasRequired = () => {
    if (step === 0) return !!form.service;
    if (step === 2) return !!form.name.trim() && !!form.email.trim() && !!form.phone.trim();
    return true;
  };

  const validateStep = () => {
    if (step !== 2) return true;
    const fieldErrors: typeof errors = {};
    if (!form.name.trim()) fieldErrors.name = "El nombre es requerido";
    if (!form.email.trim()) fieldErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) fieldErrors.email = "Email inválido";
    if (!form.phone.trim()) fieldErrors.phone = "El teléfono es requerido";
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/cotizacion", {
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

  if (status === "sent") {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-10 max-w-[800px] mx-auto mt-section-gap">
        <div className="bg-[#DCFCE7] border border-[#86EFAC] p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-[#166534] mb-2">check_circle</span>
          <p className="font-heading text-headline-mobile text-[#166534]">Solicitud enviada con éxito</p>
          <p className="font-body text-body-md text-[#15803D] mt-1">Recibirá una cotización en menos de 24 horas hábiles.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge text-center">
          <h1 className="font-display text-display-lg mb-4">Solicitar Presupuesto</h1>
          <p className="font-body text-body-md text-surface-variant max-w-2xl mx-auto">
            Complete el formulario y reciba una cotización personalizada en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-[800px] mx-auto px-margin-edge">
          {/* Progress */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 flex items-center justify-center border-2 transition-all text-sm ${
                      i <= step
                        ? "bg-secondary border-secondary text-white"
                        : "bg-surface-container-lowest border-outline-variant text-on-surface-variant"
                    }`}
                  >
                    {i < step ? (
                      <span className="material-symbols-outlined text-lg">check</span>
                    ) : (
                      <span className="material-symbols-outlined text-lg">{s.icon}</span>
                    )}
                  </div>
                  <span
                    className={`text-label-sm font-mono hidden md:block ${
                      i <= step ? "text-secondary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 mt-[-1.5rem] md:mt-[-2rem] ${
                      i < step ? "bg-secondary" : "bg-outline-variant"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-10">
            {step === 0 && (
              <div>
                <h2 className="font-heading text-headline-lg text-primary mb-6">¿Qué servicio necesita?</h2>
                <div className="grid gap-4">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update("service", opt.value)}
                      className={`text-left p-4 border-2 transition-all ${
                        form.service === opt.value
                          ? "border-secondary bg-secondary/5"
                          : "border-outline-variant hover:border-secondary/50"
                      }`}
                    >
                      <div className="font-heading text-headline-mobile text-primary">{opt.label}</div>
                      <div className="font-body text-body-md text-on-surface-variant mt-1">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-heading text-headline-lg text-primary mb-6">Especificaciones Técnicas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Rango de Temperatura</label>
                    <select
                      value={form.temp}
                      onChange={(e) => update("temp", e.target.value)}
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    >
                      <option value="">Seleccione...</option>
                      <option value="-30a5">-30°C a +5°C (Congelado)</option>
                      <option value="0a8">0°C a +8°C (Refrigerado)</option>
                      <option value="10a25">+10°C a +25°C (Temperatura controlada)</option>
                      <option value="variable">Multitemperatura</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Volumen Aproximado (m³)</label>
                    <input
                      type="number"
                      value={form.volume}
                      onChange={(e) => update("volume", e.target.value)}
                      placeholder="Ej: 100"
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-technical text-primary mb-2">Ubicación del Proyecto</label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                      placeholder="Ciudad, Provincia"
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-technical text-primary mb-2">Detalles Adicionales</label>
                    <textarea
                      rows={4}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      placeholder="Describa su proyecto, requisitos especiales, etc."
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-heading text-headline-lg text-primary mb-6">Datos de Contacto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Nombre *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Su nombre"
                      className={`w-full bg-surface-bright border p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none ${
                        errors.name ? "border-safety-orange" : "border-outline-variant"
                      }`}
                    />
                    {errors.name && <p className="font-mono text-technical text-safety-orange mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Empresa / Razón Social</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Nombre de la empresa"
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className={`w-full bg-surface-bright border p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none ${
                        errors.email ? "border-safety-orange" : "border-outline-variant"
                      }`}
                    />
                    {errors.email && <p className="font-mono text-technical text-safety-orange mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+54 376 412-3456"
                      className={`w-full bg-surface-bright border p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none ${
                        errors.phone ? "border-safety-orange" : "border-outline-variant"
                      }`}
                    />
                    {errors.phone && <p className="font-mono text-technical text-safety-orange mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-heading text-headline-lg text-primary mb-6">Revise su Solicitud</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-surface-container-low border border-outline-variant">
                    <div>
                      <span className="block font-mono text-label-sm text-on-surface-variant uppercase">Servicio</span>
                      <span className="font-body text-body-md text-primary">{serviceOptions.find((o) => o.value === form.service)?.label || form.service}</span>
                    </div>
                    <div>
                      <span className="block font-mono text-label-sm text-on-surface-variant uppercase">Temperatura</span>
                      <span className="font-body text-body-md text-primary">{form.temp || "No especificado"}</span>
                    </div>
                    <div>
                      <span className="block font-mono text-label-sm text-on-surface-variant uppercase">Volumen</span>
                      <span className="font-body text-body-md text-primary">{form.volume ? `${form.volume} m³` : "No especificado"}</span>
                    </div>
                    <div>
                      <span className="block font-mono text-label-sm text-on-surface-variant uppercase">Ubicación</span>
                      <span className="font-body text-body-md text-primary">{form.location || "No especificada"}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low border border-outline-variant">
                    <span className="block font-mono text-label-sm text-on-surface-variant uppercase mb-1">Contacto</span>
                    <span className="font-body text-body-md text-primary block">{form.name}</span>
                    <span className="font-body text-body-md text-on-surface-variant block">{form.email}</span>
                    <span className="font-body text-body-md text-on-surface-variant block">{form.phone}</span>
                    {form.company && <span className="font-body text-body-md text-on-surface-variant block">{form.company}</span>}
                  </div>
                  {form.details && (
                    <div className="p-4 bg-surface-container-low border border-outline-variant">
                      <span className="block font-mono text-label-sm text-on-surface-variant uppercase mb-1">Detalles</span>
                      <p className="font-body text-body-md text-primary">{form.details}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-outline-variant">
              {step > 0 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="font-mono text-technical text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Anterior
                </button>
              ) : (
                <div />
              )}
              {step < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!hasRequired()}
                  className="bg-primary text-white font-mono font-bold px-8 py-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-container transition-colors text-technical"
                >
                  Continuar
                </button>
              ) : (
                <div className="flex flex-col items-end gap-3">
                  {status === "error" && (
                    <p className="text-safety-orange font-mono text-technical">Error al enviar. Intente nuevamente.</p>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="bg-safety-orange text-white font-mono font-bold px-8 py-3 hover:brightness-110 transition-colors text-technical disabled:opacity-50"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
