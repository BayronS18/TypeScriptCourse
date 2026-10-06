// ============================================================================
// ARCHIVO TYPESCRIPT (Consumo seguro)
// ============================================================================
// TypeScript busca automáticamente 'saludos.d.ts' para validar los tipos
// de la función importada desde 'saludos.js'.

import { holamundo } from './saludos';

// 🔹 Uso correcto (TypeScript valida que ambos argumentos sean string):
holamundo('Chanchito feliz', 'Hola mundo');

// ❌ Caso inválido (TypeScript marcará error si intentas pasar un número):
// holamundo(123, 'Hola mundo'); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.