// ============================================================================
// 1. DECORADOR DE GETTER (Accessor Decorator)
// ============================================================================
function UpperCase(
  target: any, 
  methodName: string, 
  propertyDescriptor: PropertyDescriptor
) {
  const original = propertyDescriptor.get;

  propertyDescriptor.get = function () {
    const r = original?.call(this);

    if (typeof r === 'string') {
      return r.toUpperCase();
    }

    return r;
  };
}

// ============================================================================
// 2. DECORADOR DE PROPIEDAD (Property Decorator)
// ============================================================================
// Es una Factory: recibe parámetros externos ('min: number') y retorna el decorador
function Min(min: number) {
  // Los decoradores de propiedad reciben solo 2 parámetros:
  // - target: el prototipo de la clase
  // - propertyName: el nombre de la propiedad en texto ('password')
  return (target: any, propertyName: string) => {
    
    // Variable privada interna donde se guardará el valor real en memoria
    let val: string;

    // Creamos la "caja de control" (descriptor) con getters y setters personalizados
    const descriptor: PropertyDescriptor = {
      get() {
        return val;
      },
      set(v: string) {
        // Interceptamos la asignación: si la contraseña tiene menos caracteres que 'min', lanzamos error
        if (v.length < min) {
          throw new Error(`La propiedad '${propertyName}' debe tener un largo mínimo de ${min} caracteres.`);
        }
        val = v; // Si pasa la validación, guardamos el valor
      },
    };

    // Redefinimos la propiedad en el prototipo de la clase usando Object.defineProperty
    Object.defineProperty(target, propertyName, descriptor);
  };
}

// ============================================================================
// 3. CLASE QUE UTILIZA LOS DECORADORES
// ============================================================================
class User {
  // Aplicamos el decorador sobre la propiedad 'password'
  @Min(6)
  public password: string; // Se declara aquí para que el decorador pueda interceptarla

  constructor(public name: string, public lastname: string, password: string) {
    // Al ejecutar this.password = password, se activa automáticamente el SETTER del decorador
    this.password = password;
  }

  @UpperCase
  get fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

// ============================================================================
// PRUEBAS DE EJECUCIÓN
// ============================================================================

try {
  // 🟢 Prueba exitosa: Contraseña de 6 o más caracteres
  const usuarioValido = new User('Bayron', 'Saavedra', 'miClaveSegura123');
  console.log('Nombre completo:', usuarioValido.fullName); // "BAYRON SAAVEDRA"
  console.log('Password válida:', usuarioValido.password); // "miClaveSegura123"

  // 🔴 Prueba fallida: Contraseña corta (descomenta para ver el error)
  // const usuarioInvalido = new User('Juan', 'Pérez', '1234');

} catch (error: any) {
  console.error('❌ Error de validación:', error.message);
}

export {};