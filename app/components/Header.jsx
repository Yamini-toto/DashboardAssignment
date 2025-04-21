import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-sm bg-white">
    <div className="text-xl font-bold text-black">📚 WhatBytes</div>
    <button className="bg-gray-800 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-gray-500">User</button>
  </header>
  )
}

export default Header