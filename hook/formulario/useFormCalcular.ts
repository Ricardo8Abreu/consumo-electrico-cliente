import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataFormInputs } from '../../components/z_Reutilizables/Formularios/FormInputs/FormInputs';
import { DataInputProps } from '../../components/z_Reutilizables/Formularios/FormInputs/Input/Input';
import { ModalContext } from '../../context/ModalContext/ModalContext';

const useFormCalcular = () => {
    const { mostrarModal } = useContext(ModalContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const returnDataInput = (label: string, id: string):DataInputProps => ({
        label,
        estilos: {
            contenedor: "items-center",
            label: "text-black",
            direccion: "col",
            input: "w-100 text-center rounded bg-white"
        },
        inputProps: {
            ...register(id),
            placeholder: "0 0 0 0 0 KW",
        },
    })

    const dataFormInput:DataFormInputs =  [
        returnDataInput("Consumo anterior", "consumo_mes_1"),
        returnDataInput("Consumo actual", "consumo_actual"),
    ];

    const handleCalcularConsumo  = (e) => {
        e.preventDefault()
        mostrarModal("uno", "calculo")
    }

    // const handleCalcularConsumo  = () => handleSubmit(calcularConsumo)

    return {
        dataFormInput,
        handleCalcularConsumo
    }
}

export default useFormCalcular
