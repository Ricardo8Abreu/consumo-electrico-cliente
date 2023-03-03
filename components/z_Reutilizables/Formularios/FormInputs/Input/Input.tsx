import React, { LegacyRef, ReactNode, useState } from "react"

import { FieldError } from "react-hook-form"
import verifyData from "../../../../../hook/verifyData"

import SpanError from "../../../Error/SpanError"
import ToogleShowPassword from "../../Contraseñas/ToogleShowPassword"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string }

export type DataInputProps = {
  label?: string
  error?: FieldError | { message: string }
  textArea?: boolean
  inputProps: InputProps
  estilos?: {
    contenedor?: string
    label?: string
    input?: string
    direccion?: 'row' | 'col'
  }

}
export interface FormInput {
  elemento: DataInputProps
  ref?: LegacyRef<HTMLInputElement>
  funcion: () => {}
  children?: ReactNode
}


const Input = ({ elemento, children }: FormInput) => {

  let {
    label = undefined,
    error = undefined,
    textArea = false,
    inputProps,
    estilos

  }: DataInputProps = elemento

  let { type = "text", name, value, onChange } = inputProps
  const [inputType, serInputType] = useState(type)

  const estilos2 = {
    estilosContenedor: estilos?.contenedor,
    estilosLabel: estilos?.label,
    estilosInput: estilos?.input,
    estiloDireccion: estilos?.direccion,
  };
  let {
    estilosContenedor = "w-full justify-left items-left",
    estiloDireccion = "row",
    estilosInput = "text-white w-max bg-[#3b3b3b]",
    estilosLabel = "text-white",
  } = estilos2;

  const [inputValue, setInputValue] = useState(value)

  const handleOnChange = (e) => {
    const value = e.target.value
    onChange(e)
    setInputValue(value)
  }

  const hayValue = verifyData(inputValue)
  const onPassword = type === "password" && hayValue
  const mensajeError = error?.message || `El mensaje de error para ${label || name} no fué escrito`

  return (
    <div className={`flex flex-${estiloDireccion} ${estiloDireccion === "row" ? "items-center" : ""} ${estilosContenedor} gap-2 `}>
      {label && <label className={`${estilosLabel} `} htmlFor={name}>{label}</label>}
      {
        textArea
          ? <textarea
            {...inputProps}
            onChange={handleOnChange}
            id={name}
            className={` ${estilosInput}  p-1 px-2`}
          />
          : <div className="flex items-center gap-2">
            <input
              {...inputProps}
              type={inputType}
              onChange={handleOnChange}
              id={name}
              className={` ${estilosInput} border border-[#a79815]  p-1 px-2`}
            />
            {
              type === "password" &&
              <ToogleShowPassword
                onPassword={onPassword}
                verContraseña={inputType}
                setverContraseña={serInputType}
              />
            }
          </div>
      }
      {
        error && !hayValue &&
        <SpanError>{mensajeError}</SpanError>
      }
    </div>
  )
}

export default Input
