// ============================================================================
// RE-EXPORTING (Patrón Barrel / Índice de Módulo)
// ============================================================================
// Este archivo actúa como una "puerta de entrada única" (puntuación/puerta).
// Re-exporta los miembros de los archivos de la carpeta para que quienes consuman
// la carpeta 'Animales' puedan importarlo todo desde un solo punto limpio.

export { Animales } from "./Animales";
export { Caballos } from "./Caballos";
export { Chanchitos } from "./Chanchitos";