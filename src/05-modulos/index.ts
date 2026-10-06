// ============================================================================
// CONSUMO DE MÓDULOS (Imports)
// ============================================================================

// 1. Wildcard Import (Comodín `* as Alias`):
// Agrupa todas las exportaciones (por defecto y nombradas) dentro de un objeto `G`.
import * as G from './Group';

// 2. Named Imports (Importaciones Nombradas):
import { Point, PUNTITO } from './Point';

// 3. Importación desde una carpeta (Gracia al archivo index.ts / Barrel pattern):
// TypeScript busca automáticamente el archivo 'index.ts' dentro de la carpeta 'Animales'.
import { Animales, Chanchitos, Caballos } from './Animales';

// --- USO DE LOS MÓDULOS ---

// Demostración del Barrel Pattern:
console.log(Animales, Chanchitos, Caballos);

// Instancia mediante Named Exports:
const point = new Point(PUNTITO.x, PUNTITO.y);

// Instancia mediante Wildcard (`* as G`):
// Nota: La exportación por defecto se accede a través de 'G.default'
const group = new G.default(1, 'Bayron');
console.log(G.defaultGroups.admin);

/* 
💡 NOTA SOBRE OTRAS FORMAS DE IMPORTAR 'Group.ts':
 Si quisiéramos importar directamente sin wildcard (*):
 import Group, { defaultGroups } from './Group';
 const group = new Group(1, 'Bayron');
*/