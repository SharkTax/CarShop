import { useState } from 'react'
import './App.css'
import MainLayout from './components/Layout';
import Hero from './components/hero/Hero';
import ConfortZone from './components/confortZone/ConfortZone';
import Carros from './components/carros/Carros';

function App() {

  return (
    <MainLayout>
      <Hero/>
      <ConfortZone/>
    </MainLayout>
  )
}

export default App
