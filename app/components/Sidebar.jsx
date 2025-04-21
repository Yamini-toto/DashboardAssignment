import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-60  h-auto lg:h-[100vh] p-4 border-t lg:border-t-0 lg:border-r border-gray-200 fixed bottom-0 left-0 z-10 lg:static backdrop-blur bg-white/80 shadow-md lg:shadow-none lg:bg-gray-100 lg:backdrop-blur-none">
      <ul className="flex lg:flex-col justify-around lg:space-y-4 space-x-4 lg:space-x-0">
        <li className="font-semibold text-black">📊 Dashboard</li>
        <li className="font-semibold text-black">📝 Skill Test</li>
        <li className="font-semibold text-black">👥 Internship</li>
      </ul>
    </aside>
  );
};

export default Sidebar