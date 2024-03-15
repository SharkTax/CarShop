import React from 'react'
import "./style.css"
import image from "../../assets/fordBroco.jpg"


const Hero = () => {
  return (
    <div className='hero-main'>
      
      <div className='hero-image-main'>
        <img src={image} alt="ford broco Foto de Erik Mclean" />
        <div className='image-hero-text'>
          <h1>Ford Bronco Sport</h1>
          <ul className='FB-capacity'>
            <li>Performance e capacidade off-road excepcionais <span></span></li>
            <li>Tecnologia<span></span></li>
            <li>conectividade e segurança para superar todo tipo de desafio: dentro e fora de estrada.<span></span></li>
            <li>Preparado para enfrentar qualquer desafio<span></span></li>
          </ul>

          <ul className='especificacoes-sessao'>
            <li>Off-Road</li>
            <li>Motor 2.0 Ecoboost</li>
            <li>Potencia de 38,7 kgfm de torque</li>
            <li>Transmissao automatica, <span>4 x 4</span></li>
          </ul>
        </div>



      </div>


    </div>
  )
}

//fordBroco Foto de Erik Mclean: https://www.pexels.com/pt-br/foto/noite-ford-farol-refletor-10918025/
//Photo by Mike Bird: https://www.pexels.com/photo/a-black-modern-renault-clio-sport-16634648/
//Photo by Hyundai Motor Group  : https://www.pexels.com/photo/red-car-in-a-mountain-valley-16466478/
//Photo by Mike Bird: https://www.pexels.com/photo/a-black-modern-renault-clio-sport-16634773/
//Photo by Pixabay: https://www.pexels.com/photo/photo-of-black-steering-wheel-533562/
//Photo by Mike Bird: https://www.pexels.com/photo/sporty-design-of-seats-in-a-sportscar-10134489/
//Photo by Uriel Mont: https://www.pexels.com/photo/cheerful-young-diverse-couple-couple-traveling-by-car-at-sunset-6271672/
//Photo by NikAff: https://www.pexels.com/photo/black-suzuki-steering-wheel-950736/
//Photo by Pixabay: https://www.pexels.com/photo/red-ford-mustang-57409/



export default Hero