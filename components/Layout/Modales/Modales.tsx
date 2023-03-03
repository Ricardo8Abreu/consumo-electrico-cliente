"use client"

import { useContext } from "react"
import { ModalContext } from "../../../context/ModalContext/ModalContext"
import ModalCalculo from "../../ModalCalculo/ModalCalculo"
import VentanasModales from "../../z_Reutilizables/Modal/VentanasModales/VentanasModales"

const Modales = () => {
    const {ocultarModal} = useContext(ModalContext)
    const modales = {

        calculo: {
            render: <ModalCalculo
            cerrar={ocultarModal.uno}
            />,
            estilos: "w-screen h-screen  "

        }


    }
    return (
        <VentanasModales
            modales={modales}
        />
    )
}

export default Modales
