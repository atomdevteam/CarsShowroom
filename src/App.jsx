import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Hero'
import Recomendado from './components/Cars/Recomendados'
import ComprarAutos from './components/Cars/ComprarAutos'
import Noticias from './components/Cars/Noticia'
import Nosotros from './components/Cars/Nosotros'
import Servicios from './components/Cars/Servicio'
import Testimonio from './components/Cars/Testimonio'
import Contacto from './components/Cars/Contacto'

function App() {
 
  return (
    <>

    <Navbar/>
    <Home/>
    <Recomendado/>
    <ComprarAutos/>
    <Noticias/>
    <Nosotros/>
    <Servicios/>
    <Testimonio/>
    <Contacto/>

    
    </>
  )
}

export default App
