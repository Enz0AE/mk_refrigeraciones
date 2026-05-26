"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import imageCompression from "browser-image-compression";

interface ImageUploadProps {
  bucket?: string;
  currentImage?: string | null;
  onUpload: (url: string) => void;
  onDelete: () => void;
}

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export default function ImageUpload({
  bucket = "images",
  currentImage,
  onUpload,
  onDelete,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSupabaseUrl =
    currentImage?.includes("supabase.co/storage/v1/object/public/");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Formato no válido. Solo PNG, JPG o WEBP.");
      return;
    }

    setUploading(true);
    try {
      const compressed = await imageCompression(file, {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });

      const supabase = createClient();
      const ext = compressed.name.split(".").pop() || "jpg";
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(fileName, compressed);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(fileName);

      onUpload(publicUrl);
    } catch {
      setError("Error al subir imagen. Intente de nuevo.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const handleDelete = async () => {
    if (!currentImage) return;
    if (!isSupabaseUrl) {
      onDelete();
      return;
    }

    setUploading(true);
    try {
      const fileName = currentImage.split("/").pop()!;
      const supabase = createClient();
      await supabase.storage.from(bucket).remove([fileName]);
      onDelete();
    } catch {
      setError("Error al eliminar imagen.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {currentImage && (
        <div className="relative w-full aspect-video bg-surface-container-low border border-outline-variant overflow-hidden rounded">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage}
            alt="Vista previa"
            className="object-contain w-full h-full"
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        <label className="cursor-pointer px-4 py-2 border border-outline-variant text-technical font-mono hover:bg-surface-container transition-colors inline-block">
          {uploading ? "Subiendo..." : currentImage ? "Cambiar Imagen" : "Seleccionar Imagen"}
          <input
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.webp"
            onChange={handleFile}
            className="hidden"
            disabled={uploading}
          />
        </label>

        {currentImage && (
          <button
            onClick={handleDelete}
            disabled={uploading}
            className="px-4 py-2 border border-safety-orange text-safety-orange text-technical font-mono hover:bg-safety-orange/5 transition-colors"
          >
            Eliminar
          </button>
        )}
      </div>

      {error && (
        <p className="text-safety-orange text-technical font-mono">{error}</p>
      )}
    </div>
  );
}
