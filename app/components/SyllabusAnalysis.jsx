import React from 'react'
import HorizontalProgressBar from './HorizontalProgressBar'
const SyllabusAnalysis = () => {
  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-col gap-2'>
        <h2>HTML Tools, Forms, History</h2>
        <div className='flex flex-row gap-3 items-center justify-between h-4'>
          <HorizontalProgressBar percentage={80} color='blue' />
          <span className='text-blue-800 font-bold'>80%</span>
        </div>
      </div>

      <div>
      <h2>Tags and References in HTML</h2>
      <div className='flex flex-row gap-3 items-center justify-between h-4'>
        <HorizontalProgressBar percentage={50} color={'orange'}/>
          <span className='text-orange-800 font-bold'>50%</span>
        </div>
      </div>

      <div>
      <h2>Tables and References in HTML</h2>
      <div className='flex flex-row gap-3 items-center justify-between h-4'>
        <HorizontalProgressBar percentage={24} color={'red'}/>
          <span className='text-red-800 font-bold'>24%</span>
        </div>
      </div>

      <div>
      <h2>Tables and CSS Basics</h2>
      <div className='flex flex-row gap-3 items-center justify-between h-4'>
        <HorizontalProgressBar percentage={96} color={'green'}/>
          <span className='text-green-800 font-bold'>96%</span>
        </div>
      </div>

    </div>
  )
}

export default SyllabusAnalysis