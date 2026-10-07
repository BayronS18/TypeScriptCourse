// DECORADOR PARA GETTERS (Accessors)
// Nota: 'propertyDescriptor' es la "caja de control" del getter en JavaScript
function UpperCase(
  target: any, 
  methodName: string, 
  propertyDescriptor: PropertyDescriptor
) {
  // 1. Guardamos la función getter original que está dentro de propertyDescriptor.get
  const original = propertyDescriptor.get;

  // 2. Sobrescribimos el getter con nuestra propia función modificada
  propertyDescriptor.get = function () {
    // 3. Ejecutamos el getter original ('Hola Mundo')
    const r = original?.call(this);

    // 4. Si lo que devuelve es un texto, lo transformamos a MAYÚSCULAS
    if (typeof r === 'string') {
      return r.toUpperCase();
    }

    // Si no es un texto, devuelve el valor original tal cual
    return r;
  };
}

// CLASE QUE UTILIZA EL DECORADOR
class User {
  constructor(public name: string, public lastname: string) {}

  // Aplicamos el decorador justo encima del getter
  @UpperCase
  get fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

// PRUEBA EN CONSOLA
const user = new User('Hola', 'Mundo');
console.log(user.fullName); // Imprime: "HOLA MUNDO"