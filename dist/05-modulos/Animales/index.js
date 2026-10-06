"use strict";
// ============================================================================
// RE-EXPORTING (Patrón Barrel / Índice de Módulo)
// ============================================================================
// Este archivo actúa como una "puerta de entrada única" (puntuación/puerta).
// Re-exporta los miembros de los archivos de la carpeta para que quienes consuman
// la carpeta 'Animales' puedan importarlo todo desde un solo punto limpio.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chanchitos = exports.Caballos = exports.Animales = void 0;
var Animales_1 = require("./Animales");
Object.defineProperty(exports, "Animales", { enumerable: true, get: function () { return Animales_1.Animales; } });
var Caballos_1 = require("./Caballos");
Object.defineProperty(exports, "Caballos", { enumerable: true, get: function () { return Caballos_1.Caballos; } });
var Chanchitos_1 = require("./Chanchitos");
Object.defineProperty(exports, "Chanchitos", { enumerable: true, get: function () { return Chanchitos_1.Chanchitos; } });
//# sourceMappingURL=index.js.map