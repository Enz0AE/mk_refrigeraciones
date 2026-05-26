"use client";

interface FichaTecnicaEditorProps {
  value: { clave: string; valor: string }[];
  onChange: (value: { clave: string; valor: string }[]) => void;
}

export default function FichaTecnicaEditor({
  value,
  onChange,
}: FichaTecnicaEditorProps) {
  const addRow = () => {
    onChange([...value, { clave: "", valor: "" }]);
  };

  const removeRow = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const updateRow = (
    index: number,
    field: "clave" | "valor",
    newValue: string,
  ) => {
    const updated = value.map((row, i) =>
      i === index ? { ...row, [field]: newValue } : row,
    );
    onChange(updated);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-technical text-on-surface-variant uppercase">
          Ficha Técnica
        </span>
        <button
          onClick={addRow}
          className="px-3 py-1 border border-outline-variant text-technical font-mono hover:bg-surface-container transition-colors text-xs"
        >
          + Agregar Fila
        </button>
      </div>

      {value.length === 0 && (
        <p className="text-technical text-on-surface-variant font-mono py-2">
          Sin especificaciones. Haga clic en &quot;+ Agregar Fila&quot; para añadir.
        </p>
      )}

      <div className="space-y-2">
        {value.map((row, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              value={row.clave}
              onChange={(e) => updateRow(index, "clave", e.target.value)}
              placeholder="Ej: Volumen"
              className="flex-1 px-3 py-2 border border-outline-variant font-mono text-technical bg-white focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              value={row.valor}
              onChange={(e) => updateRow(index, "valor", e.target.value)}
              placeholder="Ej: 67.5 m³"
              className="flex-1 px-3 py-2 border border-outline-variant font-mono text-technical bg-white focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => removeRow(index)}
              className="p-2 text-safety-orange hover:bg-safety-orange/5 transition-colors"
              aria-label="Eliminar fila"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
