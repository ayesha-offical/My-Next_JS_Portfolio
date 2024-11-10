import React from 'react'
import Image from 'next/image' // Import the Next.js Image component
import Link from 'next/dist/client/link'

const Homepag = () => {
  return (
    <>
    <main className='flex gap-4 md:gap-0 flex-col md:flex-row  justify-center items-center bg-[#222831] h-screen w-screen py-36 sm:py-0 px-7 sm:px-14'>
      <div className=' w-screen  lg:w-1/2 flex flex-col items-start justify-start px-11 pt-14 sm:pt-0  gap-5'>
        <h1 className='flex flex-col text-4xl sm:text-5xl  text-white  font-black '>I am,Frontend<span className=' sm:text-5xl font-black text-cyan-500'>Developer.</span></h1>
        <p  className='text-white'>I&apos;sam a passionate Frontend Developer with a keen interest in building user-friendly and intuitive interfaces. I have a strong foundation in JavaScript, React, and CSS, and I'm always eager to learn and grow.</p>
<div className='flex gap-3  sm:flex-row'>
        <button> <Link href="https://github.com/ayesha-offical" className="px-7 py-2  bg-cyan-500  hover:bg-cyan-100 rounded-md">
        Git Hub
      </Link></button>
      <button> <Link href="https://www.instagram.com/ayesha_faisal_mughal/?__pwa=1" className="px-7 py-2  bg-cyan-500  hover:bg-cyan-100 rounded-md">
        Instagram
      </Link></button>
      </div>
      </div>
      <div className=' w-screen lg:w-1/2 flex justify-center items-center'>
      <div className='sm:h-[300px] w-[400px] flex justify-center items-center animate-pulse'>
      <Image src="/pic.png" alt='image' width={300} height={400}/>
      </div>
      </div>
     
    </main>
   
  

    </>
  )
}

export default Homepag


