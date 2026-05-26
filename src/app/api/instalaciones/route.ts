import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, contact, chamberType, volume, location, details } = body;

    if (!company || !contact) {
      return NextResponse.json(
        { error: "Empresa y contacto son requeridos" },
        { status: 400 }
      );
    }

    console.log("🏭 Instalaciones:", { company, contact, chamberType, volume, location, details });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
