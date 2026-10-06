"use strict";
// ==========================================
// HERENCIA, CLASES ABSTRACTAS Y OVERRIDE
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// CLASE ABSTRACTA:
// Funciona como una plantilla o molde base. NO se puede instanciar directamente
// (ej: 'new DatosBasicos()' dará error). Su propósito es ser heredada por otras clases.
class DatosBasicos {
    name;
    descripcion;
    created_at;
    created_by;
    constructor(name, descripcion, created_at, // 'protected': Accesible en esta clase y en sus clases hijas
    created_by // Oculto para el exterior (fuera de la clase)
    ) {
        this.name = name;
        this.descripcion = descripcion;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    // Getter en la clase base
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return `${this.name} ${this.descripcion}`;
    }
}
// CLASE HIJA 1
class Producto extends DatosBasicos {
    stock;
    sku;
    constructor(stock, sku, name, // Parámetros sin 'public/private' porque solo se pasan a super()
    descripcion, created_at, created_by) {
        // 'super' ejecuta el constructor de DatosBasicos
        super(name, descripcion, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    // OVERRIDE: Reemplaza o extiende la funcionalidad del getter del padre.
    // Usar la palabra clave 'override' le avisa a TS que estamos sobrescribiendo intencionalmente.
    get fullDesc() {
        return `Producto: ${super.fullDesc}`; // Usamos 'super.fullDesc' para reutilizar la lógica base
    }
    // Implementación obligatoria del método abstracto 'guardar'
    guardar() {
        console.log(`Guardando producto ${this.name} en la base de datos...`);
    }
}
// CLASE HIJA 2
class Categoria extends DatosBasicos {
    productos = [];
    constructor(name, descripcion, created_at, created_by) {
        super(name, descripcion, created_at, created_by);
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDesc() {
        return `Categoría: ${super.fullDesc}`;
    }
    // Implementación obligatoria del método abstracto 'guardar'
    guardar() {
        console.log(`Guardando categoría ${this.name} con ${this.productos.length} productos...`);
    }
}
// ==========================================
// USO Y DEMOSTRACIÓN
// ==========================================
const producto1 = new Producto(50, 1001, 'Filtro de Aceite', 'Filtro para motor 2.0', new Date(), 1);
const categoria1 = new Categoria('Repuestos Motor', 'Piezas internas y externas', new Date(), 1);
categoria1.agregarProducto(producto1);
console.log(producto1.fullDesc); // Output: "Producto: Filtro de Aceite Filtro para motor 2.0"
console.log(categoria1.fullDesc); // Output: "Categoría: Repuestos Motor Piezas internas y externas"
producto1.guardar();
categoria1.guardar();
// ejemplo 1
class MetodoEnvio {
    trackingId;
    costoBase;
    constructor(trackingId, costoBase) {
        this.trackingId = trackingId;
        this.costoBase = costoBase;
    }
    obtenerResumen() {
        return `Tracking: ${this.trackingId}, Costo Base: ${this.costoBase}`;
    }
}
class EnvioRegion extends MetodoEnvio {
    recargoRegion;
    constructor(recargoRegion, trackingId, costoBase) {
        super(trackingId, costoBase);
        this.recargoRegion = recargoRegion;
    }
    calcularCostoTotal() {
        return this.costoBase + this.recargoRegion;
    }
    obtenerResumen() {
        return `${super.obtenerResumen()} + Costo Region: ${this.recargoRegion} | Total: $${this.calcularCostoTotal()}`;
    }
}
const envioregion1 = new EnvioRegion(10000, '1SKBN', 5000);
// envioregion1.obtenerResumen()
console.log(envioregion1.obtenerResumen());
//# sourceMappingURL=02-herencia.js.map