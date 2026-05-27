"use client";

import { useState } from "react";

type TabType = "cotizaciones" | "contactos" | "instalaciones";

interface SubmissionItem {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
  [key: string]: unknown;
}

interface FormSubmissionsTabsProps {
  cotizaciones: SubmissionItem[];
  contactos: SubmissionItem[];
  instalaciones: SubmissionItem[];
  onSelectItem: (type: TabType, item: SubmissionItem) => void;
}

const TABS: { key: TabType; label: string }[] = [
  { key: "cotizaciones", label: "Cotizaciones" },
  { key: "contactos", label: "Contacto" },
  { key: "instalaciones", label: "Instalaciones" },
];

const STATUS_STYLES: Record<string, string> = {
  pendiente:
    "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]",
  contacto:
    "bg-[#DBEAFE] text-[#1E40AF] border-[#93C5FD]",
  confirmado:
    "bg-[#DCFCE7] text-[#166534] border-[#86EFAC]",
};

function getStatusColor(status: string): string {
  return STATUS_STYLES[status] || STATUS_STYLES.pendiente;
}

function getTableColumns(type: TabType): { key: string; label: string }[] {
  switch (type) {
    case "cotizaciones":
      return [
        { key: "name", label: "Cliente" },
        { key: "email", label: "Email" },
        { key: "service", label: "Servicio" },
        { key: "status", label: "Estado" },
        { key: "created_at", label: "Fecha" },
      ];
    case "contactos":
      return [
        { key: "name", label: "Nombre" },
        { key: "email", label: "Email" },
        { key: "subject", label: "Asunto" },
        { key: "status", label: "Estado" },
        { key: "created_at", label: "Fecha" },
      ];
    case "instalaciones":
      return [
        { key: "name", label: "Nombre" },
        { key: "email", label: "Email" },
        { key: "tipo", label: "Tipo" },
        { key: "status", label: "Estado" },
        { key: "created_at", label: "Fecha" },
      ];
  }
}

export default function FormSubmissionsTabs({
  cotizaciones,
  contactos,
  instalaciones,
  onSelectItem,
}: FormSubmissionsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("cotizaciones");

  const dataMap: Record<TabType, SubmissionItem[]> = {
    cotizaciones,
    contactos,
    instalaciones,
  };

  const currentData = dataMap[activeTab];
  const columns = getTableColumns(activeTab);

  return (
    <div className="bg-white border border-outline-variant">
      {/* Tabs */}
      <div className="flex border-b border-outline-variant">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-3 font-mono text-technical uppercase transition-colors ${
              activeTab === tab.key
                ? "bg-surface-container-low text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
            }`}
          >
            {tab.label}
            <span className="text-xs bg-surface-variant px-1.5 py-0.5 rounded">
              {dataMap[tab.key].length}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low text-technical font-mono text-xs uppercase text-on-surface-variant">
              {columns.map((col) => (
                <th key={col.key} className="p-3 font-medium">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-outline-variant hover:bg-surface-bright transition-colors"
              >
                {columns.map((col) => {
                  if (col.key === "name") {
                    return (
                      <td key={col.key} className="p-3">
                        <button
                          onClick={() => onSelectItem(activeTab, item)}
                          className="font-body text-primary font-medium underline-offset-2 hover:underline text-left"
                        >
                          {item.name}
                        </button>
                      </td>
                    );
                  }
                  if (col.key === "status") {
                    const status = String(item.status || "pendiente");
                    return (
                      <td key={col.key} className="p-3">
                        <span
                          className={`inline-flex px-2 py-0.5 font-mono text-xs uppercase border ${getStatusColor(status)}`}
                        >
                          {status}
                        </span>
                      </td>
                    );
                  }
                  if (col.key === "created_at") {
                    return (
                      <td
                        key={col.key}
                        className="p-3 font-mono text-technical text-on-surface-variant"
                      >
                        {new Date(item.created_at).toLocaleDateString("es-AR")}
                      </td>
                    );
                  }
                  const value = item[col.key];
                  return (
                    <td
                      key={col.key}
                      className="p-3 text-on-surface-variant"
                    >
                      {value != null ? String(value) : "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-6 text-center text-on-surface-variant font-body"
                >
                  No hay registros aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
