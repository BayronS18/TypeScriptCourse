"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemOrden {
    sku;
    nombre;
    precioBase;
    constructor(sku, nombre, precioBase) {
        this.sku = sku;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}
class RepuestoMotor extends ItemOrden {
    requiereInspeccion;
    codigoSeguimiento;
    constructor(requiereInspeccion, codigoSeguimiento, sku, nombre, precioBase) {
        super(sku, nombre, precioBase);
        this.requiereInspeccion = requiereInspeccion;
        this.codigoSeguimiento = codigoSeguimiento;
    }
    calcularSubtotal(cantidad) {
        if (this.requiereInspeccion) {
            return this.precioBase * cantidad + 5000;
        }
        return this.precioBase * cantidad;
    }
    generarTicket() {
        return `[TICKET] SKU: ${this.sku} | Tracking: ${this.codigoSeguimiento}`;
    }
}
const repuestoMotor = new RepuestoMotor(true, 'TRK-9921-CL', 'MOT-8890', 'Turbo Chargue Evo X', 250000);
const repuestoMotor2 = new RepuestoMotor(false, 'TRK-9922-CL', 'MOT-8891', 'Turbo Chargue Varis', 250000);
console.log(`Repuesto 1`, repuestoMotor.calcularSubtotal(2));
console.log(`Repuesto 2`, repuestoMotor2.calcularSubtotal(2));
console.log(`Repuesto 1`, repuestoMotor.generarTicket());
console.log(`Repuesto 2`, repuestoMotor2.generarTicket());
const pedido = {};
pedido["MOT-8890"] = repuestoMotor.calcularSubtotal(2);
pedido["MOT-8891"] = repuestoMotor.calcularSubtotal(2);
console.log(pedido);
class ProductosSupermercado {
    codigoBarra;
    nombre;
    precioBase;
    constructor(codigoBarra, nombre, precioBase) {
        this.codigoBarra = codigoBarra;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}
class FrutaBalanza extends ProductosSupermercado {
    pesoEnKilos;
    constructor(codigoBarra, nombre, precioBase, pesoEnKilos) {
        super(codigoBarra, nombre, precioBase);
        this.pesoEnKilos = pesoEnKilos;
    }
    calcularPrecioPorPeso() {
        return this.precioBase * this.pesoEnKilos;
    }
    obtenerPrecioFinal() {
        return this.calcularPrecioPorPeso();
    }
}
class Abarrotes extends ProductosSupermercado {
    tieneDescuentoPack;
    constructor(codigoBarra, nombre, precioBase, tieneDescuentoPack) {
        super(codigoBarra, nombre, precioBase);
        this.tieneDescuentoPack = tieneDescuentoPack;
    }
    obtenerPrecioFinal() {
        if (this.tieneDescuentoPack) {
            return this.precioBase - this.precioBase * 0.20;
        }
        return this.precioBase;
    }
}
const frutabBalanza = new FrutaBalanza("780111", "Manzana Fuji", 1500, 2.5);
const abarrote = new Abarrotes("780222", "Arroz Grado 1", 1200, true);
console.log(`precio final de ${frutabBalanza.nombre} : ${frutabBalanza.obtenerPrecioFinal()}`);
console.log(`precio final de: ${abarrote.nombre} : ${abarrote.obtenerPrecioFinal()}`);
const boleta = {};
boleta[frutabBalanza.nombre] = frutabBalanza.obtenerPrecioFinal();
boleta[abarrote.nombre] = abarrote.obtenerPrecioFinal();
console.log(boleta);
//# sourceMappingURL=04-ejercicio.js.map