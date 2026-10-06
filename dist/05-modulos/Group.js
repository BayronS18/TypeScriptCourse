"use strict";
// ============================================================================
// DEFAULT EXPORT + NAMED EXPORTS
// ============================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGroups = void 0;
// 1. Exportación por Defecto (Default Export):
// Solo puede existir UN 'export default' por archivo.
// Se suele usar para la clase principal o la entidad principal del módulo.
class Group {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.default = Group;
// 2. Exportación Nombrada (Named Export) complementaria:
exports.defaultGroups = {
    users: 'users',
    admin: 'admin'
};
// 3. Función privada/interna:
// Al no llevar 'export', este elemento es privado de este archivo.
const manejaUsuarios = () => {
    console.log("Manejando usuarios de forma interna...");
};
//# sourceMappingURL=Group.js.map