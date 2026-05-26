-- ============================================================
-- MK Refrigeraciones — Supabase Schema
-- Idempotent: safe to run multiple times
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. TABLAS
-- ------------------------------------------------

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  read_time TEXT NOT NULL,
  image TEXT NOT NULL,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS equipos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tipo TEXT NOT NULL,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  especificaciones JSONB DEFAULT '[]',
  imagen TEXT,
  publicado BOOLEAN DEFAULT true,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS servicios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  icono TEXT,
  imagen TEXT,
  orden INTEGER DEFAULT 0,
  publicado BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cotizaciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service TEXT,
  temp TEXT,
  volume TEXT,
  location TEXT,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  details TEXT,
  status TEXT DEFAULT 'pendiente',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contactos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pendiente',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS instalaciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  tipo TEXT,
  dimensions TEXT,
  temp_range TEXT,
  location TEXT,
  details TEXT,
  status TEXT DEFAULT 'pendiente',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. SEED DATA (only if blog_posts is empty)
-- ------------------------------------------------

INSERT INTO blog_posts (slug, title, excerpt, content, category, date, read_time, image)
SELECT * FROM (VALUES
(
  'mantenimiento-camaras-frigorificas',
  'Guía de Mantenimiento para Cámaras Frigoríficas Industriales',
  'Conozca las rutinas esenciales de mantenimiento preventivo para extender la vida útil de su cámara frigorífica y optimizar el consumo energético.',
  '<p>Las cámaras frigoríficas industriales son activos críticos en la cadena de frío. Un mantenimiento deficiente no solo reduce su vida útil, sino que incrementa significativamente el consumo energético (hasta un 30% extra).</p><h2>Rutina Diaria</h2><ul><li>Verificar temperaturas de operación y alarmas del panel de control</li><li>Inspeccionar visualmente burletes y cierres de puertas</li><li>Revisar la acumulación de hielo en evaporadores</li></ul><h2>Mantenimiento Semanal</h2><ul><li>Limpiar condensadores y baterías de intercambio térmico</li><li>Verificar niveles de refrigerante y presión de aceite</li><li>Inspeccionar drenajes de bandejas de condensado</li></ul><h2>Mantenimiento Mensual</h2><ul><li>Revisar y limpiar filtros de aire y rejillas de ventilación</li><li>Calibrar sensores de temperatura y presión</li><li>Verificar el estado de aislación de tuberías</li></ul><p>Un plan de mantenimiento preventivo bien ejecutado reduce paradas no programadas en un 80% y extiende la vida útil del equipo hasta 15 años.</p>',
  'Mantenimiento',
  '15 Mayo, 2024',
  '5 min',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFemx7OsdtB3Bt0WXTExXBp9Nc5WOdvlovAbEVDthmX7i-4EYMMTVBYSp5qlV1QvhH3_ZE9otuOOA0GC4DXmkTs4KBskxKx1p22GFUxMtvoX6TblFK8T1D4bD-3en9CaIibXzmk8agbe8GbMgxTlo3KXz3xoTmKU9Ko__clBvc2SgxwVQaqi6T4uKmyhG9vDPBwI8G1-7Z8a9mFTKNQQz6SxG5anYUMYCmtWqsdwoiKqMxEZvZvwaaNsEGLvOvyriFlQgUqJuUais'
),
(
  'contenedor-reefer-vs-camara-fija',
  'Contenedor Reefer vs Cámara Frigorífica Fija: ¿Cuál Elegir?',
  'Análisis comparativo entre contenedores refrigerados y cámaras fijas para ayudarle a decidir la mejor solución según su necesidad operativa.',
  '<p>Una de las decisiones más comunes en la industria es elegir entre un contenedor reefer y una cámara frigorífica fija. Ambas soluciones tienen aplicaciones específicas y ventajas particulares.</p><h2>Contenedor Reefer</h2><p>Ideal para necesidades temporales, expansiones rápidas o presupuestos limitados. Su principal ventaja es la movilidad y la entrega inmediata.</p><h2>Cámara Frigorífica Fija</h2><p>La mejor opción para operaciones permanentes que requieren eficiencia energética a largo plazo y personalización completa del espacio.</p>',
  'Comparativas',
  '2 Mayo, 2024',
  '7 min',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis'
),
(
  'eficiencia-energetica-frio-industrial',
  'Eficiencia Energética en Instalaciones de Frío Industrial',
  'Descubra las mejores prácticas y tecnologías disponibles para reducir el consumo energético en sus instalaciones frigoríficas.',
  '<p>El consumo energético representa entre el 30% y 50% del costo operativo de una instalación frigorífica. Optimizarlo no solo reduce gastos, sino que también disminuye la huella de carbono.</p><h2>Aislamiento Térmico</h2><p>Un adecuado espesor de panel y la correcta instalación de barreras de vapor pueden reducir la carga térmica hasta un 40%.</p><h2>Sistemas de Control</h2><p>La implementación de variadores de frecuencia en compresores y ventiladores permite ajustar la potencia al requerimiento real, logrando ahorros de hasta un 35%.</p>',
  'Eficiencia',
  '18 Abril, 2024',
  '6 min',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB1whkSeMMZ0LBqwSl7d5ZCC-Y3WCMUKA1zRng1EVqqnXq5K_cfUXTtlfjdaFJdGJW_jOKbij_iQZfbn6miIVwgLshxAhXB820D2JkjEmABfAEB6OBBmYJwRHl6GGf3Cdl1JKWr8wwraICaJwSjEwMOyQqwtvNFMB51zRrf6_L1HDH6MyNmb6CoUY1nr4QREgY2Cs9_ogDyptXu7zCkigWTXHaKPtJlr4Noch1_bU5G_SufvaQMTje3kcZV8hkbHSw9o-MQXBsyCDw'
),
(
  'normativas-camaras-frigorificas-argentina',
  'Normativas Vigentes para Cámaras Frigoríficas en Argentina',
  'Resumen de las principales regulaciones y normas técnicas que rigen la instalación y operación de cámaras frigoríficas en el país.',
  '<p>La instalación y operación de cámaras frigoríficas en Argentina está regulada por diversas normas nacionales e internacionales que garantizan la seguridad alimentaria y la eficiencia del sistema.</p><h2>Normas IRAM</h2><p>Las normas IRAM establecen los estándares de calidad para materiales aislantes, paneles y sistemas de refrigeración en el mercado argentino.</p><h2>Regulaciones SENASA</h2><p>El Servicio Nacional de Sanidad y Calidad Agroalimentaria regula las condiciones sanitarias de las cámaras destinadas a alimentos.</p>',
  'Normativas',
  '5 Abril, 2024',
  '8 min',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBzN-bQppD639mrCGoCsJ5eJDaajpkzxGFHe2VQOjmnzmiZLqMJmMo-SRt5Svn7KncJa0Nrf_YWt8mYYxQReddi5G50vM4PDkGfxNODe8nxI9QpOVg9vI2c8Lgwk9Lfe9fiDEOwGbeKbIEyoeB8Ua5E2zseidzsWyYRMbsj00SySM8xAvB0K8w4McRjMbeGc9Qdyc436uroDLHXdm_9MS6VArFpccolYEdBlAsYidvDNgPfjlEinuR6hagMMvO0XM801YzEDowUVh0'
)
) AS v(slug, title, excerpt, content, category, date, read_time, image)
WHERE NOT EXISTS (SELECT 1 FROM blog_posts LIMIT 1);

-- Equipos seed data (only if equipos is empty)
INSERT INTO equipos (tipo, nombre, descripcion, especificaciones, imagen, publicado, orden)
SELECT * FROM (VALUES
  (
    'contenedores',
    'Contenedor 12,2 m High Cube',
    'Máxima capacidad para almacenamiento masivo. Ideal para frigoríficos y centros logísticos.',
    '[{"clave":"Volumen","valor":"67.5 m³"},{"clave":"Rango Temp","valor":"-25°C a +25°C"},{"clave":"Consumo","valor":"12 kW/h max"}]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis',
    true,
    0
  ),
  (
    'contenedores',
    'Modelo 6,1 m',
    'Solución versátil para espacios intermedios y locales comerciales.',
    '[{"clave":"Volumen","valor":"28.3 m³"},{"clave":"Largo ext","valor":"6.06 m"}]'::jsonb,
    NULL,
    true,
    1
  ),
  (
    'contenedores',
    'Modelo 3,0 m',
    'Ultra compacto. Perfecto para eventos o expansiones rápidas.',
    '[{"clave":"Volumen","valor":"14.1 m³"},{"clave":"Largo ext","valor":"2.99 m"}]'::jsonb,
    NULL,
    true,
    2
  ),
  (
    'comercial',
    'Exhibidores Verticales de Lácteos',
    'Cortinas de aire optimizadas para reducir la pérdida de frío. Iluminación LED integrada de alta fidelidad cromática.',
    '[{"clave":"Temp","valor":"2°C a 8°C"},{"clave":"Módulos","valor":"Desde 1.25m a 3.75m"}]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPr04QuopphuDHaJtJtfMLZJqT8q6MNKsz1Kq92iPyupeeAiwExMd648qNTm6jjHBsJ5pxtDPP9yNltH_RolTb2u7i9WZEnkDLe6dUm0dMzxNtMTpslbJtd9ejb_pR6QkQxEYzHGnh_pKtBf7Fqgx0c3UtYqmsDym-bH_t7SDsTl4YipzmhSSQrJe-rgUkaRD-txVTf_Dd8U7ZnVPdTfZUNTGl1QEJZN4QwI_aTim-WeeC27156tzAc5Y1GzeJaShGhurZ9vhdgaU',
    true,
    3
  ),
  (
    'comercial',
    'Bateas Carniceras Inox',
    'Interior en acero inoxidable AISI 304. Sistema de frío estático o forzado según requerimiento del cliente.',
    '[{"clave":"Temp","valor":"0°C a 5°C"},{"clave":"Profundidad","valor":"900mm"}]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC0jCOvPibWbJNBAwJOD2cOETVVHg-tep2KWGk5gPzGJfrTNLdyDpOvaBJD9XJxf3Bzsw3xLwBmhGd1Hvlxu1lOvi_JMNv7GI-Qe1-I5meFxcg7_Y1OMEodw41jvezDvoUwAArPuSFCvjcXlNq6ueXzQkjd1UtoN_lIlUqKwm-zcwNJnM5qXrlTMYFOz6NMfxC1i6k_Q2fZcblHDQAkZz7gbRIoQe2NEzfLgJFZkdU6lsyCFsOl4_zf7Rf_NTDReCci7EszPVu3Nqo',
    true,
    4
  ),
  (
    'evaporadores',
    'Unidades Evaporadoras',
    'Sistemas de intercambio térmico de alta eficiencia para cámaras frigoríficas industriales.',
    '[{"clave":"Capacidad Frigorífica","valor":"Desde 2.5 kW hasta 80 kW"},{"clave":"Paso de Aleta","valor":"4.5mm / 6.0mm / 9.0mm"},{"clave":"Descongelamiento","valor":"Eléctrico / Gas Caliente"},{"clave":"Carcasa","valor":"Aluminio Magnesio Pinta blanca"}]'::jsonb,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB1whkSeMMZ0LBqwSl7d5ZCC-Y3WCMUKA1zRng1EVqqnXq5K_cfUXTtlfjdaFJdGJW_jOKbij_iQZfbn6miIVwgLshxAhXB820D2JkjEmABfAEB6OBBmYJwRHl6GGf3Cdl1JKWr8wwraICaJwSjEwMOyQqwtvNFMB51zRrf6_L1HDH6MyNmb6CoUY1nr4QREgY2Cs9_ogDyptXu7zCkigWTXHaKPtJlr4Noch1_bU5G_SufvaQMTje3kcZV8hkbHSw9o-MQXBsyCDw',
    true,
    5
  )
) AS v(tipo, nombre, descripcion, especificaciones, imagen, publicado, orden)
WHERE NOT EXISTS (SELECT 1 FROM equipos LIMIT 1);

-- 3. ROW LEVEL SECURITY
-- ------------------------------------------------

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipos ENABLE ROW LEVEL SECURITY;
ALTER TABLE servicios ENABLE ROW LEVEL SECURITY;
ALTER TABLE cotizaciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;
ALTER TABLE instalaciones ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  -- Public read for published content
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='blog_posts'    AND policyname='Public blog read')     THEN CREATE POLICY "Public blog read"     ON blog_posts FOR SELECT USING (published = true);     END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='equipos'       AND policyname='Public equipos read')   THEN CREATE POLICY "Public equipos read"   ON equipos FOR SELECT USING (publicado = true);   END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='servicios'     AND policyname='Public servicios read') THEN CREATE POLICY "Public servicios read" ON servicios FOR SELECT USING (publicado = true); END IF;

  -- Public insert for form submissions
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='cotizaciones'  AND policyname='Public insert cotizaciones')  THEN CREATE POLICY "Public insert cotizaciones"  ON cotizaciones FOR INSERT WITH CHECK (true);  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='contactos'     AND policyname='Public insert contactos')     THEN CREATE POLICY "Public insert contactos"     ON contactos FOR INSERT WITH CHECK (true);     END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='instalaciones' AND policyname='Public insert instalaciones') THEN CREATE POLICY "Public insert instalaciones" ON instalaciones FOR INSERT WITH CHECK (true); END IF;

  -- Authenticated users can do everything
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='blog_posts'    AND policyname='Auth full access blog')         THEN CREATE POLICY "Auth full access blog"         ON blog_posts FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');         END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='equipos'       AND policyname='Auth full access equipos')       THEN CREATE POLICY "Auth full access equipos"       ON equipos FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');       END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='servicios'     AND policyname='Auth full access servicios')     THEN CREATE POLICY "Auth full access servicios"     ON servicios FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');     END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='cotizaciones'  AND policyname='Auth full access cotizaciones')  THEN CREATE POLICY "Auth full access cotizaciones"  ON cotizaciones FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='contactos'     AND policyname='Auth full access contactos')     THEN CREATE POLICY "Auth full access contactos"     ON contactos FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');     END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='instalaciones' AND policyname='Auth full access instalaciones') THEN CREATE POLICY "Auth full access instalaciones" ON instalaciones FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated'); END IF;
END $$;

-- 4. STORAGE BUCKET
-- ------------------------------------------------

INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='Public read images')
    THEN CREATE POLICY "Public read images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='Auth upload images')
    THEN CREATE POLICY "Auth upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='Auth update images')
    THEN CREATE POLICY "Auth update images" ON storage.objects FOR UPDATE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='Auth delete images')
    THEN CREATE POLICY "Auth delete images" ON storage.objects FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
  END IF;
END $$;
