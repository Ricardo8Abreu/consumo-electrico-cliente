import BotonFormulario from "./BotonFormulario/BotonFormulario"

const Formulario = ({ label = "Rellene el formulario para continuar", botonText="Submit", handleSubmit, estilos="bg-black", credencialesEnviadas, children }) => {


    return (
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className={` ${estilos} justify-start flex  text-white border p-3 flex-col items-center gap-3 `}>
            <h2>{label}</h2>

            {children}
            <BotonFormulario
                credencialesEnviadas={credencialesEnviadas}

            >
                {botonText}
            </BotonFormulario>
        </form>
    )
}

export default Formulario
