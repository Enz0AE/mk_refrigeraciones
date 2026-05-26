import Link from "next/link";

const posts = [
  {
    slug: "mantenimiento-camaras-frigorificas",
    title: "Guía de Mantenimiento para Cámaras Frigoríficas Industriales",
    excerpt: "Conozca las rutinas esenciales de mantenimiento preventivo para extender la vida útil de su cámara frigorífica y optimizar el consumo energético.",
    category: "Mantenimiento",
    date: "15 Mayo, 2024",
    readTime: "5 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFemx7OsdtB3Bt0WXTExXBp9Nc5WOdvlovAbEVDthmX7i-4EYMMTVBYSp5qlV1QvhH3_ZE9otuOOA0GC4DXmkTs4KBskxKx1p22GFUxMtvoX6TblFK8T1D4bD-3en9CaIibXzmk8agbe8GbMgxTlo3KXz3xoTmKU9Ko__clBvc2SgxwVQaqi6T4uKmyhG9vDPBwI8G1-7Z8a9mFTKNQQz6SxG5anYUMYCmtWqsdwoiKqMxEZvZvwaaNsEGLvOvyriFlQgUqJuUais",
  },
  {
    slug: "contenedor-reefer-vs-camara-fija",
    title: "Contenedor Reefer vs Cámara Frigorífica Fija: ¿Cuál Elegir?",
    excerpt: "Análisis comparativo entre contenedores refrigerados y cámaras fijas para ayudarle a decidir la mejor solución según su necesidad operativa.",
    category: "Comparativas",
    date: "2 Mayo, 2024",
    readTime: "7 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis",
  },
  {
    slug: "eficiencia-energetica-frio-industrial",
    title: "Eficiencia Energética en Instalaciones de Frío Industrial",
    excerpt: "Descubra las mejores prácticas y tecnologías disponibles para reducir el consumo energético en sus instalaciones frigoríficas.",
    category: "Eficiencia",
    date: "18 Abril, 2024",
    readTime: "6 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1whkSeMMZ0LBqwSl7d5ZCC-Y3WCMUKA1zRng1EVqqnXq5K_cfUXTtlfjdaFJdGJW_jOKbij_iQZfbn6miIVwgLshxAhXB820D2JkjEmABfAEB6OBBmYJwRHl6GGf3Cdl1JKWr8wwraICaJwSjEwMOyQqwtvNFMB51zRrf6_L1HDH6MyNmb6CoUY1nr4QREgY2Cs9_ogDyptXu7zCkigWTXHaKPtJlr4Noch1_bU5G_SufvaQMTje3kcZV8hkbHSw9o-MQXBsyCDw",
  },
  {
    slug: "normativas-camaras-frigorificas-argentina",
    title: "Normativas Vigentes para Cámaras Frigoríficas en Argentina",
    excerpt: "Resumen de las principales regulaciones y normas técnicas que rigen la instalación y operación de cámaras frigoríficas en el país.",
    category: "Normativas",
    date: "5 Abril, 2024",
    readTime: "8 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzN-bQppD639mrCGoCsJ5eJDaajpkzxGFHe2VQOjmnzmiZLqMJmMo-SRt5Svn7KncJa0Nrf_YWt8mYYxQReddi5G50vM4PDkGfxNODe8nxI9QpOVg9vI2c8Lgwk9Lfe9fiDEOwGbeKbIEyoeB8Ua5E2zseidzsWyYRMbsj00SySM8xAvB0K8w4McRjMbeGc9Qdyc436uroDLHXdm_9MS6VArFpccolYEdBlAsYidvDNgPfjlEinuR6hagMMvO0XM801YzEDowUVh0",
  },
];

const categories = ["Todos", "Mantenimiento", "Comparativas", "Eficiencia", "Normativas"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-on-primary py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-edge text-center">
          <h1 className="font-display text-display-lg mb-4">Blog Técnico</h1>
          <p className="font-body text-body-md text-surface-variant max-w-2xl mx-auto">
            Artículos, guías y novedades sobre frío industrial, mantenimiento y eficiencia energética.
          </p>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="max-w-[1280px] mx-auto px-margin-edge">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 border text-technical font-mono transition-colors ${
                  cat === "Todos"
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface-container-lowest border border-outline-variant flex flex-col group hover:border-secondary transition-colors"
              >
                <div className="relative h-56 overflow-hidden bg-surface-variant border-b border-outline-variant">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.image}
                  />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 text-technical font-mono text-[11px] font-bold uppercase border border-outline-variant">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-label-sm font-mono text-on-surface-variant mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-outline rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-headline-mobile text-primary mb-3 group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="font-body text-body-md text-on-surface-variant flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 font-mono text-technical text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Leer más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
