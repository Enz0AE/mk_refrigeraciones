// Seed script para equipos
// Uso: node scripts/seed-equipos.mjs
// Requiere SUPABASE_URL y SUPABASE_SERVICE_KEY en el entorno
// Obtén la service_role key en: Supabase Dashboard → Project Settings → API

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Faltan variables de entorno:");
  console.error("  SUPABASE_URL o NEXT_PUBLIC_SUPABASE_URL");
  console.error("  SUPABASE_SERVICE_KEY (service_role key de Supabase)");
  console.error("\nObtenla en: Supabase Dashboard → Project Settings → API → service_role key");
  process.exit(1);
}

const headers = {
  "Content-Type": "application/json",
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
  Prefer: "return=representation",
};

const EQUIPOS = [
  {
    tipo: "contenedores",
    nombre: "Contenedor 12,2 m High Cube",
    descripcion:
      "Máxima capacidad para almacenamiento masivo. Ideal para frigoríficos y centros logísticos.",
    especificaciones: [
      { clave: "Volumen", valor: "67.5 m³" },
      { clave: "Rango Temp", valor: "-25°C a +25°C" },
      { clave: "Consumo", valor: "12 kW/h max" },
    ],
    publicado: true,
    orden: 0,
  },
  {
    tipo: "contenedores",
    nombre: "Modelo 6,1 m",
    descripcion:
      "Solución versátil para espacios intermedios y locales comerciales.",
    especificaciones: [
      { clave: "Volumen", valor: "28.3 m³" },
      { clave: "Largo ext", valor: "6.06 m" },
    ],
    publicado: true,
    orden: 1,
  },
  {
    tipo: "contenedores",
    nombre: "Modelo 3,0 m",
    descripcion:
      "Ultra compacto. Perfecto para eventos o expansiones rápidas.",
    especificaciones: [
      { clave: "Volumen", valor: "14.1 m³" },
      { clave: "Largo ext", valor: "2.99 m" },
    ],
    publicado: true,
    orden: 2,
  },
  {
    tipo: "comercial",
    nombre: "Exhibidores Verticales de Lácteos",
    descripcion:
      "Cortinas de aire optimizadas para reducir la pérdida de frío. Iluminación LED integrada de alta fidelidad cromática.",
    especificaciones: [
      { clave: "Temp", valor: "2°C a 8°C" },
      { clave: "Módulos", valor: "Desde 1.25m a 3.75m" },
    ],
    publicado: true,
    orden: 3,
  },
  {
    tipo: "comercial",
    nombre: "Bateas Carniceras Inox",
    descripcion:
      "Interior en acero inoxidable AISI 304. Sistema de frío estático o forzado según requerimiento del cliente.",
    especificaciones: [
      { clave: "Temp", valor: "0°C a 5°C" },
      { clave: "Profundidad", valor: "900mm" },
    ],
    publicado: true,
    orden: 4,
  },
  {
    tipo: "evaporadores",
    nombre: "Unidades Evaporadoras",
    descripcion:
      "Sistemas de intercambio térmico de alta eficiencia para cámaras frigoríficas industriales.",
    especificaciones: [
      { clave: "Capacidad Frigorífica", valor: "Desde 2.5 kW hasta 80 kW" },
      { clave: "Paso de Aleta", valor: "4.5mm / 6.0mm / 9.0mm" },
      { clave: "Descongelamiento", valor: "Eléctrico / Gas Caliente" },
      { clave: "Carcasa", valor: "Aluminio Magnesio Pinta blanca" },
    ],
    publicado: true,
    orden: 5,
  },
];

async function main() {
  // 1. Delete existing equipos
  console.log("Eliminando equipos existentes...");
  const delRes = await fetch(`${SUPABASE_URL}/rest/v1/equipos`, {
    method: "DELETE",
    headers: { ...headers, Prefer: "" },
  });
  if (!delRes.ok && delRes.status !== 204) {
    const text = await delRes.text();
    console.error(`Error al eliminar: ${delRes.status} ${text}`);
    process.exit(1);
  }
  console.log("✓ Equipos existentes eliminados");

  // 2. Insert seed data
  console.log("Insertando equipos...");
  const insRes = await fetch(`${SUPABASE_URL}/rest/v1/equipos`, {
    method: "POST",
    headers,
    body: JSON.stringify(EQUIPOS),
  });
  if (!insRes.ok) {
    const text = await insRes.text();
    console.error(`Error al insertar: ${insRes.status} ${text}`);
    process.exit(1);
  }
  const inserted = await insRes.json();
  console.log(`✓ ${inserted.length} equipos insertados correctamente`);
}

main().catch(console.error);
