import React from 'react'
import WhiteDiv from './SectionFiveDiv/WhiteDiv';
import RedDiv from './SectionFiveDiv/RedDiv';
const SectionFive = () => {
  return (
    <div>

      <div className='text-center mb-20'>
        <p className=' text-2xl text-gray-500 font-bold pb-4'>Lifestyle</p>
        <h1 className='text-2xl lg:text-6xl font-extrabold  '>Get a little more in life with Quantafile</h1>
        <p className='pt-10 text-gray-700 font-bold text-xl'>Let us take care of all the added extras, from donations to gifts
          for friends and so much more</p>
      </div>
      <div class="mx-auto max-w-custom px-4 mb-40 grid lg:grid-cols-2 gap-4">
        <RedDiv />
        <WhiteDiv />


      </div>
    </div>
  )
}

export default SectionFive;