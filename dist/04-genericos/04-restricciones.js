"use strict";
// ==========================================
// RESTRICCIONES EN GENÉRICOS (Generic Constraints)
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// Opción B: Con Clase
class UsuarioBase {
    id;
    constructor(id) {
        this.id = id;
    }
}
// La función acepta cualquier tipo T, SIEMPRE Y CUANDO cumpla con 'id: string'
function imprimirEntidad(entidad) {
    // Gracias a 'extends', TS sabe con certeza que 'entidad.id' existe:
    console.log(`Procesando registro con ID: ${entidad.id}`);
    return entidad;
}
// 🔹 Caso VÁLIDO: Tiene 'id' (y además puede traer otras propiedades extras)
imprimirEntidad({ id: 'user_101', name: 'Felipe', rol: 'ADMIN' });
function AplicarDescuento(item, porcentaje) {
    item.precio = item.precio - (item.precio * (porcentaje / 100));
    return item;
}
const freno1 = AplicarDescuento({ marca: 'Liz', precio: 50000 }, 10);
console.log(freno1);
// const freno2 = AplicarDescuento({marca: 'Fliaz'}, 10) // daria error porque solicita el precio como argumento
const bateria1 = AplicarDescuento({ amperios: 10, precio: 100000 }, 10);
console.log(bateria1);
//# sourceMappingURL=04-restricciones.js.map