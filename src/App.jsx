import { useState } from 'react'
import Footer from './Layout/Footer/Footer'
import CarSaleLayout from './Layout/CarSale/CarSaleLayout'
import BuyCarLayout from './Layout/BuyCarLayout/BuyCarLayout'
function App() {

  return (
    <>
      <div className=''>
        <BuyCarLayout />
      </div>
      <Footer />
    </>

  )
}

export default App
