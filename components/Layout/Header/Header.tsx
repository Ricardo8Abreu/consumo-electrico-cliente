"use client"

import UseMap from "../../../hook/useMap"

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillLightningFill } from "react-icons/bs"
import { AppBar, IconButton, Toolbar } from "@material-ui/core"

import BotonNavegacion from "./BotonNavegacion/BotonNavegacion"
import { useEffect, useState } from "react";

const dataNavegation = [
    { name: "Home", slug: "home" },
    { name: "Contactos", slug: "contactos" },
    { name: "Download", slug: "download" },
]


const Header = () => {
    const [siDisplayMobile, setSiDisplayMobile] = useState(false)

    useEffect(() => {
        const ancho = window.innerWidth
        setSiDisplayMobile(ancho < 500)
    }, [])

    return (
        <nav className="flex items-center font-bold px-3 h-12 text-white bg-[#8dcbe6] justify-between">

            <div className="flex items-center text-white">
                <BsFillLightningFill className=" text-2xl rotate-[-50deg] text-[#FFEA20]" />
                <span>CE</span>
            </div>

            {
                siDisplayMobile
                    ? <GiHamburgerMenu className=" text-black bg-[#FFEA20] rounded p-1 text-4xl" />

                    : <ul className="flex h-full text-white">
                        <UseMap
                            etiqueta="Botones navegación"
                            data={dataNavegation}
                            Renderizar={BotonNavegacion}

                        />
                    </ul>

            }

        </nav>

    )
}

export default Header
