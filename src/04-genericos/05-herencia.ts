// ==========================================
// GENÉRICOS Y HERENCIA EN CLASES
// ==========================================

// 1. Clase Padre Genérica
class Estado<T> {
    // 'protected' permite que las clases hijas accedan a 'this.data'
    // 'private' lo habría bloqueado para las hijas
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t);
    }

    getEstado(): T[] {
        return this.data;
    }
}

type ObjectId = {
    id: string;
};

interface Usuario extends ObjectId {
    nombre: string;
}

// ------------------------------------------
// OPCIÓN A: Heredar manteniendo el genérico con RESTRICCIÓN
// ------------------------------------------
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string): void {
        // Como T tiene la restricción 'extends ObjectId', TS nos deja acceder a 'x.id'
        this.data = this.data.filter(x => x.id !== id);
    }
}

// Para usarla, debes pasarle un tipo que tenga 'id':
const estadoProductos = new EstadoEliminar<Usuario>();
estadoProductos.agregar({ id: "usr_1", nombre: "Bayron" });
estadoProductos.eliminar("usr_1");


// ------------------------------------------
// OPCIÓN B: Heredar FIJANDO el tipo de dato (Especialización)
// ------------------------------------------
class EstadoUsuarios extends Estado<Usuario> {
    // Al fijar <Usuario>, 'agregar' ahora recibe un Usuario automáticamente
    reiniciarContrasenas(): void {
        console.log(`Reiniciando contraseñas para ${this.data.length} usuarios.`);
    }
}

// Ya no necesita <T> al instanciar:
const estadoUsuarios = new EstadoUsuarios();
estadoUsuarios.agregar({ id: "usr_2", nombre: "Guerrero" });
estadoUsuarios.reiniciarContrasenas();


// ejemplo 1 

interface ItemCarrito{
    id:string,
    precio: number
}

class CarritoBase<T extends ItemCarrito>{
    protected items: T[] = [];

    agregar(item: T): void{
        this.items.push(item)
    }
    calcularTotal(): number{
        return this.items.reduce((acc, elemento)=>{ return acc + elemento.precio}, 0)
    }
}

type Repuesto ={
    id: string,
    precio: number,
    nombre: string
}

class CarritoRepuestos extends CarritoBase<Repuesto>{
    aplicarCuponDescuento(porcentaje: number): void{
        const factorDescuento = 1 - (porcentaje / 100);
        for(const item of this.items){
            item.precio = item.precio * factorDescuento
        }
    }
}

const miCarrito = new CarritoRepuestos()

miCarrito.agregar({id: 'R_001', precio: 50000, nombre: 'Freno'})
miCarrito.agregar({id: 'R_002', precio: 10000, nombre: 'Filtro'})
console.log(`Precio normal: `,miCarrito.calcularTotal())

miCarrito.aplicarCuponDescuento(10)
console.log(`Precio con descuento: `,miCarrito.calcularTotal())