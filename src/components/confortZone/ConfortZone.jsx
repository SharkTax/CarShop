import React from 'react'
import image from "../../assets/seatsInsideCar.jpg"
import image2 from "../../assets/volant.jpg"
import image3 from "../../assets/tripCar.jpg"
import "./style.css"

const ConfortZone = () => {
  return (
    <div className='all-confort-zone'>
        <section>
            <div className='confort-seat'>
                <p className='sample-text'>
                  Todo interior belo e formulado para o completo conforto. <br/>
                   Alem de espacoso conta com compartimentos para guardar seus componentes
                   com seguranca,
                    sem contar o material e pano de otima qualidade
                    <span></span>
                </p>
                <div className='sample-image'>
                  <img src={image} alt="" />
                </div>

            </div>

            <div className='confort-seat'>
                <p className='sample-text'>
                  Direcao macia e adaptavel, <br/> feita sobre medida <span></span>
                </p>
                <div className='sample-image'>
                  <img src={image2} alt="" />
                </div>

            </div>

            <div className='confort-seat'>
                <p className='sample-text'>
                  Perfeito para viagens longas em estradas desrreguladas,
                  nao se preocupe em qualquer terreno ira passar, conte com nosso sistema 4x4
                  <span></span>
                </p>
                <div className='sample-image'>
                  <img src={image3} alt="" />
                </div>

            </div>
        </section>

        <section className='finalize'>
          <h1>Compre o seu agora ou entre em contato com nossa agencia</h1>
          <div className='finalize-buttons'>
            <button>Compre agora</button>
            <button>Entrar em contato</button>
          </div>
        </section>
    </div>
  )
}

export default ConfortZone