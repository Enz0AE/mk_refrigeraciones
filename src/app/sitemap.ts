import type { MetadataRoute } from "next";

const posts = [
  "mantenimiento-camaras-frigorificas",
  "contenedor-reefer-vs-camara-fija",
  "eficiencia-energetica-frio-industrial",
  "normativas-camaras-frigorificas-argentina",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://mkrefrigeraciones.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://mkrefrigeraciones.com/instalaciones", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://mkrefrigeraciones.com/equipos", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://mkrefrigeraciones.com/nosotros", lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: "https://mkrefrigeraciones.com/contacto", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://mkrefrigeraciones.com/cotizacion", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://mkrefrigeraciones.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://mkrefrigeraciones.com/casos-de-exito", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((slug) => ({
    url: `https://mkrefrigeraciones.com/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
