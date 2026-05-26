import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/panel-cms", "/api/"],
      },
    ],
    sitemap: "https://mkrefrigeraciones.com/sitemap.xml",
  };
}
