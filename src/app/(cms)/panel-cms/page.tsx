"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import FormSubmissionsTabs from "@/components/FormSubmissionsTabs";
import SubmissionDetailModal from "@/components/SubmissionDetailModal";
import BlogEditor from "@/components/BlogEditor";
import AnalyticsWidgets from "@/components/AnalyticsWidgets";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
}

interface BlogPostFull extends BlogPost {
  excerpt: string;
  content: string;
  category: string;
  date: string;
  read_time: string;
  image: string;
}

interface Submission {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
  [key: string]: unknown;
}

type TabType = "cotizaciones" | "contactos" | "instalaciones";

export default function PanelCMSPage() {
  const [cotizaciones, setCotizaciones] = useState<Submission[]>([]);
  const [contactos, setContactos] = useState<Submission[]>([]);
  const [instalaciones, setInstalaciones] = useState<Submission[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalType, setModalType] = useState<TabType | null>(null);
  const [modalData, setModalData] = useState<Submission | null>(null);

  const [blogEditorPost, setBlogEditorPost] = useState<BlogPostFull | null | undefined>(undefined);

  const fetchPosts = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("id, title, slug, published")
      .order("created_at", { ascending: false });
    if (data) setBlogPosts(data as BlogPost[]);
  }, []);

  useEffect(() => {
    const supabase = createClient();

    Promise.all([
      supabase.from("cotizaciones").select("*").order("created_at", { ascending: false }),
      supabase.from("contactos").select("*").order("created_at", { ascending: false }),
      supabase.from("instalaciones").select("*").order("created_at", { ascending: false }),
      supabase.from("blog_posts").select("id, title, slug, published").order("created_at", { ascending: false }),
    ]).then(([cotRes, conRes, insRes, blogRes]) => {
      if (cotRes.data) setCotizaciones(cotRes.data as Submission[]);
      if (conRes.data) setContactos(conRes.data as Submission[]);
      if (insRes.data) setInstalaciones(insRes.data as Submission[]);
      if (blogRes.data) setBlogPosts(blogRes.data as BlogPost[]);
      setLoading(false);
    });
  }, []);

  const handleSelectItem = (type: TabType, item: Submission) => {
    setModalType(type);
    setModalData(item);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setModalData(null);
  };

  const handleEditBlog = async (post: BlogPost) => {
    const supabase = createClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", post.id)
      .single();
    if (data) setBlogEditorPost(data as BlogPostFull);
  };

  const handleNewBlog = () => {
    setBlogEditorPost(null);
  };

  const handleBlogSaved = () => {
    setBlogEditorPost(undefined);
    fetchPosts();
  };

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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white border border-outline-variant p-4 md:p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Cotizaciones</p>
          <p className="font-display text-display-lg text-primary">{cotizaciones.length}</p>
        </div>
        <div className="bg-white border border-outline-variant p-4 md:p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Contactos</p>
          <p className="font-display text-display-lg text-primary">{contactos.length}</p>
        </div>
        <div className="bg-white border border-outline-variant p-4 md:p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Instalaciones</p>
          <p className="font-display text-display-lg text-primary">{instalaciones.length}</p>
        </div>
        <div className="bg-white border border-outline-variant p-4 md:p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Blog Posts</p>
          <p className="font-display text-display-lg text-primary">{blogPosts.length}</p>
        </div>
        <div className="bg-white border border-outline-variant p-4 md:p-6">
          <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">Publicados</p>
          <p className="font-display text-display-lg text-primary">{blogPosts.filter((p) => p.published).length}</p>
        </div>
      </div>

      {/* Google Analytics */}
      <AnalyticsWidgets />

      {/* Blog Posts */}
      <div className="bg-white border border-outline-variant mb-8">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-heading text-headline-mobile text-primary">Blog Posts</h2>
          <button
            onClick={handleNewBlog}
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
                        onClick={() => handleEditBlog(post)}
                        className="text-technical font-mono text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                      >
                        Editar
                      </button>
                      <button
                        onClick={async () => {
                          const supabase = createClient();
                          await supabase.from("blog_posts").update({ published: !post.published }).eq("id", post.id);
                          fetchPosts();
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
                          fetchPosts();
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

      {/* Form Submissions Tabs */}
      <FormSubmissionsTabs
        cotizaciones={cotizaciones}
        contactos={contactos}
        instalaciones={instalaciones}
        onSelectItem={handleSelectItem}
      />

      {/* Detail Modal */}
      {modalType && modalData && (
        <SubmissionDetailModal
          type={modalType}
          data={modalData}
          onClose={handleCloseModal}
        />
      )}

      {/* Blog Editor Modal */}
      {blogEditorPost !== undefined && (
        <BlogEditor
          post={blogEditorPost}
          onClose={() => setBlogEditorPost(undefined)}
          onSaved={handleBlogSaved}
        />
      )}
    </div>
  );
}
