type Elemento = any
export type Compatibilidad = 'estandar' | 'strapi'
export type ParseCompatibilidad = 'estandar' | 'strapi'

const useCompatibilidad = (elemento:Elemento, compatibilidad:Compatibilidad = "estandar", parse: ParseCompatibilidad = "estandar") => {
    if (compatibilidad === "estandar" || !elemento) {
        return elemento
    }

    const lista = {
        strapi: {
            // transforma un objeto strapi en uno de estandar
            estandar: { id: elemento.id, ...elemento.attributes },
            // transforma un objeto estandar en uno de strapi 
            strapi: { id: elemento.id, attributes: elemento }
        }
    }

    const data = lista[compatibilidad][parse]

    return data
}

export default useCompatibilidad
