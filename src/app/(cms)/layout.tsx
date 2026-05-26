"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";

const NAV_ITEMS = [
  { href: "/panel-cms", label: "Dashboard", icon: "dashboard" },
  { href: "/panel-cms/equipos", label: "Equipos", icon: "precision_manufacturing" },
];

export default function CMSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <AuthGuard>{children}</AuthGuard>;
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-surface">
        {/* Top Navigation */}
        <header className="bg-primary text-white border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex items-center h-14 gap-6">
            <Link
              href="/panel-cms"
              className="font-display text-lg font-bold tracking-tight"
            >
              MK CMS
            </Link>
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/panel-cms"
                    ? pathname === "/panel-cms"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-sm transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>
        {children}
      </div>
    </AuthGuard>
  );
}
