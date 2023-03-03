
// revisa si hay elementos dentro de un arreglo
// si hay retorna true
// si no hay retorna false
const verifyData = (data: any[] | string) => {
    try {
        const cantidad = data.length
        const verify = cantidad > 0 ? cantidad : false
        return verify

    } catch (error) {
        console.log("🚀 ~ file: verifyData.ts ~ line 12 ~ verifyData ~ error", error.message)
        return null
    }

}

export default verifyData
