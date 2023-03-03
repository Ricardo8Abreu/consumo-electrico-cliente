import React, { LegacyRef } from "react"

interface FormInput {
  elemento: {
    label: string
    name: string
    type: React.HTMLInputTypeAttribute 
    value: string
    hiddenLabel: boolean
    placeholder: string
    autoComplete: string
    direccion: 'row' | 'col'
    accept:string
    estilosInput: string
    estilosLabel: string
    ref?: LegacyRef<HTMLInputElement>

  }
  funcion: ()=> {}
}

const inicialinputProps = {
  label : "",
  name : "",
  type : "text",
  value : "",
  hiddenLabel : false,
  placeholder : "",
  autoComplete : "",
  direccion : "col",
  accept : "",
  estilosLabel : "",
  estilosInput : "",

}

const InputHookForm:React.FC<FormInput> = React.forwardRef( ({ elemento = inicialinputProps }) => {
  // console.log("🚀 ~ file: AgregarSeccion.jsx ~ line 8 ~ Input ~ elemento", elemento)
  const {name, label, direccion, hiddenLabel, estilosLabel, estilosInput } = elemento

  const inputProps = {
    ...elemento,
    id:name
  }

  return (
    <div className={`flex flex-${direccion} gap-2 items-center `}>
      {!hiddenLabel && <label className={`${estilosLabel} `} htmlFor={name}>{label}</label>}
      <input
        {...inputProps}
        className={` ${estilosInput} bg-[#3b3b3b] p-1 px-2`}
      />
    </div>
  )
})

export default InputHookForm
