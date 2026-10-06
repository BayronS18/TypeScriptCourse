// ============================================================================
// DEFAULT EXPORT + NAMED EXPORTS
// ============================================================================

// 1. Exportación por Defecto (Default Export):
// Solo puede existir UN 'export default' por archivo.
// Se suele usar para la clase principal o la entidad principal del módulo.
export default class Group {
    constructor(public readonly id: number, public name: string) {}
}

// 2. Exportación Nombrada (Named Export) complementaria:
export const defaultGroups = {
    users: 'users',
    admin: 'admin'
};

// 3. Función privada/interna:
// Al no llevar 'export', este elemento es privado de este archivo.
const manejaUsuarios = () => {
    console.log("Manejando usuarios de forma interna...");
};