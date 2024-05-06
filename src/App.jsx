import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
 import Recomendados from './components/Autos/Recomendado'
import ComprarAutos from  './components/Autos/ComprarAutos'
import Noticias from  './components/Autos/Noticia'
import Nosotros from  './components/Autos/Nosotros'
import Servicios from  './components/Autos/Servicio'
import Tesitmonio from  './components/Autos/Testimonio'
import Contacto from  './components/Autos/Contacto'


function App() {
 
  return (
    <>
    <Navbar/>
    <Home/>  
    <Recomendados/>
    <ComprarAutos/>
    <Noticias/>
    <Nosotros/>
    <Servicios/>
    <Tesitmonio/>
    <Contacto/>
    
    
    </>
  )
}

export default App
