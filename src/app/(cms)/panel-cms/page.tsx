"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Cotizacion {
  id: string;
  name: string;
  email: string;
  service: string;
  status: string;
  created_at: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
}

export default function PanelCMSPage() {
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [cotizacionesCount, setCotizacionesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    Promise.all([
      supabase.from("cotizaciones").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("cotizaciones").select("*", { count: "exact", head: true }),
      supabase.from("blog_posts").select("id, title, slug, published").order("created_at", { ascending: false }),
    ]).then(([cotizacionesRes, countRes, blogRes]) => {
      if (cotizacionesRes.data) setCotizaciones(cotizacionesRes.data as Cotizacion[]);
      if (countRes.count !== null) setCotizacionesCount(countRes.count);
      if (blogRes.data) setBlogPosts(blogRes.data as BlogPost[]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="font-mono text-technical text-on-surface-variant">Cargando panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-headline-lg text-primary">Panel de Gestión</h1>
          <p className="font-mono text-technical text-on-surface-variant">MK Refrigeraciones — CMS</p>
        </div>
        <button
          onClick={async () => {
            const supabase = createClient();
            await supabase.auth.signOut();
            window.location.href = "/login";
          }}
          className="flex items-center gap-2 px-4 py-2 border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors font-mono text-technical"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          Cerrar Sesión
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-outline-variant p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Cotizaciones</p>
          <p className="font-display text-display-lg text-primary">{cotizacionesCount}</p>
        </div>
        <div className="bg-white border border-outline-variant p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Blog Posts</p>
          <p className="font-display text-display-lg text-primary">{blogPosts.length}</p>
        </div>
        <div className="bg-white border border-outline-variant p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Publicados</p>
          <p className="font-display text-display-lg text-primary">{blogPosts.filter((p) => p.published).length}</p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-white border border-outline-variant mb-8">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-heading text-headline-mobile text-primary">Blog Posts</h2>
          <button
            onClick={async () => {
              const title = prompt("Título del nuevo post:");
              if (!title) return;
              const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              const supabase = createClient();
              await supabase.from("blog_posts").insert({
                slug,
                title,
                excerpt: "Escribí una descripción...",
                content: "<p>Contenido del post</p>",
                category: "General",
                date: new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" }),
                read_time: "1 min",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFemx7OsdtB3Bt0WXTExXBp9Nc5WOdvlovAbEVDthmX7i-4EYMMTVBYSp5qlV1QvhH3_ZE9otuOOA0GC4DXmkTs4KBskxKx1p22GFUxMtvoX6TblFK8T1D4bD-3en9CaIibXzmk8agbe8GbMgxTlo3KXz3xoTmKU9Ko__clBvc2SgxwVQaqi6T4uKmyhG9vDPBwI8G1-7Z8a9mFTKNQQz6SxG5anYUMYCmtWqsdwoiKqMxEZvZvwaaNsEGLvOvyriFlQgUqJuUais",
                published: false,
              });
              window.location.reload();
            }}
            className="bg-primary text-white font-mono font-bold px-4 py-2 text-technical hover:bg-primary-container transition-colors"
          >
            Nuevo Post
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low text-technical font-mono text-xs uppercase text-on-surface-variant">
                <th className="p-3 font-medium">Título</th>
                <th className="p-3 font-medium">Slug</th>
                <th className="p-3 font-medium">Estado</th>
                <th className="p-3 font-medium text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.id} className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="p-3 font-body text-primary font-medium">{post.title}</td>
                  <td className="p-3 font-mono text-technical text-on-surface-variant">{post.slug}</td>
                  <td className="p-3">
                    <span className={`inline-flex px-2 py-0.5 font-mono text-xs uppercase border ${
                      post.published
                        ? "bg-[#DCFCE7] text-[#166534] border-[#86EFAC]"
                        : "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]"
                    }`}>
                      {post.published ? "Publicado" : "Borrador"}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={async () => {
                          const supabase = createClient();
                          await supabase.from("blog_posts").update({ published: !post.published }).eq("id", post.id);
                          window.location.reload();
                        }}
                        className="text-technical font-mono text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                      >
                        {post.published ? "Archivar" : "Publicar"}
                      </button>
                      <button
                        onClick={async () => {
                          if (!confirm(`¿Eliminar "${post.title}"?`)) return;
                          const supabase = createClient();
                          await supabase.from("blog_posts").delete().eq("id", post.id);
                          window.location.reload();
                        }}
                        className="text-technical font-mono text-safety-orange hover:text-red-700 transition-colors px-2 py-1"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Últimas Cotizaciones */}
      <div className="bg-white border border-outline-variant">
        <div className="p-4 border-b border-outline-variant">
          <h2 className="font-heading text-headline-mobile text-primary">Últimas Cotizaciones</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low text-technical font-mono text-xs uppercase text-on-surface-variant">
                <th className="p-3 font-medium">Cliente</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Servicio</th>
                <th className="p-3 font-medium">Estado</th>
                <th className="p-3 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {cotizaciones.map((c) => (
                <tr key={c.id} className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                  <td className="p-3 font-body text-primary font-medium">{c.name}</td>
                  <td className="p-3 font-mono text-technical text-on-surface-variant">{c.email}</td>
                  <td className="p-3 text-on-surface-variant">{c.service}</td>
                  <td className="p-3">
                    <span className="inline-flex px-2 py-0.5 font-mono text-xs uppercase border bg-[#E0F2FE] text-[#0369a1] border-[#BAE6FD]">
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-technical text-on-surface-variant">
                    {new Date(c.created_at).toLocaleDateString("es-AR")}
                  </td>
                </tr>
              ))}
              {cotizaciones.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-on-surface-variant font-body">
                    No hay cotizaciones aún.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
