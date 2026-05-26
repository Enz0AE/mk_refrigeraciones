import { NextResponse } from "next/server";
import { getAnalyticsData } from "@/lib/analytics";

export async function GET() {
  const data = await getAnalyticsData();
  return NextResponse.json(data);
}
