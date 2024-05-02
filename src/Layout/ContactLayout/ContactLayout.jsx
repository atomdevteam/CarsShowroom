import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Location from '../../Components/Contact/Location'

const ContactLayout = () => {
  return (
    <div className='bg-[#0B0C10] max-h-full '>
  

    <div className='flex flex-col ml-[6rem] mr-[6rem] '>
       <Contact />
       <Location />
    </div>
</div>
  )
}

export default ContactLayout