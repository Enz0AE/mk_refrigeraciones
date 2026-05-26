"use client";

import { useEffect, useState } from "react";
import type { AnalyticsData } from "@/lib/analytics";

export default function AnalyticsWidgets() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-white border border-outline-variant p-6">
        <p className="font-mono text-technical text-on-surface-variant uppercase mb-4">
          Google Analytics
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-surface-container-low animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const isConfigured =
    data &&
    (data.activeUsers7d > 0 ||
      data.activeUsers30d > 0 ||
      data.topPages.length > 0);

  return (
    <div className="bg-white border border-outline-variant mb-8">
      <div className="p-4 border-b border-outline-variant">
        <h2 className="font-heading text-headline-mobile text-primary">
          Google Analytics
        </h2>
      </div>

      {!isConfigured ? (
        <div className="p-6 text-center">
          <p className="font-body text-body-md text-on-surface-variant mb-1">
            Google Analytics no configurado.
          </p>
          <p className="font-mono text-technical text-on-surface-variant">
            Agregue <code className="bg-surface-variant px-1">GA_CLIENT_EMAIL</code>,{" "}
            <code className="bg-surface-variant px-1">GA_PRIVATE_KEY</code> y{" "}
            <code className="bg-surface-variant px-1">GA_PROPERTY_ID</code> en{" "}
            <code className="bg-surface-variant px-1">.env.local</code>.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="border border-outline-variant p-4">
              <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">
                Usuarios (7d)
              </p>
              <p className="font-display text-display-lg text-primary">
                {data?.activeUsers7d ?? 0}
              </p>
            </div>
            <div className="border border-outline-variant p-4">
              <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">
                Usuarios (30d)
              </p>
              <p className="font-display text-display-lg text-primary">
                {data?.activeUsers30d ?? 0}
              </p>
            </div>
            <div className="border border-outline-variant p-4">
              <p className="font-mono text-technical text-on-surface-variant uppercase mb-1">
                Sesiones (7d)
              </p>
              <p className="font-display text-display-lg text-primary">
                {data?.totalSessions7d ?? 0}
              </p>
            </div>
          </div>

          {data?.topPages && data.topPages.length > 0 && (
            <div className="border-t border-outline-variant p-4">
              <p className="font-mono text-technical text-on-surface-variant uppercase mb-3">
                Páginas más visitadas (7d)
              </p>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-outline-variant text-technical font-mono text-xs uppercase text-on-surface-variant">
                    <th className="pb-2 font-medium">Página</th>
                    <th className="pb-2 font-medium text-right">Visitas</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.map((page, i) => (
                    <tr key={i} className="border-b border-outline-variant/50">
                      <td className="py-2 font-mono text-technical text-primary">
                        {page.title || page.path}
                      </td>
                      <td className="py-2 font-mono text-technical text-primary text-right">
                        {page.views}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
