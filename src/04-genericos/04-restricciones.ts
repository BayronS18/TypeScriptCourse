// ==========================================
// RESTRICCIONES EN GENÉRICOS (Generic Constraints)
// ==========================================

// 💡 ¿Por qué usar 'extends'? 
// Si dejas <T> completamente libre, TS no sabe qué propiedades tiene el objeto dentro de la función.
// Al usar <T extends Usuario>, le pones un "piso mínimo" a T.

// Opción A: Con Interface (Recomendado para contratos de datos)
interface BaseEntity {
    id: string;
}

// Opción B: Con Clase
class UsuarioBase {
    constructor(public id: string) {}
}

// La función acepta cualquier tipo T, SIEMPRE Y CUANDO cumpla con 'id: string'
function imprimirEntidad<T extends BaseEntity>(entidad: T): T {
    // Gracias a 'extends', TS sabe con certeza que 'entidad.id' existe:
    console.log(`Procesando registro con ID: ${entidad.id}`);
    return entidad;
}

// 🔹 Caso VÁLIDO: Tiene 'id' (y además puede traer otras propiedades extras)
imprimirEntidad({ id: 'user_101', name: 'Felipe', rol: 'ADMIN' });

// ❌ Caso INVÁLIDO (Descomentar para probar el error):
// imprimirEntidad({ name: 'Felipe' }); 
// Error: El objeto no cumple con la restricción porque le falta la propiedad 'id'


//ejemplo 1


interface ConPrecio{
    precio: number;
}

type Freno = {
    marca: string;
    precio: number;
}
type Bateria = {
    amperios: number;
    precio: number;
}

function AplicarDescuento<T extends ConPrecio>(item: T, porcentaje: number): T{
    item.precio = item.precio - (item.precio * (porcentaje/100))
    return item
}

const freno1 = AplicarDescuento({marca: 'Liz', precio: 50000}, 10)
console.log(freno1)
// const freno2 = AplicarDescuento({marca: 'Fliaz'}, 10) // daria error porque solicita el precio como argumento


const bateria1 = AplicarDescuento({amperios: 10, precio: 100000}, 10)
console.log(bateria1)
