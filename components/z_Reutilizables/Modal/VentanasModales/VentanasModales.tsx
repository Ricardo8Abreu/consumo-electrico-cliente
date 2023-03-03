import { useContext } from "react"
import { ModalContext } from "../../../../context/ModalContext/ModalContext"
import { ModalTypado } from "../../../../context/ModalContext/ModalTypado"
import Modal from "../Modal"

type EsquemaModales = ModalTypado.EsquemaModales
type OcultarModales = ModalTypado.OcultarModales

const useModal = (
    modal: {
        etiqueta: 'uno' | 'dos' | 'notificacion'
        toggle: boolean
        childrenName: ModalTypado.Modal_Children_Name
    },
    children: {
        render: JSX.Element,
        estilos?: String,
        botonCerrar?: true
        cerrarConBackGround?: true
    },
    ocultarModal: OcultarModales
) => {
    // devuelve el modal enviado con sus propiedades de el y de su hijo
    return {
        toggle: modal.toggle,
        estilos: children.estilos || "",
        botonCerrar: children.botonCerrar || false,
        cerrarConBackGround: children.cerrarConBackGround,
        children: {
            render: children.render || "No modal child 1"
        },
        funcionOcultar: () => ocultarModal[modal.etiqueta]()

    }
}

interface VentanasProps {
    modales: {
        Modal_Children_Name: {
            render: JSX.Element,
            estilos?: String,
            botonCerrar?: true
        }
    } | any
    esquemaModales: EsquemaModales
    lazy1: boolean
    carga1: boolean
    toggleModalInLayout1: boolean
    ocultarModal: OcultarModales

}

const VentanasModales = ({
    modales,
    lazy1 = false,
    carga1 = false,
    toggleModalInLayout1 = false
}: VentanasProps) => {
    const { dataModalActualObjeto, mostrarModal, ocultarModal, esquemaModales } = useContext(ModalContext)

    const { modal1, modal2, modalNotificacion } = esquemaModales

    const childrenName1 = modal1.childrenName || ''
    const childrenName2 = modal2.childrenName || ''

    const children1 = modales[childrenName1] || "No modal 1"
    const children2 = modales[childrenName2] || "No modal 2"

    const modals = {
        1: useModal(modal1, children1, ocultarModal),
        2: useModal(modal2, children2, ocultarModal),
        notificacion: {
            toggle: modalNotificacion.toggle,
            funcionOcultar: () => ocultarModal.notificacion(),
            info: modalNotificacion.textoNotificacion
        }
    }

    return <>
        <Modal
            estilos={modals[1].estilos}
            botonCerrar={modals[1].botonCerrar}
            toggleModal={modals[1].toggle}
            lazy={lazy1}
            carga={carga1}
            cerrarModal={modals[1].funcionOcultar}
            toggleModalInLayout={toggleModalInLayout1}
            cerrarConBackGround={modals[1].cerrarConBackGround}
        >
            {modals[1].children.render}
        </Modal>

        <Modal
            toggleModal={modals[2].toggle}
            cerrarModal={modals[2].funcionOcultar}
            estilos={modals[2].estilos}
            botonCerrar={modals[2].botonCerrar}
            cerrarConBackGround={modals[2].cerrarConBackGround}
        >
            {modals[2].children.render}
        </Modal>

    </>
}

export default VentanasModales
