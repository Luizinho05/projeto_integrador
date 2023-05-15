import roupa9 from '../../fotos/look-masculino-balada.jpg'
import roupa10 from '../../fotos/roupa-casual-masculina.jpg'
import roupa11 from '../../fotos/camisa-social.png'
import roupa12 from '../../fotos/camisa-social-manga-longa-slim-lisa.jpg'
import roupa13 from '../../fotos/roupa-casual-feminina.jpg'
import roupa14 from '../../fotos/camisa-cropped-preto-plus-size.jpg.webp'
import roupa15 from '../../fotos/roupa-estética-feminina.webp'
import roupa16 from '../../fotos/roupa-estetica-feminina.jfif'
import './estetica.css'

export default function Estetica() {
   return (

      <div id="area-estetica">
         <h2 class="roupaEstetica">Roupas de estética</h2>

         <div class="fotosEstetica">

         <h3 class="RoupaEsteticaHomem">Masculino</h3>
            <div class='barraderolagem'>

            <img src={roupa9} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa10} class='separação'  width="180" height="260" alt="roupa" />
            <img src={roupa11} class='separação'  width="180" height="260" alt="roupa" />
            <img src={roupa12} class='separação'  width="180" height="260" alt="roupa" />

            </div>
            <h3 class="RoupaEsteticaMulher">Feminino</h3>
            <div class='barraderolagem'>

            <img src={roupa13} class='separação'  width="180" height="260" alt="roupa" />
            <img src={roupa14} class='separação'  width="180" height="260" alt="roupa" />
            <img src={roupa15} class='separação'  width="180" height="260" alt="roupa" />
            <img src={roupa16} class='separação'  width="180" height="260" alt="roupa" />

            </div>
         </div>
      </div>
   )

}