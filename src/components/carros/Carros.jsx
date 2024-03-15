import React, { useEffect, useLayoutEffect, useState } from 'react'
import MainLayout from '../Layout';
import "./style.css"
import image from "../../assets/broncoWhite.jpeg"
import axios from 'axios';

const Carros = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://freetestapi.com/api/v1/cars").then((res)=>{
      return setData(res.data)
  })
  }, [])

  console.log(data)



  return (
    <MainLayout>
        <div className='carros'>
          <div className='hero-car'>
            <img src={image} alt="" />
            <div className='img-content'>
              <h1>Confira nossas promocoes e Novidades</h1>
              <p>Mais de 100 Carros.</p>
              <p>Pacele para adaptar a seu bolso.</p>
            </div>
          </div>
          
          <section className='section-grid'>
            <div className='confira-nossos-produtos'>
              <h1>Confira nossos produtos</h1>
            </div>
            <div className='car-cards'>

              {
                data.map((item)=>{
                  return(
                    <div key={item.id} className='car-names'>
                      <h1>{item.make}</h1>
                      <div className='car-especifiation'>
                        <p className='engine-card'>{item.engine}</p>
                        <p className='separator'>{item.model}</p>
                      </div>
                      <span className='grid-separator'></span>
                    </div>
                  )
                })
              }
            </div>
          </section>

        </div>

        
    </MainLayout>
  )
}

export default Carros