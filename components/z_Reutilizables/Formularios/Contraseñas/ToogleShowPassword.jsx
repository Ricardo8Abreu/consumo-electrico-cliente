import { BsEye, BsEyeSlash } from "react-icons/bs"

const ToogleShowPassword = ({
  onPassword,
  verContraseña,
  setverContraseña
}) => {
  return (
    <i
      className={`${
        onPassword ? " opacity-100" : " opacity-50 pointer-events-none"
      } transition-opacity duration-500 `}
    >
      {verContraseña === "password" && (
        <BsEye onClick={() => setverContraseña("text")} />
      )}
      {verContraseña === "text" && (
        <BsEyeSlash onClick={() => setverContraseña("password")} />
      )}
    </i>
  )
}

export default ToogleShowPassword
