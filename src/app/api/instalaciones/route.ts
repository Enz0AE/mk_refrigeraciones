import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, tipo, dimensions, temp_range, location, details } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nombre, email y teléfono son requeridos" },
        { status: 400 },
      );
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("instalaciones").insert({
      name, email, phone, company, tipo, dimensions, temp_range, location, details,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
