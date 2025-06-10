import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const BestSeller = () => {

    const {products}=useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])
    
    useEffect(()=>{

        const bestProducts=products.filter((item)=>(item.bestSeller))
        setBestSeller(bestProducts)

    },[products])
    
  return (
    
    <div className='my-10'>
        <div className='py-8 text-3xl  text-center'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sequi et ipsa vero sit delectus </p>
        </div >
        {/* rendering best seller products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>  
                    ) )
            }
        </div>
    </div>
  )
}

export default BestSeller