// Decorador 1: El que está escrito arriba
function Dec1(constructor: Function) {
    console.log('decorador 1');
}

// Decorador 2: El que está escrito abajo (más cercano a la clase)
function Dec2(constructor: Function) {
    console.log('decorador 2');
}

// Aplicamos ambos decoradores a la clase User
@Dec1
@Dec2
class User {}

export {}