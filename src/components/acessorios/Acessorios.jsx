import React from 'react'
import MainLayout from '../Layout'
import image from "../../assets/wheelAcessorie.jpg"
import "./styles.css"

const Acessorios = () => {
  return (
    <MainLayout>
        <section className='ascessories'>
          <div className='img-section'>
            <img src={image} alt="" />
            <div className='img-section-info'>
              <h1>Afim de tunar seu carro?</h1>
              <p>Pecas direto do fornecedor</p>
            </div>
          </div>


        </section>
    </MainLayout>
  )
}

export default Acessorios