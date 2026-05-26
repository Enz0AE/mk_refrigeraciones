import AuthGuard from "@/components/AuthGuard";

export default function CMSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthGuard>{children}</AuthGuard>;
}
