import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row my-10 gap-16' >
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ea deleniti sed, vel sint qui maxime iure consequuntur reiciendis, at cumque enim minima voluptatibus laborum impedit odio aliquid. Tempore, odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat accusantium magnam sunt. Nostrum provident animi expedita vitae nulla reprehenderit tempora in aliquam iure delectus. Id dolorum distinctio saepe consequatur eveniet.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet ullam laudantium suscipit excepturi libero pariatur numquam ipsum quod ea, a temporibus soluta sapiente assumenda odio. Voluptatem illum quod perferendis?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolorum id ad ipsum. Quibusdam distinctio recusandae doloremque necessitatibus iure magnam doloribus porro perspiciatis officiis sed! Aliquid voluptates id assumenda nulla!</p>
        </div>
        <div className='border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolorum id ad ipsum. Quibusdam distinctio recusandae doloremque necessitatibus iure magnam doloribus porro perspiciatis officiis sed! Aliquid voluptates id assumenda nulla!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolorum id ad ipsum. Quibusdam distinctio recusandae doloremque necessitatibus iure magnam doloribus porro perspiciatis officiis sed! Aliquid voluptates id assumenda nulla!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About