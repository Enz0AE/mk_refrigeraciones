"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read_time: string;
  image: string;
}

const categories = ["Todos", "Mantenimiento", "Comparativas", "Eficiencia", "Normativas"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    document.title = "Blog Técnico — Frío Industrial y Mantenimiento | MK Refrigeraciones";
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setPosts(data as BlogPost[]);
      });
  }, []);

  const filtered = activeCategory === "Todos"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

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
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border text-technical font-mono transition-colors ${
                  cat === activeCategory
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center font-body text-body-md text-on-surface-variant py-12">
              No hay artículos en esta categoría.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="bg-surface-container-lowest border border-outline-variant flex flex-col group hover:border-secondary transition-colors"
                >
                  <div className="relative h-56 overflow-hidden bg-surface-variant border-b border-outline-variant">
                    <Image
                      alt={post.title}
                      src={post.image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 text-technical font-mono text-[11px] font-bold uppercase border border-outline-variant">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-label-sm font-mono text-on-surface-variant mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-outline rounded-full" />
                      <span>{post.read_time}</span>
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
          )}
        </div>
      </section>
    </>
  );
}
