import { ReactNode, useEffect, useState } from "react"
import Style from "./Modal.module.css"

const Modal = ({
  children,
  carga = false,
  lazy = false,
  toggleModal,
  cerrarModal,
  cerrarConBackGround = true,
  estilos,
  botonCerrar = false,
  toggleModalInLayout = false 
}) => {
  const [estadoCarga, setEstadoCarga] = useState(false)
  // console.log(toggleModal)
  useEffect(() => {
    carga
      ? setEstadoCarga(true)
      : setEstadoCarga(false)
  }, [carga])

  return (
    (toggleModal || toggleModalInLayout) &&
            <div onClick={ cerrarConBackGround ? () => cerrarModal(false) : null} className={`${Style.Modal} ${toggleModal ? "translate-y-0" : "-translate-y-[100vh]"} ${estilos} `}>
                {
                    botonCerrar &&
                    <button onClick={() => cerrarModal(false)} className={Style.Modal_Boton_Cerrar}>X</button>
                }
                {
                  lazy === true
                    ? estadoCarga ? children : <div>...cargando</div>
                    : children
                }
            </div>

  )
}

export default Modal
