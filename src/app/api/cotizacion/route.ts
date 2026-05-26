import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, temp, volume, location, name, company, email, phone, details } = body;

    if (!service || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Servicio, nombre, email y teléfono son requeridos" },
        { status: 400 }
      );
    }

    console.log("💰 Cotización:", { service, temp, volume, location, name, company, email, phone, details });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
