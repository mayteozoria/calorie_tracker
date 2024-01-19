import React from 'react'

export const Navbar = () => {
  return (
    <nav className=" bg-gray-500 relative flex flex-wrap items-center justify-between px-2 py-2  mb-3">
      <div className="cmx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-500 ">
            Calorie Tracker
          </a>
          <button
            className="text-green cursor-pointer text-xl leading-none px-6 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
