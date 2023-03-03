import { Button } from "@material-ui/core"

const BotonNavegacion = ({ elemento, i }) => {
    const { name, slug } = elemento
    return (
        <a
            className={`px-3 h-full flex items-center text-white ${i > 0 ? " border-l-[1px]  border-black" : ""}`}
            href={`${slug}`}
            color="inherit"
            
        >
            {name}
        </a>
    )
}

export default BotonNavegacion
