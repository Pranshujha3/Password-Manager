import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-14">
        <div className="logo font-bold text-white text-2xl">
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
            
            
            </div>

      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href='#'>Contact</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Home</a>
        </li>
      </ul> */}
      <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center'>
        <img className='invert w-10 p-1 rounded-full ' src="src/assets/github.jpeg" alt="Github Logo" />
        <span className='font-bold px-4'>Github</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
