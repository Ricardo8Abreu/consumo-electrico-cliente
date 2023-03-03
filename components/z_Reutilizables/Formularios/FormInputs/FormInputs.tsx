import UseMap from "../../../../hook/useMap"
import Input, { DataInputProps } from "./Input/Input"

export type DataFormInputs = DataInputProps[]

interface Props {
    data: DataFormInputs
    children?:string
}

const FormInputs = ({ data, children }:Props) => {
    return (
        <UseMap
            etiqueta="Inputs reutilizablles"
            data={data}
            Renderizar={Input}
        >
            {children}
        </UseMap>

    )
}

export default FormInputs
