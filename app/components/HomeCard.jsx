import React from 'react'

const HomeCard = ({title, children}) => {
  return (
    <div className="rounded-xl shadow-md p-4 w-full">
    <h2 className="text-lg text-black font-semibold mb-2">{title && title}</h2>
    {children}
  </div>
  )
}

export default HomeCard