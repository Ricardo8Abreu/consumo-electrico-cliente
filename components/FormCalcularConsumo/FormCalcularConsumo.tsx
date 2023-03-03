"use client"

import { Button } from "@material-ui/core"
import useFormCalcular from "../../hook/formulario/useFormCalcular"
import FormInputs from "../z_Reutilizables/Formularios/FormInputs/FormInputs"

const FormCalcularConsumo = ({  }) => {
    const { handleCalcularConsumo, dataFormInput } = useFormCalcular()

    return (
        <form className="flex p-6 font-bold flex-col border w-full gap-7 items-center justify-center"
            onSubmit={handleCalcularConsumo}
            
        >
            <div className="flex flex-col sm:flex-row gap-7 w-[400px] justify-center items-center grow">
                <FormInputs
                    data={dataFormInput}
                />
            </div>

            <button type='submit' className=' h-max rounded-xl py-2 text-white px-2 bg-[#FFEA20] border border-[#a79815]'>
                Ver consumo
            </button>
        </form>
    )
}

export default FormCalcularConsumo
