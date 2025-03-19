import React, { useContext, useEffect, useState,} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
const Search = () => {
    
  const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
  const [visible,setVisible]=useState(false)
  const location=useLocation()

  useEffect(()=>{
    console.log(location.pathname)
    if(location.pathname.includes('collections')){
      setVisible(true)
    }else{
      setVisible(false)
    }

  },[location])
  
    return showSearch && visible ?(
    <div className=' bg-gray-100 text-center'>
        <div className='inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 border-t border-b'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='search' className='flex outline-none bg-inherit text-sm'/>
            <img src={assets.search_icon} className='w-4' alt='search-icon'/>
        </div>
        <img src={assets.cross_icon} alt='cross-icon' className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)}/>
    </div>
  ):null
}

export default Search