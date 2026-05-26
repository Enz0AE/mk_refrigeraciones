"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Cotizaciones", icon: "list_alt", active: false },
  { label: "Galería", icon: "photo_library", active: false },
  { label: "Servicios", icon: "construction", active: false },
  { label: "Configuración", icon: "settings", active: false },
];

const quotes = [
  {
    id: "#COT-8492",
    client: "Frigorífico del Norte SA",
    email: "contacto@frigonorte.com",
    service: "Instalación Panel 100mm",
    icon: "ac_unit" as const,
    date: "Hoy, 08:30 AM",
    status: "Urgente" as const,
  },
  {
    id: "#COT-8491",
    client: "Supermercados El Sol",
    email: "compras@elsol.com.ar",
    service: "Mantenimiento Preventivo",
    icon: "build" as const,
    date: "Ayer, 16:45 PM",
    status: "Pendiente" as const,
  },
  {
    id: "#COT-8490",
    client: "Martín Gómez",
    email: "Particular",
    service: "Alquiler Contenedor 20ft",
    icon: "inventory_2" as const,
    date: "22 Oct, 11:20 AM",
    status: "Revisado" as const,
  },
  {
    id: "#COT-8489",
    client: "Logística Misiones SRL",
    email: "info@logmisiones.com",
    service: "Reparación Cámara Frigorífica",
    icon: "ac_unit" as const,
    date: "21 Oct, 09:15 AM",
    status: "Revisado" as const,
  },
] as const;

const chartData = [
  { day: "Lun", value: 30 },
  { day: "Mar", value: 60 },
  { day: "Mie", value: 40 },
  { day: "Jue", value: 90 },
  { day: "Vie", value: 50 },
  { day: "Sab", value: 100 },
  { day: "Dom", value: 70 },
];

export default function PanelCMSPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] text-on-surface antialiased overflow-hidden flex h-screen">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-primary-container border-r border-outline-variant flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Profile */}
        <div className="p-gutter-md border-b border-outline-variant/30 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container shrink-0 border-2 border-primary-fixed">
              <img
                alt="Admin User"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4HKo6EDFO-sSm0NJTKo0JXT-hpL1_ZTAmttiuSgA3h51P4qpOUrlFy9-n1leKuuymMg7-ejniTYWuSEebpZrV_yeA757z05cSZdJOQPxGwmp2I6RAsUwKxZFBD9FEolaMkiwbndqrrnMTVksjlR-CGPwXFO66sU3m4lrDf4rceCKwupKrb1r2FrH7lXqpKpOjIuqeLDujv9eOQ5g8oZZ-lSGhCnGxDp4sF2Yrljr5O_rsjqGw1DH1WkTAHmZ7XSdktVtfuzrzVGs"
              />
            </div>
            <div className="overflow-hidden">
              <h2 className="font-heading text-headline-mobile text-[18px] leading-tight text-on-primary font-bold truncate">
                Admin MK
              </h2>
              <p className="text-label-sm font-mono text-on-primary-container truncate">
                Gestión Central
              </p>
            </div>
          </div>
          <div className="px-2 py-1 bg-surface-tint/30 text-on-primary-container font-mono text-[10px] uppercase tracking-wider self-start">
            v2.0.4
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-gutter-sm flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-r transition-colors border-l-4 ${
                item.active
                  ? "bg-secondary-container text-on-secondary-container font-bold border-l-safety-orange"
                  : "text-on-primary-container hover:bg-white/10 border-l-transparent"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-body-md text-[15px]">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-gutter-sm border-t border-outline-variant/30">
          <Link
            href="#"
            className="flex items-center gap-3 text-on-primary-container px-4 py-3 hover:bg-error/20 hover:text-error-container rounded transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-body-md text-[15px]">Cerrar Sesión</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-surface-container-lowest border-b border-frost-blue px-margin-edge h-16 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-industrial-gray hover:bg-surface-container rounded transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="font-heading text-headline-mobile text-primary-container font-bold">
              Resumen de Operaciones
            </h1>
          </div>
          <div className="flex items-center gap-gutter-sm">
            <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-industrial-gray transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-safety-orange rounded-full" />
            </button>
            <div className="h-6 w-px bg-frost-blue" />
            <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-industrial-gray">calendar_today</span>
              <span className="text-technical font-mono text-on-surface-variant">24 Oct, 2023</span>
            </button>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="flex-1 overflow-y-auto p-margin-edge max-w-[1400px] w-full mx-auto flex flex-col gap-gutter-md">
          {/* Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter-sm">
            <div className="bg-surface-container-lowest border border-frost-blue p-gutter-sm flex items-start justify-between relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container" />
              <div className="pl-2 flex flex-col gap-2">
                <p className="text-technical font-mono text-industrial-gray uppercase tracking-wider">Cotizaciones Nuevas</p>
                <h3 className="font-display text-display-lg text-primary-container">12</h3>
                <div className="flex items-center gap-1 text-secondary-container">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span className="text-label-sm font-mono">+4 esta semana</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded bg-primary-fixed/20 flex items-center justify-center text-primary-fixed-variant">
                <span className="material-symbols-outlined text-[28px]">request_quote</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-frost-blue p-gutter-sm flex items-start justify-between relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container" />
              <div className="pl-2 flex flex-col gap-2">
                <p className="text-technical font-mono text-industrial-gray uppercase tracking-wider">Equipos en Alquiler</p>
                <h3 className="font-display text-display-lg text-primary-container">45</h3>
                <div className="flex items-center gap-1 text-industrial-gray">
                  <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                  <span className="text-label-sm font-mono">85% ocupación</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-industrial-gray">
                <span className="material-symbols-outlined text-[28px]">ac_unit</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-frost-blue p-gutter-sm flex items-start justify-between relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-safety-orange" />
              <div className="pl-2 flex flex-col gap-2">
                <p className="text-technical font-mono text-industrial-gray uppercase tracking-wider">Mensajes de Hoy</p>
                <h3 className="font-display text-display-lg text-primary-container">8</h3>
                <div className="flex items-center gap-1 text-safety-orange">
                  <span className="material-symbols-outlined text-[16px]">priority_high</span>
                  <span className="text-label-sm font-mono">3 requieren atención</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded bg-error-container/50 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[28px]">chat</span>
              </div>
            </div>
          </section>

          {/* Chart & Quick Actions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-md">
            {/* Chart */}
            <div className="lg:col-span-2 bg-surface-container-lowest border border-frost-blue flex flex-col">
              <div className="p-gutter-sm border-b border-frost-blue flex items-center justify-between">
                <h3 className="font-heading text-headline-mobile text-[18px] text-primary-container font-bold">
                  Actividad de Cotizaciones (Últimos 7 Días)
                </h3>
                <button className="text-industrial-gray hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <div className="p-gutter-sm flex-1 min-h-[250px] relative w-full h-full">
                <div className="absolute bottom-gutter-sm left-gutter-sm right-gutter-sm top-gutter-sm flex items-end justify-between gap-2 px-4">
                  {chartData.map((d) => (
                    <div
                      key={d.day}
                      className="w-full relative group"
                      style={{ height: `${d.value}%` }}
                    >
                      <div
                        className={`w-full h-full transition-colors ${
                          d.value === 100
                            ? "bg-safety-orange hover:bg-[#E64500]"
                            : d.value === 90
                              ? "bg-primary-container hover:bg-primary"
                              : "bg-secondary-container/40 hover:bg-secondary-container/60"
                        }`}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-technical font-mono text-xs hidden group-hover:block bg-primary-container text-white px-2 py-0.5 whitespace-nowrap">
                          {d.value === 100 ? 12 : d.value === 90 ? 9 : d.value === 70 ? 7 : d.value === 60 ? 6 : d.value === 50 ? 5 : d.value === 40 ? 4 : 3}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* X axis */}
                <div className="absolute bottom-0 left-gutter-sm right-gutter-sm flex justify-between px-4 text-technical font-mono text-[10px] text-industrial-gray uppercase pointer-events-none">
                  {chartData.map((d) => (
                    <span key={d.day}>{d.day}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-surface-container-lowest border border-frost-blue flex flex-col">
              <div className="p-gutter-sm border-b border-frost-blue">
                <h3 className="font-heading text-headline-mobile text-[18px] text-primary-container font-bold">
                  Acciones Rápidas
                </h3>
              </div>
              <div className="p-gutter-sm flex flex-col gap-3">
                <button className="w-full bg-safety-orange hover:bg-[#E64500] text-on-primary font-body font-bold py-3 px-4 flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
                  <span className="material-symbols-outlined">add_photo_alternate</span>
                  Añadir Proyecto a Galería
                </button>
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary font-body py-3 px-4 flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
                  <span className="material-symbols-outlined">edit_document</span>
                  Editar Precios de Alquiler
                </button>
                <div className="h-px bg-frost-blue my-2 w-full" />
                <button className="w-full border border-primary-container text-primary-container hover:bg-surface-container font-body py-2 px-4 flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">person_add</span>
                  Nuevo Usuario Admin
                </button>
              </div>
            </div>
          </section>

          {/* Data Table */}
          <section className="bg-surface-container-lowest border border-frost-blue flex flex-col overflow-hidden">
            <div className="p-gutter-sm border-b border-frost-blue flex items-center justify-between bg-surface-container-low flex-wrap gap-2">
              <h3 className="font-heading text-headline-mobile text-[18px] text-primary-container font-bold">
                Últimas Cotizaciones
              </h3>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-industrial-gray text-[18px]">search</span>
                  <input
                    className="pl-8 pr-3 py-1.5 border border-outline-variant font-body text-sm focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container w-48 lg:w-64 bg-surface-container-lowest placeholder:text-outline"
                    placeholder="Buscar ID o Cliente..."
                    type="text"
                  />
                </div>
                <button className="px-3 py-1.5 border border-outline-variant hover:bg-surface-container text-industrial-gray flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  <span className="text-technical font-mono text-sm hidden sm:inline">Filtros</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-frost-blue bg-surface-container-low text-industrial-gray text-technical font-mono text-[12px] uppercase tracking-wider">
                    <th className="p-3 font-medium">ID</th>
                    <th className="p-3 font-medium">Cliente / Empresa</th>
                    <th className="p-3 font-medium">Servicio Solicitado</th>
                    <th className="p-3 font-medium">Fecha</th>
                    <th className="p-3 font-medium">Estado</th>
                    <th className="p-3 font-medium text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="text-body-md text-[14px]">
                  {quotes.map((q) => (
                    <tr
                      key={q.id}
                      className={`border-b border-frost-blue hover:bg-surface-bright transition-colors cursor-pointer ${
                        q.status === "Urgente" ? "bg-[#FFF6F0]" : ""
                      }`}
                    >
                      <td className="p-3 font-mono text-technical text-primary-container font-medium">
                        {q.id}
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-primary-container">{q.client}</div>
                        <div className="text-[12px] text-industrial-gray">{q.email}</div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-industrial-gray">{q.icon}</span>
                          <span>{q.service}</span>
                        </div>
                      </td>
                      <td className="p-3 font-mono text-technical text-industrial-gray">{q.date}</td>
                      <td className="p-3">
                        <StatusBadge status={q.status} />
                      </td>
                      <td className="p-3 text-right">
                        <button className="text-primary-container hover:text-safety-orange transition-colors p-1">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 border-t border-frost-blue bg-surface-container-lowest flex items-center justify-center">
              <button className="text-primary-container text-technical font-mono text-sm hover:underline hover:text-secondary-container transition-colors flex items-center gap-1">
                Ver todas las cotizaciones
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Urgente:
      "bg-[#FFEDD5] text-safety-orange border-[#FDBA74]",
    Pendiente:
      "bg-[#E0F2FE] text-on-secondary-container border-[#BAE6FD]",
    Revisado:
      "bg-[#DCFCE7] text-[#166534] border-[#86EFAC]",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-technical font-mono text-[11px] uppercase tracking-wide border ${styles[status] || ""}`}
    >
      {status}
    </span>
  );
}
