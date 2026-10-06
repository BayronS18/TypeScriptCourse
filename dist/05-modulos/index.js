"use strict";
// ============================================================================
// CONSUMO DE MÓDULOS (Imports)
// ============================================================================
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Wildcard Import (Comodín `* as Alias`):
// Agrupa todas las exportaciones (por defecto y nombradas) dentro de un objeto `G`.
const G = __importStar(require("./Group"));
// 2. Named Imports (Importaciones Nombradas):
const Point_1 = require("./Point");
// 3. Importación desde una carpeta (Gracia al archivo index.ts / Barrel pattern):
// TypeScript busca automáticamente el archivo 'index.ts' dentro de la carpeta 'Animales'.
const Animales_1 = require("./Animales");
// --- USO DE LOS MÓDULOS ---
// Demostración del Barrel Pattern:
console.log(Animales_1.Animales, Animales_1.Chanchitos, Animales_1.Caballos);
// Instancia mediante Named Exports:
const point = new Point_1.Point(Point_1.PUNTITO.x, Point_1.PUNTITO.y);
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
//# sourceMappingURL=index.js.map