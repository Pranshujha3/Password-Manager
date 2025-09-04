import React from 'react'

const footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
        
            <div className="logo font-bold text-white text-2xl">
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
        </div>
       <div className="flex justify-center items-center">Created with <img className='w-6 rounded-4xl mx-2 ' src="src/assets/heart.avif" alt="" />by Pranshu</div>
    </div>
  )
}

export default footer
