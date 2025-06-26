import React, { useContext , useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const {products,currency,addToCart}=useContext(ShopContext);
  const {productId}=useParams();
  console.log("id:",productId)

  const fetchProductData=async ()=>{
    products.filter((item)=>{
      if(item._id==productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
    
  }
  useEffect(()=>{
    fetchProductData()
  },[productId,products])
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*-----Product Data---------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*-----Product Images---------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] sm:justify-normal w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index } alt='product image'  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="product-image" />
          </div>
        </div>
        {/*-----Product Details---------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery is Available on this Product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*--------------Discription and review section-------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border-1 px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi perferendis dignissimos sit, rem nam quas commodi odit amet necessitatibus temporibus iusto quia assumenda? Amet alias libero minus cupiditate natus!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste quae id illo culpa nostrum tempore adipisci. Itaque porro non voluptatibus animi eos rem, fuga, perspiciatis quidem quibusdam sed deserunt!</p>
        </div>
      </div>
      {/*----------Display Related Products---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product