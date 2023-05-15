import { useState } from "react"
import "./produtos.css"

function Produtos() {

    const [valor, setvalor] = useState("")

    const [valor2, setvalor2] = useState("")

    const [valor3, setvalor3] = useState("")

    const [valor4, setvalor4] = useState("")




    function random(min, max) {

        return function () {

            return Math.floor(Math.random() * (1 + max - min));

        }

    }




    function random2(min, max) {

        return function () {

            return Math.floor(Math.random() * (1 + max - min));

        }

    }




    function random3(min, max) {

        return function () {

            return Math.floor(Math.random() * (1 + max - min));

        }

    }




    function random4(min, max) {

        return function () {

            return Math.floor(Math.random() * (1 + max - min));

        }

    }






    var aleatorio = random(0, 10)

    var resultado = ""

    for (var i = 0; i < 1; i++) {

        resultado += aleatorio() + "";

    }




    var aleatorio2 = random2(0, 10)

    var resultado2 = ""
// eslint-disable-next-line no-use-before-define
    for (var i = 0; i < 1; i++) {

        resultado2 += aleatorio2() + "";

    }




    var aleatorio3 = random3(0, 10)

    var resultado3 = ""
// eslint-disable-next-line no-use-before-define
    for (var i = 0; i < 1; i++) {

        resultado3 += aleatorio3() + "";

    }




    var aleatorio4 = random4(0, 10)

    var resultado4 = ""

    for (var i = 0; i < 1; i++) {

        resultado4 += aleatorio4() + "";

    }





    function disponibilidade() {

        if (resultado >= 5) {

            setvalor("Disponível")

        } else {

            setvalor("Indisponível")

        }

    }




    function disponibilidade2() {

        if (resultado2 >= 5) {

            setvalor2("Disponível")

        } else {

            setvalor2("Indisponível")

        }

    }




    function disponibilidade3() {

        if (resultado3 >= 5) {

            setvalor3("Disponível")

        } else {

            setvalor3("Indisponível")

        }

    }




    function disponibilidade4() {

        if (resultado4 >= 5) {

            setvalor4("Disponível")

        } else {

            setvalor4("Indisponível")

        }

    }

    return (

        <>

            <div>

                <button className="botao" onClick={function () { disponibilidade(); disponibilidade2(); disponibilidade3(); disponibilidade4(); }}>Verificar disponibilidade</button>

            </div>

            <div className="grid-container">

                <div className="legenda">

                    Produtos

                </div>

                <div className="legenda">

                    Marca

                </div>

                <div className="legenda">

                    Disponibilidade

                </div>




                <div>

                    Camisetas

                </div>

                <div>

                    <a href="https://supremeus.shop/">Supreme (US)</a>

                </div>

                <div>

                    {valor}

                </div>




                <div>

                    Calças

                </div>

                <div>

                    <a href="https://www.nike.com/">Nike</a>

                </div>

                <div>

                    {valor2}

                </div>




                <div>

                    Calçados

                </div>

                <div>

                    <a href="https://www.mizuno.com.br/?gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyZ2TpqfLahEECOWlfwycHuyOUflP4LSwENN8omkU_ys3yEc9GyTs50aAg9NEALw_wcB">Mizuno</a>

                </div>

                <div>

                    {valor3}

                </div>




                <div>

                    Acessórios

                </div>

                <div>

                    <a href="https://www.oakley.com/pt-br?cid=PM-SGA_000000-1.BR-Oakley-PT-B-Core-Exact_Core_oakley&s_kwcid=AL!16196!3!523560038078!e!!g!!oakley!13228350884!124383166924&gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyZFGstuI3i_iqmIDWiGpyFtO3WKUGPz_0EezgephBeFeQjpG1dCBtcaAg21EALw_wcB&gclsrc=aw.ds">Oakley</a>

                </div>

                <div>

                    {valor4}

                </div>

            </div >

        </>

    )

}

export default Produtos;