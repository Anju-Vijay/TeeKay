import React, { useContext } from 'react'
import {useState} from 'react'
import {assets} from '../assets/assets'
import {NavLink, Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const {setShowSearch, getCartCount, token, setToken, navigate, setCartItems}=useContext(ShopContext)
  let [visible, setVisible]=useState(false)
  
  const logout=()=>{
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }
  
  return (
    <div className='flex items-center py-5 font-medium justify-between'>
      <Link to='/'><img src={assets.logo} alt='logo' className='w-36'/></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col justify-center items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collections' className='flex flex-col justify-center items-center gap-1'>
          <p>COLLECTION</p>
          <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col justify-center items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col justify-center items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center py-2 gap-5'>
        <img src={assets.search_icon} className='w-4 h-4.5 cursor-pointer' alt="search icon" onClick={()=>setShowSearch(true)} />
        <div className='group relative'>
         <img onClick={()=> token ? null: navigate('/login')} src={assets.profile_icon} alt='profile picture' className=' w-4 cursor-pointer'/>
          {/*---drop down-----*/}
          { token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
          }
        </div>
        <Link to='/cart' className='relative'>
          <img  className='w-4 min-w-4 cursor-pointer' src={assets.cart_icon} alt="cart icon" />
          <p className='absolute text-[8px] bg-black text-white aspect-square rounded-full  right-[-5px] top-[12px] w-4 text-center leading-4 '>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} className='w-4 sm:hidden cursor-pointer' src={assets.menu_icon} alt='Menu icon'/>
      </div>
      {/* Sidebar menu for small screens*/}
      <div className={`absolute right-0 bottom-0 top-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className="flex items-center cursor-pointer gap-4 pb-5 p-3">
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='back arrow'/>
            <p className='text-xl'>Back</p>
          </div>
          <NavLink className='py-2 pl-6 shadow-md' onClick={()=>setVisible(false)} to='/'>HOME</NavLink>
          <NavLink className='py-2 pl-6 shadow-md' onClick={()=>setVisible(false)} to='/collection'>COLLECTION</NavLink>
          <NavLink className='py-2 pl-6 shadow-md' onClick={()=>setVisible(false)} to='/about'>ABOUT</NavLink>
          <NavLink className='py-2 pl-6 shadow-md' onClick={()=>setVisible(false)} to='/contact'>CONTACT</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar