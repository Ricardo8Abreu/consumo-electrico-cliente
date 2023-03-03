import React, { ReactElement, ReactNode } from "react"
import SpanError from "../components/z_Reutilizables/Error/SpanError"
import useCompatibilidad, { Compatibilidad, ParseCompatibilidad } from "./Compatibilidad/useCompatibilidad"
import sluglify from "./sluglify";
import verifyData from "./verifyData"

interface Props {
  data: Array<any>,
  sluglifyName?: boolean;
  nameKey?: string,
  nombreElemento?: string | 'nombre' | 'name',
  compatibilidad?: Compatibilidad,
  parse?: ParseCompatibilidad,
  etiqueta: string,
  estilos?: string,
  children?: string,
  funcion?: Function,
  Renderizar: JSX.Element,
  Props?: any,


}

const UseMap = ({
  data = [],
  sluglifyName = false,
  nombreElemento = "nombre",
  nameKey = "id",
  compatibilidad = "estandar",
  parse = "estandar",
  etiqueta = "(No tiene etiqueta!!)",
  Renderizar,
  estilos = "",
  children,
  funcion,
  Props
}: Props):Array<JSX.Element<any, any>> | JSX.Element => {
  // console.log("🚀 ~ file: useMap.tsx ~ line 15 ~ UseMap ~ data", data)
  // console.log(data.length);
  if (!Renderizar) return <SpanError estilos={" text-white h-max"}>!!!no pasaste Renderizar!!! en  {etiqueta} !!</SpanError>
  if (!verifyData(data)) return <SpanError estilos={" text-white h-max"}>!!!no pasaste data!!! en  {etiqueta} !!</SpanError>
  if(sluglifyName){
     const nombre =  data[0][nombreElemento]
     if(!nombre) return <SpanError estilos={" text-white h-max"}>!!! el nombre del elemento ({nombreElemento}) no fue encontrado!!! en  {etiqueta} !!</SpanError> 

  }

  // if (typeof data === 'object') return console.log(`!!!pasaste en data un objeto  en vez de arreglo!!! en ( ${etiqueta} !!)`)
  return (
    data.map((elemento, i: number) => {
      let newElemento = elemento
      if(sluglifyName){
        const newSlug = sluglify(elemento[nombreElemento])
        let { slug = newSlug} = elemento
        newElemento = {...elemento, slug}
      }
      // console.log(` indice en ( ${etiqueta} !!) ( ${i} ) `);
      let key = i
      const elementoCompatible = useCompatibilidad(newElemento, compatibilidad, parse)
      try{
        if ( elementoCompatible[nameKey])  key = elementoCompatible[nameKey]
      }catch{}
      // if(nameKey) console.log(elemento[nameKey]);
      return (
        <Renderizar
          key={key /* + Math.random(100) */}
          elemento={elementoCompatible}
          funcion={funcion}
          i={i}
          estilos={estilos}
          Props={Props}
        >
          {children}
        </Renderizar>
      )
    })
  )

}

export default UseMap
