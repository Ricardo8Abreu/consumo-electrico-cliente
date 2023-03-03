import { Button, Loading } from "@nextui-org/react"

const BotonFormulario = ({ credencialesEnviadas, children = "Submit" }) => {
    return (
        <Button
            type="submit"
            disabled={credencialesEnviadas}
            className=" bg-[#343434] w-max"

        >
            {
                credencialesEnviadas
                    ? <Loading color="currentColor" size="sm" />
                    : children 

            }
        </Button>
    )
}

export default BotonFormulario
