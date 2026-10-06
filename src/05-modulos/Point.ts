// ============================================================================
// NAMED EXPORTS (Exportaciones Nombradas)
// ============================================================================
// Permiten exportar múltiples elementos desde un solo archivo.
// Al importarlos, se requiere usar llaves `{}` y utilizar el nombre exacto.

export class Point {
    constructor(public x: number, public y: number) {}
}

export const PUNTITO = { x: 23, y: 13 };