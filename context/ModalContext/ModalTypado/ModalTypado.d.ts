
export type Modal_Children_Name = string | undefined
export type TextNotificacion = { info: string, tiempo?:number, color?: string }
export type PropsNotificacion = Callback & TextNotificacion

export interface Callback {
    callback?:Function
}

export type EsquemaModales = {
    modal1: {
        etiqueta: 'uno' 
        toggle: boolean
        childrenName: Modal_Children_Name 
    }
    modal2: {
        etiqueta: 'dos'
        toggle: boolean
        childrenName: Modal_Children_Name 

    }
    modalNotificacion: {
        etiqueta: 'notificacion'
        toggle: boolean
        textoNotificacion: TextNotificacion

    }
}

export type Modales = 'uno' | 'dos' | 'notificacion'

export interface Props {
    children: ReactNode
}

export type OcultarModales = {
    uno: () => void;
    dos: () => void;
    notificacion: () => void;

}

export type OcultarModal = ()=>void

export interface ContextModalProps {
    esquemaModales: EsquemaModales
    
    dataModalActualLista: never[]
    setdataModalActualLista: React.Dispatch<React.SetStateAction<never[]>>
    dataModalActualObjeto: any
    setdataModalActualObjeto: React.Dispatch<React.SetStateAction<{}>>
    
    mostrarModal: (modal: Modales, children: Modal_Children_Name | PropsNotificacion) => void | Promise<void>
    
    ocultarModal: OcultarModales
}