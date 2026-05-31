"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/panel-cms");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-outline-variant p-8">
        <div className="text-center mb-8">
          <h1 className="font-heading text-headline-lg text-primary mb-2">Refrigeraciones MK</h1>
          <p className="font-mono text-technical text-on-surface-variant">Panel de Gestión</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-mono text-technical text-primary mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@refrigeracionesmk.com"
              required
              className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
            />
          </div>

          <div>
            <label className="block font-mono text-technical text-primary mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-surface-bright border border-outline-variant p-3 font-body text-primary focus:border-secondary focus:border-b-2 transition-colors rounded-none"
            />
          </div>

          {error && (
            <p className="text-safety-orange font-mono text-technical">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-mono font-bold py-3 hover:bg-primary-container transition-colors text-technical disabled:opacity-50"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
