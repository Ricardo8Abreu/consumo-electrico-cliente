import UseMap from "../../../../hooks/useMap"
import InputHookForm from "./Input/InputHookForm"

const FormInputsHookForm = ({ data }) => {
    return (
        <UseMap
            etiqueta="InputHookForm reutilizablles"
            data={data}
            Renderizar={InputHookForm}
        />

    )
}

export default FormInputsHookForm
