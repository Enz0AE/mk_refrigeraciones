-- Limpia URLs de imagen rotas en equipos (tokens de Google Auth expirados)
-- Ejecutar en: Supabase Dashboard → SQL Editor

UPDATE equipos SET imagen = NULL WHERE imagen LIKE 'https://lh3.googleusercontent.com/%';
