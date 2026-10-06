"use strict";
// ============================================================================
// NAMED EXPORTS (Exportaciones Nombradas)
// ============================================================================
// Permiten exportar múltiples elementos desde un solo archivo.
// Al importarlos, se requiere usar llaves `{}` y utilizar el nombre exacto.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUNTITO = exports.Point = void 0;
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;
exports.PUNTITO = { x: 23, y: 13 };
//# sourceMappingURL=Point.js.map