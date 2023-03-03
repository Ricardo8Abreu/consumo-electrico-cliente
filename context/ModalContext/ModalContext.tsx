"use client"
import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'
import { ModalTypado } from './ModalTypado'
import { EsquemaModales } from './ModalTypado/ModalTypado'

type Props = ModalTypado.Props
type Modales = ModalTypado.Modales
type TextNotificacion = ModalTypado.TextNotificacion
type PropsNotificacion = ModalTypado.PropsNotificacion
type ContextModalProps = ModalTypado.ContextModalProps
type Modal_Children_Name = ModalTypado.Modal_Children_Name


export const ModalContext = React.createContext<ContextModalProps>({} as ContextModalProps)

const ModalContextProvider: FC<Props> = ({ children }) => {
    const [dataModalActualLista, setdataModalActualLista] = useState([])
    const [dataModalActualObjeto, setdataModalActualObjeto] = useState({})

    const [OnOffModal1, setToggleModal1] = useState(false)
    const [modal1ChildrenName, setModal1ChildrenName] = useState<Modal_Children_Name>()

    const [OnOffModal2, setToggleModal2] = useState(false)
    const [modal2ChildrenName, setModal2ChildrenName] = useState<Modal_Children_Name>()

    const [onOffModalNotificacion, setToggleModalNotificacion] = useState(false)
    const [textoNotificacion, setTextoNotificacion] = useState<TextNotificacion>({ info: 'info no enviada', color: 'red' })

    const esquemaModales: EsquemaModales = {
        modal1: {
            etiqueta: "uno",
            toggle: OnOffModal1,
            childrenName: modal1ChildrenName

        },
        modal2: {
            etiqueta: 'dos',
            toggle: OnOffModal2,
            childrenName: modal2ChildrenName

        },
        modalNotificacion: {
            etiqueta: 'notificacion',
            toggle: onOffModalNotificacion,
            textoNotificacion

        }
    }

    const MostrarModal = (modal: Modales, childrenName: Modal_Children_Name | TextNotificacion) => {
        const childrenModal = typeof (childrenName) === 'string' ? childrenName : ''
        const childrenModalNotificacion = typeof (childrenName) !== 'string' && typeof (childrenName) !== 'undefined' ? childrenName : textoNotificacion

        const modales = {
            uno: () => {
                setToggleModal1(true)
                setModal1ChildrenName(childrenModal)
            },
            dos: () => {
                setToggleModal2(true)
                setModal2ChildrenName(childrenModal)
            },
            notificacion: () => {
                setToggleModalNotificacion(true)
                setTextoNotificacion(childrenModalNotificacion)
            }

        }

        return modales[modal]()
    }

    const ocultarModal: ModalTypado.OcultarModales = {
        uno: () => setToggleModal1(false),
        dos: () => setToggleModal2(false),
        notificacion: () => setToggleModalNotificacion(false)
    }



    const mostrarModal = (modal: Modales, children: Modal_Children_Name | PropsNotificacion) => {
        const isString = typeof (children) === 'string'
        const isUndefined = typeof (children) === 'undefined'

        const childrenModal = isString && !isUndefined ? children : ''
        const paramsNotificacion = !isString && !isUndefined ? children : textoNotificacion

        const modales = {
            uno: () => MostrarModal('uno', childrenModal),
            dos: () => MostrarModal('dos', childrenModal),
            notificacion: () => {
                const { info, tiempo, color, callback }: PropsNotificacion = paramsNotificacion

                MostrarModal('notificacion', { info, tiempo, color })
                if (!callback) return

                setTimeout(() => {
                    callback()
                }, tiempo || 3000)
            }

        }

        return modales[modal]()
    }


    return (
        <ModalContext.Provider

            value={{
                esquemaModales,

                dataModalActualLista,
                setdataModalActualLista,
                dataModalActualObjeto,
                setdataModalActualObjeto,

                mostrarModal,
                ocultarModal,
            }}
        >

            {children}
        </ModalContext.Provider>

    )
}

export default ModalContextProvider
