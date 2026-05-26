"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/client";
import ImageUpload from "@/components/ImageUpload";

const QuillEditor = dynamic(() => import("@/components/QuillEditor"), {
  ssr: false,
  loading: () => (
    <div className="h-[260px] bg-surface-container-low animate-pulse rounded border border-outline-variant" />
  ),
});

interface BlogPostFull {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  read_time: string;
  image: string;
  published: boolean;
}

interface BlogEditorProps {
  post?: BlogPostFull | null;
  onClose: () => void;
  onSaved: () => void;
}

const CATEGORIES = [
  "Mantenimiento",
  "Comparativas",
  "Eficiencia",
  "Normativas",
  "General",
];

export default function BlogEditor({ post, onClose, onSaved }: BlogEditorProps) {
  const isEdit = !!post;
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "<p></p>");
  const [category, setCategory] = useState(post?.category || "General");
  const [readTime, setReadTime] = useState(post?.read_time || "5 min");
  const [image, setImage] = useState(post?.image || "");
  const [published, setPublished] = useState(post?.published ?? false);

  const generateSlug = (t: string) =>
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const handleTitleChange = (t: string) => {
    setTitle(t);
    if (!isEdit) setSlug(generateSlug(t));
  };

  const handleSave = async () => {
    if (!title.trim()) return;
    setSaving(true);

    const supabase = createClient();
    const payload = {
      slug,
      title,
      excerpt,
      content,
      category,
      date: post?.date || new Date().toLocaleDateString("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      read_time: readTime,
      image,
      published,
    };

    if (isEdit) {
      await supabase.from("blog_posts").update(payload).eq("id", post!.id);
    } else {
      await supabase.from("blog_posts").insert(payload);
    }

    setSaving(false);
    onSaved();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white border border-outline-variant w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-outline-variant bg-surface-container-low">
          <h2 className="font-heading text-headline-mobile text-primary">
            {isEdit ? "Editar Post" : "Nuevo Post"}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-surface-variant transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* Title + Slug */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Título
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 border border-outline-variant font-body text-body-md bg-white focus:outline-none focus:border-primary"
              placeholder="Título del post"
            />
          </div>

          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2 border border-outline-variant font-mono text-technical bg-surface-container-low focus:outline-none focus:border-primary"
              placeholder="url-amigable-del-post"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Extracto
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-outline-variant font-body text-body-md bg-white focus:outline-none focus:border-primary resize-none"
              placeholder="Breve descripción para la tarjeta del blog..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Contenido
            </label>
            <QuillEditor value={content} onChange={setContent} />
          </div>

          {/* Category + Read Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
                Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-outline-variant font-body bg-white focus:outline-none focus:border-primary"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
                Tiempo de Lectura
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-3 py-2 border border-outline-variant font-mono text-technical bg-white focus:outline-none focus:border-primary"
                placeholder="5 min"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block font-mono text-technical text-on-surface-variant uppercase mb-1">
              Imagen de Portada
            </label>
            <ImageUpload
              currentImage={image || null}
              onUpload={(url) => setImage(url)}
              onDelete={() => setImage("")}
            />
          </div>

          {/* Published */}
          <div className="flex items-center gap-3 pt-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-surface-variant border border-outline-variant peer-checked:bg-primary peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:w-4 after:h-4 after:border after:border-outline-variant after:peer-checked:border-white after:peer-checked:start-[22px] after:transition-all" />
            </label>
            <span className="font-mono text-technical text-on-surface-variant">
              {published ? "Publicado" : "Borrador"}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-outline-variant bg-surface-container-low">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-outline-variant text-on-surface-variant font-mono text-technical hover:bg-surface-variant transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !title.trim()}
            className="px-6 py-2 bg-primary text-white font-mono font-bold text-technical hover:bg-primary-container transition-colors disabled:opacity-50"
          >
            {saving ? "Guardando..." : isEdit ? "Guardar Cambios" : "Crear Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
