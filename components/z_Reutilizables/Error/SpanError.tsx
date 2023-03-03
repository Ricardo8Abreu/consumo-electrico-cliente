import objectify from "../../../hooks/objectify"

interface Props {
    children: React.ReactNode
    estilos?: string | undefined
    padding?:number
    bgColor?: string
}

const SpanError = ({ children, estilos, padding = 1, bgColor = 'red' }:Props) => {
    return (
        <span className={` ${estilos} h-min w-max bg-${bgColor}-700 text-white p-${padding} pointer-events-none`}>{children}</span>
    )
}

export default SpanError
