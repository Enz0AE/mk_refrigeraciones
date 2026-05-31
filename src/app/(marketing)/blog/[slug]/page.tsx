import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";

export async function generateStaticParams() {
  const supabase = createAdminClient();
  const { data } = await supabase.from("blog_posts").select("slug").eq("published", true);
  return (data || []).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createAdminClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: `${post.title} — Refrigeraciones MK`,
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
  const supabase = createAdminClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

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
              <span>{post.read_time} de lectura</span>
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
