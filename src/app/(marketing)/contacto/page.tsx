"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";

export default function ContactoPage() {
  useEffect(() => {
    document.title = "Contacto — MK Refrigeraciones | Frío Industrial en Misiones";
  }, []);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge text-center">
          <h1 className="font-display text-display-lg mb-4">Contacto</h1>
          <p className="font-body text-body-md text-surface-variant max-w-2xl mx-auto">
            Estamos ubicados en Garupá, Misiones. Atendemos toda la región del NEA.
          </p>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge grid grid-cols-1 lg:grid-cols-12 gap-gutter-md">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-6 md:p-10">
            <h2 className="font-heading text-headline-lg text-primary mb-6">Envíenos un Mensaje</h2>
            {status === "sent" ? (
              <div className="bg-[#DCFCE7] border border-[#86EFAC] p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-[#166534] mb-2">check_circle</span>
                <p className="font-heading text-headline-mobile text-[#166534]">Mensaje enviado con éxito</p>
                <p className="font-body text-body-md text-[#15803D] mt-1">Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Nombre *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      required
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-technical text-primary mb-2">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      required
                      className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-technical text-primary mb-2">Teléfono</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-technical text-primary mb-2">Mensaje *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-safety-orange font-mono text-technical">Error al enviar. Intente nuevamente.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-primary text-white font-mono font-bold px-8 py-3 hover:bg-primary-container transition-colors text-technical disabled:opacity-50"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant p-6">
              <span className="material-symbols-outlined text-secondary mb-4 text-3xl">location_on</span>
              <h3 className="font-heading text-headline-mobile text-primary mb-2">Dirección</h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Ruta 12, Garupá<br />
                Misiones, Argentina
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-6">
              <span className="material-symbols-outlined text-secondary mb-4 text-3xl">call</span>
              <h3 className="font-heading text-headline-mobile text-primary mb-2">Teléfono</h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Ventas: +54 9 376 412-3456<br />
                Guardia Técnica: +54 9 376 498-7654
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-6">
              <span className="material-symbols-outlined text-secondary mb-4 text-3xl">schedule</span>
              <h3 className="font-heading text-headline-mobile text-primary mb-2">Horarios</h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Lunes a Viernes: 08:00 - 18:00<br />
                Guardia 24/7 para clientes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-variant border-y border-outline-variant h-[400px] lg:h-[450px] flex items-center justify-center">
        <div className="text-center text-on-surface-variant">
          <span className="material-symbols-outlined text-5xl mb-4 block">map</span>
          <p className="font-body text-body-md">Mapa interactivo — Garupá, Misiones</p>
        </div>
      </section>
    </>
  );
}
