import zapzap from '../../fotos/zapzap.png'
import gmail from '../../fotos/gmail.png'
import './info.css'

export default function Informações() {

    return (
        <div>

            <h1 class='area-informação'>Informações</h1><br />

            <h2 class='informaçãobasica'>O horário de funcionamento da loja é das 09h da manhã às 18h da noite.</h2><br />

            <h2 class='informaçãobasica'>Para mais informações, entre em contato:</h2>

            <ul>
                <li><h3 class='maisinfo'>Número: 14 74425-1347</h3><img class='zapzap' src={zapzap} alt='zapzap'></img></li>
                <li><h3 class='maisinfo'>E-mail: lojavistase@gmail.com</h3><img class='gmail' src={gmail} alt='gmail'></img></li>
            </ul><br />

            <label class="localiza">Localização: Loja: 5-99 R. Batista de Carvalho</label><br /><br />

            <iframe class='bordalocaliza' src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1682700719790!5m2!1spt-BR!2sbr!6m8!1m7!1sOl_fj7z160r-p6iukKwBdA!2m2!1d-22.32273983541924!2d-49.07311861978143!3f205.56627829299012!4f0.5329224861639688!5f0.7820865974627469" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /><br />

        </div>
    )
}

