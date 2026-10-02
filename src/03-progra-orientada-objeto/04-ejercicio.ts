// --------------------------------------Ejercicio1--------------------------------------
interface ITrazable {
    codigoSeguimiento: string
    generarTicket(): string
}

abstract class ItemOrden {
    constructor(
        public readonly sku: string,
        public nombre: string,
        protected precioBase: number,
    ){
        
    }
    abstract calcularSubtotal(cantidad: number): number
}

class RepuestoMotor extends ItemOrden implements ITrazable{
    constructor(
        public requiereInspeccion: boolean,
        public codigoSeguimiento: string,
        sku: string,
        nombre: string,
        precioBase: number,

    ){
        super(sku, nombre, precioBase)
    }
    calcularSubtotal(cantidad: number): number{
        if(this.requiereInspeccion){
            return this.precioBase * cantidad + 5000
        }
        return this.precioBase * cantidad
    }
    generarTicket(): string{
        return `[TICKET] SKU: ${this.sku} | Tracking: ${this.codigoSeguimiento}`
    }
}

interface IResumenPEdido{
    [sku: string]: number
}

const repuestoMotor = new RepuestoMotor(true, 'TRK-9921-CL' ,'MOT-8890', 'Turbo Chargue Evo X', 250000)
const repuestoMotor2 = new RepuestoMotor(false, 'TRK-9922-CL' ,'MOT-8891', 'Turbo Chargue Varis', 250000)

console.log(`Repuesto 1`, repuestoMotor.calcularSubtotal(2))
console.log(`Repuesto 2`, repuestoMotor2.calcularSubtotal(2))
console.log(`Repuesto 1`, repuestoMotor.generarTicket())
console.log(`Repuesto 2`, repuestoMotor2.generarTicket())

const pedido: IResumenPEdido = {}
pedido["MOT-8890"] = repuestoMotor.calcularSubtotal(2)
pedido["MOT-8891"] = repuestoMotor.calcularSubtotal(2)
console.log(pedido)


// --------------------------------------Ejercicio2--------------------------------------

interface IPesable{
    pesoEnKilos: number
    calcularPrecioPorPeso(): number
}

abstract class ProductosSupermercado {
    constructor(
    public readonly codigoBarra: string,
    public nombre: string,
    protected precioBase: number,
    ){}

    abstract obtenerPrecioFinal(): number;
}

class FrutaBalanza extends ProductosSupermercado implements IPesable{
    constructor(
        codigoBarra: string,
        nombre:string,
        precioBase: number,
        public pesoEnKilos: number
    ){
        super(codigoBarra, nombre, precioBase)
    }
    calcularPrecioPorPeso(): number{
        return this.precioBase * this.pesoEnKilos
    }

    obtenerPrecioFinal(): number{
        return this.calcularPrecioPorPeso()
    }
    
}

class Abarrotes extends ProductosSupermercado{
    constructor(
        codigoBarra: string,
        nombre:string,
        precioBase: number,
        public tieneDescuentoPack: boolean,
    ){
        super(codigoBarra, nombre, precioBase)
    }
    obtenerPrecioFinal(): number{
        if(this.tieneDescuentoPack){
            return this.precioBase - this.precioBase * 0.20
        }
        return this.precioBase
    }
}

interface ITicketCaja{
    [nombreProducto: string]: number;
}

const frutabBalanza = new FrutaBalanza("780111", "Manzana Fuji", 1500, 2.5)

const abarrote = new Abarrotes("780222","Arroz Grado 1", 1200, true)

console.log(`precio final de ${frutabBalanza.nombre} : ${frutabBalanza.obtenerPrecioFinal()}`)
console.log(`precio final de: ${abarrote.nombre} : ${abarrote.obtenerPrecioFinal()}`)

const boleta: ITicketCaja = {}
boleta[frutabBalanza.nombre] = frutabBalanza.obtenerPrecioFinal()
boleta[abarrote.nombre] = abarrote.obtenerPrecioFinal()

console.log(boleta)