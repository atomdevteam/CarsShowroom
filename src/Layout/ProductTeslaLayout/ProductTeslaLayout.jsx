import React from 'react'
import Suffix from '../../assets/TeslaModel/Suffix.png'
import ReviewTesla from '../../Components/ReviewTesla/ReviewTesla'
import CommentsTesla from '../../Components/CommentsTesla/CommentsTesla'
const ProductTeslaLayout = () => {
    return (
        <div className='bg-[#0B0C10] max-h-full '>
            <div className='h-[10rem] bg-[#0B0C10] text-white mb-16'>
                <div className='ml-[8rem] flex flex-col'>
                    <h1 className='mt-8 text-4xl'>
                        Tesla Model 3
                    </h1>
                    <div className='mt-4'>
                        Homepage - Articulo – Revisión del auto – Tesla Model 3
                    </div>
                </div>
            </div>

            <div className='flex flex-col ml-[6rem] mr-[6rem] '>
                <div className='mb-8 flex items-center justify-center'>
                    <img src={Suffix} />
                 

                </div>
                <div className='mb-8 flex items-center justify-center'>
                    <ReviewTesla />
                </div>

            </div>
        </div>
    )
}

export default ProductTeslaLayout