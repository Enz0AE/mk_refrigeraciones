"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import ImageUpload from "@/components/ImageUpload";
import FichaTecnicaEditor from "@/components/FichaTecnicaEditor";

interface EquipoFull {
  id?: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  especificaciones: { clave: string; valor: string }[];
  imagen: string;
  publicado: boolean;
  orden: number;
}

interface EquipoEditorProps {
  equipo?: EquipoFull | null;
  onClose: () => void;
  onSaved: () => void;
}

const TIPOS = [
  { value: "contenedores", label: "Contenedores Reefer" },
  { value: "comercial", label: "Línea Comercial" },
  { value: "evaporadores", label: "Unidades Evaporadoras" },
];

export default function EquipoEditor({
  equipo,
  onClose,
  onSaved,
}: EquipoEditorProps) {
  const isEdit = !!equipo;
  const [saving, setSaving] = useState(false);

  const [tipo, setTipo] = useState(equipo?.tipo || "contenedores");
  const [nombre, setNombre] = useState(equipo?.nombre || "");
  const [descripcion, setDescripcion] = useState(equipo?.descripcion || "");
  const [especificaciones, setEspecificaciones] = useState<
    { clave: string; valor: string }[]
  >(equipo?.especificaciones || []);
  const [imagen, setImagen] = useState(equipo?.imagen || "");
  const [publicado, setPublicado] = useState(equipo?.publicado ?? true);
  const [orden, setOrden] = useState(equipo?.orden ?? 0);

  const handleSave = async () => {
    if (!nombre.trim()) return;
    setSaving(true);

    const supabase = createClient();
    const payload = {
      tipo,
      nombre,
      descripcion,
      especificaciones,
      imagen,
      publicado,
      orden,
    };

    if (isEdit && equipo?.id) {
      await supabase.from("equipos").update(payload).eq("id", equipo.id);
    } else {
      await supabase.from("equipos").insert(payload);
    }

    setSaving(false);
    onSaved();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white border border-outline-variant w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-outline-variant bg-surface-container-low">
          <h2 className="font-heading text-headline-mobile text-primary">
            {isEdit ? "Editar Equipo" : "Nuevo Equipo"}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-surface-variant transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* Tipo */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Tipo
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-3 py-2 border border-outline-variant font-body bg-white focus:outline-none focus:border-primary"
            >
              {TIPOS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Nombre */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border border-outline-variant font-body text-body-md bg-white focus:outline-none focus:border-primary"
              placeholder="Ej: Contenedor 12,2 m High Cube"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Descripción
            </label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-outline-variant font-body text-body-md bg-white focus:outline-none focus:border-primary resize-none"
              placeholder="Descripción del equipo..."
            />
          </div>

          {/* Imagen */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Imagen
            </label>
            <ImageUpload
              currentImage={imagen || null}
              onUpload={(url) => setImagen(url)}
              onDelete={() => setImagen("")}
            />
          </div>

          {/* Ficha Técnica */}
          <FichaTecnicaEditor
            value={especificaciones}
            onChange={setEspecificaciones}
          />

          {/* Orden + Publicado */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
                Orden
              </label>
              <input
                type="number"
                value={orden}
                onChange={(e) => setOrden(Number(e.target.value))}
                className="w-full px-3 py-2 border border-outline-variant font-mono text-technical bg-white focus:outline-none focus:border-primary"
                min={0}
              />
            </div>

            <div className="flex items-end pb-2">
              <label className="relative inline-flex items-center cursor-pointer gap-3">
                <input
                  type="checkbox"
                  checked={publicado}
                  onChange={(e) => setPublicado(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-surface-variant border border-outline-variant peer-checked:bg-primary peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:w-4 after:h-4 after:border after:border-outline-variant after:peer-checked:border-white after:peer-checked:start-[22px] after:transition-all" />
                <span className="font-mono text-technical text-on-surface-variant">
                  {publicado ? "Publicado" : "Oculto"}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-outline-variant bg-surface-container-low">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-outline-variant text-on-surface-variant font-mono text-technical hover:bg-surface-variant transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !nombre.trim()}
            className="px-6 py-2 bg-primary text-white font-mono font-bold text-technical hover:bg-primary-container transition-colors disabled:opacity-50"
          >
            {saving ? "Guardando..." : isEdit ? "Guardar Cambios" : "Crear Equipo"}
          </button>
        </div>
      </div>
    </div>
  );
}
