import TD from "../TD/TD";

const Consumo = ({ elemento }) => {
    const { consumo, importe } = elemento

    return (
        <tr className="border border-black">
            <TD>{consumo} KW</TD>
            <TD>{importe} CUP</TD>
        </tr>
    );
}


export default Consumo
