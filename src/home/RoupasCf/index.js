import roupa1 from '../../fotos/adidas.jpg.webp'
import roupa2 from '../../fotos/lacoste.jpeg'
import roupa3 from '../../fotos/roupa-conforto-masculina.jfif'
import roupa4 from '../../fotos/camiseta-nike-conforto.jpg'
import roupa5 from '../../fotos/roupa-de-pijama.png'
import roupa6 from '../../fotos/roupa-de-conforto-feminina.png'
import roupa7 from '../../fotos/roupa-de-casa-feminina.png'
import roupa8 from '../../fotos/roupa-feminina-conforto.webp'
import './conforto.css'

export default function Conforto() {
   return (

      <div id="area-conforto">
         <h2 class="roupaConforto">Roupas de conforto</h2>

         <div class="fotosConforto">

            <h3 class="roupaConfortoHomem">Masculino</h3>

            <div class='barraderolagem'>

            <img src={roupa1} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa2} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa3} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa4} class='separação' width="180" height="260" alt="roupa" />
            </div>  

            <h3 class="roupaConfortoMulher">Feminino</h3>

            <div class='barraderolagem'>

            <img src={roupa5} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa6} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa7} class='separação' width="180" height="260" alt="roupa" />
            <img src={roupa8} class='separação' width="180" height="260" alt="roupa" />

            </div>
         </div>
      </div>
   )

}