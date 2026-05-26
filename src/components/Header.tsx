"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-on-primary sticky top-0 w-full z-50 h-20 border-b border-outline-variant">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-margin-edge w-full h-full">
        <Link
          href="/"
          className="font-heading text-headline-mobile md:text-headline-lg font-bold tracking-tighter text-on-primary"
        >
          MK REFRIGERACIONES
        </Link>
        <div className="hidden md:flex gap-gutter-md items-center h-full">
          <Link
            href="/instalaciones"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Instalaciones
          </Link>
          <Link
            href="/equipos"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Equipos
          </Link>
          <Link
            href="/nosotros"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="font-label-sm text-label-sm text-on-primary opacity-80 hover:opacity-100 h-full flex items-center hover:bg-primary-container px-4 transition-all duration-200"
          >
            Contacto
          </Link>
        </div>
        <Link
          href="/cotizacion"
          className="hidden md:inline-flex bg-safety-orange text-white font-mono font-bold px-6 py-3 hover:brightness-110 active:scale-95 transition-all duration-100 border border-transparent text-technical"
        >
          SOLICITAR PRESUPUESTO
        </Link>
        <button
          className="md:hidden text-on-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-[32px]">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-primary border-l border-outline-variant transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <span className="font-heading text-headline-mobile font-bold text-on-primary">
            Menú
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-on-primary p-1"
            aria-label="Cerrar menú"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
        </div>
        <nav className="flex flex-col py-4">
          <Link
            href="/"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/instalaciones"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Instalaciones
          </Link>
          <Link
            href="/equipos"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Equipos
          </Link>
          <Link
            href="/nosotros"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/casos-de-exito"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Casos de Éxito
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-4 text-on-primary opacity-80 hover:opacity-100 hover:bg-primary-container transition-colors font-body text-body-md"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
          <div className="border-t border-outline-variant my-4 mx-4" />
          <Link
            href="/cotizacion"
            className="mx-4 bg-safety-orange text-white font-mono font-bold px-6 py-3 text-center hover:brightness-110 transition-all text-technical"
            onClick={() => setMenuOpen(false)}
          >
            SOLICITAR PRESUPUESTO
          </Link>
        </nav>
      </div>
    </nav>
  );
}
