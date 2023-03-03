import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

const ModalNotificacion = ({ toggleModal = false, Info, cerrarModal }) => {
  const { info, color = "red", tiempo = 3500 } = Info

  useEffect(() => {
    if (toggleModal && tiempo !== "infinito") {
      setTimeout(() => {
        cerrarModal()
      }, tiempo)
    }
  }, [Info])

  return (
        <AnimatePresence >
            {
            toggleModal &&
                <motion.div className={` w-screen left-0 top-[50px] flex justify-center items-center text-white self-center fixed rounded-lg z-50  `}
                    key={info}
                    initial={{ opacity: 0, y: "-10px" }}
                    animate={{ opacity: 1, y: 0, originY: "top" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}

                >
                    <span style={ { backgroundColor: color } } className="bg-red-600 p-2 h-max border-black">
                        {info}
                    </span>
                </motion.div>
            }
        </AnimatePresence>

  )
}

export default ModalNotificacion
