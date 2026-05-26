import { BetaAnalyticsDataClient } from "@google-analytics/data";

export interface AnalyticsData {
  activeUsers7d: number;
  activeUsers30d: number;
  totalSessions7d: number;
  topPages: { path: string; title: string; views: number }[];
}

function getClient(): {
  client: BetaAnalyticsDataClient;
  propertyId: string;
} | null {
  const clientEmail = process.env.GA_CLIENT_EMAIL;
  const privateKey = process.env.GA_PRIVATE_KEY;
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!clientEmail || !privateKey || !propertyId) return null;

  return {
    client: new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
    }),
    propertyId,
  };
}

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

function extractValue(
  result: unknown,
): number {
  const rows = (result as { rows?: { metricValues?: { value?: string }[] }[] })?.rows;
  return Number(rows?.[0]?.metricValues?.[0]?.value) || 0;
}

function extractTopPages(
  result: unknown,
): { path: string; title: string; views: number }[] {
  const rows = (result as {
    rows?: {
      dimensionValues?: { value?: string }[];
      metricValues?: { value?: string }[];
    }[];
  })?.rows;
  if (!rows) return [];
  return rows.map((row) => ({
    path: row.dimensionValues?.[0]?.value || "",
    title: row.dimensionValues?.[1]?.value || "",
    views: Number(row.metricValues?.[0]?.value) || 0,
  }));
}

export async function getAnalyticsData(): Promise<AnalyticsData> {
  const configured = getClient();
  if (!configured) {
    return { activeUsers7d: 0, activeUsers30d: 0, totalSessions7d: 0, topPages: [] };
  }

  const { client, propertyId } = configured;
  const property = `properties/${propertyId}`;
  const now = new Date();
  const d7 = formatDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000));
  const d30 = formatDate(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000));
  const today = formatDate(now);

  try {
    const [users7d] = (await client.runReport({
      property,
      dateRanges: [{ startDate: d7, endDate: today }],
      metrics: [{ name: "activeUsers" }],
    })) as unknown as [unknown];

    const [users30d] = (await client.runReport({
      property,
      dateRanges: [{ startDate: d30, endDate: today }],
      metrics: [{ name: "activeUsers" }],
    })) as unknown as [unknown];

    const [sessions] = (await client.runReport({
      property,
      dateRanges: [{ startDate: d7, endDate: today }],
      metrics: [{ name: "sessions" }],
    })) as unknown as [unknown];

    const [topPages] = (await client.runReport({
      property,
      dateRanges: [{ startDate: d7, endDate: today }],
      dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 5,
    })) as unknown as [unknown];

    return {
      activeUsers7d: extractValue(users7d),
      activeUsers30d: extractValue(users30d),
      totalSessions7d: extractValue(sessions),
      topPages: extractTopPages(topPages),
    };
  } catch (error) {
    console.error("GA4 API error:", error);
    return { activeUsers7d: 0, activeUsers30d: 0, totalSessions7d: 0, topPages: [] };
  }
}
