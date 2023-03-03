import { Button } from "@material-ui/core"
import { BsFillLightningFill } from "react-icons/bs"
const data = {
    kw: 320,
    importe: 230
}
const ModalCalculo = ({/* data, */ cerrar }) => {
    const { kw, importe } = data

    return (
        <div className="flex items-center justify-center rounded-[30px] py-5 px-8 flex-col w-[300px]  text-white bg-[#8dcbe6]"
            onClick={(e)=> e.stopPropagation()}
        >
            <div className="flex w-full font-bold justify-between">
                <h2>Importe</h2>

                <span className=" " color="inherit" onClick={()=>cerrar()}>X</span>
            </div>

            <div className="flex gap-5 items-center py-5 ">
                <BsFillLightningFill className=" text-[#FFEA20]  h-20 text-9xl " />

                <p>Usted ha consumido {kw} KW por tanto su importe es de {importe} CUP</p>
            </div>
        </div>
    )
}

export default ModalCalculo
