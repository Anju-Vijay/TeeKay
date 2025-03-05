import React from 'react'
import {assets} from '../assets/assets'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center py-5 font-medium justify-between'>
      <img src={assets.logo} alt='logo' className='w-36'/>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col justify-center items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col justify-center items-center gap-1'>
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
      <div className='flex item-center  gap-5'>
        <img src={assets.search_icon} className='w-5 h-5.5 cursor-pointer' alt="search icon"/>
        <div className='group relative'>
          <img src={assets.profile_icon} alt='profile picture' className=' w-5 cursor-pointer'/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Order</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img  className='w-5 min-w-5 cursor-pointer' src={assets.cart_icon} alt="cart icon" />
          <p className='absolute text-[8px] bg-black text-white aspect-square rounded-full  right-[-5px] top-[12px] w-4 text-center leading-4 '>10</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar