import Image from 'next/image'
import React from 'react'

const QuickStats = ({formData}) => {
  console.log("QuickStats", formData)
  return (
    <div className='flex justify-between items-center px-4 py-2 flex-row gap-2'>

      <div className='flex flex-col lg:flex-row gap-2 items-center'>
        <Image src={'/trophy.png'} alt='trophy' width={25} height={25}/>
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='font-bold text-md md:text-lg'>{formData?.rank || 1}</h2>
          <p className='font-light text-sm md:text-md'>YOUR RANK</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-2 items-center'>
        <Image src={'/percentage.png'} alt='tick' width={25} height={25}/>
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='font-bold text-md md:text-lg'>{formData?.percentile || 30} %</h2>
          <p className='font-light text-sm md:text-md'>PERCENTILE</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-2 items-center'>
        <Image src={'/tick.png'} alt='tick' width={25} height={25}/>
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='font-bold text-md md:text-lg'>{formData?.score || 10}/15</h2>
          <p className='font-light text-sm md:text-md'>CORRECT ANSWERS</p>
        </div>
      </div>

    </div>
  )
}

export default QuickStats