// 1. La función receptora del parámetro ('get')
function Method(method: string) {
    // 2. La función decoradora que recibe 3 argumentos obligatorios de TypeScript/JS:
    // - target: La clase/prototipo
    // - methodName: El nombre del método decorado ('find')
    // - descriptor: Un objeto que contiene las propiedades del método, incluyendo la función real en 'descriptor.value'
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        
        console.log(`Configurando el verbo HTTP: ${method} para el método: ${methodName}`);

        // A) Guardamos la función original ('find') en una variable
        const original = descriptor.value;

        // B) Reemplazamos 'descriptor.value' por una NUEVA función que envuelve a la original
        descriptor.value = function (...args: any[]) {
            console.log('--- Antes de ejecutar el método ---');

            // C) Ejecutamos la función original respetando su contexto ('this') y argumentos
            const result = original.call(this, ...args);

            console.log('--- Después de ejecutar el método ---');

            // D) Retornamos el resultado del método original
            return result;
        };
    };
}

class Productos {
    @Method('get') // 👈 Aplica el decorador al método find()
    find() {
        console.log('Ejecutando la búsqueda de productos...');
        return 'Producto encontrado';
    }
}

// PRUEBA DE EJECUCIÓN
const producto = new Productos();
const resultado = producto.find();
console.log('Resultado final:', resultado);


//ejemplo 1
class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// El decorador recibe la clase que está justo debajo
function AplicarCyberDay(constructor: Function) {
    console.log('🏷️ Etiqueta CyberDay aplicada');
    
    // Modifica o extiende la clase agregando una propiedad extra
    constructor.prototype.descuento = 0.20; // 20% de descuento
}

@AplicarCyberDay // 👈 Afecta DIRECTAMENTE a la clase 'Neumatico'
class Neumatico extends Producto {}

const miNeumatico = new Neumatico('Neumático 205/55 R16', 80000) as any;

console.log(miNeumatico.nombre);    // Neumático 205/55 R16
console.log(miNeumatico.descuento); // 0.2 (20% de descuento)