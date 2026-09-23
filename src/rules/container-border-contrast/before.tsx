import React from 'react'

const Before = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">

    <div className='flex items-center justify-center p-4 bg-neutral-100'>
          <div className='flex w-full h-full border-t-2 border-r-2 border-neutral-50 rounded-tr-lg  p-4 bg-white'>
            <div className='flex flex-col gap-2'>
              <p className='text-md text-[#060606] font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis hic, obcaecati enim mollitia accusamus veritatis ullam nemo officiis odio fugit incidunt modi saepe pariatur, perspiciatis blanditiis ducimus aliquid distinctio earum et aliquam sit soluta magni eius! Praesentium odit cupiditate exercitationem!</p>
              <button className='bg-teal-500 text-white px-4 py-2 rounded-md w-fit'>Apply</button>
            </div>
          </div>
        </div>

    <div className='flex items-center justify-center p-4 bg-neutral-800'>
      <div className='flex w-full h-full border-t-2 border-r-2 border-neutral-900 rounded-tr-lg  p-4 bg-neutral-600'>
        <div className='flex flex-col gap-2'>
          <p className='text-md text-[#fcfcfc] font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis hic, obcaecati enim mollitia accusamus veritatis ullam nemo officiis odio fugit incidunt modi saepe pariatur, perspiciatis blanditiis ducimus aliquid distinctio earum et aliquam sit soluta magni eius! Praesentium odit cupiditate exercitationem!</p>
          <button className='bg-teal-500 text-white px-4 py-2 rounded-md w-fit'>Apply</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Before