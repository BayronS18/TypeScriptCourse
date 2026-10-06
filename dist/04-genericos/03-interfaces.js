"use strict";
// ==========================================
// GENÉRICOS EN INTERFACES
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerRepuesto() {
    return {
        estado: 'ok',
        codigoStatus: 200,
        datos: { sku: 'Parachoque_001', precio: 100000 }
    };
}
const res = obtenerRepuesto();
console.log(res.datos.sku);
class Inventario {
    items = [];
    constructor() { }
    agregar(item) {
        this.items.push(item);
    }
    objetenerTodos() {
        return this.items;
    }
}
const inventarioAceites = new Inventario();
inventarioAceites.agregar({ marca: "Castrol", viscosidad: "5W-30", precio: 35000 });
inventarioAceites.agregar({ marca: "Mazda", viscosidad: "5W-40", precio: 45000 });
console.log(inventarioAceites.objetenerTodos());
const inventarioNeumaticos = new Inventario();
inventarioNeumaticos.agregar({ marca: "Michelin", aro: 50, precio: 35000 });
inventarioNeumaticos.agregar({ marca: "Neumatiquin", aro: 60, precio: 45000 });
console.log(inventarioNeumaticos.objetenerTodos());
//# sourceMappingURL=03-interfaces.js.map