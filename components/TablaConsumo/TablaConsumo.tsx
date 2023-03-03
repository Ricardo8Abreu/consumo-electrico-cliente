
import UseMap from "../../hook/useMap"
import Consumo from "./Consumo/Consumo"
import TD from "./TD/TD"

const dataConsumo = [
    { id: 1, consumo: 325, importe: 486 },
    { id: 2, consumo: 235, importe: 386 },
    { id: 3, consumo: 225, importe: 286 },
    { id: 4, consumo: 365, importe: 486 },
  ]

const TablaConsumo = ({data}) => {
    return (
        <div className="flex-col text-center">
            <h2>Registro</h2>
            <table className=" w-full h-[300px] border-black">
                <tr className="">
                    <TD>KW</TD>
                    <TD>Importe</TD>
                </tr>
                <UseMap
                    data={data}
                    etiqueta="Respuesta Consumo"
                    Renderizar={Consumo}
                />

            </table>
        </div>
    )
}

export default TablaConsumo
