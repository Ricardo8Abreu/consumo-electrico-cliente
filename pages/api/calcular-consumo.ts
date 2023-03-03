import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    const {Consumo_Mes_Anterior, Consumo_Actual} = req.query
    
    if ((Consumo_Mes_Anterior > 0 || Consumo_Actual > 0)) {
        console.log(' elementos detectados');



        if (Consumo_Mes_Anterior_Digitos < 5 || Consumo_Actual_Digitos < 5) {
            Consumo_Wats.innerHTML = 'Los números deben contener un mínimo de 5 dígitos';
            Consumo_Wats.classList.toggle('Error');

        } else if (Consumo_Actual <= Consumo_Mes_Anterior) {
            Consumo_Wats.innerHTML = 'El consumo de wats Actual tiene que ser mayor al Anterior';
            Consumo_Wats.classList.toggle('Error');
            console.log('EL CONSUMO ACTUAL ES MENOR AL ANTERIOR');

        } else {


            Consumo_Wats.classList.remove('Error')
            Consumo_Pesos.classList.remove('Error')

            /** WATS CONSUMIDOS HASTA EL MOMENTO = WATS CONSUMIDOS ANTERIOR - ACTUAL */
            let Consumo_Hasta_el_Momento = Consumo_Actual - Consumo_Mes_Anterior;
            Consumo_Wats.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' WATS';

            /**TRANSFORMANDO EL CONSUMO EN WATS EN PESOS */
            switch (true) {
                /**1 */
                case (Consumo_Hasta_el_Momento > 0 && Consumo_Hasta_el_Momento <= 100):
                    /**1 */
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 0.33;

                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**2 */
                case (Consumo_Hasta_el_Momento > 100 && Consumo_Hasta_el_Momento <= 150):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 100;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 1.07;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 32.78;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**3 */
                case (Consumo_Hasta_el_Momento > 150 && Consumo_Hasta_el_Momento <= 200):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 150;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 1.43;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 86.06;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**4 */

                case (Consumo_Hasta_el_Momento > 200 && Consumo_Hasta_el_Momento <= 250):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 200;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 2.46;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 157.78;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**5 */
                case (Consumo_Hasta_el_Momento > 250 && Consumo_Hasta_el_Momento <= 300):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 250;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 3.00;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 280.72;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**6 */
                case (Consumo_Hasta_el_Momento > 300 && Consumo_Hasta_el_Momento <= 350):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 300;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 4.00;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 430.72;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**7*/
                case (Consumo_Hasta_el_Momento > 350 && Consumo_Hasta_el_Momento <= 500):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 350;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 5.00;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 630.72;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**8 */
                case (Consumo_Hasta_el_Momento > 500 && Consumo_Hasta_el_Momento <= 1000):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento - 500;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 6.00;
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento + 880.72;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**9*/
                case (Consumo_Hasta_el_Momento > 1000 && Consumo_Hasta_el_Momento <= 5000):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 7.00;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;
                /**10*/
                case (Consumo_Hasta_el_Momento > 5000):
                    Consumo_Hasta_el_Momento = Consumo_Hasta_el_Momento * 9.20;
                    Consumo_Hasta_el_Momento = Math.round(Consumo_Hasta_el_Momento);
                    Consumo_Pesos.innerHTML = 'HAS CONSUMIDO ' + Consumo_Hasta_el_Momento + ' PESOS';
                    break;



                default:
                    Error.innerHTML = 'Verifique que los datos introducidos estan bien escritos, los wats obtenidos no estan disponibles'
                    console.log("Verifique que los datos introducidos estan bien escritos, los wats optenidos no estan disponibles");
                    break;


            }

            Consumo_Wats.classList.toggle('Bien');
            Consumo_Pesos.classList.toggle('Bien');

        }

    }


    else {
        Consumo_Wats.innerHTML = 'NO SE PUDO CALCULAR EL CONSUMO EN WATS';
        Consumo_Pesos.innerHTML = 'NO SE PUDO CALCULAR EL CONSUMO EN PESOS';
        Consumo_Wats.classList.toggle('Error');
        Consumo_Pesos.classList.toggle('Error');


    }
    res.status(200).json({ name: 'Example' })
}