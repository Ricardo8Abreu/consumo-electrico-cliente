import { Button } from "@material-ui/core"
import { BsFillLightningFill } from "react-icons/bs"
const data = {
    kw: 320,
    importe: 230
}
const ModalCalculo = ({/* data, */ cerrar }) => {
    const { kw, importe } = data

    return (
        <div className="flex gap-2 items-center justify-center rounded-[30px] py-5 px-8 flex-col w-[320px]  text-white bg-[#8dcbe6]"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center w-full text-2xl font-bold justify-between">
                <h2>Importe</h2>

                <button className=" cursor-pointer p-1 font-extrabold " color="inherit"
                    onClick={() => cerrar()}
                >X</button>
            </div>

            <div className="flex gap-1 items-center p-2  ">
                <div className="flex text-[60px]">
                    <BsFillLightningFill className=" text-[#FFEA20] " />
                </div>

                <p className="font-bold">Usted ha consumido {kw} KW por tanto su importe es de {importe} CUP</p>
            </div>
        </div>
    )
}

export default ModalCalculo
