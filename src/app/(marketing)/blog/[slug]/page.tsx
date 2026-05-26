import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts = [
  {
    slug: "mantenimiento-camaras-frigorificas",
    title: "Guía de Mantenimiento para Cámaras Frigoríficas Industriales",
    excerpt: "Conozca las rutinas esenciales de mantenimiento preventivo para extender la vida útil de su cámara frigorífica y optimizar el consumo energético.",
    category: "Mantenimiento",
    date: "15 Mayo, 2024",
    readTime: "5 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFemx7OsdtB3Bt0WXTExXBp9Nc5WOdvlovAbEVDthmX7i-4EYMMTVBYSp5qlV1QvhH3_ZE9otuOOA0GC4DXmkTs4KBskxKx1p22GFUxMtvoX6TblFK8T1D4bD-3en9CaIibXzmk8agbe8GbMgxTlo3KXz3xoTmKU9Ko__clBvc2SgxwVQaqi6T4uKmyhG9vDPBwI8G1-7Z8a9mFTKNQQz6SxG5anYUMYCmtWqsdwoiKqMxEZvZvwaaNsEGLvOvyriFlQgUqJuUais",
    content: `
      <p>Las cámaras frigoríficas industriales son activos críticos en la cadena de frío. Un mantenimiento deficiente no solo reduce su vida útil, sino que incrementa significativamente el consumo energético (hasta un 30% extra).</p>
      <h2>Rutina Diaria</h2>
      <ul>
        <li>Verificar temperaturas de operación y alarmas del panel de control</li>
        <li>Inspeccionar visualmente burletes y cierres de puertas</li>
        <li>Revisar la acumulación de hielo en evaporadores</li>
      </ul>
      <h2>Mantenimiento Semanal</h2>
      <ul>
        <li>Limpiar condensadores y baterías de intercambio térmico</li>
        <li>Verificar niveles de refrigerante y presión de aceite</li>
        <li>Inspeccionar drenajes de bandejas de condensado</li>
      </ul>
      <h2>Mantenimiento Mensual</h2>
      <ul>
        <li>Revisar y limpiar filtros de aire y rejillas de ventilación</li>
        <li>Calibrar sensores de temperatura y presión</li>
        <li>Verificar el estado de aislación de tuberías</li>
      </ul>
      <p>Un plan de mantenimiento preventivo bien ejecutado reduce paradas no programadas en un 80% y extiende la vida útil del equipo hasta 15 años.</p>
    `,
  },
  {
    slug: "contenedor-reefer-vs-camara-fija",
    title: "Contenedor Reefer vs Cámara Frigorífica Fija: ¿Cuál Elegir?",
    excerpt: "Análisis comparativo entre contenedores refrigerados y cámaras fijas para ayudarle a decidir la mejor solución según su necesidad operativa.",
    category: "Comparativas",
    date: "2 Mayo, 2024",
    readTime: "7 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis",
    content: `
      <p>Una de las decisiones más comunes en la industria es elegir entre un contenedor reefer y una cámara frigorífica fija. Ambas soluciones tienen aplicaciones específicas y ventajas particulares.</p>
      <h2>Contenedor Reefer</h2>
      <p>Ideal para necesidades temporales, expansiones rápidas o presupuestos limitados. Su principal ventaja es la movilidad y la entrega inmediata.</p>
      <h2>Cámara Frigorífica Fija</h2>
      <p>La mejor opción para operaciones permanentes que requieren eficiencia energética a largo plazo y personalización completa del espacio.</p>
    `,
  },
  {
    slug: "eficiencia-energetica-frio-industrial",
    title: "Eficiencia Energética en Instalaciones de Frío Industrial",
    excerpt: "Descubra las mejores prácticas y tecnologías disponibles para reducir el consumo energético en sus instalaciones frigoríficas.",
    category: "Eficiencia",
    date: "18 Abril, 2024",
    readTime: "6 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1whkSeMMZ0LBqwSl7d5ZCC-Y3WCMUKA1zRng1EVqqnXq5K_cfUXTtlfjdaFJdGJW_jOKbij_iQZfbn6miIVwgLshxAhXB820D2JkjEmABfAEB6OBBmYJwRHl6GGf3Cdl1JKWr8wwraICaJwSjEwMOyQqwtvNFMB51zRrf6_L1HDH6MyNmb6CoUY1nr4QREgY2Cs9_ogDyptXu7zCkigWTXHaKPtJlr4Noch1_bU5G_SufvaQMTje3kcZV8hkbHSw9o-MQXBsyCDw",
    content: `
      <p>El consumo energético representa entre el 30% y 50% del costo operativo de una instalación frigorífica. Optimizarlo no solo reduce gastos, sino que también disminuye la huella de carbono.</p>
      <h2>Aislamiento Térmico</h2>
      <p>Un adecuado espesor de panel y la correcta instalación de barreras de vapor pueden reducir la carga térmica hasta un 40%.</p>
      <h2>Sistemas de Control</h2>
      <p>La implementación de variadores de frecuencia en compresores y ventiladores permite ajustar la potencia al requerimiento real, logrando ahorros de hasta un 35%.</p>
    `,
  },
  {
    slug: "normativas-camaras-frigorificas-argentina",
    title: "Normativas Vigentes para Cámaras Frigoríficas en Argentina",
    excerpt: "Resumen de las principales regulaciones y normas técnicas que rigen la instalación y operación de cámaras frigoríficas en el país.",
    category: "Normativas",
    date: "5 Abril, 2024",
    readTime: "8 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzN-bQppD639mrCGoCsJ5eJDaajpkzxGFHe2VQOjmnzmiZLqMJmMo-SRt5Svn7KncJa0Nrf_YWt8mYYxQReddi5G50vM4PDkGfxNODe8nxI9QpOVg9vI2c8Lgwk9Lfe9fiDEOwGbeKbIEyoeB8Ua5E2zseidzsWyYRMbsj00SySM8xAvB0K8w4McRjMbeGc9Qdyc436uroDLHXdm_9MS6VArFpccolYEdBlAsYidvDNgPfjlEinuR6hagMMvO0XM801YzEDowUVh0",
    content: `
      <p>La instalación y operación de cámaras frigoríficas en Argentina está regulada por diversas normas nacionales e internacionales que garantizan la seguridad alimentaria y la eficiencia del sistema.</p>
      <h2>Normas IRAM</h2>
      <p>Las normas IRAM establecen los estándares de calidad para materiales aislantes, paneles y sistemas de refrigeración en el mercado argentino.</p>
      <h2>Regulaciones SENASA</h2>
      <p>El Servicio Nacional de Sanidad y Calidad Agroalimentaria regula las condiciones sanitarias de las cámaras destinadas a alimentos.</p>
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: `${post.title} — MK Refrigeraciones`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-technical text-surface-variant hover:text-white transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Volver al Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary font-mono text-[12px] font-bold uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-display-lg mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 font-mono text-label-sm text-surface-variant">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-outline rounded-full" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-md">
            <article className="lg:col-span-8">
              <div className="relative h-80 md:h-96 overflow-hidden bg-surface-variant border border-outline-variant mb-8">
                <Image
                  alt={post.title}
                  src={post.image}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <div
                className="font-body text-body-md text-on-surface-variant space-y-6 [&_h2]:font-heading [&_h2]:text-headline-mobile [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-body-md"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
            <aside className="lg:col-span-4">
              <div className="sticky top-28 bg-surface-container-lowest border border-outline-variant p-6">
                <h3 className="font-heading text-headline-mobile text-primary mb-4">
                  ¿Necesita Asesoramiento?
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-6">
                  Contáctenos para recibir una evaluación técnica personalizada para su proyecto.
                </p>
                <Link
                  href="/cotizacion"
                  className="block w-full bg-safety-orange text-white font-mono font-bold px-6 py-3 text-center hover:brightness-110 transition-all text-technical"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
