import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-section-gap text-center">
      <span className="material-symbols-outlined text-8xl text-outline mb-6">ac_unit</span>
      <h1 className="font-display text-display-lg text-primary mb-4">Página no encontrada</h1>
      <p className="font-body text-body-md text-on-surface-variant max-w-md mb-8">
        La página que busca no existe o fue movida. Puede que el enlace esté desactualizado.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-mono font-bold px-8 py-4 hover:bg-primary-container transition-colors text-technical"
      >
        Volver al Inicio
      </Link>
    </section>
  );
}
