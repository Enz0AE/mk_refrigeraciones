"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import EquipoEditor from "@/components/EquipoEditor";

interface Equipo {
  id: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  especificaciones: { clave: string; valor: string }[];
  imagen: string;
  publicado: boolean;
  orden: number;
  created_at: string;
}

const TIPO_LABELS: Record<string, string> = {
  contenedores: "Contenedores Reefer",
  comercial: "Línea Comercial",
  evaporadores: "Unidades Evaporadoras",
};

export default function EquiposCMSPage() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editorEquipo, setEditorEquipo] = useState<Equipo | null | undefined>(undefined);

  const loadEquipos = () => {
    const supabase = createClient();
    supabase
      .from("equipos")
      .select("*")
      .order("orden", { ascending: true })
      .then(({ data }) => {
        if (data) setEquipos(data as Equipo[]);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadEquipos();
  }, []);

  const grouped = equipos.reduce<Record<string, Equipo[]>>((acc, eq) => {
    (acc[eq.tipo] ??= []).push(eq);
    return acc;
  }, {});

  const handleDelete = async (eq: Equipo) => {
    if (!confirm(`¿Eliminar "${eq.nombre}"?`)) return;
    const supabase = createClient();
    await supabase.from("equipos").delete().eq("id", eq.id);
    loadEquipos();
  };

  const handleTogglePublished = async (eq: Equipo) => {
    const supabase = createClient();
    await supabase
      .from("equipos")
      .update({ publicado: !eq.publicado })
      .eq("id", eq.id);
    loadEquipos();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-headline-lg text-primary">Gestión de Equipos</h1>
          <p className="font-mono text-technical text-on-surface-variant">Catálogo de productos</p>
        </div>
        <button
          onClick={() => setEditorEquipo(null)}
          className="bg-primary text-white font-mono font-bold px-4 py-2 text-technical hover:bg-primary-container transition-colors"
        >
          Nuevo Equipo
        </button>
      </div>

      {equipos.length === 0 && (
        <div className="bg-white border border-outline-variant p-8 text-center">
          <p className="font-body text-body-md text-on-surface-variant mb-2">
            No hay equipos aún.
          </p>
          <p className="font-mono text-technical text-on-surface-variant">
            Cree el primer equipo haciendo clic en &quot;Nuevo Equipo&quot;.
          </p>
        </div>
      )}

      {Object.entries(grouped).map(([tipo, items]) => (
        <div key={tipo} className="mb-8">
          <h2 className="font-heading text-headline-mobile text-primary mb-4">
            {TIPO_LABELS[tipo] || tipo}
            <span className="ml-2 text-sm font-mono text-on-surface-variant font-normal">
              ({items.length})
            </span>
          </h2>

          <div className="bg-white border border-outline-variant overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-technical font-mono text-xs uppercase text-on-surface-variant">
                  <th className="p-3 font-medium w-16">#</th>
                  <th className="p-3 font-medium">Nombre</th>
                  <th className="p-3 font-medium">Imagen</th>
                  <th className="p-3 font-medium">Estado</th>
                  <th className="p-3 font-medium text-right">Acción</th>
                </tr>
              </thead>
              <tbody>
                {items.map((eq) => (
                  <tr
                    key={eq.id}
                    className="border-b border-outline-variant hover:bg-surface-bright transition-colors"
                  >
                    <td className="p-3 font-mono text-technical text-on-surface-variant">
                      {eq.orden}
                    </td>
                    <td className="p-3 font-body text-primary font-medium">
                      {eq.nombre}
                    </td>
                    <td className="p-3">
                      {eq.imagen ? (
                        <div className="w-16 h-10 bg-surface-container-low border border-outline-variant overflow-hidden rounded">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={eq.imagen}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <span className="text-technical text-on-surface-variant font-mono">
                          —
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex px-2 py-0.5 font-mono text-xs uppercase border ${
                          eq.publicado
                            ? "bg-[#DCFCE7] text-[#166534] border-[#86EFAC]"
                            : "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]"
                        }`}
                      >
                        {eq.publicado ? "Visible" : "Oculto"}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditorEquipo(eq)}
                          className="text-technical font-mono text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleTogglePublished(eq)}
                          className="text-technical font-mono text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                        >
                          {eq.publicado ? "Ocultar" : "Mostrar"}
                        </button>
                        <button
                          onClick={() => handleDelete(eq)}
                          className="text-technical font-mono text-safety-orange hover:text-red-700 transition-colors px-2 py-1"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Editor Modal */}
      {editorEquipo !== undefined && (
        <EquipoEditor
          equipo={editorEquipo}
          onClose={() => setEditorEquipo(undefined)}
          onSaved={() => {
            setEditorEquipo(undefined);
            loadEquipos();
          }}
        />
      )}
    </div>
  );
}
