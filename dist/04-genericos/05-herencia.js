"use strict";
// ==========================================
// GENÉRICOS Y HERENCIA EN CLASES
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Clase Padre Genérica
class Estado {
    // 'protected' permite que las clases hijas accedan a 'this.data'
    // 'private' lo habría bloqueado para las hijas
    data = [];
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
// ------------------------------------------
// OPCIÓN A: Heredar manteniendo el genérico con RESTRICCIÓN
// ------------------------------------------
class EstadoEliminar extends Estado {
    eliminar(id) {
        // Como T tiene la restricción 'extends ObjectId', TS nos deja acceder a 'x.id'
        this.data = this.data.filter(x => x.id !== id);
    }
}
// Para usarla, debes pasarle un tipo que tenga 'id':
const estadoProductos = new EstadoEliminar();
estadoProductos.agregar({ id: "usr_1", nombre: "Bayron" });
estadoProductos.eliminar("usr_1");
// ------------------------------------------
// OPCIÓN B: Heredar FIJANDO el tipo de dato (Especialización)
// ------------------------------------------
class EstadoUsuarios extends Estado {
    // Al fijar <Usuario>, 'agregar' ahora recibe un Usuario automáticamente
    reiniciarContrasenas() {
        console.log(`Reiniciando contraseñas para ${this.data.length} usuarios.`);
    }
}
// Ya no necesita <T> al instanciar:
const estadoUsuarios = new EstadoUsuarios();
estadoUsuarios.agregar({ id: "usr_2", nombre: "Guerrero" });
estadoUsuarios.reiniciarContrasenas();
class CarritoBase {
    items = [];
    agregar(item) {
        this.items.push(item);
    }
    calcularTotal() {
        return this.items.reduce((acc, elemento) => { return acc + elemento.precio; }, 0);
    }
}
class CarritoRepuestos extends CarritoBase {
    aplicarCuponDescuento(porcentaje) {
        const factorDescuento = 1 - (porcentaje / 100);
        for (const item of this.items) {
            item.precio = item.precio * factorDescuento;
        }
    }
}
const miCarrito = new CarritoRepuestos();
miCarrito.agregar({ id: 'R_001', precio: 50000, nombre: 'Freno' });
miCarrito.agregar({ id: 'R_002', precio: 10000, nombre: 'Filtro' });
console.log(`Precio normal: `, miCarrito.calcularTotal());
miCarrito.aplicarCuponDescuento(10);
console.log(`Precio con descuento: `, miCarrito.calcularTotal());
//# sourceMappingURL=05-herencia.js.map