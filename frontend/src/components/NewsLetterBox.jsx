import React from 'react'

const NewsLetterBox = () => {

   const onSubmiHandler=(event)=>{
    event.preventDefault();
   }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off </p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque assumenda exercitationem.</p>
        <form onSubmit={onSubmiHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-4'>
            <input className='w-full sm:flex-1 outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe Now</button>
        </form>
    </div>
  )
}

export default NewsLetterBox