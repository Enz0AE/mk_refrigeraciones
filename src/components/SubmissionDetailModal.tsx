"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type SubmissionType = "cotizaciones" | "contactos" | "instalaciones";

interface SubmissionDetailModalProps {
  type: SubmissionType;
  data: Record<string, unknown> | null;
  onClose: () => void;
  onRefresh: () => void;
}

const FIELDS: Record<SubmissionType, { key: string; label: string }[]> = {
  cotizaciones: [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Teléfono" },
    { key: "company", label: "Empresa" },
    { key: "service", label: "Servicio" },
    { key: "temp", label: "Temperatura" },
    { key: "volume", label: "Volumen" },
    { key: "location", label: "Ubicación" },
    { key: "details", label: "Detalles" },
  ],
  contactos: [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Teléfono" },
    { key: "subject", label: "Asunto" },
    { key: "message", label: "Mensaje" },
  ],
  instalaciones: [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Teléfono" },
    { key: "company", label: "Empresa" },
    { key: "tipo", label: "Tipo" },
    { key: "dimensions", label: "Dimensiones" },
    { key: "temp_range", label: "Rango Temp." },
    { key: "location", label: "Ubicación" },
    { key: "details", label: "Detalles" },
  ],
};

const STATUS_OPTIONS = ["pendiente", "contacto", "confirmado"];

const STATUS_STYLES: Record<string, string> = {
  pendiente: "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]",
  contacto: "bg-[#DBEAFE] text-[#1E40AF] border-[#93C5FD]",
  confirmado: "bg-[#DCFCE7] text-[#166534] border-[#86EFAC]",
};

function getStatusColor(status: string): string {
  return STATUS_STYLES[status] || STATUS_STYLES.pendiente;
}

export default function SubmissionDetailModal({
  type,
  data,
  onClose,
  onRefresh,
}: SubmissionDetailModalProps) {
  const [updating, setUpdating] = useState(false);

  if (!data) return null;

  const fields = FIELDS[type];
  const id = data.id as string;
  const status = data.status as string;
  const createdAt = data.created_at as string;

  const handleStatusChange = async (newStatus: string) => {
    setUpdating(true);
    const supabase = createClient();
    await supabase.from(type).update({ status: newStatus }).eq("id", id);
    setUpdating(false);
    onRefresh();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white border border-outline-variant w-full max-w-lg mx-4 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-outline-variant bg-surface-container-low">
          <h2 className="font-heading text-headline-mobile text-primary">
            Detalle
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-surface-variant transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-4 space-y-3">
          {fields.map(({ key, label }) => {
            const value = data[key];
            if (!value) return null;
            return (
              <div key={key}>
                <span className="block font-mono text-technical text-on-surface-variant uppercase mb-0.5">
                  {label}
                </span>
                <span className="font-body text-body-md text-primary whitespace-pre-wrap break-words">
                  {String(value)}
                </span>
              </div>
            );
          })}

          <div className="pt-3 border-t border-outline-variant">
            <span className="block font-mono text-technical text-on-surface-variant uppercase mb-0.5">
              Estado
            </span>
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              disabled={updating}
              className={`mt-1 px-3 py-1.5 font-mono text-xs uppercase border cursor-pointer focus:outline-none ${
                getStatusColor(status)
              } ${updating ? "opacity-50" : ""}`}
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-white text-primary">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="block font-mono text-technical text-on-surface-variant uppercase mb-0.5">
              Fecha
            </span>
            <span className="font-body text-body-md text-primary">
              {new Date(createdAt).toLocaleDateString("es-AR", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
