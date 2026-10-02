// ==========================================
// HERENCIA, CLASES ABSTRACTAS Y OVERRIDE
// ==========================================

// CLASE ABSTRACTA:
// Funciona como una plantilla o molde base. NO se puede instanciar directamente
// (ej: 'new DatosBasicos()' dará error). Su propósito es ser heredada por otras clases.
abstract class DatosBasicos {
    constructor(
        public name: string,
        public descripcion: string,
        protected created_at: Date, // 'protected': Accesible en esta clase y en sus clases hijas
        protected created_by: number  // Oculto para el exterior (fuera de la clase)
    ) {}

    // Getter en la clase base
    get fullYear(): number {
        return this.created_at.getFullYear();
    }

    get fullDesc(): string {
        return `${this.name} ${this.descripcion}`;
    }

    // MÉTODO ABSTRACTO:
    // No tiene cuerpo/implementación ({}) aquí.
    // Obliga OBLIGATORIAMENTE a todas las clases hijas a definir su propia versión de 'guardar()'.
    abstract guardar(): void;
}

// CLASE HIJA 1
class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,        // Parámetros sin 'public/private' porque solo se pasan a super()
        descripcion: string,
        created_at: Date,
        created_by: number
    ) {
        // 'super' ejecuta el constructor de DatosBasicos
        super(name, descripcion, created_at, created_by);
    }

    // OVERRIDE: Reemplaza o extiende la funcionalidad del getter del padre.
    // Usar la palabra clave 'override' le avisa a TS que estamos sobrescribiendo intencionalmente.
    override get fullDesc(): string {
        return `Producto: ${super.fullDesc}`; // Usamos 'super.fullDesc' para reutilizar la lógica base
    }

    // Implementación obligatoria del método abstracto 'guardar'
    guardar(): void {
        console.log(`Guardando producto ${this.name} en la base de datos...`);
    }
}

// CLASE HIJA 2
class Categoria extends DatosBasicos {
    public productos: Producto[] = [];

    constructor(
        name: string,
        descripcion: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, descripcion, created_at, created_by);
    }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    override get fullDesc(): string {
        return `Categoría: ${super.fullDesc}`;
    }

    // Implementación obligatoria del método abstracto 'guardar'
    guardar(): void {
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

abstract class MetodoEnvio{
    constructor(
        public trackingId: string,
        protected costoBase: number,
    )
    {}
    abstract calcularCostoTotal(): number;

    public obtenerResumen(): string{
        return `Tracking: ${this.trackingId}, Costo Base: ${this.costoBase}`
        
    }
}

class EnvioRegion extends MetodoEnvio {
    constructor(
        public recargoRegion: number,
        trackingId: string,
        costoBase: number,
    ){
     super(trackingId, costoBase)
    }
    calcularCostoTotal(): number{
        return this.costoBase + this.recargoRegion
    }
    override obtenerResumen(): string {
        return `${super.obtenerResumen()} + Costo Region: ${this.recargoRegion} | Total: $${this.calcularCostoTotal()}`
    }
}

const envioregion1 = new EnvioRegion(10000, '1SKBN', 5000)

// envioregion1.obtenerResumen()

console.log(envioregion1.obtenerResumen())