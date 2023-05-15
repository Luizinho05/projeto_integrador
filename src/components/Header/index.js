import { Link } from 'react-router-dom'
import banner from '../../fotos/logo.png'
import './website.css'

export default function Header() {

    return (
        <div id="fundo">
            <Link className='logo' to='/'><img id="banner" src={banner} alt="banner"></img></Link>
            
            <h2 class="nomeLoja">Vista-se!</h2>

            <Link to='/informações'><h2 class="pagina">Info</h2></Link>

            <Link to='/Produtos'><h2 class="pagina">Produtos</h2></Link>

            <div class="dropdown">
                <button class="dropbtn"><h2 class="paginas">Roupas</h2></button>
                <div class="dropdown-content">
                    <Link class="Link" to='/Conforto'>Roupas de conforto</Link>
                    <Link class="Link" to='/Estetica'>Roupas de Estética</Link>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><h2 class="paginas">Contato</h2></button>
                <div class="dropdown-content">
                    <Link class="Link" to='/Cadastro'>Cadastro</Link>
                    <Link class="Link" to='/Login'>Login</Link>
                </div>
            </div>

        </div>
    )

}